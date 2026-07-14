---
title: Profile Splash Contract
topics: [reference]
sources:
  - id: account-schema
    type: file
    path: shared/schema/schema.account.ts
    note: Defines the application Account splash field.
  - id: pocket-schema
    type: file
    path: shared/schema/schema.pocket.ts
    note: Defines the application Pocket splash field.
  - id: splash-key-sql
    type: file
    path: docs/supabase/splash-keys.sql
    note: Aligns the live account and pockets database columns and constraints.
---

# Profile Splash Contract

Lolpocket accounts and pockets persist their selected profile-art key in a
field named `splash`. The name `skin` is reserved for Riot champion-skin data
and UI selection objects, not the persisted Account or Pocket contract.

## Current Shape

- `Account.splash` and `Pocket.splash` contain either `null` or a stable skin
  selection key.
- Current keys use `Champion:id:slug`; legacy `Champion:id` keys remain
  readable and valid so existing selections do not need destructive rewrites.
- Account reads and updates use the live `public.account.splash` column.
- Pocket hydration and writes use `public.pockets.splash`.
- Image helpers resolve the stored key into the requested splash crop.

## Maintenance Notes

- Keep Supabase-generated types aligned after changing either table.
- Do not reintroduce persisted `skin` fields for accounts or pockets.
- If the key format changes, preserve legacy parsing until stored values have
  been migrated and verified.
