-- Inbox storage and RPCs for lolpocket.
-- Run this in the Supabase SQL editor, then regenerate shared database types.

create extension if not exists pgcrypto;

create table if not exists public.inbox_messages (
  id uuid primary key default gen_random_uuid(),
  recipient_uuid uuid not null references public.internal_users(uuid) on delete cascade,
  sender_uuid uuid not null references public.internal_users(uuid) on delete cascade,
  title text not null,
  content jsonb not null default '{"type":"doc","content":[]}'::jsonb,
  preview text not null default '',
  created_at timestamptz not null default now(),
  read_at timestamptz,
  archived_at timestamptz,
  trashed_at timestamptz,
  deleted_at timestamptz,
  constraint inbox_messages_title_length check (char_length(title) between 1 and 160),
  constraint inbox_messages_preview_length check (char_length(preview) <= 500)
);

create table if not exists public.inbox_notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_uuid uuid not null references public.internal_users(uuid) on delete cascade,
  actor_uuid uuid references public.internal_users(uuid) on delete set null,
  template text not null,
  vars jsonb not null default '{}'::jsonb,
  related_type text,
  related_id text,
  created_at timestamptz not null default now(),
  read_at timestamptz,
  dismissed_at timestamptz,
  constraint inbox_notifications_template_length check (char_length(template) between 1 and 120)
);

create index if not exists inbox_messages_recipient_created_idx
  on public.inbox_messages (recipient_uuid, created_at desc)
  where deleted_at is null;

create index if not exists inbox_messages_sender_created_idx
  on public.inbox_messages (sender_uuid, created_at desc);

create index if not exists inbox_notifications_recipient_created_idx
  on public.inbox_notifications (recipient_uuid, created_at desc)
  where dismissed_at is null;

alter table public.inbox_messages enable row level security;
alter table public.inbox_notifications enable row level security;

drop policy if exists "Inbox messages are visible to participants" on public.inbox_messages;
create policy "Inbox messages are visible to participants"
  on public.inbox_messages
  for select
  to authenticated
  using (
    recipient_uuid = (select public.get_internal_id())::uuid
    or sender_uuid = (select public.get_internal_id())::uuid
  );

drop policy if exists "Recipients can update their message state" on public.inbox_messages;
create policy "Recipients can update their message state"
  on public.inbox_messages
  for update
  to authenticated
  using (recipient_uuid = (select public.get_internal_id())::uuid)
  with check (recipient_uuid = (select public.get_internal_id())::uuid);

drop policy if exists "Recipients can read their notifications" on public.inbox_notifications;
create policy "Recipients can read their notifications"
  on public.inbox_notifications
  for select
  to authenticated
  using (recipient_uuid = (select public.get_internal_id())::uuid);

drop policy if exists "Recipients can update their notification state" on public.inbox_notifications;
create policy "Recipients can update their notification state"
  on public.inbox_notifications
  for update
  to authenticated
  using (recipient_uuid = (select public.get_internal_id())::uuid)
  with check (recipient_uuid = (select public.get_internal_id())::uuid);

revoke all on public.inbox_messages from anon, authenticated;
revoke all on public.inbox_notifications from anon, authenticated;
grant select on public.inbox_messages to authenticated;
grant update (read_at, archived_at, trashed_at, deleted_at) on public.inbox_messages to authenticated;
grant select on public.inbox_notifications to authenticated;
grant update (read_at, dismissed_at) on public.inbox_notifications to authenticated;

create or replace function public.hydrate_inbox_message(p_message public.inbox_messages)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'id', p_message.id,
    'recipient_uuid', p_message.recipient_uuid,
    'sender_uuid', p_message.sender_uuid,
    'title', p_message.title,
    'content', p_message.content,
    'preview', p_message.preview,
    'created_at', p_message.created_at,
    'read_at', p_message.read_at,
    'archived_at', p_message.archived_at,
    'trashed_at', p_message.trashed_at,
    'deleted_at', p_message.deleted_at,
    'from', jsonb_build_object(
      'uuid', sender.uuid,
      'name', null,
      'username', sender.username,
      'icon', null
    ),
    'to', jsonb_build_object(
      'uuid', recipient.uuid,
      'name', null,
      'username', recipient.username,
      'icon', null
    )
  )
  from public.account sender
  join public.account recipient on recipient.uuid = p_message.recipient_uuid
  where sender.uuid = p_message.sender_uuid;
$$;

create or replace function public.send_inbox_message(
  p_recipient_uuid uuid,
  p_title text,
  p_content jsonb,
  p_preview text default ''
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_sender_uuid uuid := (select public.get_internal_id())::uuid;
  v_recipient public.account;
  v_recipient_blocked_users uuid[] := array[]::uuid[];
  v_message public.inbox_messages;
begin
  select *
  into v_recipient
  from public.account
  where uuid = p_recipient_uuid;

  if not found then
    raise exception 'Recipient account not found'
      using errcode = 'P0002';
  end if;

  select coalesce(blocked_users, array[]::uuid[])
  into v_recipient_blocked_users
  from public.settings
  where uuid = p_recipient_uuid;

  if v_sender_uuid <> p_recipient_uuid and coalesce(v_recipient.peer_messages, false) is false then
    raise exception 'Recipient is not accepting peer messages'
      using errcode = '42501';
  end if;

  if v_sender_uuid = any(v_recipient_blocked_users) then
    raise exception 'Recipient has blocked this sender'
      using errcode = '42501';
  end if;

  insert into public.inbox_messages (
    recipient_uuid,
    sender_uuid,
    title,
    content,
    preview
  )
  values (
    p_recipient_uuid,
    v_sender_uuid,
    trim(p_title),
    coalesce(p_content, '{"type":"doc","content":[]}'::jsonb),
    left(coalesce(p_preview, ''), 500)
  )
  returning * into v_message;

  return public.hydrate_inbox_message(v_message);
end;
$$;

create or replace function public.mark_inbox_message_read(
  p_message_id uuid,
  p_read boolean default true
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_uuid uuid := (select public.get_internal_id())::uuid;
  v_message public.inbox_messages;
begin
  update public.inbox_messages
  set read_at = case when p_read then now() else null end
  where id = p_message_id
    and recipient_uuid = v_user_uuid
  returning * into v_message;

  if not found then
    raise exception 'Inbox message not found'
      using errcode = 'P0002';
  end if;

  return public.hydrate_inbox_message(v_message);
end;
$$;

create or replace function public.trash_inbox_message(p_message_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_uuid uuid := (select public.get_internal_id())::uuid;
  v_message public.inbox_messages;
begin
  update public.inbox_messages
  set trashed_at = now()
  where id = p_message_id
    and recipient_uuid = v_user_uuid
  returning * into v_message;

  if not found then
    raise exception 'Inbox message not found'
      using errcode = 'P0002';
  end if;

  return public.hydrate_inbox_message(v_message);
end;
$$;

create or replace function public.archive_inbox_message(p_message_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_uuid uuid := (select public.get_internal_id())::uuid;
  v_message public.inbox_messages;
begin
  update public.inbox_messages
  set archived_at = now()
  where id = p_message_id
    and recipient_uuid = v_user_uuid
  returning * into v_message;

  if not found then
    raise exception 'Inbox message not found'
      using errcode = 'P0002';
  end if;

  return public.hydrate_inbox_message(v_message);
end;
$$;

create or replace function public.create_inbox_notification(
  p_recipient_uuid uuid,
  p_template text,
  p_vars jsonb default '{}'::jsonb,
  p_actor_uuid uuid default null,
  p_related_type text default null,
  p_related_id text default null
)
returns public.inbox_notifications
language plpgsql
security definer
set search_path = public
as $$
declare
  v_notification public.inbox_notifications;
begin
  insert into public.inbox_notifications (
    recipient_uuid,
    actor_uuid,
    template,
    vars,
    related_type,
    related_id
  )
  values (
    p_recipient_uuid,
    p_actor_uuid,
    trim(p_template),
    coalesce(p_vars, '{}'::jsonb),
    p_related_type,
    p_related_id
  )
  returning * into v_notification;

  return v_notification;
end;
$$;

create or replace function public.mark_inbox_notification_read(
  p_notification_id uuid,
  p_read boolean default true
)
returns public.inbox_notifications
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_uuid uuid := (select public.get_internal_id())::uuid;
  v_notification public.inbox_notifications;
begin
  update public.inbox_notifications
  set read_at = case when p_read then now() else null end
  where id = p_notification_id
    and recipient_uuid = v_user_uuid
  returning * into v_notification;

  if not found then
    raise exception 'Inbox notification not found'
      using errcode = 'P0002';
  end if;

  return v_notification;
end;
$$;

create or replace function public.dismiss_inbox_notification(p_notification_id uuid)
returns public.inbox_notifications
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_uuid uuid := (select public.get_internal_id())::uuid;
  v_notification public.inbox_notifications;
begin
  update public.inbox_notifications
  set dismissed_at = now()
  where id = p_notification_id
    and recipient_uuid = v_user_uuid
  returning * into v_notification;

  if not found then
    raise exception 'Inbox notification not found'
      using errcode = 'P0002';
  end if;

  return v_notification;
end;
$$;

drop function if exists public.get_user_account();
drop function if exists public.get_user_account(text);
drop function if exists public.get_user_account(uuid);

create or replace function public.get_user_account(p_uuid uuid default null)
returns table (
  account jsonb,
  settings jsonb,
  pockets jsonb,
  inbox jsonb
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_uuid uuid := coalesce(p_uuid, (select public.get_internal_id())::uuid);
begin
  if v_user_uuid <> (select public.get_internal_id())::uuid then
    raise exception 'Cannot fetch another user account with this RPC'
      using errcode = '42501';
  end if;

  return query
  select
    to_jsonb(a) as account,
    to_jsonb(s) as settings,
    coalesce(
      (
        select jsonb_agg(to_jsonb(p) order by p.updated desc)
        from public.pockets p
        where p.uuid = v_user_uuid
      ),
      '[]'::jsonb
    ) as pockets,
    jsonb_build_object(
      'messages',
      coalesce(
        (
          select jsonb_agg(public.hydrate_inbox_message(m) order by m.created_at desc)
          from public.inbox_messages m
          where m.recipient_uuid = v_user_uuid
            and m.deleted_at is null
        ),
        '[]'::jsonb
      ),
      'notifications',
      coalesce(
        (
          select jsonb_agg(to_jsonb(n) order by n.created_at desc)
          from public.inbox_notifications n
          where n.recipient_uuid = v_user_uuid
            and n.dismissed_at is null
        ),
        '[]'::jsonb
      )
    ) as inbox
  from public.account a
  left join public.settings s on s.uuid = a.uuid
  where a.uuid = v_user_uuid;
end;
$$;

revoke execute on function public.hydrate_inbox_message(public.inbox_messages) from public, anon, authenticated;
revoke execute on function public.create_inbox_notification(uuid, text, jsonb, uuid, text, text) from public, anon, authenticated;

grant execute on function public.get_user_account(uuid) to authenticated;
grant execute on function public.send_inbox_message(uuid, text, jsonb, text) to authenticated;
grant execute on function public.mark_inbox_message_read(uuid, boolean) to authenticated;
grant execute on function public.trash_inbox_message(uuid) to authenticated;
grant execute on function public.archive_inbox_message(uuid) to authenticated;
grant execute on function public.mark_inbox_notification_read(uuid, boolean) to authenticated;
grant execute on function public.dismiss_inbox_notification(uuid) to authenticated;
grant execute on function public.create_inbox_notification(uuid, text, jsonb, uuid, text, text) to service_role;
