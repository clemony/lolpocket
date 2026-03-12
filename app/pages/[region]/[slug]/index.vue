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
  icon: "history",
  listClass: "**:stroke-[1.6]",
  order: 0,
  search: false,
  prefix: "summoner",
})

const open = shallowRef<boolean>(true)
</script>

<template>
  <UPage
    :ui="{
      root: 'relative z-auto mb-44 flex w-full flex-row pt-8 pl-23',
      left: 'lg:col-span-3',
      right: 'hidden',
      center: 'overflow-visible! lg:col-span-7 lg:col-start-4',
    }">
    <template #left>
      <UPageAside
        :ui="{
          root: 'scrollbar-none inset-y-0 top-0 bottom-0 z-auto',
          container:
            'scrollbar-none flex w-full origin-right flex-col items-center gap-y-6 *:w-full',
        }"
        group
        :offset="{
          enter: [0, '10%'],
          leave: [0, '10%'],
        }">
        <!--       <MatchHistoryMenu v-if="api" :api @open="e => open = e" /> -->
        <LazyRankCard title="Solo/Duo" :entry="summoner?.ranked?.solo" />
        <LazyRankCard title="Flex" :entry="summoner?.ranked?.flex" />
        <QueueFilters class="mt-1 -mb-1" />

        <MatchChampionFilters />

        <LazyMatchPositionFilter class="mt-1 -mb-1" />

        <LazyMatchAlliesFilter v-if="user().settings?.show_allies" />
      </UPageAside>
    </template>
    <UPageBody>
      <LazyMatchList />
    </UPageBody>
  </UPage>
</template>
