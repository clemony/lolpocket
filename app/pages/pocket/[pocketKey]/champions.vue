<script setup lang="ts">
const { pocket } = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'pocket champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
  parent: '/pocket',
  search: false,
})

const route = useRoute()
console.log('💠 - route:', route.meta)
/* const {loading, ready, forceReload} = useSummonerMastery(puuid) */

const activePocket = computed (() => pocket)

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery,
  { keys: ['name'], threshold: 0.3 },
)
</script>

<template>
  <div class="size-full  lg:max-w-[1400px] mx-auto pt-26 ">
    <header class="flex gap-8 pb-9 pl-13 pr-16 items-start justify-between  w-full">
      <h1 class="text-10 font-bold dst ">
        Champions
      </h1>
      <div class="flex flex-col gap-2 justify-center items-end">
        <SearchWrapper class=" h-12 w-100">
          <input
            v-model="searchQuery"
            type="text" />
        </SearchWrapper>
        <ChampionQuote class="font-serif" />
      </div>
    </header>

    <div
      class="h-max min-h-max grid grid-flow-row auto-cols-auto pb-90  grid-cols-[repeat(auto-fill,minmax(80px,1fr))]  px-14 w-full pb-3 inset-0   gap-3 ">
      <label
        v-for="champion in results"
        :key="champion.id"
        :class="cn('hover-ring cursor-pointer relative rounded-lg size-26 overflow-hidden shadow-sm drop-shadow-sm', { 'scale-90  border  border-n1/60 ': pocket.champions.includes(champion.key) })">
        <ChampionIcon
          :id="champion.id"
          :class="cn('size-full pointer-events-none', { 'contrast-110 opacity-65 grayscale': pocket.champions.includes(champion.key) })" />
        <PrismaticShine
          v-show=" pocket.champions.includes(champion.key) "
          class="scale-114 pointer-events-none" />
        <slot />
        <input
          v-model="activePocket.champions"
          type="checkbox"
          :value="champion.key"
          class="absolute  pointer-events-none transition-all duration-300 opacity-0 scale-0 checkbox checkbox-neutral rounded-full drop-shadow-sm top-0 right-0 z-4"
          :class="{ 'scale-100 opacity-100': pocket.champions.includes(champion.key) }" />
      </label>
    </div>
  </div>
</template>

<style scoped></style>
