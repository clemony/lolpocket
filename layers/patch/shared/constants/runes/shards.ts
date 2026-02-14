// Updated Patch 16.1 - 01/29/2026 04:29:52 PM CST
import type { ShardRegistry } from "#shared/types"

export const shardRegistry: ShardRegistry[] = [
  {
    label: "Offense",
    tier: 0,
    shards: [
      {
        color: "var(--color-sorc)",
        id: 5008,
        name: "Adaptive Force",
        description: "+9 Adaptive Force",
      },
      {
        color: "var(--color-pre)",
        id: 5005,
        name: "Attack Speed",
        description: "+10% Attack Speed",
      },
      {
        color: "var(--color-insp)",
        id: 5007,
        name: "Ability Haste",
        description: "+8 Ability Haste ",
      },
    ],
  },
  {
    label: "Flex",
    tier: 1,
    shards: [
      {
        color: "var(--color-sorc)",
        id: 5008,
        name: "Adaptive Force",
        description: "+9 Adaptive Force",
      },
      {
        color: "var(--color-insp)",
        id: 5010,
        name: "Move Speed",
        description: "+2.5% Move Speed",
      },
      {
        color: "var(--color-res)",
        id: 5001,
        name: "Health Scaling",
        description: "+10-180 Health (based on level)",
      },
    ],
  },
  {
    label: "Defense",
    tier: 2,
    shards: [
      {
        color: "var(--color-res)",
        id: 5011,
        name: "Health",
        description: "+65 Health",
      },
      {
        color: "var(--color-insp)",
        id: 5013,
        name: "Tenacity and Slow Resist",
        description: "+15% Tenacity and Slow Resist",
      },
      {
        color: "var(--color-res)",
        id: 5001,
        name: "Health Scaling",
        description: "+10-180 Health (based on level)",
      },
    ],
  },
]
