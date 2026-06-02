# Current State

This file tracks active context for the `lolpocket` project family.
Keep it short, current, and biased toward what the next session needs to know.

## Main Focus

- Primary workspace: `/Users/caitlin/dev/workspaces/lolpocket`
- Current emphasis: app stability, Pages deployment, post pipeline integration, and typography/theme cleanup

## Recently Touched Areas

- `@nuxt/ui@4.8.1` is patched via `patches/@nuxt__ui@4.8.1.patch` so Nuxt UI component props accept repo-local custom variant strings again.
- Cloudflare Pages build configuration now targets the correct Pages preset in `nuxt.config.ts`.
- `DEPLOY.md` documents the supported Pages and Worker deploy paths.
- The server-side Riot request queue was refactored to remove global-scope timers for Cloudflare Pages compatibility.
- Local Zodiak font wiring was cleaned up to use self-hosted files from `layers/ui/public/fonts/Zodiak`.
- `postal-worker` now carries Reddit `metadata.spoiler` through the post normalization pipeline.
- `postal-worker` patch metadata scraping now falls back to article HTML for author and date extraction.

## Known Issues

- `pnpm exec nuxt typecheck --logLevel silent` now fails on `app/pages/backpack/[id]/[pocket_key].vue` because `layout: "pocket-layout"` is not part of Nuxt's generated layout union.
- Nuxt dev emits a duplicated `useAppConfig` auto-import warning. This looks upstream and is likely tied to Nitro auto-import collection rather than app code.
- Zodiak should now resolve locally, but browser verification is still worth doing after any typography changes.

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
- Should the Zodiak setup expose additional utility classes for variable font axes such as optical size while leaving weight controlled by Tailwind utilities.
- Should `experimental.nitroAutoImports` remain enabled if the duplicated `useAppConfig` warning becomes noisy enough to justify reducing dev magic.

## Next Good Starting Points

- Redeploy the latest Pages build and confirm the global-scope worker error is gone.
- Verify the self-hosted Zodiak font renders in the browser with `font-serif` and Tailwind weight utilities.
- Decide whether to clean up the unrelated missing-component TypeScript failures to restore a clean `tsc` pass.

## Update Format

When editing this file, prefer short bullets with:

- what changed
- where it changed
- why it matters

Remove stale items rather than stacking history.
If a note no longer helps the next session, delete it.
