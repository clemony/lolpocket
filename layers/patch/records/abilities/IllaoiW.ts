// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Harsh Lesson',
  affects: 'Self',
  blurb: 'Active:  Illaoi\'s next basic attack gains  bonus attack range and causes her to  leap to her target, dealing bonus physical damage and commanding nearby Tentacles to attack the target.',
  castTime: 'none',
  cooldown: '4',
  cost: '30',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Illaoi\'s next basic attack within 6 seconds gains 225 bonus range and causes her to leap to the target\'s location if they\'re beyond her normal basic attack range.</p>'
    },
    {
      description: 'The attack deals bonus physical damage, with a minimum threshold, and capped at 300 against non-champions, and commands all Tentacles in range to attack the target. The minimum bonus damage can also be applied against turrets.',
      leveling: [
        {
          attribute: 'Bonus Physical Damage',
          modifiers: [
            {
              unit: '%  of target\'s maximum health',
              values: '3 / 3.5 / 4 / 4.5 / 5'
            },
            {
              unit: '% per 100 AD',
              values: '3.5'
            }
          ]
        },
        {
          attribute: 'Minimum Physical Damage',
          modifiers: [
            {
              values: '20 / 30 / 40 / 50 / 60'
            }
          ]
        }
      ]
    },
    {
      description: 'Harsh Lesson resets Illaoi\'s basic attack timer.'
    },
    {
      description: 'Harsh Lesson can be activated during Illaoi\'s other abilities.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/w',
  notes: 'Harsh Lesson cannot be cast while  pulling a Spirit. (note)\nThe bonus damage doesn\'t apply  life steal but it does apply  spell vamp and  Omnivamp.\nHarsh Lesson is made of two different abilities which are decided by Illaoi\'s range to the target, being either  melee or within  dash range.\nThe close range ability:\nHas an  uncancellable windup.\nCan be used while  grounded or  rooted. If Illaoi attack commands and then casts Harsh Lesson while rooted, she is able to use the close range version within its dash range. (bug)\nStarting the attack before triggering  Guardian Angel\'s passive and hitting while she\'s in it will not cause the Tentacles to slam. [18] (bug)\nThe attack will still hit if the target becomes  untargetable [19], but will not if it  dies. (note)\nTentacles will slam if the attack is  blocked [20], but not if it\'s  dodged [21] or if it  misses [22]. (note)\nIn all cases the bonus damage is prevented. (bug)\nDoes trigger  Hail of Blades.\nIf the empowered attack duration ends during the attack animation, the attack won\'t be empowered. [23] (note)\nAfter hitting the target, Illaoi can quickly cast other abilities.\nAbilities cannot be buffered during the windup.\nPENDING FOR TEST: The bonus damage and Tentacle commands is prevented by  spell shields. [24]\nThe dash range ability:\nDoes not have an uncancellable windup, meaning effects that can interrupt the dash will cancel the attack and put the ability on cooldown. [25]\nThat includes self effects, such as  Flash. [26] (note)\nCan be cast but cannot be used while  grounded or  rooted because Illaoi loses the  bonus attack range.\nThe attack will not hit if the target becomes  untargetable [27] (note), but does hit if it  dies. [28]\nTentacles will slam if the attack is  blocked,  dodged or if it  misses.\nThe bonus damage is dealt when the attack is  blocked or  dodged, but not if  misses.\nDoes not trigger  Hail of Blades. [29] (bug)\nIf the empowered attack duration ends during the dash, the buff will linger until the attack has finished.\nAfter hitting the target, Illaoi has a short delay before she can cast other abilities. [30] (note)\nAbilities can be buffered during the windup.\nPENDING FOR TEST: The bonus damage and Tentacle commands is prevented by  spell shields. [31]\nAttack speed will desync the animation from the dash. [32] (bug)\nIf the target dies at the instant Harsh Lesson is about to hit the target, for both the close and dash version of the ability, the attack will hit, be consumed, but will not make the Tentacles slam. [33] (bug)\nThe Tentacle attacking because of Harsh Lesson is considered to be of the same cast instance, and thus will not grant additional stacks of  Conqueror,  Electrocute,  Phase Rush and Tribute. (note)\nHarsh Lesson triggers  Bone Plating and one of its plates with the same attack. (note)\nIt also triggers  Arcane Comet and reduces its cooldown twice.\nWhile the ability is active, Tentacles are commanded to attack  on-hit, interacting with  Guinsoo\'s Rageblade without consuming the empowered attack. [34]',
  resource: 'Mana',
  spellEffects: 'spell',
  spellshieldable: 'false',
  targeting: 'Auto'
}
export default ability
