// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3916,
  name: 'Oblivion Orb',
  nicknames: [
    'grievous',
    'grievous wounds'
  ],
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 223011,
      name: 'Chemtech Putrifier',
      gold: 1900
    },
    {
      id: 3011,
      name: 'Chemtech Putrifier',
      gold: 1900
    },
    {
      id: 3165,
      name: 'Morellonomicon',
      gold: 2850
    }
  ],
  description: '25 Ability Power\n\nGrievous Wounds\nDealing magic damage to champions applies 40% Wounds for 3 seconds.',
  gold: {
    base: 400,
    sell: 560,
    total: 800
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
      name: 'Grievous Wounds',
      effects: 'Dealing magic damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 25
  }
}
export default item