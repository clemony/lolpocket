<script setup lang="ts">
definePageMeta({
  name: 'analytics',
  title: 'analytics',
  section: 'analytics',
})

const as = useAccountStore()
const ss = useSummonerStore()
const ms = useMatchStore()
const queue = ref(0)
const patch = ref(null)
const summoner = ref(null)
console.log('💠 - summoner:', summoner)

onMounted (async () => {
  const q = computedAsync (() => ms.analysisQueueSelect)
  const p = computedAsync (() => ms.analysisPatchSelect)
  const s = computedAsync (() => ss.getSummoner(as.userSummoner.puuid))
  await { q, p, s }
  summoner.value = s.value
})
</script>

<template>
  <div class="overflow-hidden size-full flex  scrollbar-none pt-20  pb-14">
    <AnalyticsFilterPanel />
    <div class="h-full grow pt-14 pr-14 pl-6">
      <NuxtPage v-if="summoner" :matches="summoner.simplifiedMatches" />
    </div>
  </div>
</template>

<style scoped>

</style>
