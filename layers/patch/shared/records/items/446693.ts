// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 446693,
  name: 'Prowler\'s Claw',
  nicknames: [
    'lethality'
  ],
  description: '60 Attack Damage\n20 Lethality\n20 Ability Haste\n\nSandswipe\nDash through target enemy, dealing a part of the target\'s maximum Health as bonus Physical Damage. For the next 3 seconds, you deal increased damage to the target.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  active: [
    {
      name: 'Sandswipe',
      effects: '<img src="/img/icons/dash.webp" class="tip-icon " />Dash to 150 units beyond the target enemy champion\'s location, and upon completing the dash, deal 12% (+5% per 100 <b>bonus</b> AD) of target\'s <b>maximum</b> health <b>bonus</b> physical damage to the target. You then deal 20% increased damage to the target for the next 3 seconds.',
      range: 0,
      unique: true
    }
  ],
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    lethality: 22
  }
}
export default item