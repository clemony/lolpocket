<script lang="ts" setup>
const { filteredKeys, championKeys } = defineProps<{
  filteredKeys: string[]
  championKeys: string[]
}>()

const ix = useIndexStore()
const selectedChampion = ref(null)

watch(
  () => selectedChampion.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <transition-slide
    v-if="championKeys" as="div" group class="overflow-hidden size-full gap-6 pt-46 scrollbar-hidden flex  ">
    <transition-slide
      as="div" group
      class="w-full pb-8   after:size-full after:pointer-events-none after:fixed after:top-36 after:rounded-t-[4rem] after:border-x-40 after:border-t-40 after:border-b1 after:z-0 after:scale-x-[101.5%] after:-left-0  flex flex-wrap  overflow-y-auto overflow-x-hidden    justify-start rounded-lg">
      <div
        v-for="key in championKeys"
        :key="key"
        :data-state="filteredKeys.includes(key) ? 'visible' : 'hidden'" class="group  p-1 data-[state=hidden]:hidden grow flex" @click="selectedChampion = key">
        <LibraryChampionCard v-if="key" :url="getSplash(ix.loadScreenByKey(key))" :name="key" class="min-w-56 max-w-62 h-78" />
      </div>
      <div class="w-58 h-78 grow" />
    </transition-slide>
    <div v-if="selectedChampion" class="h-fit max-h-full overflow-y-auto overflow-x-hidden tldr-40 p-4 mb-6 field-box border-b3/80 bg-b2/40 drop-shadow-sm" :class="{ 'max-w-0 w-0': !selectedChampion, 'max-w-180 w-180': selectedChampion }">
      <button class="btn group/btn btn-square top-5 left-5 z-2 btn-ghost absolute" @click="selectedChampion = null">
        <icon name="x-sm" class="text-white/70 group-hover/btn:text-black/70" />
      </button>
      <ChampionData :champion-key="selectedChampion" />
    </div>
  </transition-slide>
</template>