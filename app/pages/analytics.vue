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
  <div class="flex size-full oveflow-hidden">
    <menu class="overflow-hidden shadow-warm-2 shadow-black/7">
    <AnalyticsFilterPanel />
 </menu>
    <main class="overflow-y-auto grow relative pl-10 border-l border-l-b3/40">
      <NuxtPage v-if="summoner" :matches="summoner.simplifiedMatches" />
    </main>
  </div>
</template>

<style scoped>

</style>
