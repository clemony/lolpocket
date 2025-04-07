<script setup lang="ts">
const props = defineProps<{
  champion: Champion
}>()

const statModel = ref(true)

const colors = [getColorFromVariable('--color-b3'), 'black']
const labels = ['Level']
/* const datasets = [
    {
        data: [18 - lvl.value, lvl.value],
    },
] */

const lvl = ref(1)
const numericLvl = computed(() => Number(lvl.value))
</script>

<template>
  <div class="collapse !w-full !rounded-none !p-0">
    <input v-model="statModel" type="checkbox" />
    <div class="collapse-title !w-full !p-0">
      <Separator class="mt-5" label="STATS" />
    </div>

    <div class="flex h-18 w-full gap-4">
      <div class="flex h-full w-3/4 flex-col justify-between pt-2 pb-4">
        <h3 class="drop-shadow-text leading-none tracking-tight">
          Level
        </h3>
        <input
          v-model="lvl"
          type="range"
          :min="1"
          :max="18"
          class="range range-xs" />
      </div>
      <div class="relative size-18">
        <!--        <Donut
                        :datasets="datasets"
                        :labels="labels"
                        aria="level"
                        :colors="colors"
                        gauge /> -->
        <h1 class="absolute top-4 left-6.5 size-full">
          {{ lvl }}
        </h1>
      </div>
    </div>

    <div class="grid grid-cols-2 items-start gap-x-10 gap-y-5 grid-flow-col">
      <template
        v-for="(stat, i) in championStats">
        <template v-if="i <= 3">
          <ChampStatBar
            :key="i"
            v-model:lvl="numericLvl"
            :champion="props.champion"
            :stat="stat"
            class="col-start-1" />
        </template>
      </template>

      <template
        v-for="(stat, i) in championStats">
        <template v-if="i >= 4">
          <ChampStatBar
            :key="i"
            v-model:lvl="numericLvl"
            :champion="props.champion"
            :stat="stat"
            class="col-start-2" />
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
