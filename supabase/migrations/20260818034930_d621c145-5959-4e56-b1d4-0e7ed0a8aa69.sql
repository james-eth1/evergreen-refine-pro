CREATE TABLE public.leaderboard_baseline (
  player_id text PRIMARY KEY,
  starting_turnover numeric NOT NULL DEFAULT 0,
  captured_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.leaderboard_baseline TO service_role;
ALTER TABLE public.leaderboard_baseline ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.leaderboard_state (
  id int PRIMARY KEY DEFAULT 1,
  rows jsonb NOT NULL DEFAULT '[]'::jsonb,
  provider_updated_at timestamptz,
  fetched_at timestamptz,
  frozen boolean NOT NULL DEFAULT false,
  CONSTRAINT leaderboard_state_singleton CHECK (id = 1)
);
GRANT SELECT ON public.leaderboard_state TO anon, authenticated;
GRANT ALL ON public.leaderboard_state TO service_role;
ALTER TABLE public.leaderboard_state ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leaderboard is publicly viewable" ON public.leaderboard_state FOR SELECT TO anon, authenticated USING (true);

INSERT INTO public.leaderboard_state (id) VALUES (1);