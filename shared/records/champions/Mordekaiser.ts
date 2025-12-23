// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const champion: Champion = {
  "id": 82,
  "key": "Mordekaiser",
  "name": "Mordekaiser",
  "title": "the Iron Revenant",
  "abilities": [
    {
      "key": "P",
      "name": "Darkness Rise",
      "affects": "Self / Enemies",
      "blurb": "Innate:  Mordekaiser's basic attacks deal bonus magic damage.",
      "damageType": "Magic damage",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Mordekaiser's basic attacks are empowered to deal 40% AP bonus magic damage on-hit.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Mordekaiser generates a stack for each enemy champion or large monster damaged by his basic attacks or basic abilities, lasting for 4 seconds, refreshing on subsequent triggers, and stacking up to 3 times. At 3 stacks, he gains Darkness Rise.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Darkness Rise:</span> Mordekaiser gains 3% / 6% / 9% (based on level) bonus movement speed and deals[ 5 (+ 30% AP) (+ 1% - 5% (based on level) of target's maximum health) magic damage every second ][ 0.625 (+ 3.75% AP) (+ 0.13% - 0.63% (based on level) of target's maximum health) magic damage every 0.125 seconds ]to nearby enemies. Against monsters, the damage is capped at[ 40 - 200 (based on level) per second. ][ 5 - 25 (based on level) per 0.125 seconds. ]</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/p",
      "notes": "Mordekaiser has a stack counter under his health bar that is not visible to other champions. It will light up when the maximum effect is active.\nDarkness Rise's area damage alone does not refresh Darkness Rise's buff.\nIf Darkness Rise is activated through either  Obliterate or  Death's Grasp, it will be treated as the same cast instance as the triggering spell.(bug)\nUnder these conditions, Darkness Rise will fail to interact with effects such as  Conqueror, but will interact with effects such as  Focused Will, which would normally not interact with innate abilities.(bug)[3]\nDarkness Rise's damage will be grouped with the triggering spell's damage in the death recap.(bug)[4]",
      "spellEffects": "aoedot",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Obliterate",
      "width": "90 - 150",
      "affects": "Enemies",
      "blurb": "Active:  Mordekaiser smashes the area in the target direction, dealing magic damage to enemies within,  increased if it hits only one enemy.",
      "castTime": "0.5",
      "cooldown": "8 / 7 / 6 / 5 / 4",
      "cost": "0",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser strikes his mace down in a line in the target direction, dealing magic damage to enemies within, increased if only one enemy is hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "0 / 2.65 / 5.29 / 7.94 / 10.59 / 13.24 / 15.88 / 18.53 / 21.18 / 23.82 / 26.47 / 29.12 / 31.76 / 34.41 / 37.06 / 39.71 / 42.35 / 45"
                },
                {
                  "values": "80 / 115 / 150 / 185 / 220"
                },
                {
                  "unit": "% bonus AD",
                  "values": "120"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            },
            {
              "attribute": "Damage Increase",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 35 / 40 / 45 / 50"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/q",
      "notes": "This ability always employs Quick cast.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe ability will cast to wherever the caster's cursor was at the start of cast time.\nIf Mordekaiser's location changes during the cast time, the visual effects of Obliterate will be divided into three sections: one forming toward the caster's cursor at the start of the cast, one forming toward the original cast direction, and one following Mordekaiser's facing direction. Only the first will portray the spell's effect accurately.(bug)[2]\nApplies  spell damage if it hits one target and  area damage to multiple targets.\nObliterate's damage against isolated enemies at:\nRank 1: 104 : 162.5 (based on level) (+ 156% bonus AD) (+ 91% AP)\nRank 2: 155.25 : 216 (based on level) (+ 162% bonus AD) (+ 94.5% AP)\nRank 3: 210 : 273 (based on level) (+ 168% bonus AD) (+ 98% AP)\nRank 4: 268.25 : 333.5 (based on level) (+ 174% bonus AD) (+ 101.5% AP)\nRank 5: 330 : 397.5 (based on level) (+ 180% bonus AD) (+ 105% AP)",
      "projectile": "FALSE",
      "spellEffects": "special",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Indestructible",
      "affects": "Self",
      "blurb": "Passive:  Mordekaiser stores a portion of the damage he deals and receives as Potential Shield, up to a portion of his maximum health. This begins to decay after a brief time without fighting.",
      "castTime": "none",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Mordekaiser stores 45% of the post-mitigation damage he deals and 7.5% of the pre-mitigation damage he takes,[ reduced by 75% for non-champion sources, ][ reduced to 11.25% of damage dealt and 3.75% of damage taken for non-champion sources, ]as Potential Shield on his secondary resource bar, up to 30% of his maximum health. The Potential Shield decays by 8 - 25 (based on level) every second after not dealing or taking damage for 1 second. While Indestructible is not on cooldown, the Potential Shield will not decay below a minimum of 5% of his maximum health, and it will be set to that amount when it comes off cooldown if it was previously below it.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser consumes his Potential Shield to grant himself a shield for the same amount for 4 seconds. The shield decays exponentially over the duration. Indestructible can be recast after 0.5 seconds while the shield is active.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Mordekaiser consumes the remaining shield, healing for a portion of the amount.</p>",
          "leveling": [
            {
              "attribute": "Shield to Healing",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "35 / 37.5 / 40 / 42.5 / 45"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/w",
      "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Death's Grasp",
      "width": "200",
      "affects": "Self, Enemies",
      "blurb": "Passive:  Mordekaiser gains  magic penetration.",
      "castTime": "0.25",
      "cooldown": "18 / 16 / 14 / 12 / 10",
      "cost": "0",
      "damageType": "Magic damage",
      "effectRadius": "800 / 200",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Mordekaiser gains magic penetration.</p>",
          "leveling": [
            {
              "attribute": "Magic Penetration",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "5 / 7.5 / 10 / 12.5 / 15"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser summons a claw in the target direction that grants sight of the area. After 0.5 seconds, it deals magic damage to enemies within and pulls them 250 units.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 75 / 90 / 105 / 120"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/e",
      "notes": "Death's Grasp will still  pull even if Mordekaiser  dies.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "projectile": "FALSE",
      "speed": "3000",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "700 / 900"
    },
    {
      "key": "R",
      "name": "Realm of Death",
      "affects": "Enemies",
      "castTime": "0.5",
      "cooldown": "140 / 120 / 100",
      "cost": "0",
      "effectRadius": "1200",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser aims his mace towards the target enemy champion, slowing them by 75% and revealing them over the cast time, and then banishing them with him to the Death Realm for 7 seconds. Mordekaiser also consumes the target's soul for 7 seconds, healing himself for 10% of their maximum health and reducing their current ability power, total attack speed, maximum health, armor, magic resistance, and size by 10% for the duration. Additionally, the target's base attack damage is reduced by 10% of their current total AD for the same duration. Mordekaiser gains the reduced stats of the target for himself for the same duration, and if the target dies while inside the Death Realm, he keeps their partial stats until they respawn.</p>"
        },
        {
          "description": "Units between realms see each other as spirits, considering each other dead and negating any interactions between each other. Only Mordekaiser and the target will enter the realm; other champions cannot follow them. Everything that occurs inside the Death Realm is hidden to units outside of it, and vice versa. Most pets still inside the realm are killed at its end."
        },
        {
          "description": "If one of the two affected champions leave the Death Realm, because of having died or having it dispelled, the other will do so as well."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/r",
      "notes": "Mordekaiser's Realm of Death. Champions outside of the death realm are seen as spirits. Blue spirits (above Mordekaiser) are allied champions while red spirits (below Mordekaiser) are enemy champions.\nAlly spirit\nEnemy spirit\nThe Death Realm is a battlefield that exists outside of the normal realm in an alternate \"dimension\". It exists only for Mordekaiser and his target. It consists of an arena that has a radius of 1200 units and includes any terrain features that would exist in the map of the normal realm, including walls and  brushes.\nThe boundaries of the arena are impassable but not considered terrain themselves ( Unstoppable Onslaught exception), and enemies that try to move out of the area will be displaced back inside.\n Dashes,  blinks,  displacements and other forms of movement will cap their effect range to the boundary. Targets will stop at the boundary even after it expired.\nDuring the cast time of Realm of Death, it is possible to pathfind outside the boundaries of the arena by issuing a movement command toward an area that becomes inaccessible due to terrain inside the Death Realm.(bug)[33]\nRealm of Death retains Mordekaiser's previous current health percentage when granting him a portion of the target's maximum health.\nRealm of Death  healing is affected by healing modifiers.\nRealm of Death will cancel and go on cooldown after its cast time if:\nThe target is  displacement immune,  crowd control immune or protected by a  spell shield.\nNote that all of the above are ineffective if they are applied after the target has been banished.\nThe target is a  clone or  Sion's  Glory in Death.\nIf the target becomes  untargetable,  dies, is too far away or Mordekaiser loses  sight of them due to  nearsight during the cast time, this ability will cancel but does not go on  cooldown.\nIf either Mordekaiser or the target  dies at the same time of the transition into the Death Realm, the Death Realm will not end prematurely and will continue until its full duration has ended.(bug)[34]\nIf the target dies this way, Mordekaiser will not keep their stats after leaving the Death Realm.(bug)\n Tahm Kench's  Devour will always trigger this bug if used during the cast of Realm of Death and the spit would kill Mordekaiser.(bug)[35]\nIf Mordekaiser or the target cast another Realm of Death, the affected champions will remain stuck for the duration of the new circle.\nThe previous circle will be overridden by the new one; it will be dispelled to enter the new circle.\n Spell shield will not block the initial  slow.\nThe  reveal effect lasts for 1.25 seconds from the start of the cast time if the cast does not complete. Otherwise, the reveal ends as soon as the cast time completes.\nUpon entering or leaving the Death Realm, targets revealed by effects such as  Ignite or  Ashe's  Hawkshot will keep the  reveal VFX but will stop being revealed.(bug)[36]\nIf the target's  health is lower than the amount that should be stolen, they will be brought down to 1 health. Mordekaiser will still get the intended amount of maximum health.\nIf the target's  health is higher than their  health after the reduction, they will lose the excess HP on top of taking 10% of their maximum health as damage. This happens because Realm of Death first reduces 10% of the target's maximum health, and then deals an additional 10% of their maximum health as damage.\nEntering or leaving the Death Realm will cause all targeted  projectiles to be  destroyed.\nThe transition in and out of the Death Realm doesn't interrupt  channels.\n Grand Starfall will always be interrupted by the transition into the realm.\nRealm of Death will not be dispelled if either of the two affected champions enter  resurrection after taking lethal damage. It is dispelled if the target enters a  zombie state.\nAny active  tether effects (both friendly and hostile ones) existing on either of the two champions entering the realm will be broken (unless the tether is between those two).\nUpon entering the realm, Mordekaiser and the target are  cleansed from all  forced action effects.\nThe cleanse will occur even if the source of the crowd control enters the realm.(bug)\nUnlike the other stats, Mordekaiser does not steal enemy total size; instead he gains 10% of his own size and reduces the enemy's size by 10% of theirs (all size modifiers stack additively).\nMordekaiser grows in size over 0.25 seconds after successfully stealing his targets' stats, and shrinks over 0.25 seconds after the buff runs out again. The target shrinks over 0.25 seconds after their stats are stolen, but grows back to normal size instantly when the effect ends.\nWhile Mordekaiser has hold of his enemy's stats, that champion's circular portrait will appear as a pip next to his health bar, visible to all players.\nThe champion's portrait will ocasionally stay even after Mordekaiser has lost hold of the enemy's stats.(bug)\nRealm of Death's interactions with other elements/abilities (This list might be incomplete, last updated on patch V25.23):\nMultiple Death Realms (possible through a  hijacked Realm of Death or if multiple Mordekaisers are in the same match) spawned will exist in the same realm, allowing champions to see and interact with champions bound to other circles. Champions are only affected by their boundaries and are not able to see the others.\nIf another Realm of Death is cast while one is already active, upon leaving, the spirits from the second Realm of Death will be invisible from the perspective of the players affected by the first Realm of Death.(bug)[37]\n Tahm Kench's  Devour can carry a target outside of their circle, but they will be displaced back inside once  Regurgitated.\nAn active  Cease and Desist on a target outside the perimeter will cause  Vi to continue her charge until her circle ends. She can knock back and damage secondary targets multiple times.\nChampions inside the Death Realm continue gaining  gold and  experience from any source, which includes nearby and global bounties as well as neutral buffs.\nStructures exist in all realms at the same time.  Turrets will behave normally as if all units were in the same realm.\nJungle plants ( Blast Cone,  Honeyfruit,  Scryer's Bloom) will not take presence between realms.\nThe  Blast Cone's landing indicator will still be visible while in the Death Realm and within its range.(bug)[38]\nEpic  monsters, with the exception of  Voidgrub's, will be visible for a brief moment after entering the Death Realm, but they will be untargetable.(bug)[39]\n Hex-gates on  Hextech Rift will not be present between realms.\n Eye of the Herald and  Teleport are disabled while in the Death Realm.\nControllable pets and  clones can still be commanded between realms.\nMordekaiser will be given gold, if applicable, for  pets killed at the end of Realm of Death.\n Illaoi's  Tentacles will not be killed at the end of Realm of Death.(note)\n Annie's  Tibbers,  Heimerdinger's  H-28Q Apex Turret,  Ivern's  Daisy and  Yorick's  Maiden are considered as \"large pets\" for the purposes of this ability and will follow their respective  champions between realms.\nIf Mordekaiser dies inside of Death Realm while his  Darkness Rise is hitting any of these pets, Darkness Rise will keep affecting the pets until they die or Darkness Rise deactivates normally.(bug)[40]\nSwitching realms detaches all  attached champions on either of the two champions entering the realm.\nThe allied health, resource, and ultimate indicators (champion portraits located on the screen) will not update between realms as the players have no  vision of them.\nPings used in the Death Realm will appear in the chat and mini-map, but will not appear in the map.(note)\nAny spawned terrain while in the Death Realm will remain inside until expired. They will not be destroyed.\nExcept for some cases, spells that require a target to be cast (e.g  Akali's  Shuriken Flip,  Twitch's  Contaminate) will not affect enemies in other realms nor will be castable if there's no targets in the same realm as the caster.\n Amumu's  Bandage Toss,  Blitzcrank's  Rocket Grab,  Leona's  Zenith Blade,  Nautilus'  Dredge Line,  Pyke's  Bone Skewer and  Thresh's  Death Sentence will still hit targets if their caster switches realms before they hit.\n Camille's  The Hextech Ultimatum,  Dr. Mundo's  Goes Where He Pleases,  Nunu & Willump's  Biggest Snowball Ever! and  Absolute Zero,  Pyke's  Death from Below,  Ryze's  Realm Warp,  Shen's  Spirit's Refuge,  Taliyah's  Worked Ground and  Zed's  Shadows will follow their caster between realms.\n Braum's  Glacial Fissure[41],  Pantheon's  Grand Starfall*[42],  Singed's  Mega Adhesive[43],  Varus'  Hail of Arrows[44],  Ziggs'  Satchel Charge*[45] and  Zilean's  Time Bomb*[46] will follow their caster between realms but will only be visible in the realm they were cast.(bug)\n Ahri's  Orb of Deception will stay in the realm it was cast.\nThe orb will still go back towards  Ahri's position.\n Akshan's  Avengerang will stay in the realm it was cast.\nThe boomerang will only go back towards  Akshan's position if it was already doing so during the realm switch.\n Akshan's  Comeuppance bullets will get destroyed if he switches realms, even if its target is Mordekaiser.\n Anivia's  Glacial Storm will not be dispelled if Anivia switches realms, but it will only be present in the realm it was cast.\n Bel'Veth's  Void Corals will only be present in the realm they spawned in.\nIf  Bel'Veth switches realms while she is consuming a Void Coral, the Void Coral will dissappear and she will not get her True Form nor deal damage to nearby enemies.\n Camille will still be able to use  Hookshot's dash if she switches realms before the spell hits.\n Ekko's  Parallel Convergence will only be visible in the realm it was cast, but he will still be able to trigger the spell's effect from another realm and it will only affect enemies in said realm.(bug)[47]\n Fizz's  Chum the Waters will follow its target between realms.\n Galio's  Winds of War will follow him if the spell was already on the ground before the realm switch, but it will only be visible in the realm it was cast.(bug)[48]\n Gnar's  Boulder Toss boulder will only be visible in the realm it was cast, but he can still pick it up if he goes to its location.(bug)[49]\n Illaoi's  Test of Spirit tether will be destroyed if her target switches realms.\n Test of Spirit's target will not be made into a Vessel.\n Irelia's  Flawless Duet will be recast automatically when switching realms, and will only affect enemies in the realm it was cast.\nIn some rare cases the spell's effect might follow  Irelia between realms, but it will only be visible in the realm it was cast.(bug)[50]\n Ivern's  Rootcaller can still be recast if the target is in a different realm than him.\n Ivern's  Brushmaker brushes might be visible for a few seconds after switching realms.(bug)[19]\nPassing by the position of a brush created by  Brushmaker in another realm will make units transparent for a few seconds, but they will still be visible to the enemy team.(bug)[19]\n Kai'Sa's  Killer Instinct can only be cast towards enemies in the same realm she is at.\n Kalista's  Fate's Call cannot be cast if her  oathsworn is in another realm, but if the spell was cast before entering the Death Realm, it will function as normal and will only affect targets in the oathsworn's realm.\n Karthus'  Requiem will damage enemies in all realms.\n Kayle's  Divine Judgment grants her  invulnerability, but Realm of Death will still deal 10% of her maximum health as damage when reducing her stats.\n Kayn's  Umbral Trespass will be interrupted and will not deal damage if its target switches realms.\n Kog'Maw's  Void Ooze will follow him between realms.(bug)[20]\nA part of the VFX will be left in the realm it was cast.(bug)[20]\n Lillia's  Lilting Lullaby will only affect enemies in the same realm as her.\n Lissandra's  Glacial Path can still be recast if the spell was initially cast in another realm.\n Lulu's  Pix will follow her between realms.\nIf  Pix is on another  champion, it will visually stay in  Lulu's realm but will keep affecting enemies in the Death Realm.(bug)[51]\n Pix will still be able to return to  Lulu as normal, even if her ally's still in the Death Realm.\n Lux's  Final Spark will follow her between realms.\nThe beam's VFX will only be visible in the realm it was cast.(bug)[52]\n Malzahar's  Void Shift is special cased to not resist the slow but instead resist the realm switch after the cast completes.\n Malzahar's  Call of the Void will follow him if used moments before the realm switch. Also, a part of the VFX will be left in the realm it was cast.(bug)[53]\n Mel's  Golden Eclipse will only deal damage to enemies in the same realm she is at the end of the cast.\n Miss Fortune's  Make It Rain will follow her between realms.(bug)[24]\nThe spell's area VFX will not follow.(bug)[24]\n Naafiri's  Hounds' Pursuit dash will still go through if she switches realms during the cast.\n Nasus'  Spirit Fire will stay in the realm it was cast.\nHowever, the spell will keep affecting enemies in another realm if they were already affected by it before switching realms and they have not left the spell's area.(bug)[54]\n Nautilus'  Depth Charge will not follow its target between realms.(note)\n Neeko cannot be targeted by Realm of Death if she is disguised as a non  champion unit.\n Nilah's  Apotheosis will only deal damage to enemies in the realm it was cast.(note)\nIt will still heal/shield targets in  Nilah's realm at the end of the cast.\n Nocturne's  Paranoia only applies  nearsight to enemy champions in the same realm as him.\n Orianna's  Ball will go back to her after switching realms.\n Orianna's  Command: Shockwave will follow her between realms if her  ball is not on the ground.\nHowever, if her  ball is on the ground,  Command: Shockwave will still follow her between realms but its shockwave will be invisible.(bug)[55]\nAdditionally, if  Command: Shockwave is buffered while  her ball is still flying and she switches realms,  Command: Shockwave's will appear on top of  Orianna, but the actual shockwave will occur at the location  her ball was supposed to land.(bug)[56]\n Poppy's  Keeper's Verdict can send Mordekaiser outside of the Death Realm arena if she uses it during Realm of Death's cast.(bug)[57]\n Pyke's  Phantom Undertow will not follow him if he switches realms while the Phantom is coming back.\n Rakan's  Grand Entrance will follow him between realms, but its initial VFX will not.(bug)[58]\n Rek'Sai's  Tunnels will not follow her between realms.\nIf  Rek'Sai is already on a tunnel when switching realms, her  dash will not be interrupted.\n Sion's  Decimating Smash VFX will follow him between realms, but the spell will only affect enemies in the realm it was cast.(bug)[59]\n Soraka's  Wish will heal targets in all realms.\n Swain's  Nevermove can still be recast if the target is in another realm, but nothing will happen.(note)\n Sylas'  Abduct will not hit enemies if he switches realms during the spell's animation.\n Syndra's  Force of Will will cancel on realm switch.\n Syndra's  Unleashed Power will only affect enemies in the realm it was cast, even if its target is Mordekaiser.\n Tahm Kench's  Devour target will get spit on realm switch.\nThe spell will still deal damage.\n Taliyah's  Weaver's Wall will get interrupted on realm switch.\n Taric's  Bastion link will break on realm switch.\n Thresh's  Dark Passage will go back to him on realm switch.\n Thresh's  The Box pillars will be visible in all realms, but it will only affect enemies in the realm it was cast.(bug)[60]\n Udyr's  Wingborne Storm will stay in the realm it was cast.\nIf the storm's target is sent to a different realm than  Udyr, the storm will start following him instead.\nThe storm's tracking VFX will stay in its target until the end of the spell.(bug)\n Urgot's  Fear Beyond Death cannot be recast if the target is not in the same realm as him.\nIf the target is being reeled in however, the execution at the end of the  channel will take place regardless of the realm either he or the target is in.\n Viego's  Harrowed Path will follow him between realms.(note)\nThe ground mist will be visible in all realms.(bug)\n Xayah's  Bladecaller cannot call  Feathers between realms.\n Yasuo's  Last Breath will be interrupted if its target switches realms, unless the target is Mordekaiser.\n Yone's  Soul Unbound cannot be recast inside of the Death Realm.\n Yorick's  Maiden will not die with him if he dies inside of the Death Realm.(bug)[61]\n Eulogy of the Isles will still go on cooldown.\n Zaahen's  Dreaded Return will only  pull affected enemies in the same realm it was cast.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "spellshieldable": "special",
      "targeting": "Unit",
      "targetRange": "650"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 80,
    "difficulty": 2
  },
  "fullName": "Sahn-Uzal",
  "lore": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead.",
  "patchLastChanged": "25.19",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2010-02-24",
  "resource": "Shield",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 645,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 0
    },
    "manaRegen": {
      "flat": 0
    },
    "armor": {
      "flat": 37,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 61,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 125
    },
    "pathingRadius": {
      "flat": 35
    },
    "gameplayRadius": {
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 1
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.5
    },
    "attackTotalTime": {
      "flat": 2.366
    },
    "attackDelayOffset": {
      "flat": -0.1
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion