// Updated Patch 25.12 - 06/16/2025 01:46:56 PM CDT

export const runePaths: PathRecord = {
  Domination: [
    [
      {
        id: 8112,
        key: 'Electrocute',
        name: 'Electrocute',
        description: 'Hitting a champion with 3 separate attacks or abilities in 3s deals bonus adaptive damage.',
        details: 'Hitting a champion with 3 separate attacks or abilities within 3s deals bonus adaptive damage.\n\nDamage: 70 - 240 (+0.1 bonus AD, +0.05 AP) damage.\nCooldown: 20s\n\n\'We called them the Thunderlords, for to speak of their lightning was to invite disaster.\'',
        path: 'Domination',
        runeIndex: 0,
      },
      {
        id: 8128,
        key: 'DarkHarvest',
        name: 'Dark Harvest',
        description: 'Damaging a low health champion inflicts adaptive damage and harvests a soul from the victim.',
        details: 'Damaging a Champion below 50% health deals adaptive damage and harvests their soul, permanently increasing Dark Harvest\'s damage by 11.\n\nDark Harvest damage: 30 (+11 damage per soul) (+0.1 bonus AD) (+0.05 AP)\nCooldown: 35s (resets to 1.0s on takedown)',
        path: 'Domination',
        runeIndex: 1,
      },
      {
        id: 9923,
        key: 'HailOfBlades',
        name: 'Hail of Blades',
        description: 'Gain a large amount of Attack Speed for the first 3 attacks made against enemy champions.',
        details: 'Gain 140% (80% for ranged champions) Attack Speed when you attack an enemy champion for up to 3 attacks.\n\nNo more than 3s can elapse between attacks or this effect will end.\n\nCooldown: 10s.\n\nAttack resets increase the attack limit by 1.\nAllows you to temporarily exceed the attack speed limit.',
        path: 'Domination',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8126,
        key: 'CheapShot',
        name: 'Cheap Shot',
        description: 'Deal bonus true damage to enemy champions with impaired movement or actions. ',
        details: 'Damaging champions with impaired movement or actions deals 10 - 45 bonus true damage (based on level).\n\nCooldown: 4s\nActivates on damage occurring after the impairment.',
        path: 'Domination',
        runeIndex: 0,
      },
      {
        id: 8139,
        key: 'TasteOfBlood',
        name: 'Taste of Blood',
        description: 'Heal when you damage an enemy champion.',
        details: 'Heal when you damage an enemy champion.\n\nHealing: 16-40 (+0.1 bonus AD, +0.05 AP) health (based on level)\n\nCooldown: 20s',
        path: 'Domination',
        runeIndex: 1,
      },
      {
        id: 8143,
        key: 'SuddenImpact',
        name: 'Sudden Impact',
        description: 'Damaging basic attacks and abilities deal bonus true damage to enemy champions after using a dash, leap, blink, teleport, or when leaving stealth.',
        details: 'Damaging basic attacks and abilities deal a bonus 20 - 80 True Damage based on level to enemy champions after using a dash, leap, blink, teleport, or when leaving stealth for 4s.\n\nCooldown: 10s',
        path: 'Domination',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8137,
        key: 'SixthSense',
        name: 'Sixth Sense',
        description: 'On a long Cooldown, automatically sense a nearby untracked and unseen ward, tracking it for the team. \n\nLevel 11: Also reveal the ward for 10s.',
        details: 'Automatically sense a nearby untracked and unseen ward, tracking it for the team. \n\nLevel 11: Also reveal the ward for 10s.\n\nThis effect has a 250 second Cooldown.',
        path: 'Domination',
        runeIndex: 0,
      },
      {
        id: 8140,
        key: 'GrislyMementos',
        name: 'Grisly Mementos',
        description: 'Collect 1 memento on champion takedowns, up to 18 total.\n\nGain 6 Trinket Haste for each collected.',
        details: 'Collect 1 memento on champion takedowns, up to 18 total.\n\nGain 6 Trinket Haste for each collected. In game modes where vision Trinkets do not exist, instead gain 3 Summoner Spell Haste.',
        path: 'Domination',
        runeIndex: 1,
      },
      {
        id: 8141,
        key: 'DeepWard',
        name: 'Deep Ward',
        description: 'Your wards in the enemy jungle are Deep, gaining Health and Duration.\n\nLevel 9: Wards in the river are also Deep.',
        details: 'Your wards in the enemy jungle are Deep. Deep wards gain +1 extra Health and +[30 - 45]s increased duration (+[45 - 150]s for Trinket stealth wards).\n\nLevel 9: Wards in the river are also Deep.',
        path: 'Domination',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8135,
        key: 'TreasureHunter',
        name: 'Treasure Hunter',
        description: 'Unique takedowns grant additional gold the first time they are collected. ',
        details: 'Gain an additional 50 gold the next time you collect a Bounty Hunter stack. Increase the gold gained by 20 gold for each Bounty Hunter stack, up to 130 gold.\n\nBounty Hunter stacks are earned the first time you get a takedown on each enemy champion.',
        path: 'Domination',
        runeIndex: 0,
      },
      {
        id: 8105,
        key: 'RelentlessHunter',
        name: 'Relentless Hunter',
        description: 'Unique takedowns grant permanent out of combat MS. ',
        details: 'Gain 8 Move Speed out of combat per Bounty Hunter stack. Bounty Hunter stacks are earned the first time you get a takedown on each enemy champion.',
        path: 'Domination',
        runeIndex: 1,
      },
      {
        id: 8106,
        key: 'UltimateHunter',
        name: 'Ultimate Hunter',
        description: 'Unique takedowns grant permanent cooldown reduction on your Ultimate. ',
        details: 'Your ultimate gains 6 Ability Haste, plus an additional 5 Ability Haste per Bounty Hunter stack. Bounty Hunter stacks are earned the first time you get a takedown on each enemy champion.',
        path: 'Domination',
        runeIndex: 2,
      },
    ],
  ],
  Inspiration: [
    [
      {
        id: 8351,
        key: 'GlacialAugment',
        name: 'Glacial Augment',
        description: 'Immobilizing an enemy champion will cause 3 glacial rays that slow nearby enemies and reduce their damage to your allies.',
        details: 'Immobilizing an enemy champion will cause 3 glacial rays to emanate from them towards you and other nearby champions, creating frozen zones for 3 (+ the immobilizing effect\'s duration) seconds that slow enemies for 20% (+90% per 100% Heal and Shield Power) (+6% per 100 Ability Power) (+7% per 100 bonus Attack Damage) and reduce their damage by 15% against your allies (not including yourself). \n\nCooldown: 25s',
        path: 'Inspiration',
        runeIndex: 0,
      },
      {
        id: 8360,
        key: 'UnsealedSpellbook',
        name: 'Unsealed Spellbook',
        description: 'Swap Summoner Spells while out of combat. Swapping to unique Summoner Spells will increase the rate at which you can make future swaps.',
        details: 'Swap one of your equipped Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 25s (initial swap cooldown is at 4 mins). \n\nYour first swap becomes available at 6 mins. \n\nSummoner Spells can only be swapped while out of combat. \nAfter using a swapped Summoner Spell you must swap 3 more times before the first can be selected again.\nSmite damage increases after two Summoner Spell swaps. ',
        path: 'Inspiration',
        runeIndex: 1,
      },
      {
        id: 8369,
        key: 'FirstStrike',
        name: 'First Strike',
        description: 'When you initiate champion combat, deal 7% extra damage for 3 seconds and gain gold based on damage dealt.',
        details: 'Attacks or abilities against an enemy champion within 0.25s of entering champion combat grant 10 gold and First Strike for 3 seconds, causing you to deal 7% extra  damage against champions, and granting 50% (35% for ranged champions) of bonus damage dealt as gold.\n\nCooldown: 25 - 15s',
        path: 'Inspiration',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8306,
        key: 'HextechFlashtraption',
        name: 'Hextech Flashtraption',
        description: 'While Flash is on cooldown it is replaced by Hexflash.\n\nHexflash: Channel, then blink to a new location.',
        details: 'While Flash is on cooldown it is replaced by Hexflash.\n\nHexflash: Channel for 2s to blink to a new location.\n\nCooldown: 20s. Goes on a 10s cooldown when you enter champion combat.',
        path: 'Inspiration',
        runeIndex: 0,
      },
      {
        id: 8304,
        key: 'MagicalFootwear',
        name: 'Magical Footwear',
        description: 'You get free boots at 12 min but you cannot buy boots before then. Each takedown you get makes your boots come 45s sooner.',
        details: 'You get free Slightly Magical Footwear at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.\n\nSlightly Magical Footwear grants you an additional 10 Move Speed.',
        path: 'Inspiration',
        runeIndex: 1,
      },
      {
        id: 8321,
        key: 'CashBack',
        name: 'Cash Back',
        description: 'Get some gold back when you purchase Legendary Items.',
        details: 'Get 6% Gold back when you purchase Legendary Items.',
        path: 'Inspiration',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8313,
        key: 'PerfectTiming',
        name: 'Triple Tonic',
        description: 'Upon reaching level 3, gain an Elixir of Avarice.\nUpon reaching level 6, gain an Elixir of Force.\nUpon reaching level 9, gain an Elixir of Skill. ',
        details: 'Upon reaching level 3, gain an Elixir of Avarice.\nUpon reaching level 6, gain an Elixir of Force.\nUpon reaching level 9, gain an Elixir of Skill. ',
        path: 'Inspiration',
        runeIndex: 0,
      },
      {
        id: 8352,
        key: 'TimeWarpTonic',
        name: 'Time Warp Tonic',
        description: 'Potions grant some restoration immediately.',
        details: 'Consuming a potion grants 40% of its health restoration immediately.',
        path: 'Inspiration',
        runeIndex: 1,
      },
      {
        id: 8345,
        key: 'BiscuitDelivery',
        name: 'Biscuit Delivery',
        description: 'Gain a free Biscuit every 2 min, until 6 min. Consuming or selling a Biscuit permanently increases your max health and restores health.',
        details: 'Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 2 mins, until 6 min.\n\nBiscuits restore 20 + 2% of your maximum health, increased by up to 100% based on missing Health. Consuming or selling a Biscuit permanently increases your max health by 30. ',
        path: 'Inspiration',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8347,
        key: 'CosmicInsight',
        name: 'Cosmic Insight',
        description: '+18 Summoner Spell Haste\n+10 Item Haste',
        details: '+18 Summoner Spell Haste\n+10 Item Haste',
        path: 'Inspiration',
        runeIndex: 0,
      },
      {
        id: 8410,
        key: 'ApproachVelocity',
        name: 'Approach Velocity',
        description: 'Bonus MS towards nearby enemy champions that are movement impaired, increased for enemy champions that you impair.',
        details: 'Gain 7.5% Move Speed towards nearby enemy champions that are movement impaired. This bonus is increased to 15% Move Speed for any enemy champion that you impair. \n\nActivation Range for CC from allies: 1000',
        path: 'Inspiration',
        runeIndex: 1,
      },
      {
        id: 8316,
        key: 'JackOfAllTrades',
        name: 'Jack Of All Trades',
        description: 'For each different stat gained from items, gain one Jack stack. Each stack grants you 1 Ability Haste.\n\nGain bonus Adaptive Force at 5 and 10 stacks.',
        details: 'For each different stat gained from items, gain one Jack stack. Each stack grants you 1 Ability Haste.\n\nGain 10 or 25 bonus Adaptive Force at 5 and 10 stacks, respectively.',
        path: 'Inspiration',
        runeIndex: 2,
      },
    ],
  ],
  Precision: [
    [
      {
        id: 8005,
        key: 'PressTheAttack',
        name: 'Press the Attack',
        description: 'Hitting an enemy champion 3 consecutive times deals bonus damage and amplifies your damage until you leave combat with champions.',
        details: 'Hitting an enemy champion with 3 consecutive basic attacks deals 40 - 160 bonus adaptive damage (based on level) and amplifies your damage dealt by 8% until you leave combat with champions.',
        path: 'Precision',
        runeIndex: 0,
      },
      {
        id: 8008,
        key: 'LethalTempo',
        name: 'Lethal Tempo',
        description: 'Attacking an enemy champion grants you Attack Speed, up to 6 stacks. At max stacks, deal bonus adaptive damage On-Attack.',
        details: 'Attacking an enemy champion grants you [6% Melee || 4% Ranged] Attack Speed for 6 seconds, up to 6. At max stacks, deal [9 - 30 Melee || 6 - 24 Ranged] bonus adaptive damage On-Attack, increased by 1% per 1% Bonus Attack Speed.',
        path: 'Precision',
        runeIndex: 1,
      },
      {
        id: 8021,
        key: 'FleetFootwork',
        name: 'Fleet Footwork',
        description: 'Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased MS.',
        details: 'Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized\n\nEnergized attacks heal you for 10 - 130 (+0.1 Bonus AD, +0.05 AP) and grant 20% Move Speed for 1s.\n\nFor Ranged Champions, Healing is 60% effective and Move Speed is 75% effective. All healing is 15% effective against Minions.',
        path: 'Precision',
        runeIndex: 2,
      },
      {
        id: 8010,
        key: 'Conqueror',
        name: 'Conqueror',
        description: 'Gain stacks of adaptive force when attacking enemy champions. After reaching 12 stacks, heal for a portion of damage you deal to champions.',
        details: 'Basic attacks or spells that deal damage to an enemy champion grant 2 stacks of Conqueror for 5s, gaining 1.8-4 Adaptive Force per stack. Stacks up to 12 times. Ranged champions gain only 1 stack per basic attack.\n\nWhen fully stacked, heal for 8% of the damage you deal to champions (5% for ranged champions).',
        path: 'Precision',
        runeIndex: 3,
      },
    ],
    [
      {
        id: 9101,
        key: 'AbsorbLife',
        name: 'Absorb Life',
        description: 'Killing a target heals you.',
        details: 'Killing a target heals you for @HealAmount@.',
        path: 'Precision',
        runeIndex: 0,
      },
      {
        id: 9111,
        key: 'Triumph',
        name: 'Triumph',
        description: 'Takedowns restore 5% of your missing health and grant an additional 20 gold. ',
        details: 'Takedowns restore 5% of your missing health, 2.5% of your max health, and grant an additional 20 gold. \n\n\n\'The most dangerous game brings the greatest glory.\' \n—Noxian Reckoner',
        path: 'Precision',
        runeIndex: 1,
      },
      {
        id: 8009,
        key: 'PresenceOfMind',
        name: 'Presence of Mind',
        description: 'Restore a small amount of mana or energy when damaging an enemy champion. Takedowns restore mana or energy.',
        details: 'Damaging an enemy champion restores 6-50 (80% for ranged) mana or 6 energy.\n\nTakedowns restore 15% of your maximum mana or energy. \n\nCooldown for damage restoration: 8s',
        path: 'Precision',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 9104,
        key: 'LegendAlacrity',
        name: 'Legend: Alacrity',
        description: 'Takedowns on enemies grant permanent Attack Speed. ',
        details: 'Gain 3% attack speed plus an additional 1.5% for every Legend stack (max 10 stacks).\n\nEarn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.',
        path: 'Precision',
        runeIndex: 0,
      },
      {
        id: 9105,
        key: 'LegendHaste',
        name: 'Legend: Haste',
        description: 'Takedowns on enemies grant permanent Basic Ability Haste. ',
        details: 'Gain 1.5 basic ability haste for every Legend stack (max 10 stacks).\n\nEarn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.',
        path: 'Precision',
        runeIndex: 1,
      },
      {
        id: 9103,
        key: 'LegendBloodline',
        name: 'Legend: Bloodline',
        description: 'Takedowns on enemies grant permanent Life Steal, up to a cap. Once the cap is reached, increase your max health. Weaker earlier but stronger later game than other Legend Runes.',
        details: 'Gain 0.35% Life Steal for every Legend stack (max 15 stacks). At maximum Legend stacks, gain 85 max health.\n\nEarn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.',
        path: 'Precision',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8014,
        key: 'CoupDeGrace',
        name: 'Coup de Grace',
        description: 'Deal more damage to low health enemy champions.',
        details: 'Deal 8% more damage to champions who have less than 40% health.',
        path: 'Precision',
        runeIndex: 0,
      },
      {
        id: 8017,
        key: 'CutDown',
        name: 'Cut Down',
        description: 'Deal more damage to high health enemy champions.',
        details: 'Deal 8% more damage to champions who have more than 60% health.',
        path: 'Precision',
        runeIndex: 1,
      },
      {
        id: 8299,
        key: 'LastStand',
        name: 'Last Stand',
        description: 'Deal more damage to champions while you are low on health.',
        details: 'Deal 5% - 11% increased damage to champions while you are below 60% health. Max damage gained at 30% health.',
        path: 'Precision',
        runeIndex: 2,
      },
    ],
  ],
  Resolve: [
    [
      {
        id: 8437,
        key: 'GraspOfTheUndying',
        name: 'Grasp of the Undying',
        description: 'Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.',
        details: 'Every 4s in combat, your next basic attack on a champion will:\nDeal bonus magic damage equal to 3.5% of your max health\nHeal you for 1.3% of your max health\nPermanently increase your health by 5\nRanged Champions: Damage, healing, and permanent health gained are 40% effective.',
        path: 'Resolve',
        runeIndex: 0,
      },
      {
        id: 8439,
        key: 'Aftershock',
        name: 'Aftershock',
        description: 'After immobilizing an enemy champion gain defenses and later deal a burst of magic damage around you.',
        details: 'After immobilizing an enemy champion, increase your Armor and Magic Resist by 35 + 80% of your Bonus Resists for 2.5s. Then explode, dealing magic damage to nearby enemies.\n\nDamage: 25 - 120 (+8% of your bonus health)\nCooldown: 20s\n\nResistance bonus from Aftershock capped at: 80-150 (based on level)\n',
        path: 'Resolve',
        runeIndex: 1,
      },
      {
        id: 8465,
        key: 'Guardian',
        name: 'Guardian',
        description: 'Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage based on level, you\'re both granted a shield.',
        details: 'Guard allies within 350 units of you, and allies you target with spells for 2.5s. While Guarding, if you or the ally take more than a small amount of damage over the duration of the Guard, both of you gain a shield for 1.5s.\n\nCooldown: 90 - 40 seconds\nShield: 45 - 120 + 12.5% of your ability power + 8% of your bonus health\nProc Threshold: 90 - 250 postmitigation damage',
        path: 'Resolve',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8446,
        key: 'Demolish',
        name: 'Demolish',
        description: 'Charge up a powerful attack against a tower while near it.',
        details: 'Charge up a powerful attack against a tower over 3s, while within 600 range of it. The charged attack deals 100 (+35% of your max health) bonus physical damage. \n\nCooldown: 45s',
        path: 'Resolve',
        runeIndex: 0,
      },
      {
        id: 8463,
        key: 'FontOfLife',
        name: 'Font of Life',
        description: 'Impairing the movement of an enemy champion heals nearby allied champions. ',
        details: 'Impairing the movement of an enemy champion restores @BaseHeal@ Health to you and the lowest health nearby allied champion.\n\n70% effect for Ranged Users.\n\nCooldown: 20s',
        path: 'Resolve',
        runeIndex: 1,
      },
      {
        id: 8401,
        key: 'ShieldBash',
        name: 'Shield Bash',
        description: 'Whenever you gain a shield, your next basic attack against a champion deals bonus adaptive damage.',
        details: 'Whenever you gain a new shield,  your next basic attack against a champion deals 5 - 30 (+2.5% Bonus Health) (+15.0% New Shield Amount) bonus adaptive damage.\n\nYou have up to 2s after the shield expires to use this effect.',
        path: 'Resolve',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8429,
        key: 'Conditioning',
        name: 'Conditioning',
        description: 'After 12 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 3%.',
        details: 'After 12 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 3%.',
        path: 'Resolve',
        runeIndex: 0,
      },
      {
        id: 8444,
        key: 'SecondWind',
        name: 'Second Wind',
        description: 'After taking damage from an enemy champion heal back some missing health over time. ',
        details: 'After taking damage from an enemy champion, heal for 4% of your missing health +3 over 10s.',
        path: 'Resolve',
        runeIndex: 1,
      },
      {
        id: 8473,
        key: 'BonePlating',
        name: 'Bone Plating',
        description: 'After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 (based on level) less damage.\n\nDuration: 1.5s\nCooldown: 55s',
        details: 'After taking damage from an enemy champion, the next 3 spells or attacks you receive from them deal 30-60 (based on level) less damage.\n\nDuration: 1.5s\nCooldown: 55s',
        path: 'Resolve',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8451,
        key: 'Overgrowth',
        name: 'Overgrowth',
        description: 'Gain permanent max health when minions or monsters die near you.',
        details: 'Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.\n\nWhen you\'ve absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health.',
        path: 'Resolve',
        runeIndex: 0,
      },
      {
        id: 8453,
        key: 'Revitalize',
        name: 'Revitalize',
        description: 'Gain 5% Heal and Shield Power.\n\nHeals and shields you cast or receive are 10% stronger on targets below 40% health.',
        details: 'Gain 5% Heal and Shield Power.\n\nHeals and shields you cast or receive are 10% stronger on targets below 40% health.',
        path: 'Resolve',
        runeIndex: 1,
      },
      {
        id: 8242,
        key: 'Unflinching',
        name: 'Unflinching',
        description: 'Gain Armor and Magic Resist when receiving crowd control.',
        details: 'Gain 10 Armor and Magic Resist when crowd controlled and for 2 seconds after.',
        path: 'Resolve',
        runeIndex: 2,
      },
    ],
  ],
  Sorcery: [
    [
      {
        id: 8214,
        key: 'SummonAery',
        name: 'Summon Aery',
        description: 'Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.',
        details: 'Damaging enemy champions with basic attacks or abilities sends Aery to them, dealing 10 - 50 based on level (+0.05 AP) (+0.1 bonus AD).\n\nEmpowering or protecting allies with abilities sends Aery to them, shielding them for 30 - 100 based on level (+0.05 AP) (+0.1 bonus AD).\n\nAery cannot be sent out again until she returns to you.',
        path: 'Sorcery',
        runeIndex: 0,
      },
      {
        id: 8229,
        key: 'ArcaneComet',
        name: 'Arcane Comet',
        description: 'Damaging a champion with an ability hurls a damaging comet at their location.',
        details: 'Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.\n\nAdaptive Damage: 30 - 130 based on level (+0.05 AP and +0.1 bonus AD)\nCooldown: 20 - 8s\n\nCooldown Reduction:\nSingle Target: 20%.\nArea of Effect: 10%.\nDamage over Time: 5%.\n',
        path: 'Sorcery',
        runeIndex: 1,
      },
      {
        id: 8230,
        key: 'PhaseRush',
        name: 'Phase Rush',
        description: 'Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS and Slow Resist. ',
        details: 'Hitting an enemy champion with 3 attacks or separate abilities within 4s grants 25 - 50% Move Speed based on level and 75% Slow Resistance for 3s. Move Speed is 75% effective for ranged champions.\nCooldown: 30s - 10s',
        path: 'Sorcery',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8224,
        key: 'NullifyingOrb',
        name: 'Axiom Arcanist',
        description: 'Your Ultimate has increased damage, healing, and shielding. Scoring a takedown on an enemy champion reduces your Ultimate\'s current cooldown.',
        details: 'Your Ultimate has 12% increased damage, healing, and shielding. \n(AoE damage is reduced to a 8% increase)\n\nScoring a takedown on an enemy champion reduces your Ultimate\'s current cooldown by 7%.',
        path: 'Sorcery',
        runeIndex: 0,
      },
      {
        id: 8226,
        key: 'ManaflowBand',
        name: 'Manaflow Band',
        description: 'Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.\n\nAfter reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.',
        details: 'Hitting an enemy champion with an ability permanently increases your maximum mana by 25, up to 250 mana.\n\nAfter reaching 250 bonus mana, restore 1% of your missing mana every 5 seconds.\n\nCooldown: 15 seconds',
        path: 'Sorcery',
        runeIndex: 1,
      },
      {
        id: 8275,
        key: 'NimbusCloak',
        name: 'Nimbus Cloak',
        description: 'After casting a Summoner Spell, gain a short Move Speed increase that allows you to pass through units.',
        details: 'After casting a Summoner Spell, gain a Move Speed increase that lasts for 2s and allows you to pass through units.\n\nIncrease: 14% - 40% Move Speed based on the Summoner Spell\'s cooldown. (Higher cooldown Summoner Spells grant more Move Speed). ',
        path: 'Sorcery',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8210,
        key: 'Transcendence',
        name: 'Transcendence',
        description: 'Gain bonuses upon reaching the following levels:\nLevel 5: +5 Ability Haste \nLevel 8: +5 Ability Haste \nLevel 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.',
        details: 'Gain bonuses upon reaching the following levels:\nLevel 5: +5 Ability Haste \nLevel 8: +5 Ability Haste \nLevel 11: On Champion takedown, reduce the remaining cooldown of basic abilities by 20%.',
        path: 'Sorcery',
        runeIndex: 0,
      },
      {
        id: 8234,
        key: 'Celerity',
        name: 'Celerity',
        description: 'All Move Speed bonuses are 7% more effective on you and gain 1% Move Speed.',
        details: 'All movement bonuses are 7% more effective on you and gain 1% Move Speed.',
        path: 'Sorcery',
        runeIndex: 1,
      },
      {
        id: 8233,
        key: 'AbsoluteFocus',
        name: 'Absolute Focus',
        description: 'While above 70% health, gain extra adaptive damage.',
        details: 'While above 70% health, gain an adaptive bonus of up to 18 Attack Damage or 30 Ability Power (based on level). \n\nGrants 1.8 Attack Damage or 3 Ability Power at level 1. ',
        path: 'Sorcery',
        runeIndex: 2,
      },
    ],
    [
      {
        id: 8237,
        key: 'Scorch',
        name: 'Scorch',
        description: 'Your first damaging ability hit every 10s burns champions.',
        details: 'Your next damaging ability hit sets champions on fire dealing 20 - 40 bonus magic damage based on level after 1s.\n\nCooldown: 10s',
        path: 'Sorcery',
        runeIndex: 0,
      },
      {
        id: 8232,
        key: 'Waterwalking',
        name: 'Waterwalking',
        description: 'Gain MS and AP or AD, adaptive in the river.',
        details: 'Gain 10 Move Speed and 13 - 30 Adaptive Force (based on level) when in the river.\n\nMay you be as swift as the rushing river and agile as a startled Rift Scuttler.',
        path: 'Sorcery',
        runeIndex: 1,
      },
      {
        id: 8236,
        key: 'GatheringStorm',
        name: 'Gathering Storm',
        description: 'Gain increasing amounts of AD or AP, adaptive over the course of the game.',
        details: 'Every 10 min gain AP or AD, adaptive.\n\n10 min: + 8 AP or 5 AD \n20 min: + 24 AP or 14 AD\n30 min: + 48 AP or 29 AD\n40 min: + 80 AP or 48 AD\n50 min: + 120 AP or 72 AD\n60 min: + 168 AP or 101 AD\netc...',
        path: 'Sorcery',
        runeIndex: 2,
      },
    ],
  ],
}