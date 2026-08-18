import { createFileRoute } from "@tanstack/react-router";

async function refresh() {
  const { getLeaderboardState } = await import("@/lib/leaderboard.server");
  const payload = await getLeaderboardState(true);
  return new Response(
    JSON.stringify({
      ok: true,
      status: payload.status,
      players: payload.rows.length,
      fetched_at: payload.fetched_at,
    }),
    { headers: { "content-type": "application/json" } },
  );
}

export const Route = createFileRoute("/api/public/hooks/leaderboard-refresh")({
  server: {
    handlers: {
      GET: refresh,
      POST: refresh,
    },
  },
});
