<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

definePageMeta({

  name: 'research',
  title: 'research',
  redirect: '/research/champions',
  section: 'nexus',
})

const ds = useDataStore()
const as = useAccountStore()
const ans = useAnalysisStore()
watchEffect(() => {
  ans.patchGames = ans.userMatchData.filter(g => g.patch == ans.patchSelect)
})
</script>

<template>
  <!--  <div class="absolute inset-0  pl-18  grid grid-cols-[300px_1fr] overflow-hidden gap-24">
    <div class="w-full  pr-18  pt-48">
      <Separator class="bg-b2" />
      <RecentPatchWinrates />
    </div> -->
  <div class="overflow-hidden size-full justify-center justify-items-center  scrollbar-none pt-20  pb-14">
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
