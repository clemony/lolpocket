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
  <div class="w-full h-full overflow-y-auto pb-22">
    <div
      v-if="loading"
      class="flex flex-col gap-6 pt-27">
      <LazyMatchCardSkeleton
        v-for="i in itemsPerPage"
        :key="i" />
    </div>

    <transition-slide
      v-else-if="pagedMatches.length > 0"
      group
      class="pt-14 flex flex-col gap-6 pb-px">
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
    </transition-slide>

    <div
      v-else
      class="grid place-items-center pt-57 h-54 font-medium">
      No matches found with these filters.
    </div>

    <Pagination
      v-model:page="currentPage"
      :total="filteredMatches?.length"
      :default-page="1"
      :items-per-page="itemsPerPage"
      class="pt-4">
      <PaginationContent v-slot="{ items }">
        {{ console.log("💠 - items:", items) }}
        <PaginationFirst />
        <PaginationPrev />
        <template v-for="(page, index) in items">
          <PaginationItem
            v-if="page.type === 'page'"
            :key="index"
            :value="index + 1"
            :is-active="index + 1 === currentPage"></PaginationItem>
          <PaginationEllipsis
            v-else
            :key="page.type"
            :index="index" />
        </template>
        <PaginationNext />
        <PaginationLast />
      </PaginationContent>
    </Pagination>
  </div>
</template>
