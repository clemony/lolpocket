// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3026,
  name: 'Guardian Angel',
  nicknames: [
    'ga'
  ],
  description: '55 Attack Damage\n45 Armor\n\nRebirth\nUpon taking lethal damage, restores 50% base Health and 100% max Mana after 4 seconds of Stasis.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 2019,
      name: 'Steel Sigil',
      gold: 1100
    },
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300
    }
  ],
  gold: {
    base: 800,
    sell: 1280,
    total: 3200
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Rebirth',
      effects: 'Upon taking lethal damage, enter <img src="/img/icons/resurrection.webp" class="tip-icon light:invert" />resurrection for 4 seconds, during which you are <img src="/img/icons/invulnerable.webp" class="tip-icon " />invulnerable, <img src="/img/icons/untargetable.webp" class="tip-icon " />untargetable, and unable to act, and afterwards <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal for 50% of <b>base</b> health and restore 100% of <b>maximum</b> mana (300 second cooldown, starts after resurrection ends).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 45,
    attackDamage: 55
  }
}
export default item