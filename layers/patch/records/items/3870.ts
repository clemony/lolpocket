// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3870,
  name: 'Dream Maker',
  nicknames: [
    'Plushie',
    'plushie'
  ],
  active: [
    {
      name: 'Ward',
      effects: 'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area. Charges refill upon visiting the shop.',
      range: 600,
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3867,
      name: 'Bounty of Worlds',
      gold: 400
    }
  ],
  description: '200 Health\n75% Base Health Regen\n75% Base Mana Regen\n9 Gold Per 10 Seconds\n\nDream Maker\nHealing or Shielding another ally blows Dream Bubbles to them for 3 seconds. Their next Attack deals bonus magic damage On-Hit and the next damage they take is reduced.Active (4 charges)\nPlaces an Invisible Stealth Ward that grants vision.',
  gold: {
    base: 0,
    sell: 160,
    total: 400
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Dream Maker',
      effects: 'Every 8 seconds, you gain a <i>Blue Dream Bubble</i> and a <i>Purple Dream Bubble</i>. Granting a <img src="/img/icons/heal.webp" class="tip-icon" />heal or <img src="/img/icons/shield.webp" class="tip-icon" />shield to an allied champion <i>(excluding yourself)</i> causes you to blow both of your <i>Dream Bubbles</i> to them, empowering them for 3 seconds. The <i>Blue Bubble</i> reduces the next instance of non-<img src="/img/icons/minion.webp" class="tip-icon" />minion damage they take by 75 – 255 (based on your level) and the <i>Purple Bubble</i> grants them 50 – 170 (based on your level) <b>bonus</b> magic damage on-hit on their next basic attack.',
      mythic: false,
      unique: true
    },
    {
      effects: 'Receives diminishing gold from excessive minion kills.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  }
}
export default item