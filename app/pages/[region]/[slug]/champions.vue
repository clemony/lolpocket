<script lang="ts" setup>
definePageMeta({
  title: "Champions",
  description: "Discover in depth champion data for every one played.",
  icon: "i-lp-champ",
  iconStyle: "scale-90 -mb-0.25",
  keepalive: true,
  order: 1,
  search: false,
  prefix: "summoner",
})
const { summoner } = storeToRefs(sSession())

const championData = computed(() =>
  (sData().champions ?? []).map((c) => {
    const mastery = sData().mastery?.find((a) => a.championId === c.championId)
    return {
      ...c,
      ...(mastery ?? {
        puuid: summoner.value?.puuid ?? "",
        championId: c.championId,
        pointsSinceLevel: 0,
        pointsUntilLevel: 0,
      }),
    }
  }),
)
</script>

<template>
  <UPage class="relative pb-32">
    <UPageHeader class="px-20">
      <h1 class="self-start font-bold drop-shadow-2xs">
        Champion Stats
      </h1>

      <QueueFilters />
      <LazyMatchPositionFilter orientation="vertical" />
    </UPageHeader>

    <UPageBody>
      <MasteryGrid
        v-if="championData"
        :champions="championData"
        :summoner="summoner ?? undefined" />
    </UPageBody>
  </UPage>
</template>
