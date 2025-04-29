<script setup lang="ts">
definePageMeta({
  name: 'analytics',
  title: 'analytics',
  section: 'analytics',
})

const as = useAccountStore()
const ss = useSummonerStore()
const ms = useMatchStore()
const queue = ref()
const patch = ref(null)
const summoner = ref(null)

onMounted (async () => {
  const q = computedAsync (() => ms.analysisQueueSelect)
  const p = computedAsync (() => ms.analysisPatchSelect)
  const s = computedAsync (() => ss.getSummoner(as.userAccount.puuid))
  await { q, p, s }
  queue.value = q
  patch.value = p
  summoner.value = s
})
</script>

<template>
  <div class="overflow-hidden size-full justify-center justify-items-center  scrollbar-none pt-20  pb-14">
    <!--
    <AppTitlebar>
      <div class="absolute right-14 w-32">
        <PatchSelectDropdown class="h-11 border-b3" />
      </div>
    </AppTitlebar> -->
    <NuxtPage v-if="summoner && queue && patch" :summoner="summoner" :queue="queue" :patch="patch" />
  </div>
</template>

<style scoped>

</style>
