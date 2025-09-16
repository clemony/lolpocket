const item: Item = {
  name: 'Kraken Slayer',
  id: 6672,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 6690,
      name: 'Rectrix',
      gold: 775,
    },
    {
      id: 3051,
      name: 'Hearthbound Axe',
      gold: 1200,
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6672_marksman_t4_behemothslayer.png',
  passives: [
    {
      name: 'Bring It Down',
      unique: true,
      effects:
        'Basic attacks on-hit grant a stack for 3 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all stacks to deal (<img src="/img/icons/melee.webp" class="inline-icon" />150 – 200 /<img src="/img/icons/ranged.webp" class="inline-icon" />120 – 160) <b>bonus</b> physical damage on-hit, increased by 0% – 100% (based on target\'s missing health), for up to (<img src="/img/icons/melee.webp" class="inline-icon" />262.5 – 350 /<img src="/img/icons/ranged.webp" class="inline-icon" />210 – 280) <b>bonus</b> physical damage.',
    },
  ],
  stats: {
    attackDamage: 45,
    attackSpeed: 40,
    percentMovespeed: 4,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 325,
      sell: 1200,
    },
    tags: ['MARKSMAN'],
  },
  maps: [11, 12, 21, 35],
}
export default item
