// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 555,
  key: 'Pyke',
  name: 'Pyke',
  title: 'the Bloodharbor Ripper',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 670,
      perLevel: 110,
    },
    healthRegen: {
      flat: 7,
      perLevel: 0.5,
    },
    mana: {
      flat: 415,
      perLevel: 50,
    },
    manaRegen: {
      flat: 8,
      perLevel: 1,
    },
    armor: {
      flat: 43,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 62,
      perLevel: 2,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 400,
    },
    selectionRadius: {
      flat: 120,
    },
    pathingRadius: {
      flat: 35,
    },
    gameplayRadius: {
      flat: 65,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.667,
      perLevel: 2.5,
    },
    attackSpeedRatio: {
      flat: 0.667,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.5,
    },
    attackRange: {
      flat: 150,
    },
  },
  positions: [
    'Support',
  ],
  roles: [
    'Assassin',
    'Catcher',
    'Support',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 1,
    control: 3,
    mobility: 3,
    utility: 1,
    abilityReliance: 50,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Gift of the Drowned Ones',
        icon: 'https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Pyke\'s maximum health cannot increase except through growth (per level), instead he gains[ 1 bonus attack damage per 14 bonus health. ][ bonus attack damage equal to 7.143% of bonus health. ]</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Pyke gains 1 bonus movement speed while in the river.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Pyke stores 9% (+ 0.2% per 1 Lethality) of the post-mitigation damage he takes from enemy champions as grey health on his health bar, increased to 40% (+ 0.4% per 1 Lethality) while there are two or more visible enemy champions nearby. He can store up to 80 (+ 800% bonus AD) grey health, with an upper cap of 55% of his maximum health.</p>',
          },
          {
            description: 'While Pyke is not visible to enemies, he rapidly consumes his grey health to heal for the same amount.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Game elements that increase health based on the champion\'s health (e.g  Overgrowth) will increase the health before getting converted by Gift of the Drowned Ones, thus granting increased bonus AD.\n Spirit Visage and  Grievous Wounds take effect after Gift of the Drowned Ones\'s healing cap.\nPyke\'s grey health does not have a time limit, and will stay on his health bar until Pyke leaves enemy vision or dies.\nSince Pyke\'s maximum health cannot be increased, Gift of the Drowned Ones reaches the upper cap of 55% of maximum health at 40.25 : 180.5 (based on level) bonus attack damage.\n Untargetable champions count towards Pyke\'s modified grey health storing.\nAmount of attack damage granted from list of items that grants health, converted with Gift of the Drowned Ones:\nThis table is automatically generated based on the data from Module:ItemData/data.\n\nItemCostAmountAvailabilityAbyssal Mask Abyssal Mask2650 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidBami\'s Cinder Bami\'s Cinder900 10.7Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidBlack Cleaver Black Cleaver3000 68.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidBloodletter\'s Curse Bloodletter\'s Curse2900 28.6Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidBloodsong Bloodsong400 14.3Classic Summoner\'s Rift 5v5Bounty of Worlds Bounty of Worlds400 14.3Classic Summoner\'s Rift 5v5Catalyst of Aeons Catalyst of Aeons1300 25Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidCelestial Opposition Celestial Opposition400 14.3Classic Summoner\'s Rift 5v5Chempunk Chainsword Chempunk Chainsword3100 77.1Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidCosmic Drive Cosmic Drive3000 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidCrystalline Bracer Crystalline Bracer800 14.3Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidDark Seal Dark Seal350 3.6Classic Summoner\'s Rift 5v5Dead Man\'s Plate Dead Man\'s Plate2900 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidDoran\'s Blade Doran\'s Blade450 15.7Nexus Blitz, Classic Summoner\'s Rift 5v5Doran\'s Ring Doran\'s Ring400 6.4Nexus Blitz, Classic Summoner\'s Rift 5v5Doran\'s Shield Doran\'s Shield450 7.9Nexus Blitz, Classic Summoner\'s Rift 5v5Dream Maker Dream Maker400 14.3Classic Summoner\'s Rift 5v5Echoes of Helia Echoes of Helia2200 14.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidEdge of Night Edge of Night3000 67.9Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidExperimental Hexplate Experimental Hexplate3000 72.1Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidFimbulwinter Fimbulwinter2400 39.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidForce of Nature Force of Nature2800 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidGiant\'s Belt Giant\'s Belt900 25Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidGuardian\'s Blade Guardian\'s Blade950 40.7Arena, All Random All MidGuardian\'s Hammer Guardian\'s Hammer950 35.7Arena, All Random All MidGuardian\'s Horn Guardian\'s Horn950 10.7Arena, All Random All MidGuardian\'s Orb Guardian\'s Orb950 10.7Arena, All Random All MidHaunting Guise Haunting Guise1300 14.3Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidHeartsteel Heartsteel3000 64.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidHextech Rocketbelt Hextech Rocketbelt2650 21.4Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidHollow Radiance Hollow Radiance2800 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidHullbreaker Hullbreaker3000 75.7Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidIceborn Gauntlet Iceborn Gauntlet2900 21.4Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidJak\'Sho, The Protean Jak\'Sho, The Protean3200 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidKaenic Rookern Kaenic Rookern2900 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidKindlegem Kindlegem800 14.3Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidKnight\'s Vow Knight\'s Vow2300 14.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidLiandry\'s Torment Liandry\'s Torment3000 21.4Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidLocket of the Iron Solari Locket of the Iron Solari2200 14.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidMejai\'s Soulstealer Mejai\'s Soulstealer1500 7.1Classic Summoner\'s Rift 5v5Mikael\'s Blessing Mikael\'s Blessing2300 17.9Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidMoonstone Renewer Moonstone Renewer2200 14.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidMorellonomicon Morellonomicon2850 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidOverlord\'s Bloodmail Overlord\'s Bloodmail3300 69.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidPhage Phage1100 29.3Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidRanduin\'s Omen Randuin\'s Omen2700 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidRedemption Redemption2300 14.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidRiftmaker Riftmaker3100 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidRod of Ages Rod of Ages2600 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidRuby Crystal Ruby Crystal400 10.7Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidRunic Compass Runic Compass400 7.1Classic Summoner\'s Rift 5v5Rylai\'s Crystal Scepter Rylai\'s Crystal Scepter2600 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidSolstice Sleigh Solstice Sleigh400 14.3Classic Summoner\'s Rift 5v5Spear of Shojin Spear of Shojin3100 77.1Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidSpectre\'s Cowl Spectre\'s Cowl1250 14.3Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidSpirit Visage Spirit Visage2700 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidSterak\'s Gage Sterak\'s Gage3200 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidStridebreaker Stridebreaker3300 72.1Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidSundered Sky Sundered Sky3100 68.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidSunfire Aegis Sunfire Aegis2700 25Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidThornmail Thornmail2450 10.7Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidTitanic Hydra Titanic Hydra3300 82.9Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidTrailblazer Trailblazer2400 17.9Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidTrinity Force Trinity Force3333 59.8Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidTunneler Tunneler1150 32.9Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidUnending Despair Unending Despair2800 28.6Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidVigilant Wardstone Vigilant Wardstone2300 17.9Classic Summoner\'s Rift 5v5Warmog\'s Armor Warmog\'s Armor3100 71.4Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidWatchful Wardstone Watchful Wardstone1100 10.7Classic Summoner\'s Rift 5v5Winged Moonplate Winged Moonplate800 14.3Nexus Blitz, Classic Summoner\'s Rift 5v5, All Random All MidWinter\'s Approach Winter\'s Approach2400 39.3Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All MidWorld Atlas World Atlas400 2.1Classic Summoner\'s Rift 5v5Zaz\'Zak\'s Realmspike Zaz\'Zak\'s Realmspike400 14.3Classic Summoner\'s Rift 5v5Zeke\'s Convergence Zeke\'s Convergence2200 21.4Nexus Blitz, Arena, Classic Summoner\'s Rift 5v5, All Random All Mid',
        blurb: 'Innate:  Pyke gains  attack damage equal to a portion of his  bonus health.',
        effectRadius: '1500',
      },
    ],
    Q: [
      {
        name: 'Bone Skewer',
        icon: 'https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Pyke charges while being slowed by 20% for up to 3 seconds to increase Bone Skewer\'s range over the first second of the channel. Bone Skewer can be recast within the duration.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Pyke hurls his harpoon in the target direction, becoming unable to act while it is in flight and dealing physical damage to the first enemy hit and pulling them, during which they are also revealed, then slowing them by 90% for 1 second.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
                      250,
                      300,
                    ],
                  },
                  {
                    values: [
                      75,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Releasing the ability within 0.4 seconds causes Pyke to instead thrust his blade in the target direction, dealing the same damage to the closest enemy champion, or closest enemy otherwise.',
          },
          {
            description: 'If the charge is interrupted or completes without reactivation, Bone Skewer is cancelled and the ability is put on full cooldown but refunds 75% of the mana cost. Bone Skewer\'s mana cost is also refunded if it hits an enemy champion.',
          },
        ],
        cost: [
          70,
          75,
          80,
          85,
          90,
        ],
        cooldown: [
          10,
          9.5,
          9,
          8.5,
          8,
        ],
        targeting: 'Auto / Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Spell',
        projectile: 'SPECIAL',
        notes: 'Only the charged version of Bone Skewer will be  intercepted.\nThe pull can fling an enemy behind Pyke if the harpoon hits at close range.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Pyke is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can use trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\nThe following table refers for interactions while Pyke is locked out from the harpoon being in flight:\nThe lockout ends as soon as the missile fizzles from hitting a target or reaching maximum range, or being  intercepted.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        width: '140 / 200',
        castTime: '0.25',
        effectRadius: '550',
        targetRange: '400 : 1100 (based on channel time)',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Ghostwater Dive',
        icon: 'https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Pyke submerges into water for 5 seconds, entering camouflage and gaining 45% (+ 2% per 1 Lethality) bonus movement speed that decays over the duration. Attacking or casting abilities ends Ghostwater Dive immediately.</p>',
          },
          {
            description: 'Enemy champions within 1500 units of Pyke are alerted of his presence and whether he can execute them with Death from Below.',
          },
        ],
        cost: [
          65,
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'When an enemy is alerted, sharks will circle underneath their feet while a sound will be played to them that changes based on health threshold.\nUsing a basic attack breaks the stealth at the end of the attack windup.\nPENDING FOR TEST: While submerged, a unique visual indicator will appear above Pyke if there are enemy champions closer than 700 units but farther than 600 units.',
        blurb: 'Active:  Pyke submerges into water, entering  camouflage and gaining a burst of  movement speed for a few seconds. Nearby enemies are alerted of his presence.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Phantom Undertow',
        icon: 'https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Pyke dashes in the target direction, leaving behind a Phantom. Pyke is ghosted while the Phantom is active.</p>',
          },
          {
            description: 'After 1 second, the Phantom homes back to Pyke to stun enemies around it and those it passes through along the way for 1.25 (+ 0.1 per 10 Lethality) seconds. Enemy champions hit also take physical damage.',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
                      250,
                      300,
                    ],
                  },
                  {
                    values: [
                      100,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          15,
          14,
          13,
          12,
          11,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'The  dash distance can be extended to up to 900 units (estimated) when targeting across terrain.\nLike most projectiles, the flying Phantom cannot hit targets whose  center is behind the position it originates at or beyond the position it catches up to Pyke at, but the spell can hit targets behind its origin as long as their  hitbox radius overlaps with the original unit Phantom\'s 110-radius check at the end of its lifespan.',
        blurb: 'Active:  Pyke dashes in the target direction, leaving behind a phantom and becoming  ghosted.',
        speed: '3000',
        width: '110',
        castTime: 'none',
        effectRadius: '110',
        targetRange: '550',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Death from Below',
        icon: 'https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Pyke marks the target location with the shape of an X before striking it, executing enemy champions within the area that are below 250 - 550 (based on level) (+ 80% bonus AD) (+ 1.5 per 1 Lethality) health. Other enemies hit and enemy champions above the threshold are instead dealt[ 50% of the amount as physical damage. ][ 125 - 275 (based on level) (+ 40% bonus AD) (+ 0.75 per 1 Lethality) physical damage. ]</p>',
          },
          {
            description: 'If Death from Below hits an enemy champion or at least one is killed inside the X by the execution or an ally, Pyke will blink to the center of the X. For the latter case Pyke can also recast the ability within 20 seconds at no cost.',
          },
          {
            description: 'Each successful execution grants one Your Cut to the last assisting ally, instead of its natural assist gold. Otherwise, Pyke is granted a Your Cut for each enemy champion killed inside the X by an ally during Death from Below\'s cast time.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          100,
          85,
          70,
        ],
        targeting: 'Location',
        affects: 'Self, Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'special',
        notes: 'Applies  raw damage to executed targets and  area damage to targets above the threshold.\nDeath from Below\'s execute against an enemy champion will aggro nearby enemy minions.\nDeath from Below cannot execute  clones. They are always dealt 50% physical damage.\nIf the target is in a  zombie state, does not enter the  death state, or is killed by the ability while above the execution threshold, Death from Below does not grant  Your Cut nor the recast.\n Spell shield does not prevent Pyke from  blinking.\nIf an enemy champion dies inside the X during Death from Below\'s cast time, Pyke will be shown as having received an assist in the kill feed, but this will not trigger  takedown effects.\nDeath from Below cannot be  interrupted; Pyke will always appear at the target location if enemy champions are caught inside the X even if he is moved (e.g. by being  displaced) during the cast time.\nThe only exception is if he is being  suppressed, in which case he will not  blink.\n Axiom Arcanist does not refund the cooldown while Pyke is able to recast.(note)\n Axiom Arcanist\'s tooltip counts it refunding Death from Below even when it doesn\'t.(bug)',
        blurb: 'Active:  Pyke strikes the target location in a X pattern, which  executes enemy  champions hit that are at low health. Other enemies hit are instead dealt physical damage.',
        castTime: '0.5',
        effectRadius: '125 / 282.5  ×  100',
        targetRange: '750',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural gifts to bring a swift and gruesome end to those who make their fortune by exploiting others—and a city that prides itself on hunting monsters now finds a monster hunting them.',
}
export default champion