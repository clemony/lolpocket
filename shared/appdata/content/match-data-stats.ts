export interface MatchStats {
  name: string
  stats: MatchStat[]
}
export interface MatchStat {
  id: string
  name: string
  spec?: string
}
export const matchDataStats: MatchStats[] = [
  {
    name: 'match ranking',
    stats: [
      {
        id: 'mvpScore',
        name: 'LP Score',
      },
    ]
  },

  {
    name: 'Damage',
    stats: [
      {
        id: 'totalDamageDealtToChampions',
        name: 'Damage to Champions',
      },
      {
        id: 'teamDamagePercentage',
        name: 'Team Damage Percentage',
      },
    ]
  },

  {
    name: 'Farming',
    stats: [
      {
        id: 'goldEarned',
        name: 'gold earned',
        spec: 'round',
      },
      {
        id: 'neutralMinionsKilled',
        name: 'neutral minions killed',
      },
    ],
  },

  {
    name: 'Effective Healing and Shielding',
    stats: [
      {
        id: 'effectiveHealAndShielding',
        name: 'ally heal & shield',
      },
      {
        id: 'totalHealsOnTeammates',
        name: 'ally healing',
      },
      {
        id: 'totalDamageShieldedOnTeammates',
        name: 'ally shielding',
      },
      {
        id: 'saveAllyFromDeath',
        name: 'Ally deaths prevented',
      },
    ],
  },

  {
    name: 'Kills',
    stats: [
      {
        id: 'kills',
        name: 'kills',
      },
      {
        id: 'deaths',
        name: 'deaths',
      },
      {
        id: 'assists',
        name: 'assists',
      },

      {
        id: 'kda',
        name: 'kda ratio',
        spec: 'round',
      },
      {
        id: 'killParticipation',
        name: 'kill participation',
      },
      {
        id: 'bountyGold',
        name: 'bounty',
        spec: 'round',
      },

      {
        id: 'killingSprees',
        name: 'sprees',
      },
      {
        id: 'doubleKills',
        name: 'double',
      },
      {
        id: 'tripleKills',
        name: 'triple',
      },
      {
        id: 'quadraKills',
        name: 'quadra',
      },
      {
        id: 'pentaKills',
        name: 'penta',
      },
    ],
  },

  {
    name: 'Objectives',
    stats: [
      {
        id: 'turretKills',
        name: 'turret takedowns',
      },
      {
        id: 'objectivesStolen',
        name: 'Objectives stolen',
      },
      {
        id: 'dragonKills',
        name: 'dragon kills',
      },
      {
        id: 'teamBaronKills',
        name: 'Baron kills',
      },
    ],
  },

  {
    name: 'Team Utility',
    stats: [
      {
        id: 'totalDamageTaken',
        name: 'damage taken',
      },
      {
        id: `damageTakenOnTeamPercentage`,
        name: 'Damage Taken Percentage',
        spec: 'round',
      },
      {
        id: 'damageSelfMitigated',
        name: 'damage self-mitigated',
      },
      {
        id: 'timeCCingOthers',
        name: 'Time Crowd-Controlling Enemies',
      },
    ],
  },

  {
    name: 'vision',
    stats: [
      {
        id: 'visionScore',
        name: 'vision score',
      },
      {
        id: 'controlWardsPlaced',
        name: 'control wards placed',
      },

      {
        id: 'wardsPlaced',
        name: 'wards placed',
      },
    ],
  },
]
