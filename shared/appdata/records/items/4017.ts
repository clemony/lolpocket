const item: Item = {
  id: 4017,
  name: 'Hellfire Hatchet',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4017_hellfirehatchet.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Char',
      cooldown: 15,
      effects:
        'Your next ability hit applies a Burn that deals 0% – 2000% (based on maximum health difference) (+0% – 2000% (based on maximum health difference) per 1 Lethality) lethality (based on <b>maximum</b> health difference) hp of the target\'s <b>current</b> health physical damage seconds over 4 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 1000,
      total: 2500,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 35,
    lethality: 12,
  },
}
export default item
