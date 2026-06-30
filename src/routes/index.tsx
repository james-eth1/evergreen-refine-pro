import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroVault from "@/assets/hero-vault.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JohnyBravo — Play Qzino under code JOHNY" },
      { name: "description", content: "Sign up on Qzino with code JOHNY. Instant VIP transfer, up to 16% lossback, 125% deposit bonus, VIP milestones and a $250 weekly leaderboard." },
      { property: "og:title", content: "JohnyBravo — Play Qzino under code JOHNY" },
      { property: "og:description", content: "Instant VIP transfer, 16% lossback, 125% deposit bonus and weekly leaderboards under code JOHNY." },
    ],
  }),
  component: Index,
});

const QZINO_URL = "https://qzino.com/?ref=JOHNY";

const stats = [
  { value: "16%", label: "Up to Lossback" },
  { value: "125%", label: "Deposit Bonus" },
  { value: "VIP", label: "Milestones" },
  { value: "$250", label: "Weekly Leaderboard" },
];

const proofs = [
  { src: "https://hercules-cdn.com/file_rSQaU8w43kW69AM3m0h1SMvD", tag: "Big Win", caption: "Total Win: $540.80 — 54x Bet on Merge Up 2" },
  { src: "https://hercules-cdn.com/file_wMlVUgAk7QPpliBMjT94BcuC", tag: "Bonus Drop", caption: "FS Bonus Reward: 1,580 USDT" },
  { src: "https://hercules-cdn.com/file_XZfF8ygR4YbQKp5cDVnOj230", tag: "Paid Out", caption: "Withdrawal Confirmed: 70.83 SOL — Completed" },
  { src: "https://hercules-cdn.com/file_G6vvMBoeInleDM18Ljy2TKVv", tag: "Leaderboard", caption: "Top Wins — Blackjack $2,306 | Coin Flip $13k wagered" },
  { src: "https://hercules-cdn.com/file_BKwtqW1Aev99hvDYjdF1HlX7", tag: "Proof", caption: "Community Wins Keep Rolling In" },
  { src: "https://hercules-cdn.com/file_mpXz2mLgIpM3WJ3U864fAgnx", tag: "Proof", caption: "More Big Hits Under Code JOHNY" },
  { src: "https://hercules-cdn.com/file_QHFd6FDqIyveLPuU4Az7OCBC", tag: "Proof", caption: "Daily Rewards Stacking Up" },
  { src: "https://hercules-cdn.com/file_0GuFH7xZeiCpQOSsi3I4wDVo", tag: "Proof", caption: "Even More Wins — This Community Eats" },
];

const perks = [
  { n: "01", title: "Instant VIP Transfer", body: "Bring your status over from any other casino and keep your tier — no starting from zero." },
  { n: "02", title: "Instant Withdrawals", body: "Cash out the moment you win. No holds, no waiting, no friction." },
  { n: "03", title: "Up to 16% Lossback", body: "Get a serious chunk of your losses back, scaled to your play under code JOHNY." },
  { n: "04", title: "125% Deposit Bonus", body: "Stack massive extra value on every deposit with one of the highest bonuses around." },
  { n: "05", title: "VIP Milestones", body: "Hit VIP targets and unlock exclusive cash rewards built for the community." },
  { n: "06", title: "$250 Weekly Leaderboard", body: "Compete every week for your share of the prize pool. Top players win big." },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg font-bold shadow-[var(--shadow-glow)]">
        Q
      </span>
      <span className="text-lg font-semibold tracking-tight">
        Johny<span className="text-primary">Bravo</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#perks" className="transition-colors hover:text-foreground">Perks</a>
          <a href="#proof" className="transition-colors hover:text-foreground">Proof</a>
        </nav>
        <a
          href={QZINO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
        >
          Join Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <img
        src={heroVault}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />

      <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
          Welcome to Johny's Goblin
        </span>

        <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Play Qzino under <br className="hidden sm:block" />
          code <span className="italic text-primary">JOHNY</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm Johny Bravo. Sign up on Qzino with my code and unlock instant VIP transfer, up to 16% lossback,
          deposit bonuses, VIP milestones and leaderboards built for our community.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={QZINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
          >
            Sign up on Qzino <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#proof"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
          >
            See Proof of Wins
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border/60 bg-card/40 px-5 py-6 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <div className="font-display text-3xl font-semibold text-primary sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-1 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground/70">
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Real Receipts</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Profit Proof Under <span className="italic text-primary">Code JOHNY</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Screenshots don't lie. From bonus drops to withdrawal confirmations — Johny's Goblins are winning every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {proofs.map((p) => (
            <figure
              key={p.src}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <figcaption className="px-5 py-4 text-sm leading-snug text-muted-foreground">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section id="perks" className="relative border-y border-border/40 bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Qzino VIP</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The full VIP experience, only under <span className="italic text-primary">code JOHNY</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Qzino is a crypto casino with instant withdrawals, original games and one of the most rewarding VIP programs
            in the space. Enter code JOHNY at signup to claim every perk below.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.n}
              className="group relative bg-surface-elevated p-8 transition-colors hover:bg-card"
            >
              <div className="font-display text-sm font-semibold tracking-[0.2em] text-primary/70">{p.n}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Do you feel lucky?</span>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Join thousands of Johny's Goblins on <span className="italic text-primary">Qzino.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Sign up with code <span className="font-semibold text-foreground">JOHNY</span> and start claiming your VIP rewards from day one.
        </p>
        <div className="mt-10">
          <a
            href={QZINO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
          >
            Sign up on Qzino <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} JohnyBravo. Play responsibly. 18+</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Proof />
        <Perks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
