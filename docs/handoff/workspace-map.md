# Workspace Map

This file maps the connected `lolpocket` workspaces.
The app repo is the primary entry point and the best place to begin unless a task is already known to live elsewhere.

## Primary Workspace

### `lolpocket`

- Path: `/Users/caitlin/dev/workspaces/lolpocket`
- Role: Main Nuxt app, UI, client state, server routes, deployment configuration, and integration layer for all external data.
- Priority: Start here first for user-facing issues.
- Tooling: `pnpm`, `nuxt`, `tsx`

Key commands:

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm pages:build`
- `pnpm pages:deploy`

Key areas:

- `app/` for app-specific components and pages
- `layers/ui/` for reusable UI layer and theme assets
- `server/` for Nuxt server routes and utilities
- `shared/` for shared schemas and types
- `docs/handoff/` for cross-session context

## Connected Workspaces

### `pocket-api`

- Path: `/Users/caitlin/dev/workspaces/pocket-api`
- Role: External data fetch, metadata scraping, and patch normalization in TypeScript.
- Relationship to app: Feeds normalized patch and related static data back into the app experience.
- Tooling: `pnpm`, `tsx`

Key commands:

- `pnpm run-patch`
- `pnpm meta:riot-patch-notes`
- `pnpm meta:riot-pbe-notes`
- `pnpm lint`

Likely go here when:

- Riot patch notes metadata is wrong
- patch normalization logic needs to change
- external patch or article scraping changes shape

### `pocket-python`

- Path: `/Users/caitlin/dev/workspaces/pocket-python`
- Role: Python-based static data fetching and export pipeline built around Meraki data generation.
- Relationship to app: Produces high-quality static champion and item data that the app can consume downstream.
- Tooling: Python, virtualenv, `run_static_exports.py`

Key commands:

- `python3 -m run_static_exports`
- project-specific Python entry points from `README.md`

Likely go here when:

- champion or item source data is wrong
- static exports need to be regenerated
- Python fetch or transform logic is the root cause

### `postal-worker`

- Path: `/Users/caitlin/dev/workspaces/postal-worker`
- Role: Worker-based storage and fetch pipeline for the Post feed, including Reddit data and patch metadata.
- Relationship to app: Serves the "Post" pipeline that powers Reddit posts and patch metadata used by the app.
- Tooling: `pnpm`, `tsx`, `wrangler`

Key commands:

- `pnpm dev`
- `pnpm deploy`
- `pnpm typecheck`
- `pnpm patch:sync`

Likely go here when:

- Reddit feed data is missing or malformed
- post metadata fields need to be added or fixed
- patch post author/date extraction breaks
- worker-side caching or storage behavior changes

## Ownership Boundaries

Use this quick rule to decide where to work:

- `lolpocket` owns presentation, interaction, route behavior, and deployment setup.
- `pocket-api` owns TypeScript data fetch and patch normalization outside the app runtime.
- `pocket-python` owns Python-based source data generation and exports.
- `postal-worker` owns post ingestion, caching, and worker-served post metadata.

## Common Cross-Repo Flows

### Patch Notes Flow

1. Patch metadata is fetched or normalized in `pocket-api` or `postal-worker`.
2. The app consumes the resulting metadata in `lolpocket`.
3. UI presentation and page behavior stay in `lolpocket`.

### Reddit Post Flow

1. `postal-worker` fetches and normalizes Reddit data.
2. `lolpocket` consumes the feed and renders post cards or modals.
3. Shared metadata expectations should stay aligned between worker output and app types.

### Static Champion and Item Data Flow

1. `pocket-python` generates source exports.
2. Upstream processing or normalization may happen in adjacent tooling.
3. `lolpocket` consumes the resulting assets and presents them.

## Fast Triage Guide

Use these questions to decide where to start:

- Is the problem visible in the UI, routing, or deployment setup.
  Start in `lolpocket`.
- Is the data shape wrong before it reaches the app.
  Check `postal-worker`, `pocket-api`, or `pocket-python` depending on the feed.
- Is the issue specific to post metadata or Reddit content.
  Check `postal-worker`.
- Is the issue specific to patch article scraping or normalization.
  Check `pocket-api` first, then `postal-worker` if the app consumes worker-served patch metadata.

## Notes

- `lolpocket` already contains repo rules in `AGENTS.md`.
- `pocket-api` and `pocket-python` also include `AGENTS.md`.
- `postal-worker` currently does not have an `AGENTS.md`, so its `package.json` and `src/` directory are the best quick orientation points.
