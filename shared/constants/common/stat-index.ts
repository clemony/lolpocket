import type { StatIndex } from "#shared/types"

export const statTotalGold = {
  id: "goldPer10",
  name: "Total Gold Cost",
  abbr: "Total",
  description: "",
}

export const statIndex: Record<string, StatIndex> = {
  // magic

  //
  abilityHaste: {
    color: "var(--color-ah)",
    id: "abilityHaste",
    key: "AH",
    name: "Ability Haste",
    description: "",
    group: "spells",
  },
  abilityPower: {
    color: "var(--color-sorc)",
    id: "abilityPower",
    key: "AP",
    name: "Ability Power",
    description: "",
    group: "spells",
  },
  //
  healAndShieldPower: {
    id: "healAndShieldPower",
    name: "Heal & Shield Power",

    color: "var(--color-enchanter)",
    key: "HSP",
    abbr: "Heal & Shield +",
    description: "",
    group: "spells",
    unit: "%",
  },
  percentMagicPenetration: {
    color: "var(--color-mpen)",
    id: "percentMagicPenetration",
    key: "MPEN",
    name: "Magic Penetration",
    abbr: "Magic Pen",
    description: "",
    group: "spells",
    unit: "%",
  },

  // physical

  //
  armorPenetration: {
    color: "var(--color-apen)",
    id: "armorPenetration",
    key: "APEN",
    name: "Armor Penetration",
    abbr: "Armor Pen",
    description: "",
    group: "physical",
  },
  attackDamage: {
    color: "var(--color-ad)",
    id: "attackDamage",
    key: "AD",
    name: "Attack Damage",
    description: "",
    group: "physical",
  },
  attackSpeed: {
    color: "var(--color-as)",
    id: "attackSpeed",
    key: "AS",
    name: "Attack Speed",
    abbr: "Bonus AS",
    description: "",
    group: "physical",
    unit: "%",
  },
  criticalStrikeChance: {
    color: "var(--color-domination)",
    id: "criticalStrikeChance",
    key: "Crit",
    name: "Critical Chance",
    abbr: "Crit Chance",
    description: "",
    group: "physical",
    unit: "%",
  },
  criticalStrikeDamage: {
    color: "var(--color-fighter)",
    id: "criticalStrikeDamage",
    name: "Critical Damage",
    abbr: "Crit Dmg",
    description: "",
    group: "physical",
  },
  lethality: {
    color: "var(--color-apen)",
    id: "lethality",
    key: "LTY",
    name: "Lethality",
    abbr: "Lethality",
    description: "",
    group: "physical",
  },
  lifesteal: {
    color: "var(--color-domination)",
    id: "lifesteal",
    key: "LS",
    name: "Lifesteal",
    abbr: "Lifesteal",
    description: "",
    group: "physical",
  },

  // basic

  health: {
    color: "var(--color-res)",
    id: "health",
    key: "HP",
    name: "Health",
    description: "",
    group: "basic",
  },
  healthRegen: {
    color: "var(--color-res)",
    id: "healthRegen",
    key: "HP/5",
    name: "Health Regen",
    description: "",
    group: "basic",
    unit: "%",
  },
  mana: {
    color: "var(--color-insp)",
    id: "mana",
    key: "MP",
    name: "Mana",
    description: "",
    group: "basic",
  },
  manaRegen: {
    color: "var(--color-insp)",
    id: "manaRegen",
    key: "MP/5",
    name: "Mana Regen",
    description: "",
    group: "basic",
    unit: "%",
  },

  // defense

  armor: {
    color: "var(--color-iron)",
    id: "armor",
    name: "Armor",
    description: "",
    group: "defense",
  },
  magicResistance: {
    color: "var(--color-mr)",
    id: "magicResistance",
    key: "MR",
    name: "Magic Resist",
    description: "",
    group: "defense",
  },

  // utility

  //
  goldPer10: {
    color: "var(--color-g)",
    id: "goldPer10",
    key: "GP/10",
    name: "Gold / 10",
    description: "",
    group: "utility",
  },
  //
  omnivamp: {
    color: "var(--color-vamp)",
    id: "omnivamp",
    key: "Vamp",
    name: "Omnivamp",
    abbr: "Omnivamp",
    description: "",
    unit: "%",
  },
  percentMovespeed: {
    color: "var(--color-white-70)",
    id: "percentMovespeed",
    key: "MS",
    name: "Movespeed",
    description: "",
    group: "utility",
    unit: "%",
  },
  tenacity: {
    color: "var(--color-platinum)",
    id: "tenacity",
    name: "Tenacity",
    description: "",
    group: "utility",
  },

  // champion

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
    color: "var(--color-white-70)",
    id: "attackRange",
    name: "Range",
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
  flatMagicPenetration: {
    color: "var(--color-mpen)",
    id: "flatMagicPenetration",
    key: "MPEN",
    name: "Flat Magic Penetration",
    abbr: "Magic Pen",
    description: "",
    group: "champion",
  },
  flatMovespeed: {
    color: "var(--color-white-70)",
    id: "flatMovespeed",
    key: "MS",
    name: "Base MS",
    description: "",
    group: "champion",
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
