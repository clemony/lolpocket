<script lang="ts" setup>
useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogTitle: '[og:title]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterTitle: '[twitter:title]'
})

definePageMeta({
  title: 'champions',
  icon: 'i-lol-mastery',
  iconStyle: 'scale-90 -mb-0.25',
  keepalive: true,
  order: 1,
})

const { champions, filteredMatches, mastery: m, summoner } = useSummonerInject()

const awaitMastery: ChampionMastery[] = await m()
const data = useChampionStats(filteredMatches, summoner.value.puuid)

const summary = await getMasterySummary(summoner.value.puuid)

const championData = computed (() =>
  data.value.map(c => ({
    ...c,
    ...awaitMastery.find(a => a.championId === c.championId)
  }))
)
</script>

<template>
  <div class="relative w-full max-w-[1400px] px-24 pb-32">
    <div class="mx-auto w-3/5">
      <header class="flex w-full items-center justify-between pt-24 pb-2">
        <h1 class="self-start font-bold dst">
          Champion Stats
        </h1>
      </header>

      <div class="mb-4 flex gap-4">
        <QueueFilters />
        <LazyMatchPositionFilter orientation="vertical" />
      </div>
    </div>

    <MasteryGrid
      v-if="data"
      :champions="championData"
      :summoner
    />
  </div>
</template>
