const item: Item = {
  name: 'Pyromancer\'s Cloak',
  id: 447118,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447118_pyromancerscloak.png',
  passives: [
    {
      name: 'Spark',
      unique: true,
      effects: 'Basic attacks and ability hits against enemies inflicts them with a Burn that deals 200 – 450 (based on level) magic damage over 3 seconds.',
      cooldown: '5',
    },
    {
      name: 'Cleansing Flame',
      unique: true,
      effects: 'Inflicting an enemy champion with a Burn buzzword 3 effect releases a fireball from the target, landing to a location near you after 0.5 seconds. Upon landing, a blaze is created at the impact area with a radius of 175 units, lasting for 5 seconds (3 second cooldown per target). While you are within the blaze, gain 20% <b>bonus total</b> movement speed, lingering for 0.75 seconds after exiting, and <img src="/img/icons/heal.webp" class="tip-icon" />heal for 60 – 150 (based on level) upon entering and each second of the blaze\'s lifetime thereafter. While enemies are within the blaze, they are dealt 100 magic damage every second.<br><br>For each unique Burn buzzword 3 effect source that you have, up to 10, increase the blaze\'s size by 40 units, and its strength by 4% <b>bonus total</b> movement speed and 30 hsp healing per second for the buff and 60 magic damage per tick for the enemy effect.',
    },
  ],
  stats: {
    health: 400,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'MAGE',
    ],
  },
  maps: [
    30,
  ],
}
export default item