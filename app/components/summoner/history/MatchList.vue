<script lang="ts" setup>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'

const { state } = defineProps<{
  state: PlayerData
}>()

const emit = defineEmits(['scroll-to-top'])
const itemsPerPage = 12
const currentPage = ref(1)

const pagedMatches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return state.matches.slice(start, start + itemsPerPage)
})

watch(() => state.matches.length, (newVal) => {
  if (newVal)
    currentPage.value = 1
})

const scroll = inject<Scroll>('scroll-top')
watch(() => currentPage.value, (newVal) => {
  if (newVal)
    scroll.top()
})
</script>

<template>
  <div
    class="flex-col py-24 flex  w-full">
    <div
      v-if="state.loading"
      class="flex flex-col gap-8">
      <LazyMatchCardSkeleton
        v-for="i in itemsPerPage"
        :key="i" />
    </div>

    <TransitionScalePop
      v-else-if="pagedMatches.length > 0"
      :appear="false"
      group
      class="flex flex-col gap-8 pb-px">
      <LazyMatchCard
        v-for="match in pagedMatches"
        :key="match.matchId"
        :puuid="state.summoner?.puuid"
        :match="match">
      </LazyMatchCard>
    </TransitionScalePop>

    <div
      v-else
      class="grid place-items-center w-220 h-64 font-medium">
      No matches found with these filters.
    </div>

    <Pagination
      v-model:page="currentPage"
      :total="state.matches?.length"
      :default-page="1"
      :sibling-count="1"
      :show-edges="false"
      :items-per-page="itemsPerPage"
      class="pt-8 max-w-220 justify-center justify-self-start mx-0">
      <PaginationContent v-slot="{ items }">
        <PaginationFirst class="disabled:hidden" />
        <PaginationPrev
          size="sm"
          class="disabled:hidden btn-square" />
        <template v-for="(page, index) in items">
          <PaginationItem
            v-if="page.type === 'page'"
            :key="index"
            variant="outline"
            :value="index + 1"
            size="sm"
            :is-active="index + 1 === currentPage"></PaginationItem>
          <PaginationEllipsis
            v-else
            :key="page.type"
            :index="index" />
        </template>
        <PaginationNext
          size="sm"
          class="disabled:hidden btn-square" />
        <PaginationLast class="disabled:hidden" />
      </PaginationContent>
    </Pagination>
  </div>
</template>
