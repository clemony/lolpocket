# Handoff System

This directory is the shared handoff layer for the `lolpocket` project family.
It maps the connected workspaces, keeps the main app repo as the center of gravity, and gives each new session a short path to the current state.

## Start Here

Read these files in order:

1. [Workspace Map](./workspace-map.md)
2. [Current State](./current-state.md)
3. Related repo `AGENTS.md` files when work moves into a sibling workspace

## Design

This handoff system stays intentionally small.
It uses one stable reference file and one mutable working file.

- `workspace-map.md` is the durable map of repos, responsibilities, and entry points.
- `current-state.md` is the mutable snapshot for active work, recent changes, blockers, and next steps.
- `session-template.md` is the format to copy when the current state needs a clean reset.

The [almanac](../almanac/) holds durable context that is too broad or stable for `current-state.md`.
Use it for architecture, decisions, cross-repo flows, invariants, and gotchas.
Keep handoff notes focused on current direction and active status.

## Source Of Truth

The source of truth is the main app repo:

- `/Users/caitlin/dev/workspaces/lolpocket`

Sibling workspaces support the app, but they should be documented from the app's perspective.
If a note only matters inside a sibling repo and does not affect the app, keep it in that repo instead of growing this directory.

## Update Rules

Update `current-state.md` when any of these happen:

- a task changes direction
- a bug is narrowed to a different workspace
- a deployment issue is diagnosed or fixed
- a new blocker appears
- a cross-repo dependency changes

Update `workspace-map.md` only when the structure of the project family changes:

- a new workspace is added
- ownership between repos changes
- build or deployment responsibilities move
- a critical command or entry point changes

Update `docs/almanac` when any of these happen:

- a durable workflow or invariant changes
- a database, deploy, route, or API contract changes
- a cross-repo flow gains a new ownership boundary
- a decision should be preserved for future implementation work

## Suggested Handoff Rhythm

At the start of a focused work block:

- read `current-state.md`
- verify the active branch and workspace
- confirm whether the issue is app, data, or worker related

At the end of a focused work block:

- update `current-state.md`
- keep the summary short and concrete
- record exact file paths when the work crosses repo boundaries

## Cross-Repo Rule

When work spans multiple repos, describe it from the app's point of view first.
For example, prefer:

- "Reddit post metadata now includes `spoiler` from `postal-worker`"

over:

- "Patched `postal-worker` types"

That framing makes it much easier to resume work from the app repo without re-discovering why a sibling change mattered.
