// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Gatling Gun',
  affects: 'Enemies',
  angle: '35°',
  blurb: 'Active:  Corki\'s gatling gun rapidly fires in a frontal cone, continually dealing physical damage and applying  stacks of Gatling Gun to enemies hit.',
  castTime: 'none',
  cooldown: '12',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Physical damage',
  effectRadius: '690',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing physical damage every 0.25 seconds to all enemies hit and applying a stack to them at the same tick rate for 2 seconds, refreshing with subsequent hits and stacking up to 4 times. Each stack reduces the target\'s armor and magic resistance.</p>',
      leveling: [
        {
          attribute: 'Physical Damage Per Tick',
          modifiers: [
            {
              values: '5 / 8.13 / 11.25 / 14.38 / 17.5'
            },
            {
              unit: '% bonus AD',
              values: '15'
            }
          ]
        },
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              values: '80 / 130 / 180 / 230 / 280'
            },
            {
              unit: '% bonus AD',
              values: '240'
            }
          ]
        },
        {
          attribute: 'Resistances Reduction Per Stack',
          modifiers: [
            {
              values: '3 / 3.5 / 4 / 4.5 / 5'
            }
          ]
        },
        {
          attribute: 'Total Resistances Reduction',
          modifiers: [
            {
              values: '12 / 14 / 16 / 18 / 20'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/e',
  notes: 'The maximum resistances reduction is applied after 4 ticks (1 second).\nThe direction of the gun firing changes depending on where Corki is facing.\nCorki will turn to face in the direction of the cursor upon casting Gatling Gun. He will also instantly turn when issuing an Attack order on enemies while Gatling Gun is active.\nIssuing an Attack Move order at a location will not cause Corki to instantly turn.(note)\nGatling Gun\'s area of effect can hit close by enemies next to and behind him, due to registering  enemies\' edge.',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'aoedot',
  spellshieldable: 'False',
  targeting: 'Auto'
}
export default ability
