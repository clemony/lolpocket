<script setup lang="ts">
import { getMatchesByPuuid } from '~~/server/api/riotClient'

definePageMeta({
  title: 'analysis',
  icon: 'chart',
  order: 5,
  path: '/tools/analysis',
})

const summoner = ref<Summoner>(null)
console.log('💠 - summoner:', summoner)

onMounted(async () => {
  const q = computedAsync(() => ms().analysisQueueSelect)
  const p = computedAsync(() => ms().analysisPatchSelect)
  const s = computedAsync(() => ss().getSummoner(as().account.puuid))
  await { p, q, s }
  summoner.value = s.value
})
</script>

<template>
  <div class="size-full oveflow-hidden">
    <menu
      class="overflow-hidden shadow-warm-2 shadow-black/7 border-r border-r-b3/40">
      <DataFilterPanel />
    </menu>

    <main class="overflow-y-auto grow relative px-10 w-full overflow-x-hidden">
      <NuxtPage
        v-if="summoner"
        :matches="getMatchesByPuuid(summoner)" />
    </main>
  </div>
</template>

<style scoped></style>
