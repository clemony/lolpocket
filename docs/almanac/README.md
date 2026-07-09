---
title: Lolpocket Almanac
topics: [overview, almanac]
---

# Lolpocket Almanac

The almanac is the durable knowledge layer for the `lolpocket` project family.
It records decisions, flows, invariants, and gotchas that code and short handoff notes do not explain well.

Start with the handoff docs before reading the almanac:

1. [Workspace map](../handoff/workspace-map.md)
2. [Current state](../handoff/current-state.md)

Use the almanac when a task needs context that should survive more than one session. The handoff docs answer "what is active right now"; the almanac answers "why does this system work this way?"

## Reading Path

- [Architecture](architecture/) maps stable system boundaries and ownership.
- [Flows](flows/) explains multi-step behavior that crosses files, services, or repositories.
- [Decisions](decisions/) records choices that future work should preserve or consciously revisit.
- [Guides](guides/) gives task-oriented procedures for keeping the almanac useful.
- [Reference](reference/) stores exact contracts, conventions, and lookup tables.

## Page Rules

Every page should have a narrow purpose, a stable title, and enough source links to verify its claims. Prefer one focused page over a broad page that mixes architecture, active status, and troubleshooting.

When code and docs disagree, code wins. Update the page or add a note that marks the uncertainty instead of letting stale prose look authoritative.

