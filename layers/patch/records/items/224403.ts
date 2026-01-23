// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 224403,
  name: 'The Golden Spatula',
  nicknames: [
    'spatch',
    'urf',
    'manatee',
    'Quest',
    'Urf\'s Champion',
    'burn'
  ],
  description: '90 Attack Damage\n125 Ability Power\n60% Attack Speed\n25% Critical Strike Chance\n250 Health\n30 Armor\n30 Magic Resist\n250 Mana\n20 Ability Haste\n10% Move Speed\n10% Omnivamp\n100% Base Health Regen\n100% Base Mana Regen\n\nDoing Something\nYou are permanently On Fire!\n\n"It must do something...\nDeclined, it does EVERYTHING"',
  gold: {
    base: 2500,
    sell: 1750,
    total: 2500
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Doing Something',
      effects: 'You are permanently 20px|link= <b>On Fire!</b>, causing you to Burn enemies within 400 units every second for 26 – 43 (based on level) magic damage and reduce your abilities\' cooldowns by 0.2 seconds every 0.25 seconds as well as gain 5% <b>bonus</b> movement speed, increased to 20% ms while facing nearby enemy champions, 20% <b>bonus</b> attack speed, 50 – 900 (based on level) <b>bonus</b> health, 1.5 <b>bonus</b> mana regeneration, and 4 <b>bonus</b> energy regeneration. While <b>On Fire!</b>, however, you also take (<img src="/img/icons/melee.webp" class="inline-icon" />25% /<img src="/img/icons/ranged.webp" class="inline-icon" />35%) increased damage and reduce the effectiveness of incoming heals and shields by 25%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 125,
    armor: 40,
    attackDamage: 90,
    attackSpeed: 60,
    criticalStrikeChance: 25,
    health: 350,
    healthRegen: 200,
    magicResistance: 40,
    mana: 350,
    manaRegen: 200,
    omnivamp: 15,
    percentMovespeed: 10
  }
}
export default item