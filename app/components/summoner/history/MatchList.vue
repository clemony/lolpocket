<script lang="ts" setup>
import { useInfiniteScroll } from '@vueuse/core'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const ms = useMatchStore()
const { filteredMatches } = useFilteredMatches(summoner.puuid, ms.mf)
const loading = ref(false)

const itemsPerPage = 10
const currentPage = ref(1)

const pagedMatches = computed(() => {
  return filteredMatches.value.slice(0, currentPage.value * itemsPerPage)
})

// Track when to load more
const container = ref<HTMLElement | null>(null)

useInfiniteScroll(
  window,
  () => {
    if (pagedMatches.value.length < filteredMatches.value.length) {
      currentPage.value++
    }
  },
  { distance: 200 },
)
const openMatch = ref(null)
</script>

<template>
  <div
    ref="container"
    class="flex-col py-24 flex  w-full">
    <div
      v-if="loading"
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
        :puuid="summoner.puuid"
        :match="match">
        <input
          v-model="openMatch"
          type="radio"
          class="peer hidden"
          :value="match?.matchId" />
      </LazyMatchCard>
    </TransitionScalePop>

    <div
      v-else
      class="grid place-items-center w-220 h-64 font-medium">
      No matches found with these filters.
    </div>

    <!-- Optional loading spinner when more data is loading -->
    <div class="w-220 grid place-items-center h-64">
      <div
        v-if="pagedMatches.length < filteredMatches.length"
        class="py-4 text-center text-gray-500">
        Loading more...
      </div>

      <UpdateSummoner
        v-else
        variant="link"
        size="lg"
        show-icon
        class="w-44"
        text="Load more..."
        :summoner />
    </div>
  </div>
</template>
