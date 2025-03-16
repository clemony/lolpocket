<script lang="ts" setup>
const props = defineProps<{
  match: any
  blue: any
  red: any
}>()
const stats = {

  damage: [
  {
    id: 'Damage Dealt to Champions',
    data: '',
    i: 0
  },
    
    {
      id: 'total',
      data: 'totalDamageDealt',
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
      id: 'ally h + s',
      data: 'effectiveHealAndShield',
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
      spec: 'round'
    },
    {
      id: 'Time CC',
      data: 'totalTimeCCDealt',
    },
  ],
  vision:
[
  {
    id: 'vision',
    data: '',
    i: 3
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
    i: 4
  },
    {
      id: 'dmg to turrets',
      data: 'damageDealtToObjectives',
    },
    {
      id: 'turrets',
      data: 'turretKills',
    },
    {
      id: 'obectives stolen',
      data: 'bjectivesStolen',
    },
    {
      id: 'inhibitor',
      data: 'inhibitorTakedowns',
    },
    {
      id: 'dmg to objectives',
      data: 'damageDealtToObjectives',
    },
    {
      id: 'dragons',
      data: 'dragonKills',
    },
    {
      id: 'Baron',
      data: 'teamBaronKills',
    },
  ],

  kills: [
  {
    id: 'Kills',
    data: '',
    i: 5
  },
    {
      id: 'kills',
      data: 'kills',
    },
    {
      id: 'first blood',
      data: 'firstBloodKill',
    },

    {
      id: 'kda',
      data: 'kda',
      spec: 'round'
    },
    {
      id: 'bounty',
      data: 'bountyGold',
      spec: 'round'
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
    i: 6
  },

    {
      id: 'gold/min',
      data: 'goldPerMinute',
      spec: 'round'
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
</script>

<template>
  <div class="overflow-x-auto overscroll-none rounded-box  h-180  bg-b1/30">
    <table class="table table-sm table-pin-rows table-pin-cols [&_th]:!bg-b1/94 [&_th]:brightness-97 [&_th]:backdrop-blur-md">
      <thead class="relative">
        <tr class="!bg-b1/94 brightness-97 backdrop-blur-md">
          <th class="opacity-10 ">
            <span class="opacity-10 absolute size-full"></span>
          </th>
          <td v-for="(player, i) in props.blue.concat(props.red)" :key="player.playerId" class="!max-w-12 w-12 min-w-12 overflow-hidden first-of-type:rounded-l-xl last-of-type:rounded-r-xl" :class="{'bg-inspiration/30': player.teamId == 100, 'bg-domination/30': player.teamId == 200, 'rounded-r-xl  border-r-4 border-r-b2': i == 4, 'rounded-l-xl  border-l-4 border-l-b2': i == 5}">
            <div class="rounded-lg size-fit shadow-sm">
            <div class="!size-10 overflow-hidden rounded-lg">
            <img :src="`/img/champion/${player.championId}.webp`" class="size-full scale-118"/>
            </div>
            </div>
          </td>
          <th class="opacity-10"></th>
        </tr>
      </thead>

      <template v-for="category in stats" :key="category">
        <tbody v-for="stat in category" :key="stat.id" class="**:!text-1 ">
          <tr class="relative">
            <td v-if="statIndex.includes(stat.i)" class="bg-b2">
            </td>
            <td v-if="statIndex.includes(stat.i)" class="capitalize bg-b2 font-semibold text-nowrap h-7">
              <span class="absolute  bottom-1">
              {{ stat.id }}
              </span>
            </td>
            <th v-else class="capitalize font-medium tracking-tight">
              {{ stat.id }}
            </th>
            <template v-for="player in props.blue.concat(props.red)" :key="player.id ">
              <td :class="{ 'bg-b2': statIndex.includes(stat.i), 'text-bc/15': player[stat.data] == 0  }" class=" text-end !text-1 *:!text-1 tracking-tight font-medium">
                {{ computed (() => {
                const  a = player[stat.data] ?? player.challenges[stat.data]
        

const b  = a && a.toString().length > 6 ? a : 0


              
              const c =  b ?  b.toFixed(2) : a
              return c ? c.toLocaleString() : c
         
                })}}
              </td>
            </template>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>
