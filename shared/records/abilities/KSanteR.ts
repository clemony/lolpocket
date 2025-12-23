// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "All Out",
  "affects": "Self, Enemies",
  "blurb": "Active:  K'Sante  roots an enemy and then shatters his tonfas,  knocking them back,  blinking behind them, and dealing physical damage. If the enemy is pushed into terrain, they will be knocked over it and take additional physical damage.",
  "castTime": "0.4",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "350 / 5000 / Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> K'Sante roots the target enemy champion for 0.5 seconds and gains displacement immunity over the cast time. He then shatters his ntofos, pulling the target to a location that is 300 units in the cast direction from their location at the time of cast, during which they are revealed, and blinking 175 units behind that location. The target is dealt physical damage near the end of the displacement and is stunned for 0.3 seconds once it ends.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150"
            }
          ]
        }
      ]
    },
    {
      "description": "If there is valid map-generated terrain 350 units in the cast direction from the target's location at the time of cast, the target is instead pulled to a location that is directly 450 units away from the edge of the other side of the terrain and K'Sante blinks 100 units behind that location, dealing them the physical damage near their emergence from the terrain. At the end of the displacement, they remain airborne for 0.264 seconds, after which they are stunned for 0.5 seconds. K'Sante strikes them after 0.132 seconds into the airborne duration to deal physical damage.",
      "leveling": [
        {
          "attribute": "Strike Physical Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150"
            },
            {
              "unit": "% of his bonus health",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "160 / 230 / 300"
            },
            {
              "unit": "% of his bonus health",
              "values": "5"
            }
          ]
        }
      ]
    },
    {
      "description": "After K'Sante blinks, he enters All Out for 15 seconds."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out:</span> K'Sante gains a health threshold equal to 65% maximum health which cannot be modified nor exceeded by any means. Upon entering All Out, his current health is reduced to this threshold if it is above it. Additionally, his base armor and base magic resistance are reduced by 85% bonus armor and 85% bonus magic resistance, respectively. In return, he gains bonus attack speed, 50% bonus-armor penetration, and 20% omnivamp, and modifies his basic abilities which can be cast at no cost.Upon entering All Out, K'Sante is restored to 100% maximum mana. His mana then decays to 0 over the duration of the buff, after which the amount of mana he had prior to entering All Out is restored.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 60 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "K'Sante retains his maximum health and bonus resistances during All Out. Health lost from gaining the health threshold is not restored after the effect ends. If the target is pulled over terrain that is longer than 2000 units, K'Sante will vanish during their displacement and reappear near the end of it."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/r",
  "notes": "All Out's cast has a  forgiveness radius of  50 units.\nIf the terrain behind the target is invalid by not having an opposite side, All Out will not trigger its additional effects from pulling the target over terrain.\nThe pull destination in this case would be inside terrain and thus the displacement would stop at the boundary.\nK'Sante will restore the exact amount of mana he had before going All Out after the buff expires.\nThe amount does not change even if his maximum mana changes during the effect.\nWhile the target is being  pulled over terrain, they are additionally  attached to a missile that travels in the same trajectory as the displacement, becoming detached afterwards.\nRemoving the  airborne debuff will not cause the target to detach from the missile.\nIf the target resists the  pull by having a  spell shield or being  immune to crowd control or  displacement immune, K'Sante will still blink beyond the pull's end location as if the target were displaced.\nK'Sante's strike at the end of the displacement when the target is pulled over terrain does not apply  Dauntless Instinct's mark.\nGoing All Out does not override K'Sante's attack or movement commands if the target does not collide with terrain.\nIf the target is however pulled through terrain then K'Sante will be ordered to  basic attack the target afterwards.\nThe percentage bonus armor penetration  stacks additively with other sources of percentage armor penetration.(note)\nSince K'Sante retains the stats he \"lost\", any effects that scale based on those stats will calculate based on the value prior to him going All Out.\nHis base resistances can be reduced below 0 by his bonus resistances.\nAll Out will not take into account resistances gained through % bonuses (eg.  Conditioning,  Mountainous Vigor, etc) when reducing K'Sante's base resistances.(bug)\n Jak'Sho, The Protean's Voidborn Resilience specifically is taken into account.\nGaining bonus health during All Out causes the health threshold to be briefly increased then reset back to its original value.\nThe bonus health is still applied to his current health.\nDuring All Out's cast and displacement, the target's camera is locked and centered on their champion.\nFor K'Sante, his camera centers on him at the start of the cast time, then once again at the end of the cast time at the location of his blink behind the target, and it is not locked.\nAll Out's granted  untargetability from the  vanish during the target's pull of over 2000 units does not  destroy in-flight  projectiles.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThe following table refers for interactions while K'Sante is in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while K'Sante is performing All Out's cast:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "spell",
  "spellshieldable": "true",
  "targeting": "unit",
  "targetRange": "300"
}
export default ability
