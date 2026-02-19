<script lang="ts" setup>
import { heyGoodJob } from "~/domain/lp/ui/good-job"

const sizes = [20, 40, 180, 77]

const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4])

console.log(
  "🥸 - findSummoner - summonerAccounts():",
  summonerAccounts().accounts
)
const headerHeight = 400

const toast = useToast()
function toasty() {
  toast.add({
    color: "dom",
    title: `Created Toast!`,
    description: `There’s something strangely evocative about the smell of burnt toast. You can probably remember the last time you suddenly detected it and dashed for the grill.

But did you know there’s a part of your brain specifically dedicated to smelling burnt toast?

In 1950, Canadian Dr Wilder Penfield was working on a treatment for cerebral seizures that worked by zapping particular nerve cells with electrical probes. One of his patients was a woman with epilepsy who smelled burnt toast whenever she was about to have a seizure. ${getRandom(heyGoodJob)}!`,
    icon: "x",
  })
}
definePageMeta({
  id: "8e12p21b-2f27-43b0-b7e7-77c49bbe972d",
  title: "Nexus",
  layout: "default",
  icon: "nexus",
  listClass: "!size-5.75 **:stroke-[1.6]",
  order: 1,
  path: "/nexus",
})
</script>

<template>
  <div class="flex size-full flex-col items-center">
    <header class="w-full">
      <h1>Nexus</h1>
    </header>

    <div class="mx-auto flex w-1/5 items-center gap-3 space-y-2">
      <UButton
        class="ml-auto pr-4 pl-2.5 font-normal"
        color="neutral"
        @click="toasty()">
        <icon name="add" />
        toast
      </UButton>
      <UButton @click="accountFetch()">
        fetch user datasss
      </UButton>
      <UButton @click="console.log('summoner:', sSummoner().cache)">
        resolve the slug
      </UButton>

      <UButton @click="useSignOut()">
        sign out
      </UButton>

      <!--       <UButton
        @click="() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }">
        Add to calendar
      </UButton>
    </div>

    <Separator class="bg-p3/60 w-full" />
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
      <!--     </div>
    <div class="mt-12 flex w-full justify-center pb-54">
       <CommentsThread :thread-id="String(useRoute().meta?.id) as UUID" />
    </div>

    <SiteFooter />
  </div> -->
    </div>
  </div>
</template>
