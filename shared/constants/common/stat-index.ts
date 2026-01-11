export const statTotalGold = {
  id: "goldPer10",
  name: "Total Gold Cost",
  abbr: "Total",
  description: "",
}

export const statIndex: Record<string, StatIndex> = {
  // magic

  abilityPower: {
    id: "abilityPower",
    name: "Ability Power",
    key: "AP",
    color: "var(--color-sorcery)",
    description: "",
    group: "spells",
  },
  percentMagicPenetration: {
    id: "percentMagicPenetration",
    name: "Magic Penetration",
    abbr: "Magic Pen",
    key: "MPEN",
    color: "var(--color-mpen)",
    description: "",
    group: "spells",
    unit: "%",
  },
  //
  healAndShieldPower: {
    id: "healAndShieldPower",
    name: "Heal & Shield Power",
    key: "HSP",
    color: "var(--color-enchanter)",
    description: "",
    group: "spells",
    unit: "%",
  },
  //
  abilityHaste: {
    id: "abilityHaste",
    name: "Ability Haste",
    key: "AH",
    color: "var(--color-ah)",
    description: "",
    group: "spells",
  },

  // physical

  attackDamage: {
    id: "attackDamage",
    name: "Attack Damage",
    key: "AD",
    color: "var(--color-ad)",
    description: "",
    group: "physical",
  },
  attackSpeed: {
    id: "attackSpeed",
    name: "Attack Speed",
    abbr: "Bonus AS",
    key: "AS",
    color: "var(--color-as)",
    description: "",
    group: "physical",
    unit: "%",
  },
  criticalStrikeChance: {
    id: "criticalStrikeChance",
    name: "Critical Chance",
    abbr: "Crit Chance",
    key: "Crit",
    color: "var(--color-domination)",
    description: "",
    group: "physical",
    unit: "%",
  },
  criticalStrikeDamage: {
    id: "criticalStrikeDamage",
    name: "Critical Damage",
    abbr: "Crit Dmg",
    color: "var(--color-fighter)",
    description: "",
    group: "physical",
  },
  //
  armorPenetration: {
    id: "armorPenetration",
    name: "Armor Penetration",
    abbr: "Armor Pen",
    key: "APEN",
    color: "var(--color-apen)",
    description: "",
    group: "physical",
  },
  lethality: {
    id: "lethality",
    name: "Lethality",
    abbr: "Lethality",
    key: "LTY",
    color: "var(--color-apen)",
    description: "",
    group: "physical",
  },
  lifesteal: {
    id: "lifesteal",
    name: "Lifesteal",
    abbr: "Lifesteal",
    key: "LS",
    color: "var(--color-domination)",
    description: "",
    group: "physical",
  },

  // basic

  health: {
    id: "health",
    name: "Health",
    key: "HP",
    color: "var(--color-resolve)",
    description: "",
    group: "basic",
  },
  healthRegen: {
    id: "healthRegen",
    name: "Health Regen",
    abbr: "HP ∕ 5",
    key: "HP/5",
    color: "var(--color-resolve)",
    description: "",
    group: "basic",
    unit: "%",
  },
  mana: {
    id: "mana",
    name: "Mana",
    key: "MP",
    color: "var(--color-inspiration)",
    description: "",
    group: "basic",
  },
  manaRegen: {
    id: "manaRegen",
    name: "Mana Regen",
    abbr: "Mana ∕ 5",
    key: "MP ∕ 5",
    color: "var(--color-inspiration)",
    description: "",
    group: "basic",
    unit: "%",
  },

  // defense

  armor: {
    id: "armor",
    name: "Armor",
    color: "var(--color-iron)",
    description: "",
    group: "defense",
  },
  magicResistance: {
    id: "magicResistance",
    name: "Magic Resist",
    key: "MR",
    color: "var(--color-mr)",
    description: "",
    group: "defense",
  },

  // utility

  percentMovespeed: {
    id: "percentMovespeed",
    name: "Movespeed",
    key: "MS",
    color: "var(--color-white-70)",
    description: "",
    group: "utility",
    unit: "%",
  },
  tenacity: {
    id: "tenacity",
    name: "Tenacity",
    color: "var(--color-platinum)",
    description: "",
    group: "utility",
  },
  //
  goldPer10: {
    id: "goldPer10",
    name: "Gold / 10",
    key: "GP/10",
    color: "var(--color-g)",
    description: "",
    group: "utility",
  },
  //
  omnivamp: {
    id: "omnivamp",
    name: "Omnivamp",
    abbr: "Omnivamp",
    key: "Vamp",
    color: "var(--color-vamp)",
    description: "",
    unit: "%",
  },

  // champion

  flatMagicPenetration: {
    id: "flatMagicPenetration",
    name: "Flat Magic Penetration",
    abbr: "Magic Pen.",
    key: "MPEN",
    color: "var(--color-mpen)",
    description: "",
    group: "champion",
  },
  flatMovespeed: {
    id: "flatMovespeed",
    name: "Base Movespeed",
    key: "MS",
    color: "var(--color-white-70)",
    description: "",
    group: "champion",
  },
  //
  acquisitionRadius: {
    id: "acquisitionRadius",
    name: "Acquisition Radius",
    abbr: "Acqusition",
    description:
      "The range at which a unit acquires basic attack targets when a target unit is not specified by the player.",
    group: "champion",
  },
  attackCastTime: {
    id: "attackCastTime",
    name: "Attack Cast Time",
    abbr: "Cast Time",
    description: "",
    group: "champion",
  },
  attackDelayOffset: {
    id: "attackDelayOffset",
    name: "Attack Delay Offset",
    abbr: "Delay Offset",
    description: "",
    group: "champion",
  },
  attackRange: {
    id: "attackRange",
    name: "Range",
    color: "var(--color-white-70)",
    description: "Range of the champion's basic attack.",
    group: "champion",
  },
  attackSpeedRatio: {
    id: "attackSpeedRatio",
    name: "Attack Speed Ratio",
    abbr: "AS Ratio",
    description: "",
    group: "champion",
  },
  attackTotalTime: {
    id: "attackTotalTime",
    name: "Attack Total Time",
    abbr: "Total Time",
    description: "",
    group: "champion",
  },
  criticalStrikeDamageModifier: {
    id: "criticalStrikeDamageModifier",
    name: "Critical Strike Damage Modifier",
    abbr: "Crit Modifier",
    description: "",
    group: "champion",
    unit: "%",
  },
  gameplayRadius: {
    id: "gameplayRadius",
    name: "Gameplay Radius",
    abbr: "Gameplay",
    description: "Determines reach of both incoming and outgoing effects.",
    group: "champion",
  },
  pathingRadius: {
    id: "pathingRadius",
    name: "Pathing Radius",
    abbr: "Pathing",
    description:
      "The gameplay area a unit occupies for unit-collision and pathfinding logic.",
    group: "champion",
  },
  selectionRadius: {
    id: "selectionRadius",
    name: "Selection Radius",
    abbr: "Selection",
    description: "The farthest selectable point from the unit's center point.",
    group: "champion",
  },
}
