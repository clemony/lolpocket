// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3866,
  name: 'Runic Compass',
  active: [
    {
      name: 'Ward',
      effects: 'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area. <b>Warding</b> charges refill upon visiting the shop.',
      range: 600,
      unique: true
    }
  ],
  description: '100 Health\n50% Base Health Regen\n50% Base Mana Regen\n5 Gold Per 10 Seconds\n\nSupport Quest\nEarn 0 gold from this item to transform it into Bounty of Worlds. \n\nShared Riches (0s, max 0 charges)\nWhile near an ally champion, damage enemy champions or kill minions to gain gold.Active (3 charges)\nPlaces an Invisible Stealth Ward that grants vision.',
  gold: {
    base: 400,
    purchasable: false,
    sell: 160,
    total: 400
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Support Quest',
      effects: 'Earn <img src="/img/icons/gold-coin.webp" class="inline-icon" />800 through <i>Shared Riches</i> to automatically upgrade to <img src="/img/icons/bounty-of-worlds.webp" class="tip-icon" />Bounty of Worlds, increasing the <i>Ward</i> active to instead have 4 wards in stock.',
      mythic: false,
      unique: true
    },
    {
      name: 'Shared Riches',
      effects: 'Grants a <b>Shared Riches</b> charge every 20 seconds, up to 3 charges. When an allied champion is within 1050 units of you, consume a charge in the following ways:<br>• Kill a minion by any means, granting you <img src="/img/icons/gold-coin.webp" class="inline-icon" />20 and the nearest allied champion kill <img src="/img/icons/gold-coin.webp" class="inline-icon" />gold. Damaging a minion <b>below</b> (<img src="/img/icons/melee.webp" class="inline-icon" />50% /<img src="/img/icons/ranged.webp" class="inline-icon" />30%) of its <b>maximum</b> health with a basic attack will <img src="/img/icons/execute.webp" class="tip-icon" />execute it, if any charges are available.<br>• Damage an enemy champion or structure with a basic attack or ability, granting you <img src="/img/icons/gold-coin.webp" class="inline-icon" />(<img src="/img/icons/melee.webp" class="inline-icon" />24 /<img src="/img/icons/ranged.webp" class="inline-icon" />22). A charge may be consumed this way only once per attack or ability.',
      mythic: false,
      unique: true
    },
    {
      effects: 'Receives diminishing gold from excessive minion kills.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 3865,
  stats: {
    goldPer10: 5,
    health: 100,
    healthRegen: 50,
    manaRegen: 50
  }
}
export default item