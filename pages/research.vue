<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

definePageMeta({

  name: 'research',
  title: 'research',
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
  <NuxtLayout
    name="header-layout" header-class="border-b border-b-b3/40">
    <template #crumb>
      <div class="absolute right-14 w-32">
        <PatchSelectDropdown class="h-11 border-b3" />
      </div>
    </template>
    <div class="overflow-hidden size-full justify-center justify-items-center  scrollbar-none pt-20  pb-14">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
