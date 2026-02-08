// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447123,
  name: 'Puppeteer',
  description: '30% Attack Speed\n15% Heal and Shield Power\n40 Ability Haste\n150% Base Mana Regen\n\nPull Their Strings \nAttacking a champion adds a stack for 15 seconds. At 4 stacks, Berserk them for 2 seconds. You grant Berserk enemies an additional  Attack Speed and 40% Move Speed. (25 second Cooldown).\n\nHealing, Shielding, or buffing yourself or an ally with an Ability reduces the Cooldown by 5 seconds.\n\nIf only one enemy is alive, instead Fear them for the same duration.',
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
      name: 'Pull Their Strings',
      effects: 'Basic attacks on-hit against enemy champions apply a <i>Puppeteer</i> stack for 15 seconds, stacking up to 4 times. The fourth stack against a target consumes them all to render the target <img src="/img/icons/berserk.webp" class="tip-icon " />berserk for 2 seconds, causing them to gain 50% as (+150% of your heal and shield power) <b>bonus</b> attack speed and 40% <b>bonus</b> movement speed (25 second cooldown). If only one champion is alive on the enemy team, instead <img src="/img/icons/fear.webp" class="tip-icon " />fear the target for the same duration.',
      mythic: false,
      unique: true
    },
    {
      effects: 'Granting yourself or an ally a <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal, <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield, or ability-sourced buff reduces the cooldown of <i>Pull Their Strings</i> by 5 seconds, once per cast.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 40,
    attackSpeed: 30,
    healAndShieldPower: 15,
    manaRegen: 150
  }
}
export default item