-- Store champion skins by stable app key instead of full CDragon URLs.
-- Run this in the Supabase SQL editor, then regenerate shared database types.

alter table public.account
  add column if not exists skin text;

alter table public.pockets
  add column if not exists skin text;

alter table public.account
  drop constraint if exists account_skin_key_format;

alter table public.pockets
  drop constraint if exists pockets_skin_key_format;

alter table public.account
  add constraint account_skin_key_format
  check (skin is null or skin ~ '^[A-Za-z0-9]+:[0-9]+:[a-z0-9-]+$')
  not valid;

alter table public.pockets
  add constraint pockets_skin_key_format
  check (skin is null or skin ~ '^[A-Za-z0-9]+:[0-9]+:[a-z0-9-]+$')
  not valid;

alter table public.account
  validate constraint account_skin_key_format;

alter table public.pockets
  validate constraint pockets_skin_key_format;

-- The app no longer reads Account/Pocket splash URLs. After the one-time
-- local/client migration has been synced, these can be dropped manually:
-- alter table public.account drop column if exists splash;
-- alter table public.pockets drop column if exists splash;
