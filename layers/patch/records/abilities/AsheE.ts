// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Hawkshot',
  affects: 'Enemies',
  blurb: 'Active:  Ashe sends a hawk spirit to a location,  exposing the area along its path and a large area at its destination.',
  castTime: '0.25',
  cooldown: '5',
  cost: '0',
  effectRadius: '1000',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe sends a hawk spirit to a location, granting sight of the area along its path[ repeatedly for 0.5 seconds after every 100 units traveled ][ for effectively up-to 1.8 seconds at any location ]and at its destination for 5 seconds.</p>'
    },
    {
      description: 'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/e',
  notes: 'Hawkshot\'s recharge timer seems to start at the beginning of the game, even prior to ranking the ability, but upon actually ranking the ability, it starts with one charge and the recharge timer starts from 0.\nHawkshot will ping enemy champions it spots if allies didn\'t already have vision of them, and put a \'revealed\' visual effect on them for 2.75 seconds, but does not actually reveal the units in particular, and is removed if the champion leaves the area.\nAshe marks enemy champions who were previously unseen but were revealed Hawkshot in order to gain assist credit, lasting for the standard credit timer.\nHawkshot will trigger upon colliding with  Blade Whirl or  Wind Wall but not  Unbreakable.\nHawkshot will grant 0.33 points of vision score for each champion revealed.',
  projectile: 'SPECIAL',
  rechargeRate: '90 / 80 / 70 / 60 / 50',
  resource: 'Charge',
  speed: '1400',
  spellshieldable: 'false',
  targeting: 'Location',
  targetRange: 'Global'
}
export default ability
