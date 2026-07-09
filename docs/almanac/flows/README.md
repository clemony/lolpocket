---
title: Flows
topics: [flows]
sources:
  - id: workspace-map
    type: file
    path: docs/handoff/workspace-map.md
    note: Lists the project-family repositories and their ownership boundaries.
  - id: current-state
    type: file
    path: docs/handoff/current-state.md
    note: Captures currently known cross-repo workflows and integration notes.
---

# Flows

Flow pages explain behavior that crosses files, services, routes, databases, or repositories.
They should make it easier to resume work without rediscovering how data moves through the system.

Create a flow page when a task touches more than one ownership boundary. Keep the page focused on durable sequence and contracts, then link to handoff notes for active deployment status or open work.

## Good Candidates

- Patch notes ingestion and rendering.
- Reddit post ingestion and app display.
- Summoner route resolution and public profile hydration.
- Riot match history projection and D1 aggregate analytics.
- Dedicated Worker gatherer scheduling, locking, and backoff.

