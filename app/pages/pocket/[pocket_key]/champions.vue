<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

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
  <div class="w-full pr-32 pl-14 z-auto overflow-y-auto pt-12 mx-auto">
    <div
      class="flex gap-12 sticky z-1 bg-linear-to-b from-b1 to-b1/70 backdrop-blur-lg -top-12 py-4 items-end flex-col px-2 justify-center w-full">
      <h2 class="self-start dss tracking-tight">
        Selected Champions
      </h2>
      <SelectedChampions :pocket="pocket">
        <Input
          v-model="searchQuery"
          aria-label="Search champions"
          placeholder="Search champions..."
          class="max-w-100 border-b4/60 w-100"
          type="text"
          @clear:input="searchQuery = ''">
          <icon name="search" />
        </Input>
      </SelectedChampions>
    </div>

    <VueDraggable
      :animation="100"

      chosen-class="item-set-item-chosen-80px"
      ghost-class="draggable-icon-ghost-80px"
      fallback-class="draggable-icon-fallback-80px"
      :group="{ name: 'champions', put: false, pull: 'clone' }"
      :force-fallback="true"
      :fallback-tolerance="0"
      :fallback-on-body="true"
      :model-value="ix().champions"
      class="h-fit pb-34 grid grid-flow-row auto-cols-auto pt-10 grid-cols-[repeat(auto-fill,minmax(80px,1fr))] w-full inset-0 px-2 gap-3">
      <PocketChampion
        v-for="champion in results.filter(r => !pocket.champions.includes(r.key))"
        :key="champion.id"
        :champion
        :pocket />
    </VueDraggable>
  </div>
</template>

<!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->
