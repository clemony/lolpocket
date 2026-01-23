// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2523,
  name: 'Hexoptics C44',
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 6670,
      name: 'Noonquiver',
      gold: 1300
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  description: '50 Attack Damage\n25% Critical Strike Chance\n\nMagnification\nDeal up to 10% increased damage with Attacks, based on how far away the enemy is (max damage at 700 range).\n\nArcane Aim\nWhen a champion that you damaged within 3 seconds dies, gain 100 additional attack range for 6 seconds. ',
  gold: {
    base: 275,
    sell: 1960,
    total: 2800
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  passives: [
    {
      name: 'Magnification',
      effects: 'Deal 0% – 10% (based on distance to target) increased <img src="/img/icons/basic-damage.webp" class="tip-icon" />basic damage.',
      mythic: false,
      unique: true
    },
    {
      name: 'Arcane Aim',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them grants you <img src="/img/icons/100-bonus-attack-range.webp" class="tip-icon" />100 <b>bonus</b> attack range for 6 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    criticalStrikeChance: 25
  }
}
export default item