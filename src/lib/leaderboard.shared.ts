// Client-safe leaderboard constants and types.

export const COMPETITION_START_ISO = "2026-08-01T07:00:00.000Z"; // 18 Aug 2026, 8:00 AM WAT
export const COMPETITION_END_ISO = "2026-09-01T07:00:00.000Z"; // 1 Sep 2026, 8:00 AM WAT

export const PRIZES = [100, 60, 40, 30, 20] as const;
export const PRIZE_POOL = PRIZES.reduce((sum, p) => sum + p, 0); // 250

export type LeaderboardRow = {
  rank: number;
  player_id_masked: string;
  turnover: number;
  prize: number;
};

export type LeaderboardPayload = {
  status: "upcoming" | "live" | "finished";
  rows: LeaderboardRow[];
  provider_updated_at: string | null;
  fetched_at: string | null;
  stale: boolean;
};

export function maskPlayerId(id: string): string {
  if (id.length <= 4) return id;
  return `${id.slice(0, 3)}${"•".repeat(4)}${id.slice(-2)}`;
}

export function competitionStatus(now = Date.now()): LeaderboardPayload["status"] {
  if (now < Date.parse(COMPETITION_START_ISO)) return "upcoming";
  if (now >= Date.parse(COMPETITION_END_ISO)) return "finished";
  return "live";
}
