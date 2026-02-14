<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { summoner } = storeToRefs(sSession())
onMounted(() => {
  matchFilter().clearFilters()
})

//user().settings?.show_flex && user().settings?.show_solo &&
// v-if="summoner?.ranked?.solo"
// v-if="summoner?.ranked?.flex"
</script>

<template>
  <div
    :class="
      cn(
        'grid h-max w-110 max-w-110 origin-top auto-rows-max items-start gap-6 px-1 pt-2 *:w-108',
        className
      )
    ">
    <RankCard title="Solo/Duo" :entry="summoner?.ranked?.solo" />

    <RankCard title="Flex" :entry="summoner?.ranked?.flex" />

    <QueueFilters />

    <MatchChampionFilters />

    <LazyMatchPositionFilter />

    <LazyMatchAlliesFilter v-if="user().settings?.show_allies" />
  </div>
</template>
