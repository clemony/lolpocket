// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3748,
  name: 'Titanic Hydra',
  nicknames: [
    'beefer',
    'juggernaut'
  ],
  description: '40 Attack Damage\n600 Health\n\nCleave\nAttacks deal physical damage on-hit and to enemies behind the target.\nTitanic Crescent\nEmpower your next Cleave to deal bonus physical damage On-Hit and deal bonus physical damage to enemies behind the target.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Titanic Crescent',
      cooldown: 10,
      effects: 'Your next basic attack within 10 seconds empowers <i>Cleave</i> to deal (<img src="/img/icons/melee.webp" class="inline-icon" />4% /<img src="/img/icons/ranged.webp" class="inline-icon" />2%) <b>maximum</b> health hp <b>bonus</b> physical damage to the primary target and (<img src="/img/icons/melee.webp" class="inline-icon" />9% /<img src="/img/icons/ranged.webp" class="inline-icon" />4.5%) <b>maximum</b> health hp physical damage to secondary targets (10 second cooldown, starts after using the empowered attack).',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3077,
      name: 'Tiamat',
      gold: 1200
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    }
  ],
  gold: {
    base: 50,
    sell: 2310,
    total: 3300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Cleave',
      effects: 'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />1% /<img src="/img/icons/ranged.webp" class="inline-icon" />0.5%) <b>maximum</b> health hp <b>bonus</b> physical damage to the target and (<img src="/img/icons/melee.webp" class="inline-icon" />3% /<img src="/img/icons/ranged.webp" class="inline-icon" />1.5%) <b>maximum</b> health hp physical damage to other enemies in a cone in the direction of the primary target.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 40,
    health: 600
  }
}
export default item