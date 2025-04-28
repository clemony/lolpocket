<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

definePageMeta({

  name: 'research',
  title: 'research',
  section: 'nexus',
})

const ds = useDataStore()
const as = useAccountStore()
const ms = useMatchStore()
/* watchEffect(() => {
  ms.patchGames = ms.userMatchData.filter(g => g.patch == ms.patchSelect)
}) */
</script>

<template>
  <div class="overflow-hidden size-full justify-center justify-items-center  scrollbar-none pt-20  pb-14">
    <AppTitlebar>
      <div class="absolute right-14 w-32">
        <PatchSelectDropdown class="h-11 border-b3" />
      </div>
    </AppTitlebar>
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
