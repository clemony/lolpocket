// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Ixtal\'s Impact',
  blurb: 'Active:  Skarner charges in the target direction for a duration while ignoring terrain collision and gaining  ghosting and  slow immunity. He starts slowly but ramps up in  movement speed over the course of the charge, and is able to steer himself increasingly fast when keeping the same direction. Ixtal\'s Impact can be recast after 1 second, and does so automatically after the duration.',
  castTime: 'none',
  collisionRadius: '160',
  cooldown: '22 / 21 / 20 / 19 / 18',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/e',
  notes: 'While Ixtal\'s Impact is active, Skarner\'s movement speed is set to a static amount that cannot change by any means other than by the ability itself.\nAny movement speed modifiers gained before or during the charge are retained however, and will take effect after the charge if the duration permits.\nThe bonus movement speed from grabbing a target is 300 only if Skarner\'s movement speed was between 350 and 850 at the time.\nIf Skarner was at less than 350 movement speed when he grabbed the target, his total movement speed is instead set to 650. If he was at 950 movement speed, his total movement speed is set to the cap of 1150.\nSkarner gains a slightly larger field of view during Ixtal\'s Impact\'s charge.\nIxtal\'s Impact\'s attachment depends on the application of the  suppression; if the suppression is not applied, neither is the attachment. Similarly, if the suppression is removed, so is the attachment.\nIf the target resists the suppression through  total crowd control immunity,  displacement immunity, or a  spell shield. Skarner will not attach them to himself, causing the charge to end instantly. The collision\'s damage is special-cased to still apply to a target under these effects (excluding spell shield) immediately upon contact. The collision\'s cooldown reduction is also still applied.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will detach themselves from Skarner immediately which forces the charge to end instantly and not apply any damage.\nSkarner can move up to 550 units beyond the outer-edge of the battlefield with the charge.\nOnce he has surpassed this boundary, Ixtal\'s Impact ends immediately and Skarner is moved to the nearest valid space.\nIxtal\'s Impact can interact with player-generated terrain.\nIf Skarner is inside terrain when the effect ends, he will be moved to the nearest valid space.\nEnemies cannot see Skarner while he is inside terrain, unless they grant sight into the area of terrain he is inside (such as with  Hawkshot or  Heightened Senses) or have  unobstructed vision.\nHowever, enemies will be notified when Skarner is inside nearby terrain while within a certain distance of him. An indicator will be visible to the enemy player\'s perspective to represent this.\nThe following table refers for interactions while Skarner is charging:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nA special indicator for Ixtal\'s Impact\'s direction and expected ending location is visible to Skarner only during his charge.',
  resource: 'Mana',
  spellEffects: 'spell',
  spellshieldable: 'true',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Skarner charges forward in the direction of the cursor for up to 2.75 seconds, during which he gains slow immunity, becomes ghosted, ignores terrain collision, and has unobstructed vision of the surrounding 650 units. He automatically navigates his movement along the way and is able to steer himself with a slow turn rate that increases over time, resetting upon changing direction. Ixtal\'s Impact can be recast after 1 second, and does so automatically after the duration.</p>'
    },
    {
      description: 'Skarner begins the charge at a static amount of 150 movement speed that increases by 100 every 0.264 seconds, up to 950 total movement speed by the end of the duration. If Skarner collides with an enemy champion or large monster, he grabs them with his claws for the time of the remaining charge, attaching them to himself, suppressing them, revealing them, increasing the charge\'s turn rate to the maximum, and gaining 300 bonus movement speed, with a minimum total of 650 and a maximum total of 1150. If a target has been grabbed before the first 1.75 seconds of the charge, the remaining duration is set to 1 second, and set to 0.5 seconds otherwise. The charge does not ramp up in speed while a target is grabbed.'
    },
    {
      description: 'If Skarner\'s attached target collides with terrain, the charge ends, detaching them from him, dealing physical damage, stunning them for 1.1 seconds, and reducing Ixtal\'s Impact\'s cooldown by 35%.',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '30 / 60 / 90 / 120 / 150'
            },
            {
              unit: '% bonus AD',
              values: '120'
            },
            {
              unit: '% of his maximum health',
              values: '6'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Skarner ends Ixtal\'s Impact. If a target has been grabbed, he detaches them from himself.</p>'
    },
    {
      description: 'Ixtal\'s Impact ends immediately if Skarner becomes immobilized or grounded, or is affected by any form of cast-inhibiting crowd control, during the charge. The grabbed target is detached if this occurs. While the target is grabbed, they are attached to Skarner 200 units in front of him.'
    }
  ]
}
export default ability
