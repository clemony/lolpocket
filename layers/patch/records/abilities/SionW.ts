// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Soul Furnace',
  affects: 'Self, Enemies',
  blurb: 'Passive:  Sion gains  bonus health whenever he kills an enemy, increased against large enemies and  champion  takedowns.',
  castTime: 'none',
  cooldown: '15 / 14 / 13 / 12 / 11',
  cost: '65 / 70 / 75 / 80 / 85',
  damageType: 'Magic damage',
  effectRadius: '525',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Sion gains 4 bonus health whenever he kills an enemy, increased to 15 for large enemies and takedowns against enemy champions.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sion grants himself a shield that lasts for up to 6 seconds. Soul Furnace can be recast after 3 seconds while the shield holds, and does so automatically at the end of the duration.</p>',
      leveling: [
        {
          attribute: 'Shield Strength',
          modifiers: [
            {
              values: '60 / 75 / 90 / 105 / 120'
            },
            {
              unit: '% AP',
              values: '40'
            },
            {
              tooltip: 'Scaling per rank:\n8 / 10 / 12 / 14 / 16% maximum health',
              unit: '% maximum health',
              values: '8 - 16'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Sion consumes the shield to deal magic damage to nearby enemies, capped at 400 against minions and monsters.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '40 / 65 / 90 / 115 / 140'
            },
            {
              unit: '% AP',
              values: '40'
            },
            {
              unit: '% of target\'s maximum health',
              values: '14'
            }
          ]
        }
      ]
    },
    {
      description: 'Both of Soul Furnace\'s casts can be activated during Sion\'s other abilities.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/w',
  notes: 'A buff icon in the HUD will show the current shield strength, so that the player can better calculate the timing of the second cast.\nThe initial shown value does not interact with  shield strength modifiers. Whenever the shield takes damage, it updates to the proper current shield amount, however.\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDetonating the ability manually does not.\nGaining or losing AP or health, or ranking up the skill while the shield is active will not change its shield value but it will change the damage of the shield\'s detonation.\nThe cooldown of Soul Furnace begins once the shield is removed.\nGaining or losing  ability haste between the first cast and breaking of the shield will affect the resuming cooldown accordingly.\nSoul Furnace also automatically detonates if Sion is killed without the shield being destroyed, e.g. by dying to the  Nexus Obelisk, even if Sion could not have detonated it manually yet.\nSoul Furnace\'s bonus health can be obtained by any of Sion\'s damage sources (basic attacks, abilities, summoner spells, item actives).\nThis does not include last hits transferred to Sion artificially.\nIf the gold efficiency of a  Ruby Crystal is considered 100%, each last hit or  takedown after Soul Furnace has been learned can be considered worth an extra  10.6 or  40g, respectively.\nSion must learn Soul Furnace before he can stack up its passive.\nSion does not gain bonus health from units that enter  resurrection on-death.\nKilling the following unit types grants Sion 15 bonus health:\n Champions (kills and assists)\n Large minions and  large monsters (including both summoned and pit  Rift Herald)\n Large pets - Explicitly  Tibbers,  Daisy and  The Maiden\nKilling the following unit types grants Sion 4 bonus health:\n Minions and  small monsters, with the exceptions of those listed in the below category\n Wards and other champion summoned units (e.g.  Noxious Trap,  Powder Keg,  Dark Procession)\nAll  pets, with the exceptions of those listed in the above and below categories\n Clones\nKilling the following unit types grants Sion no bonus health:\n Turrets (including  Sun Disk) and other structures\nJungle plants (destroying which does not grant kill credit).\n Voidmites (including both summoned and pit  Voidmites)\nUnits destroyed by \'trampling\' such as  Zyra\'s  seeds,  Zac\'s  goo or  Rek\'Sai\'s  tunnels.',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Auto'
}
export default ability
