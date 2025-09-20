// Updated Patch 25.17 - 09/07/2025 08:03:39 AM CDT

export const shardObject: ShardObject[] = [
  {
    label: 'Offense',
    shards: [
      {
        id: 5008,
        name: 'Adaptive Force',
        color: 'var(--color-sorcery',
        description: '+9 Adaptive Force',
      },
      {
        id: 5005,
        name: 'Attack Speed',
        color: 'var(--color-precision)',
        description: '+10% Attack Speed',
      },
      {
        id: 5007,
        name: 'Ability Haste',
        color: 'var(--color-inspiration',
        description: '+8 Ability Haste ',
      },
    ],
    tier: 0,
  },
  {
    label: 'Flex',
    shards: [
      {
        id: 5008,
        name: 'Adaptive Force',
        color: 'var(--color-sorcery',
        description: '+9 Adaptive Force',
      },
      {
        id: 5010,
        name: 'Move Speed',
        color: 'var(--color-inspiration',
        description: '+2% Move Speed',
      },
      {
        id: 5001,
        name: 'Health Scaling',
        color: 'var(--color-resolve)',
        description: '+10-180 Health (based on level)',
      },
    ],
    tier: 1,
  },
  {
    label: 'Defense',
    shards: [
      {
        id: 5011,
        name: 'Health',
        color: 'var(--color-resolve)',
        description: '+65 Health',
      },
      {
        id: 5013,
        name: 'Tenacity and Slow Resist',
        color: 'var(--color-inspiration',
        description: '+10% Tenacity and Slow Resist',
      },
      {
        id: 5001,
        name: 'Health Scaling',
        color: 'var(--color-resolve)',
        description: '+10-180 Health (based on level)',
      },
    ],
    tier: 2,
  },
]
