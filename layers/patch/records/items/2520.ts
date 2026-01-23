// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2520,
  name: 'Bastionbreaker',
  nicknames: [
    'lethality'
  ],
  buildsFrom: [
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    },
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    }
  ],
  description: '55 Attack Damage\n22 Lethality\n15 Ability Haste\n\nShaped Charge (0s)\nDealing Ability damage to a Champion or Epic Monster deals an additional  true damage.\n\nSabotage\nTaking down a champion within 3 seconds of damaging them grants Sabotage for 90 seconds. While you have Sabotage, your next Attack against an Epic Monster or Turret deals an additional  true damage over 3 seconds. ',
  gold: {
    base: 863,
    sell: 2240,
    total: 3200
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  passives: [
    {
      name: 'Shaped Charge',
      cooldown: 45,
      effects: 'Your next instance of ability damage to a champion or epic monster with a champion ability deals (<img src="/img/icons/melee.webp" class="inline-icon" />30 /<img src="/img/icons/ranged.webp" class="inline-icon" />15) (+(<img src="/img/icons/melee.webp" class="inline-icon" />1.5 /<img src="/img/icons/ranged.webp" class="inline-icon" />0.75) per 1 lethality) <b>bonus</b> true damage.',
      mythic: false,
      unique: true
    },
    {
      name: 'Sabotage',
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them grants you <i>Sabotage</i> for 90 seconds, empowering your next basic attack against a <img src="/img/icons/turret.webp" class="tip-icon" />turret or epic <img src="/img/icons/monster.webp" class="tip-icon" />monster to consume the effect to deal (<img src="/img/icons/melee.webp" class="inline-icon" />300 /<img src="/img/icons/ranged.webp" class="inline-icon" />240) (+(<img src="/img/icons/melee.webp" class="inline-icon" />25 /<img src="/img/icons/ranged.webp" class="inline-icon" />20) per 1 lethality) <b>bonus</b> true damage over 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 55,
    lethality: 22
  }
}
export default item