-- Store profile and pocket splash selections by stable app key instead of URL.
-- This consolidates the former `skin` field under the domain-facing `splash`
-- name used by the live account table and account RPCs.

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'account'
      and column_name = 'skin'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'account'
      and column_name = 'splash'
  ) then
    alter table public.account rename column skin to splash;
  elsif not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'account'
      and column_name = 'splash'
  ) then
    alter table public.account add column splash text;
  end if;
end
$$;

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'pockets'
      and column_name = 'skin'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'pockets'
      and column_name = 'splash'
  ) then
    alter table public.pockets rename column skin to splash;
  elsif not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'pockets'
      and column_name = 'splash'
  ) then
    alter table public.pockets add column splash text;
  end if;
end
$$;

alter table public.account
  drop constraint if exists account_skin_key_format;

alter table public.account
  drop constraint if exists account_splash_key_format;

alter table public.pockets
  drop constraint if exists pockets_skin_key_format;

alter table public.pockets
  drop constraint if exists pockets_splash_key_format;

alter table public.account
  add constraint account_splash_key_format
  check (
    splash is null
    or splash ~ '^[A-Za-z0-9]+:[0-9]+(?::[a-z0-9-]+)?$'
  )
  not valid;

alter table public.pockets
  add constraint pockets_splash_key_format
  check (
    splash is null
    or splash ~ '^[A-Za-z0-9]+:[0-9]+(?::[a-z0-9-]+)?$'
  )
  not valid;

alter table public.account
  validate constraint account_splash_key_format;

alter table public.pockets
  validate constraint pockets_splash_key_format;
