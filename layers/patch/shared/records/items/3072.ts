// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3072,
  name: 'Bloodthirster',
  nicknames: [
    'bt',
    'healsword'
  ],
  description: '80 Attack Damage\n15% Life Steal\n\nIchorshield\nConvert excess healing from your Lifesteal to a Shield.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900
    }
  ],
  gold: {
    base: 325,
    sell: 2380,
    total: 3400
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Ichorshield',
      effects: 'Convert the <img src="/img/icons/healing.webp" class="tip-icon " />healing received from <img src="/img/icons/life-steal.webp" class="tip-icon" />life steal in excess of <b>maximum</b> health into a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield for up to 165 – 315 (based on level), which lasts until destroyed.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 80,
    lifesteal: 15
  }
}
export default item