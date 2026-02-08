// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Cannon Barrage',
  affects: 'Enemies',
  blurb: 'Active:  Gangplank orders a cannon bombardment to the target location, each blast deals magic damage and  slows enemies within.',
  castTime: '0.25',
  cooldown: '160 / 140 / 120',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '580',
  icon: 'https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/r',
  innerRadius: '170',
  notes: 'Gangplank\'s upgrades for Cannon Barrage are offered through the shop and additionally from a special menu in the HUD which is only visible while inside the shop\'s area. Within the special menu, the player can purchase an upgrade by  clicking on its portrait or via the Champion Specific Interaction hotkeys (default: Shift+F1:F3).\nPurchased upgrades have a trim around their portrait. Upgrades that he does not have enough currency to purchase are greyed out.\nCannon Barrage\'s slow lingers for 0.25 seconds after affected enemies leave the target area.\nIf an Attack order is issued and is being cycled through casting Cannon Barrage, and no other order is issued after casting it, Gangplank\'s next basic attack is delayed by 1 second.',
  resource: 'Mana',
  spellEffects: 'AOE',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: 'Global',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gangplank shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting sight of the area for the duration. Each wave deals magic damage to all enemies within the area and slows them by 30% for 0.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage Per Wave',
          modifiers: [
            {
              values: '40 / 70 / 100'
            },
            {
              unit: '% AP',
              values: '10'
            }
          ]
        },
        {
          attribute: 'Magic Damage Per Cluster',
          modifiers: [
            {
              values: '120 / 210 / 300'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '480 / 840 / 1200'
            },
            {
              unit: '% AP',
              values: '120'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Gangplank can purchase upgrades for his ship in the store at the cost of 500 Silver Serpents each, which improve Cannon Barrage:</span></p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Death\'s Daughter:</span> A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster\'s worth of true damage to enemies within the impact and slowing them by 75% for 1 second.</p>',
      leveling: [
        {
          attribute: 'True Damage with Death\'s Daughter',
          modifiers: [
            {
              values: '120 / 210 / 300'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        },
        {
          attribute: 'Total Mixed Damage with Death\'s Daughter',
          modifiers: [
            {
              values: '600 / 1050 / 1500'
            },
            {
              unit: '% AP',
              values: '150'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Fire at Will:</span> Cannon Barrage fires[ 6 additional waves ][ 2 additional clusters ] over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.</p>',
      leveling: [
        {
          attribute: 'Total Magic Damage with Fire at Will',
          modifiers: [
            {
              values: '720 / 1260 / 1800'
            },
            {
              unit: '% AP',
              values: '180'
            }
          ]
        },
        {
          attribute: 'Maximum Mixed Total Damage with Fire at Will and Death\'s Daughter',
          modifiers: [
            {
              values: '840 / 1470 / 2100'
            },
            {
              unit: '% AP',
              values: '210'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Raise Morale:</span> Cannon Barrage grants Gangplank and all allies within the area 40% bonus movement speed, lingering for 2 seconds.</p>'
    }
  ]
}
export default ability
