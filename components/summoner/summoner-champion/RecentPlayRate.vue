<script setup lang="ts">
const props = defineProps<{
  matchData: any
  puuid: string
}>()
const ms = useMatchStore()

const {
  matchData,
  loading,
} = useMatchData(props.puuid)

const winrate = computedAsync (() => {
  const a = ms.matches.filter(m => m.win == true)
  return Math.round((a.length / ms.matches.length) * 100)
})

const datasets = computed(() => [
  {
    data: [100 - winrate.value, winrate.value],
  },
])

const colors = [getColorFromVariable('--color-b3'), getColorFromVariable('--color-inspiration')]
const labels = ['Win', 'Loss']

const { bayesianChampions } = useMatchChampions()

const recentChamps = computed (() => {
  const a = [...bayesianChampions.value]
  return a.sort((a, b) => (b.games - a.games)).slice(0, 3)
})


const roles = useMatchRoles(computed(() => ms.matches))

const roleDatasets = computed(() => [
  {
    labels: roles.value.map(r => r.role),
    data: roles.value.map(r => r.games),
  },
])

const roleColors = computed (() => roles.value.map(r => r.color))

const mostRoled = computedAsync(() => {
  return roles.value[0].role
})
</script>

<template>
  <div
    class="grid w-220 max-h-22 h-22 w-210 **:select-none grid-cols-[3fr_3fr_1.5fr] items-center justify-between gap-3 px-3">
    <div class="relative flex items-center gap-4">
      <div class="!size-22 grid place-items-center">
        

<Donut v-if="!loading && winrate !== null"
          :datasets="datasets"
          :colors="colors"
          :labels="labels"
          type="gauge"
          aria="Recent winrate in percentage" class="size-full" />
        <DonutSkeleton v-else/>
        <span  v-if="!loading && datasets" class="text-bc absolute  font-medium"> {{ winrate }}% </span>
      </div>

      <h5>
        Winrate
        <br />
        Last {{ ms.matches.length }} Games
      </h5>
    </div>
<div v-if="recentChamps && recentChamps.length" class="grid grid-cols-3 px-3 gap-3">
      <div
        v-for="champion in recentChamps"
        :key="champion.champion.name"
        class="relative grid place-items-center size-22  rounded-full drop-shadow-sm">
        <div class=" absolute size-17 z-0  rounded-full overflow-hidden  ">
          <img
            :src="`/img/champion/${champion.champion.id}.webp`"
            alt="champion.name"
            class="size-full inset-shadow-sm scale-112" />
        </div>
        <Donut
          :datasets="[
            {
              data: [100 - (champion.wins / champion.games) * 100, (champion.wins / champion.games) * 100],
            },
          ]"
          :colors="colors"
          :labels="[`${champion.games - champion.wins}L`, `${champion.wins}W`]"
          cutout="84%"
          type="gauge"
          aria="Recent winrate in percentage"
          class="z-1" />
      </div>
    </div>
   <div class="grid place-items-center justify-self-end self-center">
        <DonutSkeleton v-if="loading" />
    <LazyRoleDonut :roles="roles"  :datasets="roleDatasets" :colors="roleColors" :most-roled="mostRoled" />
  </div>
  </div>
</template>

<style scoped></style>
