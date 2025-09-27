<script setup lang="ts">
definePageMeta({
  name: 'pocket-champions',
  title: 'champions',
  alias: '/pocket/:pocket_key/champions',
  order: 1,
  path: '/pocket/:pocket_key',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery
)
</script>

<template>
  <div class="size-full z-auto overflow-y-auto pt-12 -mr-34 pr-30">
    <div
      class="flex gap-8 sticky z-1 bg-linear-to-b from-b1 to-b1/70 backdrop-blur-lg -top-12 py-4 pl-11 pr-25 items-end flex-col justify-center w-full">
      <h1>Selected Champions</h1>
      <SelectedChampions :pocket="pocket" />
      <Input
        v-model="searchQuery"
        aria-label="Search champions"
        placeholder="Search champions..."
        class="max-w-100 border-b4/60 w-100"
        type="text"
        @clear:input="searchQuery = ''">
        <icon name="search" />
      </Input>
    </div>

    <div
      class="h-fit pb-34 grid grid-flow-row auto-cols-auto pt-6 grid-cols-[repeat(auto-fill,minmax(80px,1fr))] pl-16 pr-24 w-full inset-0 gap-3">
      <PocketChampion
        v-for="champion in results.filter(r => !pocket.champions.includes(r.key))"
        :key="champion.id"
        :champion
        :pocket />
    </div>
  </div>
</template>

<!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->
