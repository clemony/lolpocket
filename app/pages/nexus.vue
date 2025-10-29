<script lang="ts" setup>
import type { description } from 'valibot'
import { motion, useDomRef } from 'motion-v'
import { toast } from '~/base/toast/use-toast'

const container = useDomRef()

definePageMeta({
  name: 'nexus',
  icon: 'nexus',
  listClass: '!size-5.75 **:stroke-[1.6]',
  order: 1,
  path: '/nexus',
})
const text = ref<string>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center overflow-auto pt-8 ">
    <header class="w-full">
      <h1>Nexus</h1>
    </header>

    <div class="mx-auto w-1/5 space-y-2">
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
          toast({
            title: 'Hello toast!',
            description:
              'Canadian neurosurgeon Dr. Wilder Penfield, while operating on epilepsy patients, discovered the “toast centre” of the human brain, which is wholly dedicated to detecting when toast is burning.',
          })
        ">
        toast
      </Button>

      <!--       <Button
        @click="() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }">
        Add to calendar
      </Button>
    </div>

    <Separator class="bg-b3/60 w-full" />
    <div class="w-full grid grid-cols-2">
      <div class="tabs tabs-lift-start !space-x-0 !gap-0 w-200 h-200">
        <a class="tab size-24">Advanced</a>
        <a class="tab tab-active size-24">General</a>
        <div class="tab-content justify-self-start  p-4 bg-base-200 w-160 h-160">
          <p>Content for the active tab dfdfd</p>
        </div>
        <a class="tab size-24">Settings</a>
      </div>
    </div> -->
    </div>
    <div class=" mt-12 flex w-full justify-center pb-54">
      <CommentsThread />
    </div>

    <SiteFooter />
  </div>
</template>
