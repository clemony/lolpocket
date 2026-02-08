// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 420,
  key: 'Illaoi',
  name: 'Illaoi',
  title: 'The Kraken Priestess',
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  patchLastChanged: '25.18',
  releaseDate: '2015-11-24',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Prophet of an Elder God',
      affects: 'Enemies',
      blurb: 'Innate: Periodically, a Tentacle will spawn next to nearby terrain. It can be killed by enemy basic attacks and will become dormant if  Illaoi leaves it alone.',
      damageType: 'Physical damage',
      effectRadius: '1000',
      icon: 'https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/p',
      notes: 'Illaoi cannot spawn Tentacles on ally invulnerable  structures [6] (note), in addition to neither her nor the Vessel being able to spawn them in Nexus Obelisk\'s attack range.\nEven after Nexus turrets have lost their invulnerability, Illaoi still has issues spawning Tentacles on them (probably because of the nearby invulnerable Nexus). [7] (bug)\nTentacles are prevented from spawning on base gates.\nIf multiple Tentacles hit simultaneously, the received healing is calculated iteratively based on the new amount of missing health, as per this formula: (maximum health − current health) × (1 − 0.95n), with \'n\' the number of Tentacle hits.\nA slam that extends the damage reduction window to reduce the damage of a successive slam that would otherwise not have been reduced, can have its contribution of damage effectivelly negated or even outweighted by the window extension. For example, a slam reduced to 25% damage may be the cause of a successive slam being reduced from 100% to 50% damage - reducing the damage by 50% with only a contribution of 25%. [8] [9] (bug)\nThe expectation would instead be for slam damage to follow the formula (200% − damage% of slams in the last 0.66s) ÷ 2, which would result in the successive slam from the above example to be reduced from 100% to 87.5% damage - reducing the damage by 12.5% with a contribution of 25%.',
      projectile: 'FALSE',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Illaoi spawns a Tentacle on the nearest terrain, if no other Tentacle is around it. Tentacles fully spawn after a 2 second delay and are untargetable in the meantime.</p>'
        },
        {
          description: 'Tentacles are commanded to attack by Illaoi\'s abilities, dealing 9 - 162 (based on level) (+ 110% AD) (+ 40% AP) physical damage to all enemies struck, increased by 0% - 30% (based on Tentacle Smash\'s rank).Each enemy individually reduces the slam damage by 50% for every slam they were hit by in the last 0.66 seconds, capped at 75% less damage.'
        },
        {
          description: 'Each Tentacle also heals Illaoi for 5% of her missing health if it hits at least one enemy champion.'
        },
        {
          description: 'See Pets for more details about Tentacles.'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Tentacle Smash',
      width: '200',
      affects: 'Enemies',
      castTime: '0.75',
      cooldown: '10 / 9 / 8 / 7 / 6',
      cost: '40 / 45 / 50 / 55 / 60',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/q',
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nTentacle Smash\'s hitbox is fixed in front of Illaoi, while the indicator on the ground is fixed to the targeted direction.\nFor allied  Original Illaoi and  Void Bringer Illaoi skin, Tentacle Smash\'s indicator is further in front of Illaoi compared to an enemy Illaoi\'s and other skins (with the hitbox unchanged). [4] (bug)\n Conqueror will pre-emptively amplify Tentacle Smash\'s damage by the generated Conqueror stack. (note)\nPENDING FOR TEST: Only Tentacle Smash or also  Prophet of an Elder God attacks?\nPENDING FOR TEST: The self-reveal has not been fully tested for complete confirmation. Is the ability invisible when hitting minions and there is no enemy champion nearby? Is the tip of the ability enough to reveal her? Whether it can hit a minion or not? Just if she\'s around the exit of the fog of war, and even if she points towards the inside of the fog of war? [5]\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Test of Spirit and  Leap of Faith are buffered.  Harsh Lesson is usable.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Tentacle damage is increased.</p>',
          leveling: [
            {
              attribute: 'Damage Increase',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 15 / 20 / 25 / 30'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Illaoi slams down a Tentacle in the target direction.</p>'
        },
        {
          description: 'Illaoi reveals herself during the cast if there is an enemy champion nearby.'
        }
      ]
    },
    {
      key: 'W',
      name: 'Harsh Lesson',
      affects: 'Self',
      blurb: 'Active:  Illaoi\'s next basic attack gains  bonus attack range and causes her to  leap to her target, dealing additional physical damage and commanding nearby Tentacles to attack the target.',
      castTime: 'none',
      cooldown: '4',
      cost: '30',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/w',
      notes: 'Harsh Lesson cannot be cast while  pulling a Spirit. (note)\nThe additional damage doesn\'t apply  life steal but it does apply  spell vamp and  Omnivamp.\n Spell shield prevents Tentacle commands but does not prevent the additional damage. [18] [19]\nHarsh Lesson is made of two different abilities which are decided by Illaoi\'s range to the target, being either  melee or within  dash range.\nThe close range ability:\nHas an  uncancellable windup.\nCan be used while  grounded or  rooted. If Illaoi attack commands and then casts Harsh Lesson while rooted, she is able to use the close range version within its dash range. (bug)\nStarting the attack before triggering  Guardian Angel\'s passive and hitting while she\'s in it will not cause the Tentacles to slam. [20] (bug)\nThe attack will still hit if the target becomes  untargetable [21], but will not if it  dies. (note)\nTentacles will slam if the attack is  blocked [22], but not if it\'s  dodged [23] or if it  misses [24]. (note)\nIn all cases the additional damage is prevented. (bug)\nDoes trigger  Hail of Blades.\nIf the empowered attack duration ends during the attack animation, the attack won\'t be empowered. [25] (note)\nAfter hitting the target, Illaoi can quickly cast other abilities.\nAbilities cannot be buffered during the windup.\nThe dash range ability:\nDoes not have an uncancellable windup, meaning effects that can interrupt the dash will cancel the attack.\nUnlike other empowered basic attacks, an interrupt will still cause the buff to be consumed and the ability to be put on cooldown. [26]\nThat includes self effects, such as  Flash. [27] (note)\nCan be cast but cannot be used while  grounded or  rooted because Illaoi loses the  bonus attack range.\nThe attack will not hit if the target becomes  untargetable [28] (note), but does hit if it  dies. [29]\nTentacles will slam if the attack is  blocked,  dodged or if it  misses.\nThe additional damage is dealt when the attack is  blocked or  dodged, but not if  misses.\nDoes not trigger  Hail of Blades. [30] (bug)\nIf the empowered attack duration ends during the dash, the buff will linger until the attack has finished.\nAfter hitting the target, Illaoi has a short delay before she can cast other abilities. [31] (note)\nAbilities can be buffered during the windup.\nAttack speed will desync the animation from the dash. [32] (bug)\nIf the target dies at the instant Harsh Lesson is about to hit the target, for both the close and dash version of the ability, the attack will hit, be consumed, but will not make the Tentacles slam. [33] (bug)\nThe Tentacle attacking because of Harsh Lesson is considered to be of the same cast instance, and thus will not grant additional stacks of  Conqueror,  Electrocute,  Phase Rush and Tribute. (note)\nBecause of the damage being additional, Harsh Lesson triggers  Bone Plating and one of its plates with the same attack.\nIt also triggers  Arcane Comet and reduces its cooldown twice.\nWhile the ability is active, Tentacles are commanded to attack  on-hit, interacting with  Guinsoo\'s Rageblade without consuming the empowered attack. [34]',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'Special',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Illaoi empowers her next basic attack within 6 seconds to gain 225 bonus range and cause her to leap to the target\'s location if they are beyond her normal basic attack range.</p>'
        },
        {
          description: 'The attack deals additional physical damage, with a minimum threshold, and capped at 300 against non-champions, and commands all Tentacles in range to attack the target. The minimum additional damage can also be applied against turrets.',
          leveling: [
            {
              attribute: 'Additional Physical Damage',
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
      ]
    },
    {
      key: 'E',
      name: 'Test of Spirit',
      width: '100',
      affects: 'Enemies',
      blurb: 'Active:  Illaoi reaches with a tendril in the target direction that stops upon the first enemy hit. If the target is a  champion, she rips their Spirit out from them to stand before her.',
      castTime: '0.25',
      cooldown: '16 / 15 / 14 / 13 / 12',
      cost: '35 / 40 / 45 / 50 / 55',
      damageType: 'Mixed damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/e',
      notes: 'PENDING FOR TEST: The self-reveal has not been fully tested for complete confirmation. Is the ability invisible when passing nearby minions and there is no enemy champion nearby? Is the tip of the ability enough to reveal her? Whether it can collide with a minion or not? Just if she\'s around the exit of the fog of war, and even if she points towards the inside of the fog of war? [24]\nSpirits are classified as  clones:\nSpirits can only be fully targeted by Illaoi\'s team and neutral monsters. The Spirit\'s allies cannot manually select it as a valid target for spells and abilities, but they can still do so with automatically targeted effects. (note)\nSpirits take 50% damage from turrets. (note)\nEffects, like runes, may consider the Spirit as a champion for their stat-tracking. (note)\nSpirits cannot be  healed nor  shielded ( Summon Aery excluded).\nThe Spirit levels up when the Vessel does, gaining the target\'s stats per level. If the target has a resource that also increases per level (i.e  mana), the Spirit\'s lifetime will increase instead. (bug)\nLike other clones, killing the Spirit awards  25, but unlike other clones it doesn\'t award  Experience. (note)\nThe Spirit\'s destination is decided based on Illaoi\'s position and facing direction when the target is hit.\nThe Spirit is  untargetable while it is being pulled, and spawns with the tethered champion\'s default model and size. [25]\nThe Spirit\'s lifetime is sometimes 0.25 seconds longer, while its untargetability is sometimes shorter, potentially causing Tentacles to hit an inconsistent amount of times, as was easily the case pre V25.15. [26] (bug)\nRedirected damage is calculated by taking the pre-mitigation damage against the Spirit, applying Test of Spirit\'s damage modifier, and then capping it to the Spirit\'s current health. This damage will then be affected by damage modifiers (resistances and other effects) of the Vessel.\nThis order of operations allows Test of Spirit to deal more or less percentage of the Vessel\'s health than would be expected:\nBecause the Spirit\'s modifiers can be different from the Vessel\'s, allowing the Spirit to have higher or lower effective health, respectively increasing or decreasing the maximum pre-mitigated damage from killing it.\nBecause, while it would be expected to block excess pre-mitigated damage over what kills the Spirit, since the cap does not consider the Spirit\'s damage modifier, it may cause it to block damage before the Spirit is killed [27], or in corner cases not block excess damage even if it is killed. On the other hand, Test of Spirit\'s damage modifier is unexpectedly applied before the cap instead of after, with the same effect of potentially causing the cap to not block excess damage even if the Spirit is killed, or in corner cases block damage before it is killed.\nThe addition of the two, causes an increasing difference of expected damage when the pre-mitigated damage is between Spirit current health ÷ Spiritmod and Spirit current health ÷ Emod. (bug)\nIllaoi needs 937.5 / 875 / 812.5 / 750 / 687.5 total AD to reach 100% redirected damage. As per above, the damage is still dependent on the Spirit\'s and Vessel\'s damage modifiers and may not always be able to deal 100% of the target\'s current health as total redirected damage.\n Spell shields may only prevent the initial spirit grab and the slow upon becoming a Vessel. Spell shields will not prevent becoming a Vessel or Tentacles from attacking.\nThe tendril can be blocked by  projectile-destroying effects (e.g.  Yasuo\'s  Wind Wall).\nIt will only be destroyed and not replicated against  Mel\'s  Rebuttal.\nThe application of the  slowing missile cannot be blocked by  projectile- destroying effects (e.g.  Yasuo\'s  Wind Wall).\nEffects that  destroy homing missiles (i.e certain  untargetabilities) will prevent the application of the  slowing missile.\nThe slowing missile will not be fired if the target is already  untargetable when the Spirit dies.\nThe spirit pull is not considered a  crowd control effect and will not be blocked by  crowd control immunity, with the exception of  Morgana\'s  Black Shield.(note)\nThe projectile tentacle model is linked to Illaoi\'s model animation and size. However gameplay wise it is not, thus the actual hitbox being different than the position, width and length of the visible model. [28] (bug)\nThe model will stop mid-air / vanish if Illaoi goes into  stasis,  sleep or  airborne, however the actual hitbox will continue its trajectory unseen. [29]\nThis ability will cast from wherever the caster is at the end of the cast time.\nAnd will fire towards the same pointed location.\nIf the target\'s health is reduced to 0 while their Spirit is being pulled out, and they do not  die (i.e because of  resurrection), then the Spirit will still spawn with 0 health, making it  invulnerable. The target will successively become a Vessel when the Spirit\'s lifetime expires. [30] (bug)\nIf some effect regenerates the champion\'s health while they are resurrecting, and before the Spirit spawns, then the same will not apply. [31] [32]\nGrabbing the Spirit of  Viego will make the Spirit\'s lifetime (the white bar below the lifebar) disappear, similar to other cases in the past. [33] (bug)\nPENDING FOR TEST: Post V12.8, does grabbing the Spirit of an  Oathsworn make the Spirit invisible? [34]\nIllaoi is the only one able to see who\'s been Vesseled, by adding a layer of watery effects on their model. The Vessel will also be let known it\'s debuffed, by having a layer of watery effects on its screen instead.\nIf the target becomes a Vessel while  vanished, the layer on their model will fail to be added. [35] (bug)\nThe Vessel status effect is a debuff that doesn\'t persist through death.\nIf the target is made a Vessel while  resurrecting, some resurrections may cleanse the Vessel debuff, while others will not. [36] [37] (note)\nTransferred damage will apply on-damage effects, such as  Black Cleaver,  Morellonomicon,  Executioner\'s Calling,  Elixir of Sorcery,  Riftmaker,  Shadowflame,  The Collector,  First Strike,  Aspect of the Dragon burn damage, and  The Darkin Scythe.\nRedirected damage always counts as single target for the purpose of  Omnivamp.\nTransferred damage will not doubly apply on-hit or on-spell effects versus the target (e.g.  Liandry\'s Torment,  Phase Rush stacks). These effects are only applied versus the Spirit.\nAttacking the Vessel and its Spirit simultaneously will only apply one stack of  Black Cleaver to the Vessel. (note)\nWhile  First Strike is active, damage instances that do not trigger the First Strike projectile, will redirect close to 0 damage [38], similar to past cases [39]. (bug)\nWhen the tether is broken (whether the Spirit\'s lifetime ran out or the target moved out of range), the Spirit will  vanish and move to Illaoi\'s location.\nAn  uncancellable windup attack may still kill the Spirit after it vanished to grant the gold, but without making the target a Vessel. [40]\nWhen the Spirit is killed, it will remain in the same position for less than a second before moving to an unknown location. This will cancel any remaining Tentacle queued attacks, for the target being out of range. [41] [42] [43] (bug)\nThe Spirit is immune to  stasis (i.e.  Bard\'s  Tempered Fate).\n Fiora\'s  Riposte can be used to prevent becoming a Vessel if used before the Spirit is killed [44], or while leaving the tether\'s range. [45]\n Sion\'s Spirit cannot be spawned during  Glory in Death. Spirits created before Sion\'s  zombie state will remain active.\nIf the target that had its Spirit pulled from them is taken into the  Realm of Death, the tether will break, but they will not be made into a Vessel.\nThe following table refers for interactions while Illaoi is firing the projectile and while the target\'s Spirit is being pulled:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Tentacle Smash and  Leap of Faith are buffered.  Harsh Lesson is usable, but is buffered while pulling the Spirit. (note)\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
      projectile: 'SPECIAL',
      resource: 'Mana',
      speed: '1900',
      spellshieldable: 'Special',
      targeting: 'Direction',
      tetherRadius: '1500 /  1700',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Illaoi launches a tendril in the target direction that stops at the first enemy hit, pulling their Spirit out in front of Illaoi over 0.75 seconds if they are a champion. The target is tethered to the Spirit for 7 seconds, revealing them in addition to granting sight of the area around them while the tether remains.</p>'
        },
        {
          description: 'The Spirit spawns with the target\'s current health, armor and magic resist, and redirects a portion of the pre-mitigation damage received to the tethered champion.',
          leveling: [
            {
              attribute: 'Damage Transmission',
              modifiers: [
                {
                  unit: '%',
                  values: '25 / 30 / 35 / 40 / 45'
                },
                {
                  unit: '% per 100 AD',
                  values: '8'
                }
              ]
            }
          ]
        },
        {
          description: 'When the Spirit is killed or the target leaves tether range, the tether is severed, marking the target as a Vessel for 4 seconds and slowing them by 80% for 1.5 seconds once the tether returns back to them. Each Tentacle autonomously attacks the closest Vessel or Spirit, prioritizing the latter, once every 4.5 / 4 / 3.5 (based on level) seconds.'
        },
        {
          description: 'Enemies made a Vessel continuously spawn a Tentacle near themselves, when possible. Tentacles can spawn 300 units closer to each other than when spawned by Illaoi.'
        },
        {
          description: 'Illaoi is unable to act while firing the projectile and while the target\'s Spirit is being pulled. She also reveals herself while firing the projectile if there is an enemy champion nearby. Vessels can dispel their mark by scoring a takedown against Illaoi. Test of Spirit cannot be cast again until the Spirit dies.'
        }
      ]
    },
    {
      key: 'R',
      name: 'Leap of Faith',
      affects: 'Enemies',
      blurb: 'Active:  Illaoi becomes  unstoppable before dealing physical damage to nearby enemies. For each enemy  champion hit, a Tentacle is summoned around her for a period.',
      castTime: '0.5',
      cooldown: '120 / 95 / 70',
      cost: '100',
      damageType: 'Physical damage',
      effectRadius: '500',
      icon: 'https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/r',
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nIllaoi spawns the  Tentacle 700 range away from her, unless there\'s a natural wall blocking the way making the Tentacle spawn on it, with an angle relative to the direction she\'s facing.\n1+ champions: one  Tentacle at 0 degrees. (towards Illaoi\'s facing direction)\n2+ champions: one  Tentacle at 60 degrees.\n3+ champions: one  Tentacle at 300 degrees.\n4+ champions: one  Tentacle at 120 degrees.\n5+ champions: one  Tentacle at 240 degrees.\n6+ champions: one  Tentacle at 180 degrees.\nTentacles may spawn on base barriers. If Illaoi is in the center of a base barrier, all Tentacles will spawn in the same position and stack over each other, making it appear as if there was only one Tentacle. [7] (bug)\nIllaoi\'s facing direction is decided by the position of the cursor on cast, but can also be changed mid-cast through other effects, such as  Flash. [8]\nIf there are no walls nearby, spawning the last  Tentacle will form a perfect hexagon.\n Spell shields will block the ability\'s damage but will not prevent Tentacles from spawning.\nIf Illaoi  dies within 0.25 seconds of dropping down, she will spawn buffed Tentacles, but she won\'t manage in time to buff the already spawned ones. [9] (bug)\nIf Illaoi is near a Tentacle that is about to spawn, it will spawn buffed by Leap of Faith even if Illaoi is no longer nearby.\nUsing  Harsh Lesson after Illaoi drops down will command Tentacles to instantly attack, regardless if they were already attacking. Their old attack will keep on going and will hit while the second attack is on its animation attack. [10] (bug)\nThis makes it possible for the same tentacle to reduce its own damage by having the second attack hit too fast, which is not otherwise possible. [11]\nAfter the buff expires, Tentacles will linger for an extra 0.25 seconds, allowing them to continue receiving commands and queuing up non-empowered attacks, while remaining not dormant. [12]',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'Special',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Illaoi gains displacement immunity and leaps into the air for the cast time. She then slams her idol into the ground, dealing physical damage to nearby enemies. For each enemy champion hit, a Tentacle is summoned for 8 seconds (up to a maximum of 6 summons).</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '150 / 250 / 350'
                },
                {
                  unit: '% bonus AD',
                  values: '50'
                }
              ]
            }
          ]
        },
        {
          description: 'For the duration, Harsh Lesson\'s cooldown is halved, all Tentacles awakened by Illaoi are untargetable, will not show their hitboxes, nor go dormant, and will take 0.5 seconds to make an attack; however they will then incur a lockout of 0.5 seconds before being able to start a new attack.'
        },
        {
          description: 'This does not affect the Tentacle attack from Tentacle Smash.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 65,
    control: 1,
    damage: 3,
    difficulty: 2,
    mobility: 1,
    toughness: 2,
    utility: 1
  },
  positions: [
    'Top'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank'
  ],
  stats: {
    armor: 35,
    attackDamage: 65,
    attackRange: 125,
    attackSpeed: 0.6,
    hp: 656,
    hpRegen: 9.5,
    magicResist: 32,
    movespeed: 350,
    mp: 350,
    mpRegen: 7.5
  },
  statsPerLevel: {
    armor: 5,
    attackDamage: 5,
    attackSpeed: 2.5,
    hp: 115,
    hpRegen: 0.8,
    magicResist: 2.1,
    mp: 50,
    mpRegen: 0.8
  }
}
export default champion