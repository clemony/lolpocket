# Deployment

This project supports two Cloudflare deployment targets:

- Cloudflare Pages for the main site
- Cloudflare Workers with `wrangler deploy`

The Nuxt config switches presets automatically:

- `cloudflare_pages` when `CF_PAGES=1`
- `cloudflare_module` for non-Pages worker deploys

## Cloudflare Pages

Cloudflare Pages runs this project in SSR mode on the Pages runtime.
Use this setup for the public `lolpocket` domain.

### Build Settings

Set the following values in the Cloudflare Pages project:

- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: leave empty unless the repo is nested in a monorepo

Cloudflare Pages sets `CF_PAGES=1` automatically during the build.
That makes Nuxt emit the Pages runtime output in `dist`.

### Expected Output

A successful Pages build creates:

- `dist/_worker.js`
- static assets under `dist/`

This SSR build does not need a root `dist/index.html`.
If `dist/_worker.js` exists, the Pages runtime can serve the app.

### Summoner Cache D1 Binding

The persistent summoner preview/search cache expects a D1 binding named
`SUMMONER_CACHE_DB`.

Create the D1 database in Cloudflare, apply the SQL migrations in `migrations/`,
then expose it to Pages in one of two ways:

- Set a Pages binding in the dashboard: Settings > Bindings > Add > D1 database,
  with variable name `SUMMONER_CACHE_DB`.
- Or set `SUMMONER_CACHE_D1_DATABASE_ID` before build so Nitro emits the D1
  binding into the generated Wrangler config. Optionally set
  `SUMMONER_CACHE_D1_DATABASE_NAME` and
  `SUMMONER_CACHE_D1_PREVIEW_DATABASE_ID`.

If the binding is absent, Riot routes still work, but the persistent cache is
skipped.

For local `pnpm dev` testing, set `SUMMONER_CACHE_D1_REMOTE_DEV=1` alongside
`SUMMONER_CACHE_D1_DATABASE_ID` and `SUMMONER_CACHE_D1_DATABASE_NAME`. The
server routes will use Wrangler's dev platform proxy to bind
`SUMMONER_CACHE_DB` to the remote D1 database and persist summoner API fetches
and match participant previews into `summoner_cache`. If Wrangler is logged in
to more than one Cloudflare account, also set `CLOUDFLARE_ACCOUNT_ID`.

`migrations/0003_summoner_match_scan_state.sql` and
`migrations/0004_summoner_match_gather_control.sql` also apply to this
database. They store per-PUUID cooldown state plus the cron gatherer's lock and
Riot backoff row. They do not store raw match or ranked data.

### Match Analytics D1 Binding

Riot match analytics uses a separate aggregate-only D1 binding named
`MATCH_ANALYTICS_DB`.

Create the D1 database in Cloudflare, apply
`migrations/0002_riot_match_analytics.sql`, then expose it to Pages in one of
two ways:

- Set a Pages binding in the dashboard: Settings > Bindings > Add > D1 database,
  with variable name `MATCH_ANALYTICS_DB`.
- Or set `MATCH_ANALYTICS_D1_DATABASE_ID` before build so Nitro emits the D1
  binding into the generated Wrangler config. Optionally set
  `MATCH_ANALYTICS_D1_DATABASE_NAME` and
  `MATCH_ANALYTICS_D1_PREVIEW_DATABASE_ID`.

If the binding is absent, Riot match routes still return client data, but D1
analytics tally persistence is skipped.

For local `pnpm dev` testing, set `MATCH_ANALYTICS_D1_REMOTE_DEV=1` alongside
`MATCH_ANALYTICS_D1_DATABASE_ID` and `MATCH_ANALYTICS_D1_DATABASE_NAME`. The
server match routes will use Wrangler's dev platform proxy to bind
`MATCH_ANALYTICS_DB` to the remote D1 database and persist aggregate match
analytics during local development. If Wrangler is logged in to more than one
Cloudflare account, also set `CLOUDFLARE_ACCOUNT_ID`.

### Match Analytics Cron Gatherer

The optional NA match analytics gatherer runs as a dedicated lightweight Worker
from `workers/match-analytics-gather`. It reuses `SUMMONER_CACHE_DB` for
organic seed PUUIDs, scan cooldown state, and the lock/backoff row, then writes
only aggregate tallies to `MATCH_ANALYTICS_DB`.

Before the first deploy, set the Riot API key secret on that Worker:

```bash
pnpm worker:secret:riot
```

`pnpm worker:secret:riot` first generates `.wrangler/match-analytics/wrangler.jsonc`
from the D1 environment variables, then runs `wrangler secret put RIOT_API_KEY`
against that generated config. The secret value is not stored in the repo.

Build-check or deploy the cron Worker with:

```bash
pnpm worker:build
pnpm worker:deploy
```

Both commands generate the ignored Wrangler config from these environment
variables:

- `SUMMONER_CACHE_D1_DATABASE_ID`
- `MATCH_ANALYTICS_D1_DATABASE_ID`
- optional `SUMMONER_CACHE_D1_DATABASE_NAME`
- optional `MATCH_ANALYTICS_D1_DATABASE_NAME`
- optional `CLOUDFLARE_ACCOUNT_ID`
- optional `MATCH_ANALYTICS_WORKER_NAME`
- optional `MATCH_ANALYTICS_SEED_LIMIT`
- optional `MATCH_ANALYTICS_MATCH_COUNT`
- optional `MATCH_ANALYTICS_GATHER_CRON`

The generated config includes `triggers.crons = ["*/5 * * * *"]` by default.
Deploy after both D1 bindings are configured and after applying
`migrations/0003_summoner_match_scan_state.sql` and
`migrations/0004_summoner_match_gather_control.sql` to `SUMMONER_CACHE_DB`.

The gatherer uses the shared Riot request queue limits inside the Worker.
Scheduled runs pass
`retryOnRateLimit: false` into the Riot fetch path so a 429 records
`riot_backoff_until` in `summoner_match_gather_control` instead of sleeping
inside the Worker invocation. The same table holds an expiring lock row for
`riot:match-analytics:gather-na:na1`, so overlapping cron or manual Worker runs
skip rather than doubling Riot traffic.

### Common 404 Cause

A domain-level 404 usually means the Pages project is deploying the wrong artifact.
Check these settings first:

- The build command is `pnpm build`
- The output directory is `dist`
- The latest deployment was created after the Pages preset fix

## Direct Pages Upload

Use these commands when you want to build and upload to Pages manually with Wrangler:

```bash
pnpm pages:build
pnpm pages:deploy
```

These scripts map to:

- `pnpm exec nuxi build --preset=cloudflare_pages`
- `pnpm exec wrangler pages deploy dist`

## Cloudflare Worker Deploy

Use this path when you want a direct Worker deployment instead of Cloudflare Pages:

```bash
pnpm deploy
```

This command runs `wrangler deploy` and uses the non-Pages Nitro preset:

- preset: `cloudflare_module`

Do not use the Worker deploy flow as the Cloudflare Pages build command.
Pages expects the `dist` output generated by the Pages preset.

For the NA analytics cron Worker, use `pnpm worker:deploy` instead. That script
deploys the dedicated Worker entrypoint directly with Wrangler and does not
build or upload the Nuxt/Nitro server bundle.

## Quick Check

Use this checklist after changing deployment settings:

1. Run `CF_PAGES=1 pnpm build`.
2. Confirm the build logs show `Nitro preset: cloudflare-pages`.
3. Confirm `dist/_worker.js` exists.
4. Redeploy the Pages project.
