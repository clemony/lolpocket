export const matchDataStats = {
  damage: [
    {
      id: 'Damage Dealt to Champions',
      data: '',
      i: 0,
    },
    {
      id: 'total',
      data: 'totalDamageDealtToChampions',
    },
    {
      id: 'physical',
      data: 'physicalDamageDealtToChampions',
    },
    {
      id: 'magic',
      data: 'magicDamageDealtToChampions',
    },
    {
      id: 'true',
      data: 'trueDamageDealtToChampions',
    },
    {
      id: 'big crit',
      data: 'largestCriticalStrike',
    },
  ],
  farming: [
    {
      id: 'Farming',
      data: '',
      i: 6,
    },
    {
      id: 'gold/min',
      data: 'goldPerMinute',
      spec: 'round',
    },
    {
      id: 'n1',
      data: 'n1MinionsKilled',
    },
    {
      id: 'scuttle',
      data: 'scuttleCrabKills',
    },
    {
      id: 'void monster',
      data: 'voidMonsterKill',
    },
    {
      id: 'buffs Stolen',
      data: 'buffsStolen',
    },
  ],
  healing: [
    {
      id: 'Effective Healing and Shielding',
      data: '',
      i: 1,
    },
    {
      id: 'ally heal & shield',
      data: 'effectiveHealAndShielding',
    },
    {
      id: 'ally heal',
      data: 'totalHealsOnTeammates',
    },
    {
      id: 'ally shield',
      data: 'totalDamageShieldedOnTeammates',
    },
    {
      id: 'saved',
      data: 'saveAllyFromDeath',
    },
  ],
  kills: [
    {
      id: 'Kills',
      data: '',
      i: 5,
    },
    {
      id: 'kills',
      data: 'kills',
    },
    {
      id: 'deaths',
      data: 'deaths',
    },
    {
      id: 'assists',
      data: 'assists',
    },
    {
      id: 'first blood',
      data: 'firstBloodKill',
    },

    {
      id: 'kda',
      data: 'kda',
      spec: 'round',
    },
    {
      id: 'bounty',
      data: 'bountyGold',
      spec: 'round',
    },
    {
      id: 'sprees',
      data: 'killingSprees',
    },
    {
      id: 'double',
      data: 'doubleKills',
    },
    {
      id: 'triple',
      data: 'tripleKills',
    },
    {
      id: 'quadra',
      data: 'quadraKills',
    },
    {
      id: 'penta',
      data: 'pentaKills',
    },
  ],
  objectives: [
    {
      id: 'Objectives',
      data: '',
      i: 4,
    },
    {
      id: 'dmg to turrets',
      data: 'damageDealtToObjectives',
    },
    {
      id: 'turret takedowns',
      data: 'turretKills',
    },
    {
      id: 'inhib takedowns',
      data: 'inhibitorTakedowns',
    },
    {
      id: 'dmg to objectives',
      data: 'damageDealtToObjectives',
    },
    {
      id: 'steals',
      data: 'objectivesStolen',
    },
    {
      id: 'dragon kills',
      data: 'dragonKills',
    },
    {
      id: 'Baron kills',
      data: 'teamBaronKills',
    },
  ],
  utility: [
    {
      id: 'Team Utility',
      data: '',
      i: 7,
    },
    {
      id: 'dmg taken',
      data: 'totalDamageTaken',
    },
    {
      id: 'dmg taken %',
      data: `damageTakenOnTeamPercentage`,
      spec: 'round',
    },
    {
      id: 'CC output',
      data: 'timeCCingOthers',
    },
  ],
  vision: [
    {
      id: 'vision',
      data: '',
      i: 3,
    },
    {
      id: 'score',
      data: 'visionScore',
    },
    {
      id: 'sight',
      data: 'controlWardsPlaced',
    },

    {
      id: 'place',
      data: 'wardsPlaced',
    },
    {
      id: 'guard',
      data: 'wardsGuarded',
    },
  ],
}
