<script lang="ts" setup>
const props = defineProps<{
  match: any
  blue: any
  red: any
}>()

const gameOutcome = computed (() => {
  return props.match.teams[0].win == true ? 'Blue Team Win' : 'Red Team Win'
})
const gameEnd = computed (() => {
  return props.blue[0].gameEndedInSurrender == true ? 'Enemy Surrender' : null
})
const endGameStats = {

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
  vision:
[
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
      id: 'neutral',
      data: 'neutralMinionsKilled',
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

}

const statIndex = [0, 1, 2, 3, 4, 5, 6, 7]

const ds = useDataStore()
</script>

<template>
  <div class="overflow-x-auto overscroll-none rounded-bo grid    h-180  bg-b1/30">
    <table class="table table-sm table-pin-rows table-pin-cols [&_th]:!bg-b1/94 [&_th]:brightness-97 [&_th]:backdrop-blur-md">
      <thead class="relative">
        <tr class="!bg-b1/95 brightness-99 backdrop-blur-md">
          <th class="z-1 flex-grow">
            {{ gameOutcome }}<br />
            {{ gameEnd ?? '' }}
          </th>

          <td v-for="(player, i) in props.blue.concat(props.red)" :key="player.playerId" class="!max-w-12 w-12 min-w-12 overflow-hidden first-of-type:rounded-l-xl last-of-type:rounded-r-xl z-0" :class="{ 'bg-inspiration/30': player.teamId == 100, 'bg-domination/30': player.teamId == 200, 'rounded-r-xl  border-r-4 border-r-b2': i == 4, 'rounded-l-xl  border-l-4 border-l-b2': i == 5 }">
            <div class="rounded-lg size-fit shadow-sm">
              <div class="!size-10 overflow-hidden rounded-lg">
                <ChampionIcon :id="player.championId" :alt="player.championName" class="size-full scale-118" />
              </div>
            </div>
          </td>

          <th class="opacity-10"></th>
        </tr>
      </thead>

      <template v-for="category in endGameStats" :key="category">
        <tbody v-for="stat in category" :key="stat.id" class="**:!text-1 ">
          <tr class="relative">
            <td v-if="statIndex.includes(stat.i)" class="capitalize bg-b2 font-semibold text-nowrap h-7 sticky left-0">
              <span class="absolute  bottom-1">
                {{ stat.id }}
              </span>
            </td>

            <td v-if="statIndex.includes(stat.i)" class="bg-b2">
            </td>

            <th v-else class="capitalize font-medium tracking-tight">
              {{ stat.id }}
            </th>

            <template v-for="player in props.blue.concat(props.red)" :key="player.id ">
              <td :class="{ 'bg-b2': statIndex.includes(stat.i), 'text-bc/15 **:text-bc/15': player[stat.data] == 0 }" class=" text-end !text-1 *:!text-1 tracking-tight font-medium">
                {{ computed (() => {
                  const a = player[stat.data] ?? player.challenges[stat.data]

                  const b = a && a.toString().length > 6 ? a : 0

                  let c = b ? b.toFixed(2) : a
                  c = stat.data == 'effectiveHealAndShielding' || stat.data == 'bountyGold' || stat.data == 'goldPerMinute' ? Math.round(c) : c

                  // units

                  c = stat.data == 'damageTakenOnTeamPercentage' && c ? `${Math.round(c * 100)}%` : c
                  c = stat.data == 'timeCCingOthers' ? `${c}s` : c

                  c = c ? c.toLocaleString() : c
                  return c
                }) }}
              </td>
            </template>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>
