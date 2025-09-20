const item: Item = {
  id: 3140,
  name: 'Quicksilver Sash',
  nicknames: ['qss'],
  active: [
    {
      name: 'Quicksilver',
      effects:
        'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne) from your champion.',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400,
    },
  ],
  buildsInto: [
    {
      id: 6035,
      name: 'Silvermere Dawn',
      gold: 3000,
    },
    {
      id: 3139,
      name: 'Mercurial Scimitar',
      gold: 3200,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3140_marksman_t2_quicksilversash.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 900,
      sell: 520,
      total: 1300,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  simpleDescription: 'Activate to remove all crowd control debuffs',
  specialRecipe: 0,
  stats: {
    magicResistance: 30,
  },
}
export default item
