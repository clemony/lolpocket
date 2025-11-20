<script lang="ts" setup>
import { motion } from 'motion-v'
import { VList } from 'virtua/vue'
/* const emit = defineEmits(['scroll-top']) */

const { loading, loadMatches, matches, summoner } = inject<SummonerInject>(SummonerKey)

/* console.log('📎 - summoner:', summoner)

const itemsPerPage = 20
const currentPage = shallowRef<number>(1)

const pagedMatches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredMatches.value.slice(start, start + itemsPerPage)
})

watch(
  () => filteredMatches.value.length,
  (newVal) => {
    if (newVal)
      currentPage.value = 1
  },
  { immediate: false }
) */

onMounted (() => {
  loadMatches()
})
</script>

<template>
  <div class="flex w-full flex-col overflow-visible py-24">
    <div
      v-if="loading"
      class="flex flex-col gap-8">
      <Skeleton
        v-for="i in 10"
        :key="i"
        class="field-box h-40 w-full max-w-220" />
    </div>

    <VList

      v-else-if="filteredMatches.length"
      v-slot="{ item, index }"
      :style="{ height: '100vh' }"
      class="flex h-600 flex-col gap-8 pb-px"
      :data="matches"
      :item-size="133"
      :buffer-size="200">
      <LazyMatchCard
        :key="index"
        :puuid="summoner?.puuid"
        :match="item" />
    </VList>

    <div
      v-else
      class="grid h-64 w-220 place-items-center font-medium">
      No matches found with these filters.
    </div>
    <!--
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
          class="btn-square disabled:hidden" />
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
          class="btn-square disabled:hidden" />
        <PaginationLast class="disabled:hidden" />
      </PaginationContent>
    </Pagination> -->
  </div>
</template>
