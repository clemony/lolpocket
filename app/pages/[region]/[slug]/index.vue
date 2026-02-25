<script lang="ts" setup>
const { summoner } = storeToRefs(sSession())

useHead({
  // or as a function
  titleTemplate: () => {
    if (summoner.value?.name)
      return `${summoner.value.name} - Match History | lolpocket`
    else return "lolpocket"
  },
})

definePageMeta({
  title: "Match History",
  description: "Browse through your matches with deep search tools.",
  icon: "history",
  listClass: "**:stroke-[1.6]",
  order: 0,
})

const open = shallowRef<boolean>(true)
</script>

<template>
  <UPage
    :ui="{
      root: 'relative z-auto w-full pl-23 flex flex-row pt-8 mb-44',
      left: 'lg:col-span-3',
      right: 'hidden ',
      center: 'lg:col-span-7 lg:col-start-4  ',
    }">
    <template #left>
      <UPageAside
        :ui="{
          root: 'scrollbar-none z-auto inset-y-0 top-0 bottom-0',
          container:
            'scrollbar-none *:w-full flex w-full origin-right flex-col items-center gap-y-6',
        }"
        group
        :offset="{
          enter: [0, '10%'],
          leave: [0, '10%'],
        }">
        <!--       <MatchHistoryMenu v-if="api" :api @open="e => open = e" /> -->
        <RankCard title="Solo/Duo" :entry="summoner?.ranked?.solo" />
        <RankCard title="Flex" :entry="summoner?.ranked?.flex" />
        <QueueFilters />

        <MatchChampionFilters />

        <LazyMatchPositionFilter />

        <LazyMatchAlliesFilter v-if="user().settings?.show_allies" />
      </UPageAside>
    </template>
    <UPageBody>
      <LazyMatchList />
    </UPageBody>
  </UPage>
</template>
