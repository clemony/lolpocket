---
title: Architecture
topics: [architecture]
sources:
  - id: workspace-map
    type: file
    path: docs/handoff/workspace-map.md
    note: Defines workspace ownership and cross-repo entry points.
---

# Architecture

Architecture pages describe durable system boundaries in the `lolpocket` project family.
They should help a future session find the right workspace, preserve a contract, or understand why a boundary exists.

Use this section for stable ownership and runtime shape. Put active blockers, recent work, and next steps in [Current state](../../handoff/current-state.md) instead.

## Starting Pages

- Add app architecture pages when a behavior spans `app/`, `server/`, `shared/`, or deployment configuration.
- Add cross-repo pages when a flow moves through `lolpocket`, `pocket-api`, `pocket-python`, or `postal-worker`.
- Add runtime contract pages when D1 bindings, Workers, Nitro, Supabase, or Riot API boundaries gain durable rules.

