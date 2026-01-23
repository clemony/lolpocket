// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Carnivore',
  affects: 'Self',
  blurb: 'Innate: Whenever  Cho\'Gath kills an enemy, it  heals and restores  mana.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Cho\'Gath kills an enemy, it heals for 18 - 52 (based on level) and restores 4.72 - 9.48 (based on level) mana.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/p',
  notes: 'Carnivore will also trigger when Cho\'Gath destroys a  turret, but not from other structures.\nCarnivore does not trigger upon destroying  wards and possibly other similar units.\nIt does trigger upon killing a  Tentacle. [2]',
  targeting: 'Passive'
}
export default ability
