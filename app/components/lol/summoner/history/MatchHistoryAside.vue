<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { summoner } = storeToRefs(s_session())
onMounted(() => {
  s_matches().clearFilters()
})
</script>

<template>
  <div
    :class="
      cn(
        ' grid  h-max w-110 max-w-110 origin-top auto-rows-max items-start gap-8   px-1 pt-2 *:w-108',
        className,
      )
    "
  >
    <RankCard
      v-if="as().settings?.show_solo"
      title="Solo/Duo"
      :entry="summoner?.ranked?.solo"
    />

    <RankCard
      v-if="as().settings?.show_flex"
      title="Flex"
      :entry="summoner?.ranked?.flex"
    />

    <QueueFilters />

    <MatchChampionFilters />

    <LazyMatchPositionFilter />

    <LazyMatchAlliesFilter v-if="as().settings?.show_allies" />
  </div>
</template>
