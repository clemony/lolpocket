<script setup lang="ts">
const { pocket: p } = defineProps<{
  pocket: Pocket
}>()
const pocket = computed (() => p)
definePageMeta({
  name: 'pocket-champions',
  path: '/pocket/:pocketKey',
  alias: '/pocket/:pocketKey/champions',
  level: 3,
  title: 'champions',
  order: 1,
  search: false,
})

const route = useRoute()
console.log('💠 - route:', route.meta)
/* const {loading, ready, forceReload} = useSummonerMastery(puuid) */

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery,
)
</script>

<template>
  <div class="size-full z-auto overflow-y-auto  -mr-34 pr-34">
    <header class="flex pt-16 gap-8 sticky z-1 bg-linear-to-b from-b1 to-b1/70 backdrop-blur-lg top-0 pb-9 pl-13 pr-16 items-center justify-end  w-full">
      <!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->
      <Input
        v-model="searchQuery"
        placeholder="Search champions..."
        class="max-w-100 border-b4/60 w-100"
        type="text">
        <icon name="search" />
      </Input>
    </header>

    <div
      class="h-fit  pb-64 grid grid-flow-row auto-cols-auto pt-1  grid-cols-[repeat(auto-fill,minmax(80px,1fr))]  px-14 w-full pb-3 inset-0   gap-3 ">
      <label
        v-for="champion in results.filter(r => !pocket.champions.includes(r.key))"
        :key="champion.id"
        v-memo="results"
        :title="champion.name"
        :class="cn('hover-ring cursor-pointer relative rounded-lg size-26 overflow-hidden shadow-sm drop-shadow-sm', { 'scale-90  border  borderneutral/60 ': pocket.champions.includes(champion.key) })">
        <ChampionIcon
          :id="champion.id"
          :class="cn('size-full pointer-events-none', { 'contrast-110 opacity-65 grayscale': pocket.champions.includes(champion.key) })" />
        <PrismaticShine
          v-show=" pocket.champions.includes(champion.key) "
          class="scale-114 pointer-events-none" />
        <slot />
        <input
          v-model="pocket.champions"
          type="checkbox"
          :value="champion.key"
          class="peer hidden" />
      </label>
    </div>
  </div>
</template>

<style scoped></style>
