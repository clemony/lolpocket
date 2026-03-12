create extension if not exists pgcrypto;

create table if not exists public.feed_links (
  id uuid primary key default gen_random_uuid(),
  source text not null check (source in ('reddit')),
  source_id text not null,
  subreddit text not null,
  title text not null,
  url text not null,
  permalink text not null,
  author text,
  flair text,
  score integer not null default 0,
  num_comments integer not null default 0,
  thumbnail_url text,
  preview_image_url text,
  keywords text[] not null default '{}',
  metadata jsonb not null default '{}'::jsonb,
  source_created_at timestamptz not null,
  fetched_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (source, source_id)
);

create index if not exists feed_links_source_created_at_idx
  on public.feed_links (source_created_at desc);

create index if not exists feed_links_subreddit_idx
  on public.feed_links (subreddit);

create index if not exists feed_links_keywords_idx
  on public.feed_links using gin (keywords);

create or replace function public.set_feed_links_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists feed_links_set_updated_at on public.feed_links;

create trigger feed_links_set_updated_at
before update on public.feed_links
for each row
execute function public.set_feed_links_updated_at();

alter table public.feed_links enable row level security;

comment on table public.feed_links is
  'External feed links ingested by server jobs. Current retention target: 90 days.';

-- Optional cleanup statement for manual runs:
-- delete from public.feed_links
-- where source_created_at < timezone('utc', now()) - interval '90 days';
