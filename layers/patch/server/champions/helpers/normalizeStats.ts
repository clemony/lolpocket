export function normalizeStats(riotStats: Record<string, number>) {
  return {
    health: {
      flat: riotStats.hp ?? 0,
      perLevel: riotStats.hpperlevel ?? 0,
    },
    healthRegen: {
      flat: riotStats.hpregen ?? 0,
      perLevel: riotStats.hpregenperlevel ?? 0,
    },
    mana: {
      flat: riotStats.mp ?? 0,
      perLevel: riotStats.mpperlevel ?? 0,
    },
    manaRegen: {
      flat: riotStats.mpregen ?? 0,
      perLevel: riotStats.mpregenperlevel ?? 0,
    },
    movespeed: { flat: riotStats.movespeed ?? 0 },
    armor: {
      flat: riotStats.armor ?? 0,
      perLevel: riotStats.armorperlevel ?? 0,
    },
    spellblock: {
      flat: riotStats.spellblock ?? 0,
      perLevel: riotStats.spellblockperlevel ?? 0,
    },
    attackRange: { flat: riotStats.attackrange ?? 0 },
    attackDamage: {
      flat: riotStats.attackdamage ?? 0,
      perLevel: riotStats.attackdamageperlevel ?? 0,
    },
    attackSpeed: {
      flat: riotStats.attackspeed ?? 0,
      perLevel: riotStats.attackspeedperlevel ?? 0,
    },
    crit: {
      flat: riotStats.crit ?? 0,
      perLevel: riotStats.critperlevel ?? 0,
    },
  }
}
