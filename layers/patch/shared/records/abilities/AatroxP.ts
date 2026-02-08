// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Deathbringer Stance',
  affects: 'Self, Enemies',
  blurb: 'Innate: Periodically,  Aatrox\'s next  basic attack deals bonus magic damage based on the target\'s maximum health,  healing him for the damage dealt.',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/p',
  notes: 'Aatrox will assume stance when an enemy champion is in range of  Infernal Chains.\nThe toggle expression (default CTRL + 5) switches between stances manually.\nIf Deathbringer Stance becomes available during a standard attack\'s windup, it will not be consumed or trigger the bonus damage.\nEven if the ability hit is  spell shielded Deathbringer Stance\'s cooldown will still be reduced.\nThis ability goes on cooldown on death and refreshes upon respawn.\nThe empowered attack will not trigger against  structures and  wards.',
  spellEffects: 'proc',
  spellshieldable: 'False',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Aatrox empowers his next basic attack to gain 50 bonus range and deal bonus magic damage equal to 4% - 8% (based on level) of the target\'s maximum health, capped at 100 - 320 (based on level) against monsters. Deathbringer Stance\'s damage applies life steal.Aatrox heals for the post-mitigation bonus damage dealt, reduced to 25% against minions.</p>'
    },
    {
      description: 'Whenever Aatrox hits at least one enemy champion or large monster with a basic attack on-hit or an ability, Deathbringer Stance\'s current cooldown is reduced by 2 seconds, doubled to 4 if he hits with the Sweetspot of The Darkin Blade.'
    }
  ]
}
export default ability
