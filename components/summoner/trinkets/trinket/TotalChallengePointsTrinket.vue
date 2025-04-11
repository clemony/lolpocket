<script lang="ts" setup>

const props = defineProps<{
container: any
}>()

const winrate = ref(60)

const labels = ['Current', 'Max']
const datasets = [
  {
    data: [challenges.totalPoints.max, challenges.totalPoints.current],
  },
]

const colors = [getColorFromVariable('--color-b3'), getColorFromVariable(`--color-${challenges.totalPoints.level.toLowerCase()}`)]
console.log("💠 - colors:", colors)
</script>

<template>
<Trinket size="sm" :container="props.container" vertical >
        <div v-tippy="`${challenges.totalPoints.current.toLocaleString()} / ${challenges.totalPoints.max.toLocaleString()}`"  class="relative -mt-1 justify-self-center">
     <Donut
            :datasets="datasets"
            :colors="colors"
            :labels="labels"
            :no-tooltip="true"
            type="gauge"
            aria="Total Challenge Level"
            class="!size-30 drop-shadow-sm -mt-6"
          />

          <div class=" absolute -top-2.5 left-0 grid place-items-center size-full pointer-events-none">
            <img :src="`/img/challenges/crystal_${challenges.totalPoints.level.toLowerCase()}.webp`" class="size-16 drop-shadow-sm drop-shadow-[#000]/50 opacity-90" />

          <!--   <i-challenges-icon-points class="size-9 dst absolute bottom-0" /> -->
          </div>
        </div>

        <div class="h-full grid mt-1.5 pl-6 gap-3">
          <div>
            <p class=" font-semibold tracking-wide  text-2 opacity-50">
              Level
            </p>
            <div class="flex relative">
              <span class=" text-5 tracking-tight font-semibold capitalize">{{ challenges.totalPoints.level.toLowerCase() }}</span>
        
            </div>
          </div>
          <div>
            <p class=" font-semibold  tracking-wide text-2  opacity-50">
              Points
            </p>
            <p class=" font-semibold  text-3  ">
              {{ challenges.totalPoints.current.toLocaleString() }} / {{ challenges.totalPoints.max.toLocaleString() }}
            </p>
          </div>

          <p v-tippy="`Top ${challenges.totalPoints.percentile * 100} Percentile!`" class="badge badge-ghost bg-b2 font-medium mt-1 border-b2 flex gap-2 pl-3 -ml-1 pr-4 items-center">
            ★ {{ challenges.totalPoints.percentile * 100 }}%
          </p>
        </div>

</Trinket>
</template>