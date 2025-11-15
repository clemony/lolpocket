<script lang="ts" setup>
import type { description } from 'valibot'
import { motion, useDomRef } from 'motion-v'
import { heyGoodJob } from '~~/shared/data/good-job'
import { toast, } from '~/base/popup/toast/use-toast'

const container = useDomRef()
function toasty() {
  toast({
    title: `Created Toast!`,
    color: 'error',
    description: `${getRandom(heyGoodJob)}, ${as().account.username || as().account.name}!`,
    icon: 'x',
  })
}
definePageMeta({
  id: '8e12b21b-2f27-43b0-b7e7-77c49bbe972d',
  name: 'nexus',
  icon: 'nexus',
  listClass: '!size-5.75 **:stroke-[1.6]',
  order: 1,
  path: '/nexus',
})
const text = ref<string>()
</script>

<template>
  <div class="flex h-full w-full flex-col items-center pt-8">
    <header class="w-full">
      <h1>Nexus</h1>
    </header>

    <div class="mx-auto flex w-1/5 items-center gap-3 space-y-2">
      <Button @click="useFetchSummonerData(as().account.puuid)">
        try update
      </Button>

      <Button
        variant="neutral"
        class="ml-auto pr-4 pl-2.5 font-normal"
        @click="toasty()">
        <icon name="add" />
        toast
      </Button>
      <Button @click="useHydrateUser()">
        fetch user datasss
      </Button>

      <Button @click="useSignOut()">
        sign out
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
    <div class="mt-12 flex w-full justify-center pb-54">
      <!--  <CommentsThread :thread-id="String(useRoute().meta?.id) as UUID" /> -->
    </div>

    <SiteFooter />
  </div>
</template>
