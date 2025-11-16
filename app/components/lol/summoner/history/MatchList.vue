<script lang="ts" setup>
const emit = defineEmits(['scroll-top'])

const { loading, matches, summoner } = useSummonerInject()

console.log('📎 - summoner:', summoner)

const itemsPerPage = 20
const currentPage = shallowRef<number>(1)

const pagedMatches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return matches.value.slice(start, start + itemsPerPage)
})

watch(
  () => matches.value.length,
  (newVal) => {
    if (newVal)
      currentPage.value = 1
  },
  { immediate: false }
)
</script>

<template>
  <div class="flex w-full flex-col overflow-visible py-24">
    <div
      v-if="loading"
      class="flex flex-col gap-8">
      <Skeleton
        v-for="i in itemsPerPage"
        :key="i"
        class="field-box h-40 w-full max-w-220" />
    </div>

    <TransitionScalePop
      v-else-if="pagedMatches.length > 0"
      :appear="false"
      group
      class="flex flex-col gap-8 pb-px">
      <LazyMatchCard
        v-for="match in pagedMatches"
        :key="match.matchId"
        :puuid="summoner?.puuid"
        :match="match"></LazyMatchCard>
    </TransitionScalePop>

    <div
      v-else
      class="grid h-64 w-220 place-items-center font-medium">
      No matches found with these filters.
    </div>

    <Pagination
      v-model:page="currentPage"
      :total="matches?.length"
      :default-page="1"
      :sibling-count="1"
      :show-edges="false"
      :items-per-page="itemsPerPage"
      class="mx-0 max-w-220 justify-center justify-self-start pt-8">
      <PaginationContent v-slot="{ items }">
        <PaginationFirst class="disabled:hidden" />
        <PaginationPrev
          size="sm"
          class="
            btn-square
            disabled:hidden
          " />
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
          class="
            btn-square
            disabled:hidden
          " />
        <PaginationLast class="disabled:hidden" />
      </PaginationContent>
    </Pagination>
  </div>
</template>
