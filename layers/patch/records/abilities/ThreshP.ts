// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Damnation',
  affects: 'Self',
  blurb: 'Innate:  Thresh\'s  armor does not increase by  leveling up.',
  effectRadius: '1900',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Thresh\'s armor does not increase through growth (per level).</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Enemy champions, large minions and large monsters that die near Thresh drop a Soul for 8 seconds. Epic monsters drop 2 Souls while lesser minions and monsters have a 33.3% chance to drop a Soul.</p>'
    },
    {
      description: 'Thresh automatically collects Souls near him or a placed Dark Passage.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Soul:</span> For each stack, Thresh gains 1 ability power and 1 bonus armor.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/p',
  notes: 'Souls grant a small area of  sight.\nSouls are visible to allies and only become visible to enemies if their team has  sight of Thresh.\nThe probability for souls dropping from small minions and monster on  Summoner\'s Rift starts at 33% but adjusts dynamically to match the expected quota of souls dropped (lowers if above, rises if below, remains if even). Souls collected are not considered when adjusting the probability.\n Nunu & Willump drop a soul each.',
  targeting: 'Passive'
}
export default ability
