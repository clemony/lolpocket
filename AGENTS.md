# Codex Rules

### Session handoff

- At the start of a new session, read `docs/handoff/workspace-map.md` first, then `docs/handoff/current-state.md`.
- Update `docs/handoff/current-state.md` when task direction, workspace ownership, deploy status, or blockers change.
- Use `docs/almanac` for durable project knowledge: architecture, decisions, cross-repo flows, invariants, and gotchas that should outlive the current handoff note.
- Update `docs/almanac` when work changes a durable boundary, workflow, deploy rule, database contract, or cross-repo responsibility.
- Read related repo `AGENTS.md` files when work moves into a sibling workspace.

### External Docs

- When asked for external library, framework, or API documentation, use the Context7 skill/CLI tool for the correct installed package version.
- Prefer direct local lookup for repo-owned behavior, generated Nuxt files, installed package code, and runtime state.

### Checks and Testing

- Do not run browser-based checks, browser automation, or visual QA unless the user explicitly asks for them. The user keeps a browser open while working and will manually check UI behavior or ask follow-up questions when needed.
- Do not create tests with any testing framework unless explicitly asked. When asked to create a test, use vitest.

### Project structure

- Nuxt UI theme files live in `layers/ui/app/theme`
- Generic, reusable components live in `layers/ui/app/components`
- Project domain-specific components live in `app/components`
- External data pipeline files live in sibling workspaces:
  - TypeScript pipeline -> `../pocket-api`
  - Python pipeline -> `../pocket-python`

# Token Discipline

Be operationally concise.

- Do not dump full diffs unless debugging a failure.
- Prefer compact file lists and `git diff --stat` over full diff review.
- Do not inspect git history, remotes, Cloudflare status, deployment status, or browser state unless the task requires it.
- Do not rediscover the whole repo. Read only files directly relevant to the request.

## Tooling

- Package manager: `pnpm`
- Node runtime: use `.nvmrc` (`24.14.1`)
- TypeScript runner: `tsx`
- Prefer repo scripts for local Nuxt dev: `pnpm dev` and `pnpm debug`
- Common app commands: `pnpm dev`, `pnpm debug`, `pnpm build`, `pnpm generate`, `pnpm preview`
- Lint command: `pnpm exec eslint .`
- Typecheck command: `pnpm exec nuxt typecheck`
- Auto-fix lint command: `pnpm exec eslint . --fix`
- Nuxt cleanup command: `pnpm exec nuxt cleanup`

## Deploy workflows

- Read `docs/DEPLOY.md` before changing Pages or Worker deploy settings.
- Cloudflare Pages manual flow: `pnpm pages:build` then `pnpm pages:deploy`
- Direct Worker deploy flow: `pnpm deploy`
- Dedicated NA match analytics Worker flow: `pnpm worker:config` regenerates config, `pnpm worker:build` dry-runs the Worker bundle, and `pnpm worker:deploy` deploys it
- Before the first NA match analytics Worker deploy, run `pnpm worker:secret:riot` once to set `RIOT_API_KEY`
- Verify generated deploy artifacts when deploy settings change: `dist/_worker.js/wrangler.json` for Pages builds and `.wrangler/match-analytics/wrangler.jsonc` for the dedicated cron Worker
- For Pages-linked local D1 testing, `docs/DEPLOY.md` documents the `SUMMONER_CACHE_D1_REMOTE_DEV=1` and `MATCH_ANALYTICS_D1_REMOTE_DEV=1` workflows plus the current `SUMMONER_CACHE_DB` / `MATCH_ANALYTICS_DB` bindings.
