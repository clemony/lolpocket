// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Carnivore',
  affects: 'Self',
  blurb: 'Innate: Whenever  Cho\'Gath kills an enemy, it  heals and restores  mana.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/p',
  notes: 'Carnivore will also trigger when Cho\'Gath destroys a  turret, but not from other structures.\nCarnivore does not trigger upon destroying  wards and possibly other similar units.\nIt does trigger upon killing a  Tentacle. [2]',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Cho\'Gath kills an enemy, it heals for 18 - 52 (based on level) and restores 4.72 - 9.48 (based on level) mana.</p>'
    }
  ]
}
export default ability
