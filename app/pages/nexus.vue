<script lang="ts" setup>
import type { description } from 'valibot'
import { motion, useDomRef } from 'motion-v'
import { toast } from 'vue-sonner'

const container = useDomRef()

definePageMeta({
  name: 'nexus',
  icon: 'mdi:atom-variant',
  order: 1,
  path: '/nexus',
})
</script>

<template>
  <div
    class="pt-8 w-full flex flex-col h-full w-full items-center max-h-screen px-8 pb-6">
    <header class="w-full">
      <h1>Nexus</h1>
    </header>

    <div class="size-fit border border-b4/60 rounded-xl">
      <!-- HERHEHRHEHRHEHREHHRHERHER -->
    </div>

    <div class="w-1/5 mx-auto space-y-2">
      <Hihi />
      <Button @click="useFetchSummonerData(as().account.puuid)">
        try update
      </Button>

      <Button @click="hydrateUser()">
        fetch user datasss
      </Button>

      <Button @click="useSignOut()">
        sign out
      </Button>

      <Button
        @click="
          toast('Hello toast!', {
            description:
              'Canadian neurosurgeon Dr. Wilder Penfield, while operating on epilepsy patients, discovered the “toast centre” of the human brain, which is wholly dedicated to detecting when toast is burning.',
          })
        ">
        toast
      </Button>
    </div>

    <Separator class="bg-b3/60 w-full" />

    <div class="w-100 h-60">
      <!-- <RecentPatchWinrates /> -->
    </div>
    <!--
    <div class="w-full h-80 self-end ">
      <News />
    </div> -->
  </div>
</template>
