const item: Item = {
  name: 'Mercurial Scimitar',
  id: 3139,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3140,
      name: 'Quicksilver Sash',
      gold: 1300,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3139_marksman_t3_mercurialscimitar.png',
  simpleDescription:
    'Activate to remove all crowd control debuffs and grant massive Move Speed',
  nicknames: ['merc scim'],
  active: [
    {
      name: 'Quicksilver',
      unique: true,
      effects:
        'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne) from your champion and grants 50% <b>bonus total</b> movement speed and <img src="/img/icons/ghosted.webp" class="tip-icon" />ghosting for 1.5 seconds.',
    },
  ],
  stats: {
    attackDamage: 40,
    lifesteal: 10,
    magicResistance: 40,
  },
  shop: {
    prices: {
      total: 3200,
      combined: 125,
      sell: 1280,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'MOVEMENT'],
  },
  maps: [11, 12, 21, 35],
}
export default item
