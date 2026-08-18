import { useQuery } from "@tanstack/react-query";
import { Trophy } from "lucide-react";

import { getLeaderboard } from "@/lib/leaderboard.functions";
import { PRIZES, PRIZE_POOL, type LeaderboardPayload } from "@/lib/leaderboard.shared";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const rankStyles: Record<number, string> = {
  1: "border-primary/60 bg-primary/10",
  2: "border-slate-300/40 bg-slate-300/[0.06]",
  3: "border-amber-700/50 bg-amber-700/[0.08]",
};

const medal: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function formatUpdated(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-GB", {
    timeZone: "Europe/Warsaw",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function Leaderboard() {
  const { data, isLoading, isError } = useQuery<LeaderboardPayload>({
    queryKey: ["leaderboard"],
    queryFn: () => getLeaderboard(),
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    staleTime: 60 * 1000,
  });

  const status = data?.status ?? "upcoming";
  const rows = data?.rows ?? [];

  return (
    <section id="leaderboard" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Bi-weekly Wager Leaderboard
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Compete for the <span className="text-gold-gradient">{money(PRIZE_POOL)} Prize Pool</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Wager on 1win under Johnny Bravo Rewards and climb the ranks. Only turnover placed during
            the competition period counts towards your position.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-surface-elevated p-5 text-center">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Starts
            </div>
            <div className="mt-2 font-display text-xl font-semibold">18 August · 9:00 AM</div>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-5 text-center">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Status
            </div>
            <div className="mt-2 font-display text-xl font-semibold text-gold-gradient">
              {status === "upcoming"
                ? "Leaderboard starts at 9:00 AM"
                : status === "live"
                  ? "Leaderboard is LIVE"
                  : "Final results"}
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-surface-elevated p-5 text-center">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Ends
            </div>
            <div className="mt-2 font-display text-xl font-semibold">1 September · 9:00 AM</div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-surface-elevated">
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 border-b border-border/50 px-5 py-4 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground sm:grid-cols-[5rem_1fr_auto_auto] sm:px-7">
            <div>Place</div>
            <div className="sm:hidden">Player · Bet · Prize</div>
            <div className="hidden sm:block">Player</div>
            <div className="hidden text-right sm:block">Bet amount</div>
            <div className="text-right">Prize</div>
          </div>

          {isLoading ? (
            <div className="px-7 py-12 text-center text-sm text-muted-foreground">
              Loading leaderboard…
            </div>
          ) : rows.length === 0 ? (
            <div className="px-7 py-12 text-center text-sm text-muted-foreground">
              {status === "upcoming"
                ? "The competition has not started yet. Rankings appear once wagering begins at 9:00 AM."
                : "No qualifying turnover recorded yet. Place your bets to appear on the board."}
            </div>
          ) : (
            <ul>
              {rows.map((row) => (
                <li
                  key={row.rank}
                  className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border/40 px-5 py-4 last:border-0 sm:grid-cols-[5rem_1fr_auto_auto] sm:px-7 ${
                    rankStyles[row.rank] ?? ""
                  }`}
                >
                  <div className="flex items-center gap-2 font-display text-lg font-semibold">
                    <span aria-hidden>{medal[row.rank] ?? ""}</span>
                    <span>{row.rank}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-mono text-sm text-foreground">
                      ID {row.player_id_masked}
                    </div>
                    <div className="text-xs text-muted-foreground sm:hidden">
                      {money(row.turnover)} wagered
                    </div>
                  </div>
                  <div className="hidden text-right text-sm font-semibold text-foreground sm:block">
                    {money(row.turnover)}
                  </div>
                  <div
                    className={`text-right font-display text-lg font-semibold ${
                      row.prize > 0 ? "text-gold-gradient" : "text-muted-foreground"
                    }`}
                  >
                    {row.prize > 0 ? money(row.prize) : "—"}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p className="inline-flex items-center gap-2">
            <Trophy className="h-3.5 w-3.5 text-primary" />
            Prizes: {PRIZES.map((p, i) => `${i + 1}. ${money(p)}`).join(" · ")}
          </p>
          <p>
           Updates every hour · Last update {formatUpdated(data?.provider_updated_at ?? null)}{" "}
            (CEST)
          </p>
        </div>

        {(isError || data?.stale) && (
          <p className="mt-3 text-center text-xs text-primary/80">
            Leaderboard update temporarily unavailable. Showing the most recent valid data.
          </p>
        )}
      </div>
    </section>
  );
}
