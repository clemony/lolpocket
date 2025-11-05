<script lang="ts" setup>
const emit = defineEmits(['scroll-top'])

const { loading, matches, summoner } = useSummonerInject()

const itemsPerPage = 20
const currentPage = ref(1)

const pagedMatches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return matches.value.slice(start, start + itemsPerPage)
})

watch(
  () => matches.value.length,
  (newVal) => {
    if (newVal)
      currentPage.value = 1
  }
)
</script>

<template>
  <div
    class="flex-col overflow-visible py-24 flex w-full">
    <div
      v-if="loading"
      class="flex flex-col gap-8">
      <Skeleton
        v-for="i in itemsPerPage"
        :key="i"
        class="h-40 field-box w-full max-w-220" />
    </div>

    <TransitionScalePop
      v-else-if="pagedMatches.length > 0"
      :appear="false"
      group
      class="flex  flex-col gap-8 pb-px">
      <LazyMatchCard
        v-for="match in pagedMatches"
        :key="match.matchId"
        :puuid="summoner?.puuid"
        :match="match"></LazyMatchCard>
    </TransitionScalePop>

    <div
      v-else
      class="grid place-items-center w-220 h-64 font-medium">
      No matches found with these filters.
    </div>

    <Pagination
      v-model:page="currentPage"
      :total="matches?.length"
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
            size="sm"
            :value="page.value"
            :is-active="page.value === currentPage"></PaginationItem>
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
