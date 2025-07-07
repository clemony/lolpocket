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
  <div class="size-full">
    <div class="grid  grid-cols-[2.3fr_repeat(10,1fr)]   grid-flow-row w-full  gap-1 px-2 py-1 h-18 group/head  ">
      <div class="size-full items-center">
        <p :class="cn('font-medium dst', { 'text-inspiration': props.match.teams[0].win != true, 'text-domination': props.match.teams[0].win != true })">
          {{ gameOutcome }}
        </p>
        {{ gameEnd ?? '' }}
      </div>

      <div
        v-for="player in props.blue.concat(props.red)" :key="player.playerId"
        :class="cn(' place-items-center grid size-full rounded-xl z-0',
                   { 'bg-inspiration/30': player.teamId == 100,
                     'bg-domination/30': player.teamId == 200 })">
        <div class="shrink-0 overflow-hidden rounded-lg size-13 aspect-square grid place-items-center">
          <ChampionIcon :id="player.championId" :alt="player.championName" class="rounded-lg !size-full" />
        </div>
      </div>
    </div>

    <div class="overflow-auto mt-2 **:text-1 grid  grid-cols-[2fr_repeat(10,1fr)]   grid-flow-row overscroll-none relative grid px-2  h-180  ">
      <template v-for="category in endGameStats" :key="category">
        <div v-for="stat in category" :key="stat.id" class="contents">
          <div v-if="statIndex.includes(stat.i)" class="capitalize top-0 bg-b2 font-semibold items-center rounded-lg text-nowrap  py-1 px-2 !sticky left-0  grid col-span-11">
            <span class="">
              {{ stat.id }}
            </span>
          </div>

          <!--       <div v-if="statIndex.includes(stat.i)" class="bg-b2">
            </div>
 -->
          <div v-else class="capitalize pl-2 col-start-1 font-medium tracking-tight">
            {{ stat.id }}
          </div>

          <div
            v-for="player in props.blue.concat(props.red)" :key="player.id " :class="cn(
              'text-end !text-1 *:!text-1 py-1 tracking-tight last:pr-2 font-medium',
              {
                'text-bc/15 **:text-bc/15': player[stat.data] == 0 })">
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
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
