<script lang="ts" setup>
useSeoMeta({
  title: "[title]",
  description: "[description]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogTitle: "[og:title]",
  ogUrl: "[og:url]",
  twitterCard: "summary",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterTitle: "[twitter:title]",
})

definePageMeta({
  title: "Champions",
  description: "Discover in depth champion data for every one played.",
  icon: "i-lp-champ",
  iconStyle: "scale-90 -mb-0.25",
  keepalive: true,
  order: 1,
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
  })
)
</script>

<template>
  <UPage class="relative pb-32">
    <UPageHeader class="px-20">
      <h1 class="dst self-start font-bold">
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
