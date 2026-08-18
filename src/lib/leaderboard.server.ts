// Server-only leaderboard logic. Never imported by client code.
import {
  COMPETITION_END_ISO,
  COMPETITION_START_ISO,
  PRIZES,
  maskPlayerId,
  competitionStatus,
  type LeaderboardPayload,
  type LeaderboardRow,
} from "./leaderboard.shared";

const PROVIDER_URL =
  "https://rs.trusttrash.website/k/vgxpEZUUveuSuzbWc6ldbzAGR4O-ulXSDxKNjrRCROQ/v1/players";

const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

type ProviderResponse = {
  last_updated_at: string;
  players: { player_id: string; turnover: number }[];
};

async function fetchProvider(): Promise<ProviderResponse> {
  const res = await fetch(PROVIDER_URL, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`Provider responded ${res.status}`);
  const json = (await res.json()) as ProviderResponse;
  if (!json || !Array.isArray(json.players)) throw new Error("Unexpected provider payload");
  return json;
}

type StateRow = {
  rows: LeaderboardRow[] | null;
  provider_updated_at: string | null;
  fetched_at: string | null;
  frozen: boolean;
};

function toPayload(state: StateRow | null, stale: boolean): LeaderboardPayload {
  return {
    status: competitionStatus(),
    rows: state?.rows ?? [],
    provider_updated_at: state?.provider_updated_at ?? null,
    fetched_at: state?.fetched_at ?? null,
    stale,
  };
}

export async function getLeaderboardState(force = false): Promise<LeaderboardPayload> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { data: state } = await supabaseAdmin
    .from("leaderboard_state")
    .select("rows, provider_updated_at, fetched_at, frozen")
    .eq("id", 1)
    .maybeSingle();

  const current = (state as StateRow | null) ?? null;
  const now = Date.now();
  const start = Date.parse(COMPETITION_START_ISO);
  const end = Date.parse(COMPETITION_END_ISO);

  // Final rankings are frozen once the competition ends.
  if (current?.frozen) return toPayload(current, false);

  const fetchedAt = current?.fetched_at ? Date.parse(current.fetched_at) : 0;
  const isFresh = now - fetchedAt < REFRESH_INTERVAL_MS;
  if (!force && isFresh && current?.rows) return toPayload(current, false);

  if (now < start) {
    // Competition has not started: nothing qualifies yet.
    await supabaseAdmin
      .from("leaderboard_state")
      .update({ rows: [], fetched_at: new Date().toISOString() })
      .eq("id", 1);
    return toPayload({ ...(current ?? { frozen: false }), rows: [], fetched_at: new Date().toISOString(), provider_updated_at: current?.provider_updated_at ?? null } as StateRow, false);
  }

  let provider: ProviderResponse;
  try {
    provider = await fetchProvider();
  } catch (error) {
    console.error("Leaderboard provider fetch failed", error);
    return toPayload(current, true);
  }

  // Baseline snapshot: captured once, at (or the first refresh after) the start time.
  const { data: baselineRows } = await supabaseAdmin
    .from("leaderboard_baseline")
    .select("player_id, starting_turnover");

  const baseline = new Map<string, number>();
  for (const row of baselineRows ?? []) {
    baseline.set(row.player_id as string, Number(row.starting_turnover));
  }

  const missing = provider.players.filter((p) => !baseline.has(p.player_id));
  if (missing.length > 0) {
    // Players unknown at snapshot time (or the very first snapshot) start from
    // their turnover at the moment they first appear, so pre-start play never counts.
    const capturedAt = new Date(Math.max(start, now)).toISOString();
    const { error } = await supabaseAdmin.from("leaderboard_baseline").upsert(
      missing.map((p) => ({
        player_id: p.player_id,
        starting_turnover: p.turnover,
        captured_at: capturedAt,
      })),
      { onConflict: "player_id" },
    );
    if (error) console.error("Baseline snapshot write failed", error);
    for (const p of missing) baseline.set(p.player_id, p.turnover);
  }

  const ranked = provider.players
    .map((p) => ({
      player_id: p.player_id,
      qualifying: Math.max(0, p.turnover - (baseline.get(p.player_id) ?? p.turnover)),
    }))
    .filter((p) => p.qualifying > 0)
    .sort((a, b) => b.qualifying - a.qualifying)
    .slice(0, 10)
    .map((p, index) => ({
      rank: index + 1,
      player_id_masked: maskPlayerId(p.player_id),
      turnover: Math.round(p.qualifying * 100) / 100,
      prize: PRIZES[index] ?? 0,
    }));

  const nowIso = new Date().toISOString();
  const frozen = now >= end;

  const { error: stateError } = await supabaseAdmin
    .from("leaderboard_state")
    .update({
      rows: ranked,
      provider_updated_at: provider.last_updated_at,
      fetched_at: nowIso,
      frozen,
    })
    .eq("id", 1);
  if (stateError) console.error("Leaderboard state write failed", stateError);

  return toPayload(
    { rows: ranked, provider_updated_at: provider.last_updated_at, fetched_at: nowIso, frozen },
    false,
  );
}
