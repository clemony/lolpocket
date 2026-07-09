---
title: Maintain the Almanac
topics: [guides, almanac, handoff]
sources:
  - id: handoff-readme
    type: file
    path: docs/handoff/README.md
    note: Defines the existing handoff system and update rules.
  - id: current-state
    type: file
    path: docs/handoff/current-state.md
    note: Tracks active context that should not be duplicated into durable pages.
---

# Maintain the Almanac

The almanac captures durable project knowledge. It complements the handoff docs instead of replacing them.

## Choose the Right Home

Use [Current state](../../handoff/current-state.md) for active work, blockers, recently touched files, and next starting points.
Use the almanac for system shape, cross-repo flows, decisions, invariants, and gotchas that should stay useful after the current work changes.

## Add or Update a Page

1. Pick the narrowest folder that matches the page purpose: `architecture`, `flows`, `decisions`, `guides`, or `reference`.
2. Copy [the template](../TEMPLATE.md) when creating a new page.
3. Add frontmatter with `title`, `topics`, and `sources` when source links help verify the claims.
4. Link to exact files, migrations, routes, commands, or sibling repositories.
5. Update [topics.yaml](../topics.yaml) when the page introduces a new topic.

## Keep It Useful

- Prefer durable facts over session logs.
- Remove stale notes instead of appending corrections below them.
- Keep pages short enough that a future agent can read them before acting.
- Mark uncertainty explicitly when behavior needs verification.
- Do not duplicate generated code, full diffs, or long command output.

## When to Update

Update the almanac when a task changes a durable boundary, workflow, invariant, deploy rule, database contract, or cross-repo responsibility.
Leave it alone for small local fixes that are obvious from the code.

