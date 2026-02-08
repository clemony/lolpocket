// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447108,
  name: 'Runecarver',
  nicknames: [
    'energize'
  ],
  description: '80 Ability Power\n20 Ability Haste\n4% Move Speed\n\nHelix\nMoving, attacking, and dealing damage with an ability grants 30 Energized stacks and triggers Energized Attacks if it is ready.\n\nSpiral Out\nOn Energized Attack, gain a Rune stack for the rest of the round. Then fire a missile at the target for each Rune stack, dealing  magic damage.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Energized',
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      mythic: false,
      unique: true
    },
    {
      name: 'Helix',
      effects: 'Dealing damage with an ability generates 30 <i>Energize</i> stacks and triggers the effects of <img src="/img/icons/energized.webp" class="tip-icon " />Energized attacks if they are ready (2.5-second cooldown per cast instance).',
      mythic: false,
      unique: true
    },
    {
      name: 'Spiral Out',
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon " />Energized, your next basic attack generates a <i>Rune</i> stack and fires a missile at the target for each <i>Rune</i> stack you have, dealing 20 – 45 (based on level) magic damage (+11% <b>bonus</b> AD) (+8% AP) (+0.3 per 100 <b>bonus</b> health) magic damage with each missile. Stacks are reset every round and between each phase in a round.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    abilityPower: 80,
    percentMovespeed: 4
  }
}
export default item