// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  "id": 420,
  "key": "Illaoi",
  "name": "Illaoi",
  "title": "the Kraken Priestess",
  "abilities": [
    {
      "key": "P",
      "name": "Prophet of an Elder God",
      "affects": "Enemies",
      "blurb": "Innate: Periodically, a Tentacle will spawn next to nearby terrain. It can be killed by enemy basic attacks and will become dormant if  Illaoi leaves it alone.",
      "damageType": "Physical damage",
      "effectRadius": "1000",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Illaoi spawns a Tentacle on the nearest terrain perpendicular to her location, if no other Tentacles are already nearby it. Tentacles fully spawn after a 2 second delay and are untargetable in the meantime.</p>"
        },
        {
          "description": "Tentacles are commanded to attack by Illaoi's abilities, dealing 9 - 162 (based on level) (+ 105% AD) (+ 40% AP) physical damage to all enemies struck, increased by 0% - 30% (based on Tentacle Smash's rank).Enemies struck by multiple slams within 0.5 seconds of another, take 50% damage for the second and 25% damage for all other additional slams."
        },
        {
          "description": "Each Tentacle also heals Illaoi for 5% of her missing health if it hits at least one enemy champion."
        },
        {
          "description": "See Pets for more details about Tentacles."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/p",
      "notes": "Illaoi cannot spawn Tentacles on ally invulnerable  structures (note), in addition to neither her nor the Vessel being able to spawn them in Nexus Obelisk's attack range.\nEven after Nexus turrets have lost their invulnerability, Illaoi still has issues spawning Tentacles on them (probably because of the nearby invulnerable Nexus). (bug)\nTentacles will prioritize spawning on map terrain before player-made ones.\nIf multiple Tentacles hit simultaneously, the received healing is calculated iteratively based on the new amount of missing health, as per this formula: (maximum health − current health) × (1 − 0.95n), with 'n' the number of Tentacle hits.",
      "projectile": "FALSE",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Tentacle Smash",
      "width": "200",
      "affects": "Enemies",
      "castTime": "0.75",
      "cooldown": "10 / 9 / 8 / 7 / 6",
      "cost": "40 / 45 / 50 / 55 / 60",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Tentacle damage is increased.</p>",
          "leveling": [
            {
              "attribute": "Damage Increase",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "10 / 15 / 20 / 25 / 30"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Illaoi slams down a Tentacle in the target direction.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/q",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nTentacle Smash's hitbox is fixed in front of Illaoi, while the indicator on the ground is fixed to the targeted direction.\nPENDING FOR TEST: Tentacle Smash visual indicator of the hitbox is visible to enemies even when cast in the fog of war.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Test of Spirit and  Leap of Faith are buffered.  Harsh Lesson is usable.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\n\nPotential bug: If you hit someone with illaoi Q, while having the conquerer rune, the damage of the slam is always amplified by one bonus conquerer stack.",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Harsh Lesson",
      "affects": "Self",
      "blurb": "Active:  Illaoi's next basic attack gains  bonus attack range and causes her to  leap to her target, dealing bonus physical damage and commanding nearby Tentacles to attack the target.",
      "castTime": "none",
      "cooldown": "4",
      "cost": "30",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Illaoi's next basic attack within 6 seconds gains 225 bonus range and causes her to leap to the target's location if they're beyond her normal basic attack range.</p>"
        },
        {
          "description": "The attack deals bonus physical damage, with a minimum threshold, and capped at 300 against non-champions, and commands all Tentacles in range to attack the target. The minimum bonus damage can also be applied against turrets.",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "unit": "%  of target's maximum health",
                  "values": "3 / 3.5 / 4 / 4.5 / 5"
                },
                {
                  "unit": "% per 100 AD",
                  "values": "4"
                }
              ]
            },
            {
              "attribute": "Minimum Physical Damage",
              "modifiers": [
                {
                  "values": "20 / 30 / 40 / 50 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Harsh Lesson resets Illaoi's basic attack timer."
        },
        {
          "description": "Harsh Lesson can be activated during Illaoi's other abilities, other than while pulling a Spirit."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/w",
      "maxCharges": -1,
      "notes": "The bonus damage doesn't apply  life steal but it does apply  spell vamp and Omnivamp.\nHarsh Lesson is made of two different abilities which are decided by Illaoi's range to the target, being either  melee or within  dash range.\nThe close range ability:\nHas an  uncancellable windup.\nCan be used while  grounded or  rooted. If Illaoi attack commands and then casts Harsh Lesson while rooted, she is able to use the close range version within its dash range. (bug)\nStarting the attack before triggering  Guardian Angel's passive and hitting while she's in it will not cause the Tentacles to slam. (bug)\nThe attack will still hit if the target becomes  untargetable, but will not if it  dies. (note)\nTentacles will slam if the attack is  blocked, but not if it's  dodged or if it  misses. (note)\nDoes trigger  Hail of Blades.\nTriggers  Energized effects on-hit.\nIf the empowered attack duration ends during the attack animation, the attack won't be empowered. (note)\nAfter hitting the target, Illaoi can quickly cast other abilities.\nAbilities cannot be buffered during the windup.\nThe attack goes through  spell shields, but also triggers them. (bug)\nThe dash range ability:\nDoes not have an uncancellable windup, meaning effects that can interrupt the dash will cancel the attack and put the ability on cooldown.\nCan be cast but cannot be used while  grounded or  rooted because Illaoi loses the  bonus attack range.\nThe attack will not hit if the target becomes  untargetable, but does hit if it  dies. (note)\nTentacles will slam if the attack is  dodged,  blocked or if it  misses.\nDoes not trigger  Hail of Blades. (bug)\nTriggers  Energized effects during the jump. (bug)\nHaving enough attack speed will perform an unusual dunk. (note)\nIf the empowered attack duration ends during the dash, the buff will linger until the attack has finished.\nAfter hitting the target, Illaoi has a short delay before she can cast other abilities. (note)\nAbilities can be buffered during the windup.\nThe attack goes through  spell shields, but also triggers them. (bug)\nIf the target dies at the instant Harsh Lesson is about to hit the target, the attack will hit, be consumed, but will not make the Tentacles slam. (bug)\nThe Tentacle attacking because of Harsh Lesson is considered to be of the same cast instance, and thus will not grant additional stacks of  Conqueror,  Electrocute,  Phase Rush and Tribute. (note)\nHarsh Lesson triggers  Bone Plating and one of its plates with the same attack. (note)\nIt also triggers  Arcane Comet and reduces its cooldown twice.\nWhile the ability is active, Tentacles are commanded to attack on-hit, interacting with  Guinsoo's Rageblade without consuming the empowered attack.\nAttack moving while charging  Hexflash will delay the attack.",
      "resource": "Mana",
      "spellEffects": "spell",
      "spellshieldable": "false",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Test of Spirit",
      "width": "100",
      "affects": "Enemies",
      "blurb": "Active:  Illaoi reaches with a tendril in the target direction that stops upon the first enemy hit. If the target is a  champion, she rips their Spirit out from them to stand before her.",
      "castTime": "0.25",
      "cooldown": "16 / 15 / 14 / 13 / 12",
      "cost": "35 / 40 / 45 / 50 / 55",
      "damageType": "Mixed damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Illaoi launches a tendril in the target direction that stops at the first enemy hit, pulling their Spirit out in front of Illaoi over 0.75 seconds if they are a champion. The target is tethered to the Spirit for 7 seconds, revealing them in addition to granting sight of the area around them while the tether remains.</p>"
        },
        {
          "description": "The Spirit spawns with the target's current health, armor and magic resist, and redirects a portion of the pre-mitigation damage received to the tethered champion.",
          "leveling": [
            {
              "attribute": "Damage Transmission",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "25 / 30 / 35 / 40 / 45"
                },
                {
                  "unit": "% per 100 AD",
                  "values": "8"
                }
              ]
            }
          ]
        },
        {
          "description": "When the Spirit is killed or the target leaves tether range, the tether is severed, marking the target as a Vessel for 3 seconds and slowing them by 80% for 1.5 seconds once the tether returns back to them. Each Tentacle autonomously attacks the closest Vessel or Spirit, prioritizing the latter, once every 4.5 / 4 / 3.5 (based on level) seconds."
        },
        {
          "description": "Enemies made a Vessel also spawn a Tentacle near themselves. Tentacles can spawn 250 units closer to each other than when spawned by Illaoi."
        },
        {
          "description": "Illaoi is unable to act while firing the projectile and while the target's Spirit is being pulled. Vessels can dispel their mark by scoring a takedown against Illaoi. Test of Spirit cannot be cast again until the Spirit dies."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/e",
      "maxCharges": -1,
      "notes": "Upon an enemy becoming a Vessel, a Tentacle is spawned near them wherever possible. After one spawns, Tentacle spawning on that same target incurs a lockout of 4 / 3.5 / 3 (based on level) seconds.\nDue to the duration of the Vessel effect, a second spawn is practically impossible to re-occur from the same caster.\nIt may however still be relevant in edge cases where a target is immediately made a Vessel again right after they have exited the state.\nSpirits are classified as  clones:\nSpirits can only be fully targeted by Illaoi's team and neutral monsters. The Spirit's allies cannot manually select it as a valid target for spells and abilities, but they can still do so with automatically targeted effects. (bug)\nSpirits take 50% damage from turrets. (bug)\nSpirits cannot be  healed nor  shielded ( Summon Aery excluded (bug)).\nThe Spirit levels up when the Vessel does, gaining the target's stats per level. If the target has a resource that also increases per level (i.e  mana), the Spirit's lifetime will increase instead. (bug)\nThe Spirit's destination is decided based on Illaoi's position and facing direction when the target is hit.\nThe Spirit is  untargetable while it is being pulled, and spawns with the tethered champion's default model and size.\nThe Spirit's lifetime is sometimes 0.25 seconds longer, while its untargetability is sometimes shorter, causing Tentacles to hit an inconsistent amount of times.\nRedirected damage is calculated by taking the pre-mitigation damage against the Spirit, applying Test of Spirit's damage modifier, and then capping it to the Spirit's current health. This damage will then be affected by damage modifiers (resistances and other effects) of the Vessel.\nThis order of operations allows Test of Spirit to deal more or less percentage of the Vessel's health than would be expected:\nBecause the Spirit's modifiers can be different from the Vessel's, and the damage being pre-mitigated, allowing the Spirit to have higher or lower effective health, respectively increasing or decreasing the maximum achievable damage from killing it.\nBecause the cap is supposed to block excess damage over the Spirit's current health, which does not reliably do so or does too well, depending on whether the Spirit's damage modifier is higher than Test of Spirit's or not, respectively. This causes an increasing difference of damage when the pre-mitigated damage is between Spirit current health ÷ Spiritmod and Spirit current health ÷ Emod. (bug)\nTo fix this case, pre-mitigated damage would need to be capped at the amount that kills the Spirit, and only then have Test of Spirit's damage modifier apply.\nIllaoi needs 937.5 / 875 / 812.5 / 750 / 687.5 total AD to reach 100% redirected damage. As per above, the damage is still dependent on the Spirit's and Vessel's damage modifiers and may not always be able to deal 100% of the target's current health as total redirected damage.\n Spell shields may only prevent the initial spirit grab and the slow upon becoming a Vessel. Spell shields will not prevent becoming a Vessel or Tentacles from attacking.\nThe tendril can be blocked by  projectile-destroying effects (e.g.  Yasuo's  Wind Wall).\nIt will only be destroyed and not replicated against  Mel's  Rebuttal.\nThe application of the  slowing missile cannot be blocked by  projectile- destroying effects (e.g.  Yasuo's  Wind Wall).\nEffects that  destroy homing missiles (i.e certain  untargetabilities) will prevent the application of the  slowing missile.\nThe slowing missile will not be fired if the target is already  untargetable when the Spirit dies.\nThe spirit pull is not considered a  crowd control effect and will not be blocked by  crowd control immunity, with the exception of  Morgana's  Black Shield.(note)\nThe projectile tentacle model is linked to Illaoi's model animation and size. However gameplay wise it is not, thus the actual hitbox being different than the position, width and length of the visible model. (bug)\nThe model will stop mid-air / vanish if Illaoi goes into  stasis,  sleep or  airborne, however the actual hitbox will continue its trajectory unseen.\nPENDING FOR TEST: The projectile is however seen by enemies if Illaoi is not  visible.\nThis ability will cast from wherever the caster is at the end of the cast time.\nAnd will fire towards the same pointed location.\nGrabbing the Spirit of a champion before it goes into  resurrection via  Chronoshift or  Guardian Angel will spawn the Spirit with 0 health, making it  invulnerable. (bug)\nThe same does not happen with other resurrection effects (i.e  Karthus'  Death Defied) since they leave the champion with more than 0 health.\nGrabbing the Spirit of  Viego will make the Spirit's lifetime (the white bar below the lifebar) disappear. (bug)\nPENDING FOR TEST: Grabbing the Spirit of an  Oathsworn will make the Spirit invisible. (bug)\nIllaoi is the only one able to see who's been Vesseled, by adding a layer of watery effects on their model. The Vessel will also be let known it's debuffed, by having a layer of watery effects on its screen instead.\nIf the target becomes a Vessel while  vanished, the layer on their model will fail to be added. (bug)\nThe Vessel status effect is a debuff that doesn't persist through death.\nIf the target is made a Vessel while  resurrecting, they will not revive as a Vessel.\nRunes consider the Spirit as a champion for their effects and stat-tracking. (note)\nTentacles damage with  First Strike only reflects double bonus damage, not taking into account actual damage done to the Spirit (e.g if  First Strike would deal 3 bonus damage, what would get reflected is 6 damage). (bug)\nTransferred damage will apply on-damage effects, such as  Black Cleaver,  Morellonomicon,  Executioner's Calling,  Riftmaker,  Aspect of the Dragon burn damage, and  The Darkin Scythe.\nRedirected damage always counts as single target for the purpose of  Omnivamp.\nTransferred damage will not doubly apply on-hit or on-spell effects versus the target (e.g.  Liandry's Torment,  Phase Rush stacks). These effects are only applied versus the Spirit.\nAttacking the Vessel and its Spirit simultaneously will only apply one stack of  Black Cleaver to the Vessel. (note)\nWhen the tether is broken (whether the Spirit's lifetime ran out or the target moved out of range), the Spirit will  vanish and move to Illaoi's location.\nAn  uncancellable windup attack may still kill the Spirit after it vanished to grant the gold, but without making the target a Vessel.\nThe Spirit is immune to  stasis (i.e.  Bard's  Tempered Fate).\n Fiora's  Riposte can be used to prevent becoming a Vessel if used before the Spirit is killed or while leaving the tether's range.\n Sion's Spirit cannot be spawned during  Glory in Death. Spirits created before Sion's  zombie state will remain active.\nIf the target that had its Spirit pulled from them is taken into the  Realm of Death, the tether will break, but they will not be made into a Vessel.\nThe following table refers for interactions while Illaoi is firing the projectile and while the target's Spirit is being pulled:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Tentacle Smash and  Leap of Faith are buffered.  Harsh Lesson is usable, but is buffered while pulling the Spirit. (note)\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "speed": "1900",
      "spellshieldable": "Special",
      "targeting": "Direction",
      "tetherRadius": "1500 /  1700"
    },
    {
      "key": "R",
      "name": "Leap of Faith",
      "affects": "Enemies",
      "blurb": "Active:  Illaoi becomes  unstoppable before dealing physical damage to nearby enemies. For each enemy  champion hit, a Tentacle is summoned around her for a period.",
      "castTime": "0.5",
      "cooldown": "120 / 95 / 70",
      "cost": "100",
      "damageType": "Physical damage",
      "effectRadius": "500",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Illaoi gains displacement immunity and leaps into the air for the cast time. She then slams her idol into the ground, dealing physical damage to nearby enemies. For each enemy champion hit, a Tentacle is summoned for 8 seconds (up to a maximum of 6 summons).</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "For the duration, Harsh Lesson's cooldown is halved, all Tentacles awakened by Illaoi are untargetable, will not show their hitboxes, nor go dormant, and will take half the amount of time to make an attack. This however does not affect the Tentacle attack from Tentacle Smash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/r",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nIllaoi spawns the  Tentacle 700 range away from her, unless there's a natural wall blocking the way making the Tentacle spawn on it, with an angle relative to the direction she's facing.\n1+ champions: one  Tentacle at 0 degrees. (towards Illaoi's facing direction)\n2+ champions: one  Tentacle at 60 degrees.\n3+ champions: one  Tentacle at 300 degrees.\n4+ champions: one  Tentacle at 120 degrees.\n5+ champions: one  Tentacle at 240 degrees.\n6+ champions: one  Tentacle at 180 degrees.\nTentacles may spawn on base barriers. If Illaoi is in the center of a base barrier, all Tentacles will spawn in the same position and stack over each other, making it appear as if there was only one Tentacle.\nIllaoi's facing direction is decided by the position of the cursor on cast, but can also be changed mid-cast through other effects, such as  Flash.\nIf there are no walls nearby, spawning the last  Tentacle will form a perfect hexagon.\n Spell shields will block the ability's damage but will not prevent Tentacles from spawning.\nIf Illaoi  dies within 0.25 seconds of dropping down, she will spawn buffed Tentacles, but she won't manage in time to buff the already spawned ones. (bug)\nIf Illaoi is near a Tentacle that is about to spawn, it will spawn buffed by Leap of Faith even if Illaoi is no longer nearby.\nUsing  Harsh Lesson after Illaoi drops down will command Tentacles to instantly attack, regardless if they were already attacking. Their old attack will keep on going and will hit while the second attack is on its animation attack. (bug)\nThis makes it possible for the same tentacle to reduce its own damage by having the second attack hit too fast, which is not otherwise possible.\nUsing  Harsh Lesson an instant before Leap of Faith's buff finishes will delay the Tentacle's attack. (bug)",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Direction"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 2
  },
  "faction": "bilgewater",
  "lore": "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer of Nagakabouros” soon discover Illaoi never battles alone—the god of the Serpent Isles fights by her side.",
  "patchLastChanged": "25.15",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2015-11-24",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 656,
      "perLevel": 115
    },
    "healthRegen": {
      "flat": 9.5,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 350,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 35,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 65,
      "perLevel": 5
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 35
    },
    "gameplayRadius": {
      "flat": 65
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.375
    },
    "attackTotalTime": {
      "flat": 1.75
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion