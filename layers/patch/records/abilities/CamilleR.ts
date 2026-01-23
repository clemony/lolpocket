// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'The Hextech Ultimatum',
  affects: 'Enemies, Self',
  blurb: 'Active:  Camille  dives onto an enemy champion, creating a zone around the target and  knocking away all other enemies.',
  castTime: 'none',
  cooldown: '140 / 115 / 90',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '425',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Camille becomes untargetable and leaps with displacement immunity towards the target enemy champion over 0.5 seconds, revealing them for the duration and disrupting their ongoing channels.</p>'
    },
    {
      description: 'Upon landing on the target, she becomes targetable again and creates a hexagonal zone around her current location for a duration, knocking away all other nearby enemies on impact, though not through terrain.',
      leveling: [
        {
          attribute: 'Zone Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '2.5 / 3.25 / 4'
            }
          ]
        }
      ]
    },
    {
      description: 'The target cannot escape the zone through any means. While within the zone, Camille\'s basic attacks against the target deal bonus magic damage.',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              unit: '% of target\'s current health',
              values: '4 / 6 / 8'
            }
          ]
        }
      ]
    },
    {
      description: 'The Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/r',
  notes: 'Camille will attempt to basic attack the target upon landing.\nCamille will track the target if they change locations.\nShe will always land and create the zone after 0.5 seconds.\nIf the target becomes  untargetable,  dies, or moves 2000 or more units away during the dash, it will be interrupted and the ability\'s  cooldown and  mana cost will not be refunded.\n Knockaway speed is 1000.\nIf the target manages to be outside of the boundaries, they will immediately be pulled back towards the center of the hexagon.\nThe boundaries are not considered terrain ( Unstoppable Onslaught exception), and enemies that try to move out of the area will be displaced back inside.\n Dashes,  blinks,  displacements, and other forms of movement will cap their effect range to the boundary. Targets will stop at the boundary even after it expired.\n Ekko\'s  Chronobreak will still deal damage at the hologram\'s location.\nAn active  Cease and Desist on a target outside the perimeter will cause  Vi to continue her charge until The Hextech Ultimatum ends. She can knockback and damage secondary targets multiple times.\nIf the target  attaches to a unit, they will only be displaced back inside once they detach. The Hextech Ultimatum does not end nor break the bind to the victim.\n Kayn\'s  Umbral Trespass allows him to cast it even if his target is outside the area, dashing through the borders and attaching despite being unable to escape.\n Yuumi\'s  You and Me! allows her to bypass the borders if the unit she attaches to leaves the area.\n Tristana\'s  Rocket Jump does not allow her to escape, but she applies the magic damage and  slow.\n Sett\'s  The Show Stopper does not allow him to pass through the borders and the dash will end prematurely when he encounters them.\nIf the target of  The Show Stopper is also the target of The Hextech Ultimatum, they can go through the borders while attached to him.\nIf Camille enters  resurrection during the initial cast, the  dash is stopped and the zone is formed immediately.\nThe Hextech Ultimatum ends if the target enters resurrection, but not if Camille does.\nThe Hextech Ultimatum ends immediately if the target is dragged by  Fear Beyond Death.\nThe  disrupt is \'wrapped\' into a status effect that causes the affected champion to display the " Silenced" UI on their health bar for 0.25 seconds, without actually applying the disabling effects of the  silence crowd control type (functions as an indicator of the target becoming disrupted). This however ensures that the disrupt is also prevented by effects that would negate  silences (such as  crowd control immunity).\nThe following table refers for interactions while Camille is dashing.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  resource: 'Mana',
  spellEffects: 'Proc',
  spellshieldable: 'true',
  targeting: 'Unit',
  targetRange: '475'
}
export default ability
