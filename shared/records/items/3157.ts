const item: Item = {
  id: 3157,
  name: 'Zhonya\'s Hourglass',
  nicknames: ['zhg', 'zonyas', 'zhonyas'],
  active: [
    {
      name: 'Time Stop',
      effects:
        'Put yourself in <img src="/img/icons/stasis.webp" class="tip-icon" />stasis for 2.5 seconds, rendering you <img src="/img/icons/untargetable.webp" class="tip-icon" />untargetable and <img src="/img/icons/invulnerable.webp" class="tip-icon" />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200,
    },
    {
      id: 2420,
      name: 'Seeker\'s Armguard',
      gold: 1600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3157_mage_t3_zhonyashourglass.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1300,
      total: 3250,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'Activate to become invincible but unable to take actions',
  specialRecipe: 0,
  stats: {
    abilityPower: 105,
    armor: 50,
  },
}
export default item
