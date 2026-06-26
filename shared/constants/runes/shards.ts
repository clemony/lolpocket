// Updated Patch 16.12 - 06/25/2026 10:32:45 PM CDT
import type { ShardRegistry } from "#shared/types"

export const shardRegistry: ShardRegistry[] = [
  {
    "label": "Offense",
    "shards": [
      {
        "color": "var(--color-sorc)",
        "id": 5008,
        "name": "Adaptive Force",
        "description": "+9 Adaptive Force"
      },
      {
        "color": "var(--color-pre)",
        "id": 5005,
        "name": "Attack Speed",
        "description": "+10% Attack Speed"
      },
      {
        "color": "var(--color-insp)",
        "id": 5007,
        "name": "Ability Haste",
        "description": "+8 Ability Haste "
      }
    ],
    "tier": 0
  },
  {
    "label": "Flex",
    "shards": [
      {
        "color": "var(--color-sorc)",
        "id": 5008,
        "name": "Adaptive Force",
        "description": "+9 Adaptive Force"
      },
      {
        "color": "var(--color-insp)",
        "id": 5010,
        "name": "Move Speed",
        "description": "+2.5% Move Speed"
      },
      {
        "color": "var(--color-res)",
        "id": 5001,
        "name": "Health Scaling",
        "description": "+10-180 Health (based on level)"
      }
    ],
    "tier": 1
  },
  {
    "label": "Defense",
    "shards": [
      {
        "color": "var(--color-res)",
        "id": 5011,
        "name": "Health",
        "description": "+65 Health"
      },
      {
        "color": "var(--color-insp)",
        "id": 5013,
        "name": "Tenacity and Slow Resist",
        "description": "+15% Tenacity and Slow Resist"
      },
      {
        "color": "var(--color-res)",
        "id": 5001,
        "name": "Health Scaling",
        "description": "+10-180 Health (based on level)"
      }
    ],
    "tier": 2
  }
]