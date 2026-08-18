import { createServerFn } from "@tanstack/react-start";

import type { LeaderboardPayload } from "./leaderboard.shared";

export const getLeaderboard = createServerFn({ method: "GET" }).handler(
  async (): Promise<LeaderboardPayload> => {
    const { getLeaderboardState } = await import("./leaderboard.server");
    return getLeaderboardState(false);
  },
);
