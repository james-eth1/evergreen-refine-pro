import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, X, Trophy, Gift, Wallet, Crown, Sparkles, BookOpen, ShieldCheck } from "lucide-react";
import oneWinLogoAsset from "@/assets/1win-logo.png.asset.json";
const logoAsset = { url: "/logo.png" };
const bannerAsset = { url: "/banner.png" };
const qrAsset = { url: "/qr-1win.png" };

function OneWinLogo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={oneWinLogoAsset.url}
      alt="1win"
      className={`inline-block h-[1em] w-auto align-[-0.12em] ${invert ? "invert" : ""} ${className}`}
      draggable={false}
    />
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Johnny Bravo Rewards | Beyond Rewards. Beyond Expectations." },
      { name: "description", content: "Johnny Bravo Rewards on 1win. Weekly leaderboards, cashback, giveaways and VIP benefits designed to deliver exceptional value." },
      { property: "og:title", content: "Johnny Bravo Rewards" },
      { property: "og:description", content: "Weekly leaderboards, exclusive promotions, cashback, VIP rewards and more." },
      { property: "og:image", content: bannerAsset.url },
      { name: "twitter:image", content: bannerAsset.url },
    ],
  }),
  component: LandingPage,
});

const AFFILIATE_URL = "https://lkfg.pro/4dbd1b";

const rewards = [
  { icon: Trophy, title: "Weekly Leaderboards", body: "Climb the ranks each week and share in top player prize pools." },
  { icon: Sparkles, title: "Exclusive Promotions", body: "Members only bonuses, drops and campaigns you won't find anywhere else." },
  { icon: Wallet, title: "Cashback Opportunities", body: "Earn back a portion of your play to soften losses and extend your sessions." },
  { icon: Gift, title: "Community Giveaways", body: "Regular giveaways for our players. No strings, just rewards." },
  { icon: Crown, title: "VIP Rewards", body: "Tailored perks, personal support and elevated benefits for VIP members." },
  { icon: ShieldCheck, title: "Player Benefits", body: "Trusted service, reliable payouts and steady value on every deposit." },
  { icon: BookOpen, title: "Casino Guides & Strategy", body: "Clear tips and strategy breakdowns to help you play with confidence." },
];

const socials = [
  {
    name: "X (Twitter)",
    href: "https://x.com/johnyy_bravooo",
    path: "M18.244 2H21.5l-7.5 8.57L23 22h-6.938l-5.43-6.62L4.4 22H1.14l8.02-9.16L1 2h7.09l4.9 6.03L18.244 2Zm-1.22 18h1.87L7.06 4H5.08l11.945 16Z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@johnyy_bravooo",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.08a4.79 4.79 0 0 1-1.84-.39Z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/johnnybravorewards",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.04C2.7 8.5 2.7 8.85 2.7 12s0 3.5.06 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.82-1.26 3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.04-.38C15.5 4.01 15.15 4 12 4Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 8.16a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm5.15-8.36a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Z",
  },
  {
    name: "Discord",
    href: "https://dsc.gg/jbrewards",
    path: "M20.32 4.57A17.6 17.6 0 0 0 16.06 3.2a12.9 12.9 0 0 0-.57 1.17 16.36 16.36 0 0 0-4.98 0A12.6 12.6 0 0 0 9.93 3.2a17.5 17.5 0 0 0-4.26 1.37C2.85 8.7 2.1 12.7 2.47 16.65a17.7 17.7 0 0 0 5.4 2.73c.44-.6.83-1.24 1.16-1.92-.63-.24-1.24-.53-1.82-.88.15-.11.3-.23.44-.35a12.6 12.6 0 0 0 10.7 0c.15.12.3.24.44.35-.58.35-1.19.64-1.82.88.33.68.72 1.32 1.16 1.92a17.7 17.7 0 0 0 5.4-2.73c.46-4.58-.72-8.55-2.11-12.08ZM9.35 14.4c-1.05 0-1.92-.97-1.92-2.16 0-1.19.85-2.17 1.92-2.17s1.94.98 1.92 2.17c0 1.19-.85 2.16-1.92 2.16Zm5.3 0c-1.05 0-1.92-.97-1.92-2.16 0-1.19.85-2.17 1.92-2.17s1.94.98 1.92 2.17c0 1.19-.85 2.16-1.92 2.16Z",
  },
];

const roulette = {
  title: "Roulette",
  intro: "A classic wheel and ball game where players wager on where a small ball will land among the numbered pockets.",
  points: [
    { h: "Objective", t: "Predict which pocket the ball settles into after the wheel spins. You win if any of your bets cover the result." },
    { h: "Main Betting Options", t: "Inside bets cover single numbers or small groups with higher payouts and lower odds. Outside bets cover large groups like red or black, odd or even, and dozens with lower payouts and better odds." },
    { h: "How a Round Works", t: "Place chips on the table before the dealer closes betting, the wheel spins, and the winning pocket is announced. Losing chips are cleared and winners are paid." },
    { h: "Basic Rules", t: "European roulette uses a single zero wheel with 37 pockets and is generally more player friendly than American roulette, which adds a double zero for 38 pockets." },
    { h: "Example Gameplay", t: "You bet $5 on red and $1 straight up on number 17. The ball lands on 17 black. You lose the red bet but win 35 times your straight up for a $35 payout." },
    { h: "Odds to Know", t: "European roulette has a house edge of about 2.7 percent. American roulette roughly doubles that at 5.26 percent due to the extra zero." },
    { h: "Beginner Tips", t: "Stick to European wheels when available, favour outside bets while learning, set a session budget, and treat each spin as independent. Past results do not influence future ones." },
  ],
};

const blackjack = {
  title: "Blackjack",
  intro: "A card game played against the dealer where the goal is to build a hand closer to 21 than the dealer without going over.",
  points: [
    { h: "Objective", t: "Beat the dealer's hand either by finishing closer to 21 than they do, or by letting them bust while you stay under." },
    { h: "Card Values", t: "Number cards count as their face value, face cards count as 10, and an Ace counts as 1 or 11 depending on which helps your hand most." },
    { h: "Dealer Rules", t: "The dealer follows a fixed script. They must draw on totals of 16 or less and stand on 17 or more. Rules on soft 17 vary by table." },
    { h: "Player Actions", t: "Hit to take another card, Stand to keep your total, Double Down to double your bet and take one more card, or Split matching cards into two separate hands." },
    { h: "Winning Conditions", t: "Beat the dealer's total without busting, or receive a natural blackjack, an Ace with a 10 value card on your first two cards, for a premium payout." },
    { h: "House Edge", t: "With sensible basic strategy the house edge is typically under 1 percent, making blackjack one of the lowest edge games on the casino floor." },
    { h: "Beginner Tips", t: "Learn a basic strategy chart, never take insurance as a beginner, avoid splitting 10s and 5s, and always split Aces and 8s." },
  ],
};

const baccarat = {
  title: "Baccarat",
  intro: "A simple comparing card game between two hands, the Player and the Banker, where you bet on which hand will finish closest to a total of 9.",
  points: [
    { h: "Objective", t: "Wager on which hand, Player or Banker, will end the round closest to a total of 9, or bet that the two hands will tie." },
    { h: "Card Values", t: "Aces count as 1, cards 2 through 9 keep their face value, and 10s and face cards count as 0. Only the last digit of the total counts, so a hand worth 15 is scored as 5." },
    { h: "Banker and Player Bets", t: "The Banker bet wins slightly more often thanks to fixed drawing rules and usually pays even money with a small commission. The Player bet pays even money with no commission." },
    { h: "Tie Bet", t: "The Tie bet pays out when both hands finish on the same total. It offers a large payout but carries a much higher house edge, so it is usually avoided by regular players." },
    { h: "How a Round Works", t: "You place your bet, the dealer deals two cards to each hand, and fixed rules decide whether a third card is drawn. No decisions are needed once the round begins." },
    { h: "Winning Conditions", t: "The hand you backed must finish with a total closest to 9. If you bet on Tie, both hands must end on the same total for you to win." },
    { h: "House Edge Overview", t: "The Banker bet has a house edge of around 1.06 percent, the Player bet around 1.24 percent, and the Tie bet closer to 14 percent depending on payout." },
    { h: "Beginner Strategy Tips", t: "Favour the Banker bet for its lower edge, skip the Tie bet, keep stakes flat rather than chasing streaks, and set a clear session budget before you start." },
  ],
};

const dice = {
  title: "Dice",
  intro: "A fast paced game where players bet on the outcome of one or more dice rolls, with rules that stay simple even as the betting options grow.",
  points: [
    { h: "Basic Objective", t: "Predict the result of the next roll or series of rolls. Depending on the format you might back a specific number, a range, or an over or under result." },
    { h: "How Dice Betting Works", t: "You choose a bet type, set your stake, and the dice are rolled. The payout depends on how likely your chosen outcome is to appear." },
    { h: "Common Betting Options", t: "Popular bets include over or under a chosen number, exact totals, specific single numbers, and combined outcomes across two dice." },
    { h: "Winning Conditions", t: "You win when the roll matches the outcome you backed. Losing bets are cleared and winning bets are paid at the odds shown before the roll." },
    { h: "Odds Overview", t: "Simple even money bets sit near a 50 percent chance, while specific totals or single numbers pay far more but hit much less often." },
    { h: "Example Gameplay", t: "You stake $2 on a roll being over 7 on two dice. The dice land on 5 and 4 for a total of 9, so the bet wins at even money and returns $2 in profit." },
    { h: "Beginner Strategy Tips", t: "Start with simple even money bets, keep your stake small compared to your balance, avoid chasing losses, and step away when you hit a preset limit." },
  ],
};

const slots = {
  title: "Slot Machine",
  intro: "The most popular casino format. Spin the reels and match symbols across paylines to trigger wins, bonus rounds and free spins.",
  points: [
    { h: "Objective", t: "Line up matching symbols across active paylines to trigger payouts, with larger combinations and bonus symbols delivering bigger rewards." },
    { h: "How Slot Machines Work", t: "Each spin is decided by a random number generator, so every result is independent. There is no memory between spins and no way to predict the next outcome." },
    { h: "Paylines and Symbols", t: "Paylines are the patterns across the reels that pay when matching symbols land in order. Some slots offer a handful of lines, others hundreds or thousands of ways to win." },
    { h: "Bonus Features", t: "Modern slots include wilds that substitute for other symbols, scatters that trigger special rounds, multipliers that boost wins, and mini games layered on top of the base spin." },
    { h: "Free Spins", t: "Free spin rounds are usually triggered by scatter symbols. They let you spin without spending your balance and often include extra multipliers or expanding wilds." },
    { h: "RTP", t: "Return to Player is the long term percentage of stakes a slot pays back on average. A slot with 96 percent RTP returns about $96 for every $100 wagered across millions of spins." },
    { h: "Volatility Explanation", t: "Low volatility slots pay smaller wins more often. High volatility slots pay less often but with much larger hits when they land. Pick a level that suits your bankroll and patience." },
    { h: "Beginner Strategy Tips", t: "Choose slots with clear RTP figures above 95 percent, keep your stake small enough to survive a cold streak, use free spin features when offered, and set a stop point before you play." },
  ],
};

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Johnny Bravo Rewards VIP Club"
      className={className}
      loading="eager"
    />
  );
}

function Header({ onJoin }: { onJoin: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:h-20 sm:px-8 md:grid-cols-3">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Logo className="h-10 w-10 shrink-0 rounded-lg object-cover sm:h-12 sm:w-12" />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base font-semibold tracking-wide sm:text-lg">
              Johnny<span className="text-gold-gradient"> Bravo</span>
            </div>
            <div className="truncate text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              Rewards · VIP Club
            </div>
          </div>
        </a>
        <nav className="hidden items-center justify-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#rewards" className="transition-colors hover:text-foreground">Rewards</a>
          <a href="#community" className="transition-colors hover:text-foreground">Community</a>
          <a href="#learn" className="transition-colors hover:text-foreground">Learn</a>
        </nav>
        <div className="flex justify-end">
          <button
            onClick={onJoin}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:brightness-110 sm:px-5"
          >
            Join <OneWinLogo /> <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onJoin }: { onJoin: () => void }) {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--gold)]" />
            Johnny Bravo · VIP Club
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Beyond Rewards. <br className="hidden sm:block" />
            <span className="text-gold-gradient">Beyond Expectations.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Where exceptional service, trust and rewarding experience create a new standard for every player.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={onJoin}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:brightness-110"
            >
              Join <OneWinLogo /> <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#rewards"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              Explore Rewards
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-black shadow-[var(--shadow-card)]">
            <img
              src={bannerAsset.url}
              alt="Johnny Bravo Rewards VIP Club"
              className="h-full w-full object-cover"
              width={1600}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Rewards() {
  return (
    <section id="rewards" className="relative border-y border-border/40 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Member Benefits</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            A Higher Standard of <span className="text-gold-gradient">Rewards.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every benefit is designed to deliver exceptional value, outstanding service, and an experience that goes beyond expectations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rewards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border/60 bg-surface-elevated p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QRSection({ onJoin }: { onJoin: () => void }) {
  return (
    <section id="qr" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-primary/25 bg-surface-elevated p-8 shadow-[var(--shadow-card)] sm:p-12 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="mx-auto rounded-2xl bg-white p-4 shadow-[var(--shadow-glow)]">
            <img
              src={qrAsset.url}
              alt="Scan to join 1win with Johnny Bravo Rewards"
              className="h-52 w-52 object-contain sm:h-60 sm:w-60"
              width={512}
              height={512}
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Fast Sign-Up</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Scan · Sign up · <span className="text-gold-gradient">Start earning</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Point your phone camera at the QR code to open 1win instantly and register through the official
              Johnny Bravo Rewards link. Or tap the button below on desktop.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <button
                onClick={onJoin}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:brightness-110"
              >
                Join <OneWinLogo /> <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#community"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="relative border-y border-border/40 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Social Community</span>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          Follow the <span className="text-gold-gradient">community</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Big wins, giveaways, guides and live sessions. Connect with Johnny Bravo across every platform.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-surface-elevated p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </span>
              <span className="text-sm font-semibold text-foreground">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearnCard({ data }: { data: typeof roulette }) {
  return (
    <article className="rounded-3xl border border-border/60 bg-surface-elevated p-8 shadow-[var(--shadow-card)] sm:p-10">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
          <BookOpen className="h-5 w-5" />
        </span>
        <h3 className="font-display text-3xl font-semibold sm:text-4xl">{data.title}</h3>
      </div>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{data.intro}</p>
      <dl className="mt-6 space-y-5">
        {data.points.map((p) => (
          <div key={p.h}>
            <dt className="font-display text-lg font-semibold text-foreground">{p.h}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.t}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function Learn() {
  return (
    <section id="learn" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Beginner Friendly</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Learn the <span className="text-gold-gradient">Games</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Clear, honest walkthroughs of five casino classics. No jargon, just what you need to feel confident at the table.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LearnCard data={roulette} />
          <LearnCard data={blackjack} />
          <LearnCard data={baccarat} />
          <LearnCard data={dice} />
          <LearnCard data={slots} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 text-sm text-muted-foreground sm:flex sm:flex-row sm:justify-between sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Logo className="h-9 w-9 shrink-0 rounded-md object-cover" />
          <span className="truncate font-display text-base font-semibold text-foreground">Johnny Bravo Rewards</span>
        </div>
        <p className="text-right text-xs sm:text-sm">
          © {new Date().getFullYear()} Johnny Bravo Rewards. Play responsibly. 18+
        </p>
      </div>
    </footer>
  );
}

function JoinModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-title"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 shadow-[var(--shadow-glow)] animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-center">
          <Logo className="mx-auto h-16 w-16 rounded-xl object-cover" />
          <h3 id="join-title" className="mt-5 font-display text-3xl font-semibold">
            Join <span className="text-gold-gradient">Johnny Bravo</span> on <OneWinLogo invert className="align-[-0.15em]" />
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            You're one click away from unlocking weekly leaderboards, cashback, giveaways and VIP rewards.
            Continue to sign up through our official affiliate link.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:brightness-110"
          >
            Continue to Sign Up <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/70">
            Secure · Official Affiliate Link · 18+
          </p>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  const [open, setOpen] = useState(false);
  const join = () => setOpen(true);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onJoin={join} />
      <main>
        <Hero onJoin={join} />
        <Rewards />
        <QRSection onJoin={join} />
        <Community />
        <Learn />
      </main>
      <Footer />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

