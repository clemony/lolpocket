<script setup lang="ts">
definePageMeta({
})

const as = useAccountStore()
const ss = useSummonerStore()
const ms = useMatchStore()
const summoner = ref(null)
console.log('💠 - summoner:', summoner)

onMounted (async () => {
  const q = computedAsync (() => ms.analysisQueueSelect)
  const p = computedAsync (() => ms.analysisPatchSelect)
  const s = computedAsync (() => ss.getSummoner(as.userAccount.riot.puuid))
  await { q, p, s }
  summoner.value = s.value
})
</script>

<template>
  <div class=" size-full oveflow-hidden">
    <menu class="overflow-hidden shadow-warm-2 shadow-black/7 border-r border-r-b3/40">
      <DataFilterPanel />
    </menu>
    <main class="overflow-y-auto grow relative px-10 w-full overflow-x-hidden">
      <NuxtPage v-if="summoner" :matches="summoner.simplifiedMatches" />
    </main>
  </div>
</template>

<style scoped>

</style>
