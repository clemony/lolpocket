<script lang="ts" setup>
const { summoner } = storeToRefs(sSession())

useHead({
  titleTemplate: () => {
    if (summoner.value?.name)
      return `${summoner.value.name} - Match History | lolpocket`
    else return "lolpocket"
  },
})

definePageMeta({
  title: "Match History",
  description: "Browse through your matches with deep search tools.",
  icon: "i-history",
  class: "scale-90",
  search: false,
  order: 0,
})

const open = shallowRef<boolean>(true)
</script>

<template>
  <div class="w-full">
    <NuxtLayout name="sticky-aside-layout">
      <template #left>
        <!--       <MatchHistoryMenu v-if="api" :api @open="e => open = e" /> -->

        <QueueFilters class="mt-1 -mb-1" />

        <MatchChampionFilters />

        <LazyMatchPositionFilter class="mt-1 -mb-1" />

        <LazyMatchAlliesFilter />
      </template>
      <div class="flex w-full items-center">
        <LazyRankCard title="Solo/Duo" :entry="summoner?.ranked?.solo" />
        <LazyRankCard title="Flex" :entry="summoner?.ranked?.flex" />
      </div>
      <LazyMatchList />
    </NuxtLayout>
  </div>
</template>
