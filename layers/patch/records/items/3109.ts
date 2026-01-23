// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3109,
  name: 'Knight\'s Vow',
  nicknames: [
    'kv'
  ],
  active: [
    {
      name: 'Pledge',
      effects: 'Designate the target allied champion as being <i>Worthy</i>, forming a <img src="/img/icons/tether.webp" class="tip-icon" />tether between you and them. Champions can only be designated as <i>Worthy</i> by one <b>Knight\'s Vow</b> at a time. You cannot be designated as <i>Worthy</i> by an ally\'s <b>Knight\'s Vow</b>.',
      range: 0,
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800
    },
    {
      id: 1006,
      name: 'Rejuvenation Bead',
      gold: 300
    }
  ],
  description: '200 Health\n40 Armor\n10 Ability Haste\n100% Base Health Regen\n\nSacrifice\nWhile near your Worthy ally, take 12% of the damage they receive and heal for 10% of the damage they deal to champions.Pledge (0s)\nDesignate an ally as Worthy.',
  gold: {
    base: 400,
    sell: 1610,
    total: 2300
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
      name: 'Sacrifice',
      effects: 'While your <i>Worthy</i> ally is tethered to you and you are above 30% of your <b>maximum</b> health, redirect 12% of the pre-mitigation physical damage and magic damage damage they take to you as the respective damage type. Additionally, you <img src="/img/icons/heal.webp" class="tip-icon" />heal for 10% of the post-mitigation damage dealt by your <i>Worthy</i> ally to champions.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 40,
    health: 200,
    healthRegen: 100
  }
}
export default item