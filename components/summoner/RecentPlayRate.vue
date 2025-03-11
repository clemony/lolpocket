<script setup lang="ts">
import { summoner } from 'shared/data/summonerData'

const as = useAccountStore()
const ds = useDataStore()
const recentWinrate = ref(55)
const recentMatchNum = ref(20)

const color1 = computed(() => {
  return as.colorBlindMode ? '#99c4c8' : 'oklch(76.93% 0.0494 204.19)'
})

const datasets = [
  {
    data: [100 - recentWinrate.value, recentWinrate.value],
  },
]

const colors = [getColorFromVariable('--color-b3'), color1.value]
const labels = ['Win', 'Loss']
</script>

<template>
  <div
    class="grid  max-w-[600px] grid-cols-[2.5fr_3fr_1fr] items-center gap-3 px-2"
  >
    <div class="relative flex items-center gap-4">
      <Donut
        :datasets="datasets"
        :colors="colors"
        :labels="labels"
        type="gauge"
        aria="Recent winrate in percentage"
        class="!size-22"
      />
      <span class="text-bc absolute left-7 font-medium"> {{ recentWinrate }}% </span>

      <h5>
        Winrate
        <br />
        Last {{ recentMatchNum }} Games
      </h5>
    </div>
    <div class="flex gap-3">
      <div
        v-for="champion in summoner.recentChampions"
        :key="champion.name"
        class="relative flex size-22 items-center rounded-full shadow-sm"
      >
        <Donut
          :datasets="[
            {
              data: [100 - (champion.wins / champion.games) * 100, (champion.wins / champion.games) * 100],
            },
          ]"
          :colors="colors"
          :labels="[`${champion.games - champion.wins}L`, `${champion.wins}W`]"
          cutout="87%"
          type="gauge"
          aria="Recent winrate in percentage"
          class="z-10"
        />

        <div class="border-neutral/40 absolute left-1.75 size-18.5 overflow-hidden rounded-full border-2 font-medium">
          <img
            :src="`/img/champion/${
              computed(() => {
                return ds.champions.find((champ) => champ.name == champion.name).apiname;
              }).value
            }.webp`"
            alt="champion.name"
            class="size-18.5 scale-105 object-center"
          />
        </div>
      </div>
    </div>

    <RoleDonut />
  </div>
</template>

<style scoped></style>
