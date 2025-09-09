<script setup lang="ts">
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
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery,
)
</script>

<template>
  <div class="size-full z-auto overflow-y-auto  pt-12  -mr-34 pr-30">
    <div class="flex gap-8 sticky z-1 bg-linear-to-b from-b1 to-b1/70 backdrop-blur-lg -top-12 py-4 pl-13 pr-16 items-center justify-end w-full">
      <SelectedChampions :pocket="pocket" />
      <Input
        v-model="searchQuery"
        placeholder="Search champions..."
        class="max-w-100 border-b4/60 w-100"
        type="text"
        @clear:input="searchQuery = ''">
        <icon name="search" />
      </Input>
    </div>

    <!--     <div
      class="h-fit  pb-64 grid grid-flow-row auto-cols-auto pt-7  grid-cols-[repeat(auto-fill,minmax(80px,1fr))]  px-14 w-full inset-0   gap-3">
      <ChampionIcon
        v-for="champion in results.filter(r => !pocket.champions.includes(r.key))"
        :id="champion.id"
        :key="champion.id"
        :title="champion.name"
        :class="cn('hover-ring cursor-pointer rounded-lg size-26')">
        <PrismaticShine
          v-if=" pocket.champions.includes(champion.key) "
          class="scale-114 pointer-events-none" />
        <input
          v-model="pocket.champions"
          type="checkbox"
          :value="champion.key"
          class="peer hidden" />
      </ChampionIcon>
    </div> -->
  </div>
</template>

      <!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->