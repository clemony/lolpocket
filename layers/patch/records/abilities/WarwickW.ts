// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Blood Hunt',
  affects: 'Self / Enemies',
  blurb: 'Passive:  Warwick gains  attack speed against targets below 50% of their maximum health. Against champions, he also gains out of combat  movement speed. These bonuses are massively increased if the target is below 20% of their maximum health.',
  castTime: '0.5',
  cooldown: '80 / 70 / 60 / 50 / 40',
  cost: '55',
  effectRadius: '4000',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Warwick gains bonus attack speed for 1.25 seconds upon damaging a target to or while they are below 50% of their maximum health with a basic attack or ability damage, refreshing with subsequent damaging basic attacks or ability damage to enemies below the threshold. If Warwick does not have the bonus attack speed already, he also gains it upon initiating an attack windup against an enemy below the threshold.</p>',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '70 / 80 / 90 / 100 / 110'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Warwick senses all enemy champions on the map who are damaged below 50% of their maximum health by him or an allied source, marking them with Blood Hunt until they regenerate or heal above this threshold again. He sees trails leading toward them and gains bonus movement speed while following a trail. This bonus is lost for 0.5 seconds upon entering champion combat, but will build up again over 3.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '35 / 42.5 / 50 / 57.5 / 65'
            }
          ]
        }
      ]
    },
    {
      description: 'The attack speed and movement speed bonuses granted by both passives are doubled against enemies who are below 25% of their maximum health.',
      leveling: [
        {
          attribute: 'Increased Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '140 / 160 / 180 / 200 / 220'
            }
          ]
        },
        {
          attribute: 'Increased Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '70 / 85 / 100 / 115 / 130'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Warwick senses the nearest enemy champion in the area at the start of the cast time, marking them with Blood Hunt for 8 seconds, gaining both passive bonuses against them regardless of their current health.</p>'
    },
    {
      description: 'Blood Hunt\'s cooldown is reduced by 30% if no enemy champions are found within range.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/w',
  notes: 'The initiation of the attack windup to gain the bonus attack speed is only for gaining the bonus; it does not refresh the duration of the attack speed buff if Warwick has it already.\nIf Blood Hunt was cast with no enemy champions within range, the ability incurs its cast time then goes on cooldown without marking any target.\nAs mentioned by the description, Blood Hunt only marks enemy champions if they are damaged below the thresholds by an allied source. This includes Warwick himself, champions,  minions, and  turrets.\nThe only exception is the allied  Nexus Obelisk, because that deals  internalraw damage, which does not trigger damage-related events such as Blood Hunt\'s marking.\nNote that  monsters are neutral units.\nBlood Hunt can detect and target decoys.\nBlood Hunt will occur from wherever Warwick was at the start of the cast time.\nBlood Hunt has an indicator that appears above the target(s) when they are being hunted. Some skins have a unique indicator.\n\n\n\n Classic\n\n\n\n PROJECT\n\n\n\n Lunar Guardian\n\n\n\n Old God\n\n\n\n Winterblessed\n\n\n\n Prestige Winterblessed\n\n\n\n Arcane Vander\n\n\nSome of Warwick\'s  Chromas have a unique color variation:\n\n\n\n\n\n\n Ruby\n\n\n\n Citrine\n\n\n\n Emerald\n\n\n\n Sapphire\n\n\n\n Rose Quartz\n\n\n\n Obsidian\n\n\n\n Aquamarine\n\n\n\n Pearl\n\n\n\n Dark Ritual\n\n\n\n\n\n\n\n\n Paragon\n\n\n\nEditor\'s Note: It should be noted that as of right now, skins that use the  original\'s assets are all using a purple-blueish indicator that was undocumentedly introduced. It was possibly meant for color blind mode, based on the color. It is unknown whether the change was intentional or is a wrongly implemented feature.',
  resource: 'Mana',
  spellshieldable: 'False',
  targeting: 'Auto'
}
export default ability
