const item: Item = {
  id: 3171,
  name: 'Crimson Lucidity',
  buildsFrom: [
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_ionianboots_64.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Ionian Insight',
      effects: 'Gain 10 summoner spell haste.',
      unique: true,
    },
    {
      name: 'Noxian Haste',
      effects:
        '<img src="/img/icons/heal.webp" class="tip-icon" />Healing, <img src="/img/icons/shield.webp" class="tip-icon" />shielding or buffing an ally, damaging abilities against champions, and using summoner spells grants you (<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />8%) <b>bonus</b> movement speed for 4 seconds. This can be triggered from the same cast instance only once every 4 seconds.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 560,
      total: 1400,
    },
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 25,
    flatMovespeed: 50,
  },
}
export default item
