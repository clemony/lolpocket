<script lang="ts" setup>
import { motion, useDomRef } from 'motion-v'

const container = useDomRef()

definePageMeta({
  path: '/nexus',
  name: 'nexus',
  section: 'nexus',
})

const as = useAccountStore()
</script>

<template>
  <div class="pt-24 w-full flex flex-col h-full max-h-screen px-14 pb-6">
    <AppTitlebar />
    <div class="h-full">
      <div class="w-100 h-60">
        <RecentPatchWinrates />
      </div>
    </div>
    <SettingsSidebar  />
    <Separator class="bg-b3/60 w-full" />
    <div class="w-full h-80 self-end ">
      <News />
    </div>
  </div>
</template>
