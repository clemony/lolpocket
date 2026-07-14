# Current State

This file tracks active context for the `lolpocket` project family.
Keep it short, current, and biased toward what the next session needs to know.

## Main Focus

- Primary workspace: `/Users/caitlin/dev/workspaces/lolpocket`
- Current emphasis: app stability, Pages deployment, post pipeline integration, and typography/theme cleanup

## Recently Touched Areas

- `docs/almanac` now provides a lightweight durable-knowledge skeleton with overview, topics, page template, maintenance guide, and starting sections for architecture, flows, decisions, guides, and reference. `AGENTS.md` and `docs/handoff/README.md` now explain when to use or update it.
- `@nuxt/ui@4.8.1` is patched via `patches/@nuxt__ui@4.8.1.patch` so Nuxt UI component props accept repo-local custom variant strings again.
- Cloudflare Pages build configuration now targets the correct Pages preset in `nuxt.config.ts`; the latest `CF_PAGES=1 pnpm build` pass generated `dist/_worker.js` with both D1 bindings in `dist/_worker.js/wrangler.json`.
- `DEPLOY.md` documents the supported Pages and Worker deploy paths.
- The server-side Riot request queue was refactored to remove global-scope timers for Cloudflare Pages compatibility.
- Summoner preview/search cache now has D1 schema and read-through server helpers keyed by PUUID, with `SUMMONER_CACHE_DB` as the Pages binding name and `SUMMONER_CACHE_D1_REMOTE_DEV=1` as the opt-in local dev remote-D1 path.
- Riot match history now projects raw match DTOs into rich client `MatchData` plus global D1 aggregate tallies, with `MATCH_ANALYTICS_DB` as the optional Pages binding, `MATCH_ANALYTICS_D1_REMOTE_DEV=1` as the opt-in local dev remote-D1 path, and `migrations/0002_riot_match_analytics.sql` defining a match ledger plus champion, ally, enemy, and item tally tables.
- Optional NA match analytics gathering now runs from the dedicated `workers/match-analytics-gather` Worker. `pnpm worker:build` generates an ignored `.wrangler/match-analytics/wrangler.jsonc` from D1 env vars and dry-runs Wrangler; `pnpm worker:deploy` deploys that small Worker without building the Nuxt/Nitro server. `SUMMONER_CACHE_DB` owns both per-PUUID scan state and the gatherer lock/backoff row.
- Summoner route resolution treats `/_r` as an internal resolver prefix, supports short `/_r/:puuid` compatibility redirects, and builds match scoreboard links as canonical `/:region/:name_tag` slugs.
- Summoner route entry now hydrates the public Supabase account cache by PUUID without blocking navigation; hits expire after 10 minutes, misses after 1 minute, and signed-in account updates refresh the public cache immediately.
- Account and pocket profile-art selections now use the persisted `splash` field end to end; live `pockets.skin` was renamed to `pockets.splash`, database types were regenerated, and legacy two-part selection keys remain readable.
- Live Supabase `public.update_settings(jsonb)` was corrected to update `default_role`, `default_map`, `folders`, and `reduce_motion` against their real columns; the previous function wrote default fields through `theme` and caused `CASE types integer and text cannot be matched` on settings updates.
- Settings updates now apply the RPC's returned row to the existing Pinia settings object, preserving form references; communication toggles bind to their tracked source and submit only supported notification fields.
- Theme mode preference now lives in persisted `localStore().theme`; app theme selectors use `useThemePreference()`, while Supabase settings no longer expose or accept `theme`.
- Local Zodiak font wiring was cleaned up to use self-hosted files from `layers/ui/public/fonts/Zodiak`.
- `useObjectData` now centralizes command reference-card CDN path resolution for item, rune, champion, and ability data, including champion numeric-id to key lookup.
- Sidebar info popovers now use a fixed 8-slot pool and reuse closed or oldest open slots instead of growing by index.
- Sidebar info popover cards now render outside footer layout flow with clamped cascade offsets, so new cards layer near prior cards without pushing existing cards upward.
- Sidebar/modal state is split between `useDraggableInfoModalPool` for slot lifecycle and `useDraggableInfoModal` for one-card drag measurement and viewport constraints.
- Sidebar info popovers track monotonic z-index values, so opening or grabbing a card brings that card to the front without changing its placement.
- `postal-worker` now carries Reddit `metadata.spoiler` through the post normalization pipeline.
- `postal-worker` patch metadata scraping now falls back to article HTML for author and date extraction.
- `AGENTS.md` now allows read-only subagents for external docs lookup and other narrow independent exploration or verification tasks.

## Known Issues

- Nuxt dev emits a duplicated `useAppConfig` auto-import warning. This looks upstream and is likely tied to Nitro auto-import collection rather than app code.
- `public/cdn/runes` currently contains `.ts` files while existing runtime fetch paths use `/cdn/runes/:id.json`; rune command cards keep index fallbacks until the CDN export shape is aligned.

## Cross-Repo Notes

### `lolpocket`

- Holds the shared handoff system.
- Should stay the first place to check for UI, route, SSR, and deploy issues.

### `postal-worker`

- Owns the Post feed pipeline.
- Most relevant when Reddit metadata or patch post metadata is wrong before it hits the app.

### `pocket-api`

- Most relevant when Riot patch article metadata or patch normalization logic changes outside the worker path.

### `pocket-python`

- Most relevant when champion or item source data is wrong before normalization or ingestion.

## Open Questions

- Should `postal-worker` also gain its own `AGENTS.md` for faster orientation.
- Should `experimental.nitroAutoImports` remain enabled if the duplicated `useAppConfig` warning becomes noisy enough to justify reducing dev magic.

## Next Good Starting Points

- Manually deploy the latest verified Pages build and confirm the global-scope worker error is gone in the live runtime.
- Apply `migrations/0003_summoner_match_scan_state.sql` and `migrations/0004_summoner_match_gather_control.sql` to `SUMMONER_CACHE_DB`, then run `pnpm worker:secret:riot` once before deploying the dedicated cron Worker with `pnpm worker:deploy`.
- Keep an eye on sidebar popover placement in live UI after further modal sizing changes.

## Update Format

When editing this file, prefer short bullets with:

- what changed
- where it changed
- why it matters

Remove stale items rather than stacking history.
If a note no longer helps the next session, delete it.
