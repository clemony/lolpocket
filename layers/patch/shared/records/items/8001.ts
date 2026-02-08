// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 8001,
  name: 'Anathema\'s Chains',
  description: '650 Health\n20 Ability Haste\n\nVendetta\nYou gain Vendetta stacks over time Each stack of Vendetta grants you 1% reduced damage from your Nemesis.\n\nVengeance\nAt maximum stacks, your Nemesis has reduced Tenacity while near you.\n\nACTIVE (0s)\nVow\nChoose a Nemesis.',
  gold: {
    base: 800,
    purchasable: false,
    sell: 1750,
    total: 2500
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item