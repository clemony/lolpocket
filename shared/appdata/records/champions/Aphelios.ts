// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  "id": 523,
  "key": "Aphelios",
  "name": "Aphelios",
  "title": "the Weapon of the Faithful",
  "abilities": [
    {
      "key": "P",
      "name": "The Hitman and the Seer",
      "affects": "Self",
      "blurb": "Innate:  Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: main weapon and off-hand weapon. Each weapon grants him a unique basic attack and a  primary ability.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Aphelios has access to an arsenal of 5 Moonstone Weapons, created by his sister Alune. He equips two weapons at any one time, one as his main weapon and one as his off-hand. Each weapon has a unique basic attack and effect.</p>"
        },
        {
          "description": "Aphelios begins the game with Calibrum as his main weapon and Severum in his off-hand, with Gravitum, Infernum, and Crescendum queued in reserve. His weapons are initially in this order, but they can be rearranged based on their usage."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Moonlight:</span> Weapons granted to Aphelios have 50 Moonlight for ammunition, which is consumed upon basic attacking on-attack and upon casting his primary abilities. Any of his abilities that automatically cause him to attack during their effect will not consume additional Moonlight. Once his main weapon's Moonlight is exhausted, it is moved to the end of the reserve queue; Alune then assembles his next available weapon from the reserve over 1 second, placing its primary ability on a 1.5-second cooldown from the start of the assembly. Aphelios cannot cast Phase during the assembly.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Weapon Master:</span> Aphelios cannot improve his abilities via skill points. He starts the game with Phase and automatically gains access to his primary abilities at level 2 and his ultimate ability, Moonlight Vigil, at level 6. Moonlight Vigil improves automatically at levels 11 and 16. Aphelios may spend his skill points to gain bonus attack damage, bonus attack speed or lethality instead.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Damage",
              "modifiers": [
                {
                  "values": "5 / 10 / 15 / 20 / 25 / 30"
                }
              ]
            },
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "9 / 18 / 27 / 36 / 45 / 54"
                }
              ]
            },
            {
              "attribute": "Lethality",
              "modifiers": [
                {
                  "values": "5.5 / 11 / 16.5 / 22 / 27.5 / 33"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p",
      "notes": "The attack damage, attack speed and lethality within Aphelios' unique rank-up menu in the HUD correspond to the Q, W, E ability rank-up hotkeys, respectively, for the purposes of assigning skill points via keyboard.\nDue to Aphelios lacking a fourth rankup option (R), his point assigment does not follow the same rules as other champions.\nFor example, the earliest level that an individual statistic can attain rank 6 is level 9, by assigning points at levels 1 / 2 / 3 / 5 / 7 / 9.\nAn ammunition counter will appear to the right side of the screen when Aphelios' main weapon has 10 or less Moonlight.\nWhile at lower than 10 Moonlight, casting his  primary abilities will not spend additional Moonlight but instead consume all the remaining points.\n Runaan's Hurricane's Wind's Fury will not consume additional Moonlight when firing its bolts.",
      "targeting": "Passive"
    },
    {
      "key": "P",
      "name": "Calibrum",
      "affects": "Self, Enemies",
      "blurb": "Aphelios has  bonus range while Calibrum is his main weapon. Abilities will mark targets, and he may attack them from far away with the current off-hand weapon, consuming all marks and dealing bonus physical damage for each mark consumed.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "Aphelios gains 100 bonus attack range while Calibrum is his main weapon. Enemies damaged by Calibrum through an ability are marked for 4.5 seconds, during which they are revealed. Aphelios' next basic attack against a marked target uses the current off-hand weapon and has 1800 range, increased missile speed, and a brief cast time that lasts shorter based on Aphelios' proximity to the target."
        },
        {
          "description": "The empowered attack will consume the marks from all targets, dealing 15 (+ 20% bonus AD) bonus physical damage to the main target for each mark consumed. If Calibrum is the current off-hand weapon, the main weapon is used for the attack instead."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p",
      "notes": "Crescendum's outgoing basic attack can bypass  Yasuo's  Wind Wall and  Braum's  Unbreakable but cannot while returning.\nTriggered Marks apply on-hit effects, stack Energized and trigger  Runaan's Hurricane, but no other on-attack effects.\nThe mark will not be triggered by  Onslaught attacks.\nThe increased basic attack range is drawn for Aphelios to differentiate it from his normal attack range.\nThe empowered range for the mark will also be drawn as an indicator for Aphelios.\n Runaan's Hurricane bolts will use Calibrum's projectiles for Aphelios's attacks with Calibrum.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the empowered attack's cast time, it will still fire despite the target being invalid.(bug)\nA blue circle outlining the range in which he may perform basic attacks.\nThis glowing indicator will align directly behind each marked target.",
      "projectile": "SPECIAL",
      "resource": "Other",
      "spellEffects": "attack",
      "targeting": "Passive"
    },
    {
      "key": "P",
      "name": "Severum",
      "affects": "Self",
      "blurb": "Aphelios' basic attacks will  heal him, and create a  shield from excess healing.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "Basic attacks with Severum are non-projectile and have an uncancellable windup. Severum's attacks heal Aphelios for 2% - 7.1% (based on level) of the post-mitigation damage dealt, increased to 5% - 17.75% (based on level) for attacks from abilities."
        },
        {
          "description": "Healing from Severum in excess of Aphelios' maximum health is converted into a shield for an amount of up to 10 - 140 (based on level) (+ 6% maximum health), lingering for up to 30 seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p",
      "notes": "Runaan's Hurricane bolts will use Severum's attack animation instead of firing projectiles for Aphelios'  attacks with Severum.",
      "projectile": "FALSE",
      "resource": "Other",
      "spellEffects": "attack",
      "targeting": "Passive"
    },
    {
      "key": "P",
      "name": "Gravitum",
      "affects": "Enemies",
      "blurb": "Aphelios' basic attacks apply a decaying  slow.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "Basic attacks with Gravitum slow enemies by 30% for 2.5 seconds, decaying to 10% after 0.7 seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p",
      "notes": "Gravitum's debuff applies even if the target is immune to  slows (via  slow immunity or  cc-immunity).\nThe target will be affected after losing their immunity.\n Runaan's Hurricane's bolts will use Gravitum's projectiles when Aphelios attacks with Gravitum.",
      "projectile": "TRUE",
      "resource": "Other",
      "spellEffects": "attack",
      "spellshieldable": "False",
      "targeting": "Passive"
    },
    {
      "key": "P",
      "name": "Infernum",
      "affects": "Enemies",
      "blurb": "Aphelios' basic attacks will hit all enemies in its trajectory, dealing increased damage to the main target and less damage to other targets. The attack will then spread into a cone behind his main target.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "Basic attacks with Infernum shoot a fire bolt that upon arrival splits into a cone of 4 lesser bolts behind the target, dealing damage to enemies they pass through. The fire bolt deals 110% AD physical damage to the primary target. Secondary targets hit by any bolt are dealt 75% / 100% (based on level) of the triggering attack's damage, reduced to 23% / 30% (based on level) against minions."
        },
        {
          "description": "Critical strikes instead spray 6 missiles in a 50% wider cone. Secondary targets hit count as being critically struck but do not take any additional damage."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p",
      "notes": "Infernum's attack hit can be  dodged by or  missed against the primary target.\nThis will not prevent the missile from dealing damage to secondary targets nor from splashing against additional targets behind the primary target. The damage cannot be dodged as or missed against a secondary target.\n Runaan's Hurricane bolts will use Infernum's projectiles when Aphelios attacks with Infernum.\nThe bolts' attacks shoot 3 missiles, increased to 5 missiles when they  critically strike.",
      "projectile": "TRUE",
      "resource": "Other",
      "spellEffects": "default",
      "spellshieldable": "False",
      "targeting": "Passive"
    },
    {
      "key": "P",
      "name": "Crescendum",
      "affects": "Enemies",
      "blurb": "Aphelios throws a chakram as his basic attack and he cannot attack again until it returns to him. Other abilities will create mirror chakrams that he gathers, and his basic attacks deal bonus physical damage based on how many mirror chakrams he holds.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "Basic attacks with Crescendum hurl the blade at the target, which lingers for 0.25 seconds before homing back to Aphelios. He is unable to declare basic attacks until he retrieves Crescendum, but the attack timer is reset once caught."
        },
        {
          "description": "Whenever Aphelios casts an ability that would require him to throw Crescendum, he instead fires a spectral Chakram at the target that similarly returns to him. Aphelios accumulates the Chakrams he catches, up to 20, which last for 5 seconds or until Crescendum is depleted of Moonlight. Chakram duration is refreshed when Aphelios catches a new one or attacks a champion with Crescendum."
        },
        {
          "description": "Attacks with Crescendum are empowered to deal 0% - 138.5% (based on number of Chakrams) AD bonus physical damage and have a lower windup of 10.67%, further decreased to 6.67% when critically striking. The bonus damage from Chakrams is affected by critical strike modifiers."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/p",
      "notes": "Accumulated Chakrams accompany Crescendum whenever Aphelios performs a basic attack. This is merely a visual representation of the increased damage, and the separate blades are not considered separate damage sources nor  projectiles.\nAll Chakram stacks are lost if the Crescendum projectile is destroyed (i.e  Wind Wall,  Unbreakable).\nDue to the return time, at high attack speeds Crescendum will increase Aphelios' effective time to cast attacks, even when right next to his target.",
      "projectile": "TRUE",
      "resource": "Other",
      "spellEffects": "attack",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Weapons of the Faithful",
      "blurb": "The active effect of  Aphelios'  ability varies based on his current main weapon.\n Calibrum -  Moonshot: Long range shot that marks its target for a long-range follow-up attack.\n Severum -  Onslaught: Gain bonus  movement speed while attacking a single enemy with both weapons.\n Gravitum -  Binding Eclipse:  Root enemies who are  slowed by this weapon.\n Infernum -  Duskwave: Blast enemies in a cone and attack them with your off-hand weapon.\n Crescendum -  Sentry: Deploy a sentry with your off-hand weapon that attacks nearby enemies.",
      "cooldown": "9",
      "cost": "60",
      "effects": [
        {
          "description": "The active effect of Aphelios' varies based on his current main weapon."
        },
        {
          "description": "The individual actives do not share a cooldown."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
      "maxCharges": -1,
      "targeting": "N/A"
    },
    {
      "key": "Q",
      "name": "Moonshot",
      "width": "120",
      "affects": "Enemies",
      "blurb": "Active: Aphelios fires a bolt of energy in the target direction that deals physical damage to the first enemy hit.",
      "castTime": "0.4",
      "cooldown": "9",
      "cost": "60",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios fires a bolt of energy in the target direction that deals 70 - 160 (based on level) (+ 42% - 60% (based on level) bonus AD) (+ 100% AP) physical damage to the first enemy hit.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nMoonshot's name is modified based on Aphelios' off-hand weapon:\n Resurgent Moonshot\n Binding Moonshot\n Incendiary Moonshot\n Arcing Moonshot",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1850",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "1450"
    },
    {
      "key": "Q",
      "name": "Onslaught",
      "affects": "Self, Enemies",
      "blurb": "Active: Aphelios gains bonus  movement speed and quickly attacks a nearby enemy with  Severum and his current off-hand weapon, dealing physical damage. The number of attacks is increased based on his bonus attack speed.",
      "castTime": "none",
      "cooldown": "9",
      "cost": "60",
      "damageType": "Physical damage",
      "effectRadius": "550",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios enters an onslaught for 1.75 seconds, gaining 25% (+ 10% per 100 AP) bonus movement speed and automatically performing up to 6 (+ 2 per 100% bonus attack speed) attacks over the duration against the nearest visible enemy, prioritizing enemy champions.</p>"
        },
        {
          "description": "Attacks alternate between Severum and his current off-hand weapon, each dealing 10 - 40 (based on level) (+ 22% - 40% (based on level) bonus AD) physical damage, affected by critical strike modifiers, and applying on-hit effects, with on-hit damage reduced to 25% effectiveness."
        },
        {
          "description": "Aphelios cannot cast Phase nor Moonlight Vigil during Onslaught, but he is still able to move. He cannot perform attacks while unable to declare basic attacks."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
      "maxCharges": -1,
      "notes": "Severum's attacks are not  intercepted, but the attacks from the off-hand weapon are during Onslaught.\nAphelios will also not perform the attacks while channeling  Recall.\nIf Aphelios is  taunted, he will still attack the nearest enemy.\nDuring Onslaught, Aphelios'   attack range is reduced[ to 410 ][ by 140 ]and his attack commands instead issue movement commands to walk into the respective range of his target.\nOnslaught's name is modified based on Aphelios'  off-hand weapon:\n Precision Onslaught\n Binding Onslaught\n Incendiary Onslaught\n Arcing Onslaught\nOnslaught's attacks stack  Energized, but do not apply any other  on-attack effects.\n Crescendum will not deal damage if blocked by  Wind Wall, but the stacks will still be gained.\nCosmetically, the Moonlight cost is consumed through the duration.",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "spellEffects": "attack",
      "targeting": "Auto"
    },
    {
      "key": "Q",
      "name": "Binding Eclipse",
      "affects": "Enemies",
      "blurb": "Active: Aphelios deals magic damage and  roots all targets that are  slowed by  Gravitum.",
      "castTime": "0.3",
      "cooldown": "9",
      "cost": "60",
      "damageType": "Magic damage",
      "effectRadius": "Global",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Gravitum - Active:</span> Aphelios expunges all enemies with Gravitum's slow debuff, dealing 50 - 140 (based on level) (+ 32% - 50% (based on level) bonus AD) (+ 70% AP) magic damage and rooting them for 1 second.</p>"
        },
        {
          "description": "Binding Eclipse also empowers in-flight Gravitum projectiles to instantly affect their targets upon applying the slow successively."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
      "maxCharges": -1,
      "notes": "No compensations are made if Binding Eclipse is used to empower in-flight Gravitum projectiles that are  destroyed or have the slow application negated by any means, wasting the effect in the process.\nBinding Eclipse cannot expunge enemies affected by Gravitum that are  untargetable.\nBinding Eclipse cannot be cast without a marked target.",
      "resource": "Mana",
      "spellEffects": "Spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "Q",
      "name": "Duskwave",
      "affects": "Enemies",
      "angle": "40°",
      "blurb": "Active: Aphelios unleases a wave of energy in a cone, dealing physical damage to enemies hit and locking on to each of them, basic attacking them after a delay.",
      "castTime": "0.4",
      "cooldown": "9",
      "cost": "60",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios unleashes a wave of energy in a cone in the target direction, dealing 25 - 65 (based on level) (+ 56% - 80% (based on level) bonus AD) (+ 70% AP) physical damage to all enemies hit and locking onto each of them. After 0.25 seconds, Aphelios then fires a volley of attacks at each locked-on target from his current off-hand weapon, dealing 100% AD physical damage and applying on-hit effects. The damage is affected by critical strike modifiers. There is no range limit for locked-on targets.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
      "maxCharges": -1,
      "notes": "The volley applies  area damage and the follow up attacks from the off-hand weapon deal  basic damage.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe hitbox also includes a very small portion behind Aphelios' character model.\nDuskwave's name is modified based on Aphelios' off-hand weapon:\n Precision Duskwave\n Resurgent Duskwave\n Binding Duskwave\n Arcing Duskwave\nAphelios is locked out of declaring attacks until the volley of attacks have been resolved.\nThe automatic attacks do not trigger any on-attack effects.\n Pix does not increase the damage of the volley.\nThe volley of attacks won't deal any damage, if they are  dodged,  blocked, or if Aphelios is  blinded.",
      "projectile": "TRUE",
      "resource": "Mana",
      "spellEffects": "special",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "650"
    },
    {
      "key": "Q",
      "name": "Sentry",
      "affects": "Enemies",
      "blurb": "Active: Aphelios deploys a lunar sentry that gains a copy of his off-hand weapon and attacks with it, dealing physical damage.",
      "castTime": "0.25",
      "cooldown": "9",
      "cost": "60",
      "damageType": "Physical damage",
      "effectRadius": "500",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios deploys a lunar sentry at the target location that arms after 0.35 seconds, lasting for up to 20 seconds, during which it is inactive and untargetable. The sentry activates if an enemy is within range of it, reducing its duration to 4 seconds and becoming targetable. Sentries have 6 health and take 3 damage per ranged basic attack and 4 damage per hit by abilities. Turret attacks destroy sentries instantly.</p>"
        },
        {
          "description": "The sentry grants sight of its surroundings and autonomously attacks the nearest visible enemy in range with a replica of Aphelios' current off-hand weapon, dealing 35 - 125 (based on level) (+ 42% - 60% (based on level) bonus AD) (+ 50% AP) physical damage per hit. The sentry can critically strike for (175% + 40%) damage and benefits from both Aphelios' attack speed and critical strike chance at 100% effectiveness."
        },
        {
          "description": "See Pets for more details about the sentry."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/q",
      "maxCharges": -1,
      "notes": "Sentry's name is modified based on Aphelios' off-hand weapon:\n Precision Sentry\n Resurgent Sentry\n Heals Aphelios for any damage it deals.\nAttacks cannot be intercepted by  Wind Wall and  Unbreakable.\n Binding Sentry\n Incendiary Sentry\nThe Sentry will stop upon colliding with  Wind Wall. It will be deployed in front of the wall.\nThe Sentry's attacks can be  dodged and  blocked, but not missed from being  blinded.",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "spellEffects": "spell",
      "targeting": "Location",
      "targetRange": "475"
    },
    {
      "key": "W",
      "name": "Phase",
      "blurb": "Active:  Aphelios switches between his main weapon and off-hand weapon.",
      "castTime": "None",
      "cooldown": "0.8",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios switches between his main weapon and off-hand weapon over 0.25 seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/w",
      "maxCharges": -1,
      "notes": "Switching does not interrupt any commands Aphelios was issued before or during Phase.",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Weapon Queue System",
      "blurb": "The icon of this ability reflects the next weapon that is the next in  Aphelios' weapon queue.",
      "cooldown": "0",
      "cost": "0",
      "effects": [
        {
          "description": "The icon of this ability reflects the next weapon that is in reserve."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios receives a text prompt of the weapon Alune will create next.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/e",
      "maxCharges": -1,
      "notes": "This ability also includes the icon of the off-hand.",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Moonlight Vigil",
      "affects": "Enemies",
      "blurb": "Active:  Aphelios fires a concentrated blast of moonlight that explodes upon hitting an enemy champion, dealing physical damage to enemy champions in the area.",
      "castTime": "0.6",
      "cooldown": "120 / 110 / 100",
      "cost": "100",
      "damageType": "Physical damage",
      "effectRadius": "300",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aphelios casts forth a lunar spotlight in the target direction that briefly grants sight of the area along its path and stops upon illuminating an enemy champion. Alune smites the area centered on the illuminated target, dealing 125 / 175 / 225 (based on level) (+ 20% bonus AD) (+ 100% AP) physical damage to enemy champions struck and locking-on to each target hit, as well as granting sight of the area for 2 seconds.</p>"
        },
        {
          "description": "After 0.3 seconds of the illumination, attacks based on Aphelios' current main weapon will launch from the sky against each locked-on target, dealing 100% AD physical damage and applying on-hit effects. These attacks can critically strike for (120% + 40%) damage. There is no range limit for locked-on targets.\n<p class=\"ability-effect\"><span class=\"ability-header\"> Calibrum:</span> Applies an empowered mark that deals 50 / 80 / 110 (based on level) bonus physical damage per mark consumed.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Severum:</span> Heals Aphelios for 250 / 350 / 450 (based on level) if at least one enemy champion is hit.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Gravitum:</span> Increases the initial slow to 99% and empowers Binding Eclipse to root targets affected by the enhanced slow for 1.35 seconds.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Infernum:</span> The initial blast deals 50 / 100 / 150 (based on level) (+ 25% bonus AD) bonus physical damage.[ The attack instead deals 110% AD physical damage against locked-on targets, and causes an explosion of bolts in a 400-radius circle that deals 74.25% / 99% (based on level) AD physical damage to targets hit. ][ Performs Infernum's attacks and Infernum's bolts in a 400-radius circle: primary targets are dealt Infernum's primary damage; secondary targets are dealt 90% of Infernum's regular bolt damage; both are modified by Moonlight Vigil's critical damage modifier. ]Enemy champions will take damage from overlapping areas.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Crescendum:</span> Generates 5 additional spectral Chakrams that return to Aphelios from the first enemy champion hit, for a total of 6, on top of those from other targets hit.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Aphelios/ability-icon/r",
      "maxCharges": -1,
      "notes": "When critically striking, the attacks on locked-on targets when using  Severum and  Crescendum deal slightly more than 120% damage.(bug) It is currently unknown where this damage originates from.\nFor example, at level 6 with no  attack damage bonuses, Aphelios will deal 80.7471 damage (approximated) from those attacks, whereas they are normally expected to deal 76.902. This discrepancy increases with higher attack damage.\nPENDING FOR TEST: It is also unknown whether this is just a Practice Tool bug.\nAttacks do not apply on-attack effects.\nThe attacks always count as  projectiles unless  Severum is being used. The lunar spotlight, however, may always be intercepted regardless of which weapon is in play as the main weapon.\nDue to this fact, non- Severum attacks will hit targets that are farther away from the center of the blast at a slightly longer delay.\n Spell shield will block Moonlight Vigil's initial detonation damage but does not prevent the attacks from locking-on.\nAll attacks from Moonlight Vigil  critically strike independently from each other.\nThis includes  Infernum's bolts, which also critically strike independently from the primary attack's damage.\nChanging weapons while Moonlight Vigil is in flight does not change the effect it has when it hits.\nThis ability will cast from wherever the caster is at the start of the cast time.\nMoonlight Vigil's effect radius is centered around the location of the missile as it collides.\nWith  Severum, the extra flat heal is given only once, not per target. However, all damage done by Moonlight Vigil with it also heals him from Severum's  own passive effect.\nWith  Infernum, 14 fire bolts splash from each target hit (18 for  critical strikes). Bolts do not activate if Moonlight Vigil's initial damage kills the target.\nWith  Crescendum, 1 spectral chakram is generated for every target hit, meaning it is possible to generate up to 10 spectral chakrams with one cast of Moonlight Vigil if it hits 5 enemy champions.\nThe locked-on attacks' can be  dodged and  blocked, but won't be prevented if Aphelios is  blinded.\nPreventing the attack also prevents the additional effect (e.g. marking them with  Gravitum or granting  spectral chakrams).\nMoonlight Vigil has different visual effects changed accordingly to each weapon. This may vary depending on the skin, this showcases the default:\n\n\n\n Calibrum\n\n\n\n Severum\n\n\n\n Gravitum\n\n\n\n Infernum\n\n\n\n Crescendum",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "speed": "1000",
      "spellEffects": "aoe",
      "spellshieldable": "special",
      "targeting": "Direction",
      "targetRange": "1300"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 20,
    "difficulty": 3
  },
  "faction": "mount-targon",
  "lore": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.",
  "patchLastChanged": "25.12",
  "positions": [
    "Bottom"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2019-12-11",
  "resource": "Mana",
  "roles": [
    "Marksman"
  ],
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 102
    },
    "healthRegen": {
      "flat": 3.25,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 348,
      "perLevel": 42
    },
    "manaRegen": {
      "flat": 6.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 2.3
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 110
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
      "flat": 0.665,
      "perLevel": 2.1
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.23
    },
    "attackTotalTime": {
      "flat": 1.5
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 550
    }
  }
}
export default champion