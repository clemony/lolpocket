// Updated Patch 16.1 - 01/27/2026 02:38:10 PM CST

export interface StatRecord {
  abilityHaste?: number
  abilityPower?: number
  armor?: number
  armorPenetration?: number
  attackDamage?: number
  attackSpeed?: number
  criticalStrikeChance?: number
  criticalStrikeDamage?: number
  flatMagicPenetration?: number
  flatMovespeed?: number
  goldPer10?: number
  healAndShieldPower?: number
  health?: number
  healthRegen?: number
  lethality?: number
  lifesteal?: number
  magicResistance?: number
  mana?: number
  manaRegen?: number
  omnivamp?: number
  percentMagicPenetration?: number
  percentMovespeed?: number
  tenacity?: number
}

export const itemStatRecord: Record<number, StatRecord> = {
  1001: {
    flatMovespeed: 25
  },
  1004: {
    manaRegen: 50
  },
  1006: {
    healthRegen: 100
  },
  1011: {
    health: 350
  },
  1018: {
    criticalStrikeChance: 15
  },
  1026: {
    abilityPower: 45
  },
  1027: {
    mana: 300
  },
  1028: {
    health: 150
  },
  1029: {
    armor: 15
  },
  1031: {
    armor: 40
  },
  1033: {
    magicResistance: 20
  },
  1036: {
    attackDamage: 10
  },
  1037: {
    attackDamage: 25
  },
  1038: {
    attackDamage: 40
  },
  1042: {
    attackSpeed: 10
  },
  1043: {
    attackSpeed: 15
  },
  1052: {
    abilityPower: 20
  },
  1053: {
    attackDamage: 15,
    lifesteal: 7
  },
  1054: {
    health: 110,
    healthRegen: 4
  },
  1055: {
    attackDamage: 10,
    health: 80,
    omnivamp: 2.5
  },
  1056: {
    abilityPower: 18,
    health: 90
  },
  1057: {
    magicResistance: 45
  },
  1058: {
    abilityPower: 65
  },
  1082: {
    abilityPower: 15,
    health: 50
  },
  1083: {
    attackDamage: 7
  },
  1111: {
    abilityHaste: 10,
    armor: 25,
    attackSpeed: 25,
    flatMagicPenetration: 12,
    flatMovespeed: 100,
    magicResistance: 20,
    tenacity: 30
  },
  1500: {
    armorPenetration: 30
  },
  2019: {
    armor: 30,
    attackDamage: 15
  },
  2020: {
    abilityHaste: 10,
    attackDamage: 25,
    lethality: 5
  },
  2021: {
    attackDamage: 15,
    health: 250
  },
  2022: {
    abilityHaste: 5
  },
  2049: {
    abilityHaste: 20,
    abilityPower: 20,
    healAndShieldPower: 15
  },
  2050: {
    abilityHaste: 15,
    abilityPower: 35,
    health: 300
  },
  2051: {
    health: 150,
    healthRegen: 20
  },
  2065: {
    abilityHaste: 15,
    abilityPower: 50,
    manaRegen: 125,
    percentMovespeed: 4
  },
  2420: {
    abilityPower: 40,
    armor: 25
  },
  2421: {
    abilityPower: 40,
    armor: 25
  },
  2422: {
    flatMovespeed: 25
  },
  2501: {
    attackDamage: 30,
    health: 550
  },
  2502: {
    abilityHaste: 15,
    armor: 50,
    health: 400
  },
  2503: {
    abilityHaste: 20,
    abilityPower: 80,
    mana: 600
  },
  2504: {
    health: 400,
    healthRegen: 100,
    magicResistance: 80
  },
  2508: {
    abilityPower: 30
  },
  2510: {
    abilityHaste: 20,
    abilityPower: 70,
    attackSpeed: 25,
    health: 300
  },
  2512: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  },
  2517: {
    attackDamage: 60,
    omnivamp: 5,
    tenacity: 20
  },
  2520: {
    abilityHaste: 15,
    attackDamage: 55,
    lethality: 22
  },
  2522: {
    abilityHaste: 10,
    abilityPower: 90,
    mana: 300
  },
  2523: {
    attackDamage: 50,
    criticalStrikeChance: 25
  },
  2524: {
    abilityHaste: 15,
    armor: 20,
    health: 200,
    magicResistance: 20
  },
  2525: {
    abilityHaste: 15,
    health: 600
  },
  2526: {
    healAndShieldPower: 8,
    health: 200,
    mana: 300,
    manaRegen: 75
  },
  2530: {
    healAndShieldPower: 8,
    health: 200,
    mana: 1000,
    manaRegen: 100
  },
  3002: {
    armor: 40,
    health: 250,
    percentMovespeed: 4
  },
  3003: {
    abilityHaste: 25,
    abilityPower: 70,
    mana: 600
  },
  3004: {
    abilityHaste: 15,
    attackDamage: 35,
    mana: 500
  },
  3006: {
    attackSpeed: 25,
    flatMovespeed: 45
  },
  3009: {
    flatMovespeed: 55
  },
  3020: {
    flatMagicPenetration: 12,
    flatMovespeed: 45
  },
  3024: {
    abilityHaste: 10,
    armor: 25,
    mana: 300
  },
  3026: {
    armor: 45,
    attackDamage: 55
  },
  3031: {
    attackDamage: 75,
    criticalStrikeChance: 25,
    criticalStrikeDamage: 30
  },
  3032: {
    attackDamage: 50,
    attackSpeed: 40
  },
  3033: {
    armorPenetration: 30,
    attackDamage: 35,
    criticalStrikeChance: 25
  },
  3035: {
    armorPenetration: 18,
    attackDamage: 20
  },
  3036: {
    armorPenetration: 35,
    attackDamage: 35,
    criticalStrikeChance: 25
  },
  3040: {
    abilityHaste: 25,
    abilityPower: 70,
    mana: 1000
  },
  3041: {
    abilityPower: 20,
    health: 100
  },
  3042: {
    abilityHaste: 15,
    attackDamage: 35,
    mana: 1000
  },
  3044: {
    attackDamage: 15,
    health: 200
  },
  3046: {
    attackSpeed: 65,
    criticalStrikeChance: 25,
    percentMovespeed: 10
  },
  3047: {
    armor: 25,
    flatMovespeed: 45
  },
  3050: {
    abilityHaste: 10,
    armor: 25,
    health: 300,
    magicResistance: 25
  },
  3051: {
    attackDamage: 20,
    attackSpeed: 20
  },
  3053: {
    health: 400,
    tenacity: 20
  },
  3057: {
    abilityHaste: 10
  },
  3065: {
    abilityHaste: 10,
    health: 400,
    healthRegen: 100,
    magicResistance: 50
  },
  3066: {
    health: 200,
    percentMovespeed: 4
  },
  3067: {
    abilityHaste: 10,
    health: 200
  },
  3068: {
    abilityHaste: 10,
    armor: 50,
    health: 350
  },
  3070: {
    mana: 240
  },
  3071: {
    abilityHaste: 20,
    attackDamage: 40,
    health: 400
  },
  3072: {
    attackDamage: 80,
    lifesteal: 15
  },
  3073: {
    attackDamage: 40,
    attackSpeed: 20,
    health: 450
  },
  3074: {
    abilityHaste: 15,
    attackDamage: 65,
    lifesteal: 12
  },
  3075: {
    armor: 75,
    health: 150
  },
  3076: {
    armor: 30
  },
  3077: {
    attackDamage: 20
  },
  3078: {
    abilityHaste: 15,
    attackDamage: 36,
    attackSpeed: 30,
    health: 333
  },
  3082: {
    armor: 40
  },
  3083: {
    health: 1000,
    healthRegen: 100
  },
  3084: {
    health: 900,
    healthRegen: 100
  },
  3085: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  },
  3086: {
    attackSpeed: 15,
    criticalStrikeChance: 15,
    percentMovespeed: 4
  },
  3087: {
    attackDamage: 45,
    attackSpeed: 30,
    percentMovespeed: 4
  },
  3089: {
    abilityPower: 130
  },
  3091: {
    attackSpeed: 50,
    magicResistance: 45,
    tenacity: 20
  },
  3094: {
    attackSpeed: 35,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  },
  3097: {
    attackDamage: 50,
    attackSpeed: 20,
    criticalStrikeChance: 25
  },
  3100: {
    abilityHaste: 10,
    abilityPower: 100,
    percentMovespeed: 4
  },
  3102: {
    abilityPower: 105,
    magicResistance: 40
  },
  3107: {
    abilityHaste: 15,
    abilityPower: 30,
    healAndShieldPower: 10,
    manaRegen: 100
  },
  3108: {
    abilityHaste: 10,
    abilityPower: 25
  },
  3109: {
    abilityHaste: 10,
    armor: 40,
    health: 200,
    healthRegen: 100
  },
  3110: {
    abilityHaste: 20,
    armor: 75,
    mana: 400
  },
  3111: {
    flatMovespeed: 45,
    magicResistance: 20,
    tenacity: 30
  },
  3112: {
    abilityPower: 50,
    health: 150
  },
  3113: {
    abilityPower: 30,
    percentMovespeed: 4
  },
  3114: {
    healAndShieldPower: 8,
    manaRegen: 50
  },
  3115: {
    abilityHaste: 15,
    abilityPower: 80,
    attackSpeed: 50
  },
  3116: {
    abilityPower: 65,
    health: 400
  },
  3118: {
    abilityHaste: 15,
    abilityPower: 90,
    mana: 600
  },
  3119: {
    abilityHaste: 15,
    health: 550,
    mana: 500
  },
  3121: {
    abilityHaste: 15,
    health: 550,
    mana: 1000
  },
  3123: {
    attackDamage: 15
  },
  3124: {
    abilityPower: 30,
    attackDamage: 30,
    attackSpeed: 25
  },
  3133: {
    abilityHaste: 10,
    attackDamage: 20
  },
  3134: {
    attackDamage: 20,
    lethality: 10
  },
  3135: {
    abilityPower: 95,
    percentMagicPenetration: 40
  },
  3137: {
    abilityHaste: 20,
    abilityPower: 75,
    percentMagicPenetration: 30
  },
  3139: {
    attackDamage: 50,
    lifesteal: 10,
    magicResistance: 35
  },
  3140: {
    magicResistance: 30
  },
  3142: {
    attackDamage: 55,
    lethality: 18,
    percentMovespeed: 4
  },
  3143: {
    armor: 75,
    health: 350
  },
  3144: {
    attackSpeed: 20
  },
  3145: {
    abilityPower: 45
  },
  3146: {
    abilityPower: 80,
    attackDamage: 40,
    omnivamp: 10
  },
  3147: {
    abilityPower: 30,
    health: 200
  },
  3152: {
    abilityHaste: 20,
    abilityPower: 70,
    health: 300
  },
  3153: {
    attackDamage: 40,
    attackSpeed: 25,
    lifesteal: 10
  },
  3155: {
    attackDamage: 25,
    magicResistance: 25
  },
  3156: {
    abilityHaste: 15,
    attackDamage: 60,
    magicResistance: 40
  },
  3157: {
    abilityPower: 105,
    armor: 50
  },
  3158: {
    abilityHaste: 10,
    flatMovespeed: 45
  },
  3161: {
    attackDamage: 45,
    health: 450
  },
  3165: {
    abilityHaste: 15,
    abilityPower: 75,
    health: 350
  },
  3170: {
    flatMovespeed: 65
  },
  3171: {
    abilityHaste: 20,
    flatMovespeed: 45
  },
  3172: {
    abilityHaste: 30,
    attackSpeed: 50,
    percentMovespeed: 10,
    tenacity: 20
  },
  3173: {
    flatMovespeed: 45,
    magicResistance: 30,
    tenacity: 30
  },
  3174: {
    armor: 35,
    flatMovespeed: 45
  },
  3175: {
    flatMagicPenetration: 18,
    flatMovespeed: 45
  },
  3177: {
    abilityHaste: 15,
    attackDamage: 30,
    health: 150
  },
  3179: {
    abilityHaste: 15,
    attackDamage: 60,
    lethality: 18
  },
  3181: {
    attackDamage: 40,
    health: 500,
    percentMovespeed: 4
  },
  3184: {
    attackDamage: 25,
    health: 150,
    lifesteal: 5
  },
  3190: {
    abilityHaste: 10,
    armor: 25,
    health: 200,
    magicResistance: 25
  },
  3211: {
    health: 200,
    healthRegen: 100,
    magicResistance: 35
  },
  3222: {
    abilityHaste: 15,
    healAndShieldPower: 12,
    health: 250,
    manaRegen: 100
  },
  3302: {
    attackDamage: 30,
    attackSpeed: 35
  },
  3430: {
    abilityHaste: 15,
    abilityPower: 50,
    criticalStrikeChance: 25
  },
  3504: {
    abilityPower: 45,
    healAndShieldPower: 10,
    manaRegen: 125,
    percentMovespeed: 4
  },
  3508: {
    abilityHaste: 20,
    attackDamage: 50,
    criticalStrikeChance: 25
  },
  3742: {
    armor: 55,
    health: 350,
    percentMovespeed: 4
  },
  3748: {
    attackDamage: 40,
    health: 600
  },
  3801: {
    health: 200,
    healthRegen: 100
  },
  3802: {
    abilityHaste: 10,
    abilityPower: 40,
    mana: 300
  },
  3803: {
    health: 300,
    mana: 375
  },
  3814: {
    attackDamage: 50,
    health: 250,
    lethality: 15
  },
  3865: {
    goldPer10: 3,
    health: 30,
    healthRegen: 25,
    manaRegen: 25
  },
  3866: {
    goldPer10: 5,
    health: 100,
    healthRegen: 50,
    manaRegen: 50
  },
  3867: {
    goldPer10: 5,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  },
  3869: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  },
  3870: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  },
  3871: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  },
  3876: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  },
  3877: {
    goldPer10: 9,
    health: 200,
    healthRegen: 75,
    manaRegen: 75
  },
  3916: {
    abilityPower: 25
  },
  4003: {
    attackDamage: 25,
    lethality: 5,
    percentMovespeed: 4
  },
  4005: {
    abilityHaste: 20,
    abilityPower: 60,
    manaRegen: 125
  },
  4011: {
    abilityHaste: 15,
    abilityPower: 45,
    healAndShieldPower: 12,
    health: 200
  },
  4015: {
    abilityPower: 60,
    armorPenetration: 22,
    percentMagicPenetration: 30,
    percentMovespeed: 5
  },
  4016: {
    abilityHaste: 25,
    abilityPower: 50,
    healAndShieldPower: 25
  },
  4017: {
    attackDamage: 35,
    lethality: 12
  },
  4401: {
    health: 400,
    magicResistance: 55,
    percentMovespeed: 4
  },
  4628: {
    abilityHaste: 25,
    abilityPower: 75
  },
  4629: {
    abilityHaste: 25,
    abilityPower: 70,
    health: 350,
    percentMovespeed: 4
  },
  4630: {
    abilityPower: 25,
    percentMagicPenetration: 13
  },
  4632: {
    abilityPower: 40,
    magicResistance: 25
  },
  4633: {
    abilityHaste: 15,
    abilityPower: 70,
    health: 350
  },
  4642: {
    abilityHaste: 10,
    abilityPower: 20,
    manaRegen: 100
  },
  4645: {
    abilityPower: 110,
    flatMagicPenetration: 15
  },
  4646: {
    abilityPower: 90,
    flatMagicPenetration: 15,
    percentMovespeed: 6
  },
  6333: {
    abilityHaste: 15,
    armor: 50,
    attackDamage: 60
  },
  6609: {
    abilityHaste: 15,
    attackDamage: 45,
    health: 450
  },
  6610: {
    abilityHaste: 10,
    attackDamage: 45,
    health: 400
  },
  6616: {
    abilityHaste: 15,
    abilityPower: 35,
    healAndShieldPower: 10,
    manaRegen: 125
  },
  6617: {
    abilityHaste: 20,
    abilityPower: 25,
    health: 200,
    manaRegen: 125
  },
  6620: {
    abilityHaste: 20,
    abilityPower: 35,
    health: 200,
    manaRegen: 125
  },
  6621: {
    abilityPower: 45,
    healAndShieldPower: 16,
    manaRegen: 100
  },
  6631: {
    attackDamage: 40,
    attackSpeed: 25,
    health: 450
  },
  6653: {
    abilityPower: 60,
    health: 300
  },
  6655: {
    abilityHaste: 10,
    abilityPower: 100,
    mana: 600
  },
  6657: {
    abilityPower: 45,
    health: 350,
    mana: 500
  },
  6660: {
    abilityHaste: 5,
    health: 150
  },
  6662: {
    abilityHaste: 15,
    armor: 50,
    health: 300
  },
  6664: {
    abilityHaste: 10,
    health: 400,
    healthRegen: 100,
    magicResistance: 40
  },
  6665: {
    armor: 45,
    health: 350,
    magicResistance: 45
  },
  6670: {
    attackDamage: 15,
    criticalStrikeChance: 20
  },
  6672: {
    attackDamage: 45,
    attackSpeed: 40,
    percentMovespeed: 4
  },
  6673: {
    attackDamage: 55,
    criticalStrikeChance: 25
  },
  6675: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  },
  6676: {
    attackDamage: 50,
    criticalStrikeChance: 25,
    lethality: 10
  },
  6690: {
    attackDamage: 15,
    percentMovespeed: 4
  },
  6692: {
    abilityHaste: 15,
    attackDamage: 60
  },
  6694: {
    abilityHaste: 15,
    armorPenetration: 35,
    attackDamage: 45
  },
  6695: {
    attackDamage: 55,
    lethality: 15
  },
  6696: {
    abilityHaste: 20,
    attackDamage: 55,
    lethality: 18
  },
  6697: {
    abilityHaste: 10,
    attackDamage: 60,
    lethality: 18
  },
  6698: {
    abilityHaste: 10,
    attackDamage: 55,
    lethality: 18
  },
  6699: {
    abilityHaste: 10,
    attackDamage: 55,
    lethality: 18
  },
  6701: {
    attackDamage: 55,
    lethality: 18
  },
  8010: {
    abilityHaste: 15,
    abilityPower: 65,
    health: 400
  },
  8020: {
    abilityHaste: 15,
    health: 350,
    magicResistance: 45
  },
  223005: {
    flatMovespeed: 70
  },
  223039: {
    criticalStrikeChance: 20,
    health: 700
  },
  223185: {
    abilityHaste: 10,
    attackDamage: 25,
    lethality: 11
  },
  224004: {
    attackDamage: 50,
    lethality: 15,
    percentMovespeed: 4
  },
  224403: {
    abilityHaste: 20,
    abilityPower: 125,
    armor: 40,
    attackDamage: 90,
    attackSpeed: 60,
    criticalStrikeChance: 25,
    health: 350,
    healthRegen: 200,
    magicResistance: 40,
    mana: 350,
    manaRegen: 200,
    omnivamp: 15,
    percentMovespeed: 10
  },
  226630: {
    abilityHaste: 20,
    attackDamage: 55,
    health: 400,
    omnivamp: 10
  },
  228001: {
    abilityHaste: 20,
    health: 650
  },
  228002: {
    abilityHaste: 20,
    abilityPower: 300,
    armor: 50
  },
  443054: {
    armor: 55,
    attackSpeed: 50,
    percentMovespeed: 5
  },
  443055: {
    attackDamage: 55,
    attackSpeed: 45,
    percentMovespeed: 15
  },
  443058: {
    armor: 100,
    health: 300
  },
  443059: {
    health: 300,
    magicResistance: 100
  },
  443060: {
    criticalStrikeChance: 50
  },
  443061: {
    abilityHaste: 30,
    criticalStrikeChance: 25,
    health: 900
  },
  443062: {
    abilityHaste: 20,
    abilityPower: 80,
    healAndShieldPower: 15
  },
  443063: {
    abilityHaste: 25,
    armor: 50,
    magicResistance: 50
  },
  443069: {
    attackDamage: 45,
    attackSpeed: 40,
    criticalStrikeChance: 25
  },
  443079: {
    health: 600
  },
  443081: {
    attackSpeed: 75,
    health: 500
  },
  443090: {
    attackSpeed: 50,
    percentMovespeed: 5
  },
  443193: {
    abilityHaste: 15,
    armor: 65,
    magicResistance: 65,
    percentMovespeed: 10
  },
  444636: {
    abilityHaste: 25,
    abilityPower: 90,
    health: 300
  },
  444637: {
    abilityPower: 80,
    health: 700
  },
  444644: {
    abilityHaste: 25,
    abilityPower: 85,
    health: 350,
    mana: 600
  },
  446632: {
    abilityHaste: 20,
    attackDamage: 55,
    health: 350
  },
  446656: {
    abilityHaste: 25,
    abilityPower: 100,
    health: 250,
    mana: 600
  },
  446667: {
    armor: 35,
    healAndShieldPower: 12,
    health: 400,
    magicResistance: 35
  },
  446671: {
    attackDamage: 65,
    attackSpeed: 30,
    criticalStrikeChance: 25,
    percentMovespeed: 6
  },
  446691: {
    abilityHaste: 20,
    attackDamage: 50,
    lethality: 20
  },
  446693: {
    abilityHaste: 20,
    attackDamage: 55,
    lethality: 22
  },
  447100: {
    attackSpeed: 60,
    percentMovespeed: 6
  },
  447101: {
    abilityHaste: 40,
    attackSpeed: 70,
    percentMovespeed: 8
  },
  447102: {
    abilityPower: 80,
    attackSpeed: 40,
    health: 300
  },
  447103: {
    abilityHaste: 30,
    attackDamage: 70,
    omnivamp: 15
  },
  447104: {
    abilityHaste: 20,
    abilityPower: 70,
    health: 200
  },
  447105: {
    abilityHaste: 30,
    abilityPower: 70,
    healAndShieldPower: 18,
    manaRegen: 125
  },
  447107: {
    attackSpeed: 50,
    percentMovespeed: 8
  },
  447108: {
    abilityHaste: 20,
    abilityPower: 80,
    percentMovespeed: 4
  },
  447109: {
    abilityPower: 80,
    armor: 30,
    magicResistance: 30
  },
  447110: {
    abilityPower: 85,
    health: 400,
    tenacity: 30
  },
  447112: {
    abilityHaste: 20,
    health: 500
  },
  447113: {
    abilityHaste: 20,
    abilityPower: 90,
    flatMagicPenetration: 12,
    mana: 600
  },
  447114: {
    armor: 35,
    attackSpeed: 40,
    magicResistance: 35
  },
  447115: {
    attackDamage: 60,
    lethality: 15,
    percentMovespeed: 8
  },
  447116: {
    abilityHaste: 30,
    health: 400
  },
  447118: {
    abilityHaste: 15,
    health: 400
  },
  447119: {
    armor: 30,
    health: 500,
    magicResistance: 30,
    percentMovespeed: 8
  },
  447120: {
    attackSpeed: 30
  },
  447121: {
    abilityPower: 100,
    attackDamage: 70
  },
  447122: {
    abilityHaste: 25,
    health: 900
  },
  447123: {
    abilityHaste: 40,
    attackSpeed: 30,
    healAndShieldPower: 15,
    manaRegen: 150
  }
}
