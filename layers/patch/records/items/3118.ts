// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3118,
  name: 'Malignance',
  nicknames: [
    'burn'
  ],
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    }
  ],
  description: '90 Ability Power\n600 Mana\n15 Ability Haste\n\nScorn\nGain 20 Ultimate Ability Haste.\n\nHatefog\nDamaging a champion with your Ultimate burns the ground beneath them for 3s, dealing magic damage per second and reducing their Magic Resist. \n',
  gold: {
    base: 650,
    sell: 1890,
    total: 2700
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Scorn',
      effects: 'Gain 20 ultimate haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Hatefog',
      effects: 'Dealing ability damage to enemy champions with your ultimate ability creates a 251 – 550 (based on ultimate\'s damage instance) radius scorched zone beneath them for 3 seconds, applying a <i>Curse</i> to enemies within that deals 15 magic damage (+1.25% AP) magic damage every 0.25 seconds and reduces their magic resistance by 10 (3 second cooldown per target, starts on zone creation).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 90,
    mana: 600
  }
}
export default item