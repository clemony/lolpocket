<script lang="ts" setup>
const { puuid } = defineProps<{
  puuid: string
}>()

const ms = useMatchStore()
const { filteredMatches } = useFilteredMatches(puuid, ms.mf)
const { loading } = useSummoner(puuid)
const itemsPerPage = 10
const currentPage = ref(1)

const pagedMatches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredMatches.value.slice(start, start + itemsPerPage)
})

const openMatch = ref(null)
</script>

<template>
  <div class="flex-col flex scroll-smooth">
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
        :key="match.info.gameId"
        :puuid
        :match="match">
        <input
          v-model="openMatch"
          type="radio"
          class="peer hidden"
          :value="match?.metadata?.matchId" />
      </LazyMatchCard>
    </TransitionScalePop>

    <div
      v-else
      class="grid place-items-center w-220 justify-center   h-54 font-medium">
      No matches found with these filters.
    </div>

    <Pagination
      v-model:page="currentPage"
      :total="filteredMatches?.length"
      :default-page="1"
      :sibling-count="1"
      :show-edges="false"
      :items-per-page="itemsPerPage"
      class="pt-8 max-w-220 justify-center justify-self-start mx-0">
      <PaginationContent v-slot="{ items }">
        <PaginationFirst class="disabled:opacity-0" />
        <PaginationPrev
          size="sm"
          class="disabled:opacity-0 btn-square" />
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
          class="disabled:opacity-0 btn-square" />
        <PaginationLast class="disabled:opacity-0" />
      </PaginationContent>
    </Pagination>
  </div>
</template>
