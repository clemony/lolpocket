<script lang="ts" setup>
import { motion, useDomRef } from 'motion-v'

const container = useDomRef()

definePageMeta({
  path: '/nexus',
  name: 'nexus',

  meta: {
    section: 'nexus',
    icon: 'nexus',
  },
})

const as = useAccountStore()
</script>

<template>
  <div class="pt-24 w-full flex flex-col h-full w-full items-center  max-h-screen px-14 pb-6">
    <header class="w-full">
      <h1>Nexus</h1>
    </header>

    <div class="size-fit border border-b4/60 rounded-xl">
      <!-- HERHEHRHEHRHEHREHHRHERHER -->
    </div>

    <div class="w-full">
      <SummonerCard
        v-if="as.userAccount.riot"
        :summoner="as.userAccount.riot" />
    </div>

    <Separator class="bg-b3/60 w-full" />

    <div class="w-100 h-60">
      <!-- <RecentPatchWinrates /> -->
    </div>
    <Login v-if="!as.userAccount?.id" />
    <!--
    <div class="w-full h-80 self-end ">
      <News />
    </div> -->
  </div>
</template>
