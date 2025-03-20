<script lang="ts" setup>
const ds = useDataStore()
const as = useAccountStore()
const ans = useAnalysisStore()

const time = ref(false)
const countdownSeconds = 100
const { remaining, start } = useCountdown(countdownSeconds, {
  onComplete() {
    time.value = false
  },
})

async function fetchData() {
  as.userMatchData = []
  handleUserMatchData(matchArray)
  start()
}
const timeLeft = computed (() => {
  let minutes = Math.floor(remaining.value / 60)
  let extraSeconds = remaining.value % 60
  minutes = minutes < 10 ? 0 + minutes : minutes
  extraSeconds = extraSeconds < 10 ? 0 + extraSeconds : extraSeconds
  return minutes && extraSeconds ? `${minutes}:${extraSeconds}` : null
})
</script>

<template>
  <div class="rounded-box border bg-b1 border-b3/90 shadow-warm-soft px-8 pt-4 pb-6 relative flex flex-col items-center gap-4.5 h-62 group/anal-header ">
    <Tabs v-model="ans.patchSelect">
      <TabsList>
        <TabsTrigger :value="ds.currentPatch">
          {{ ds.currentPatch }}
        </TabsTrigger>
        <TabsTrigger :value="ans.previousPatch">
          {{ ans.previousPatch }}
        </TabsTrigger>
        <TabsTrigger :value="ans.patchSelect" class="data-[state=active]:bg-transparent  h-7 px-0 data-[state=active]:shadow-none" :class="{ 'data-[state=active]:bg-b1 data-[state=active]:text-bc data-[state=active]:shadow': ans.patchSelect != ds.currentPatch && ans.patchSelect != ans.previousPatch && ans.patchSelect }">
          <AnalysisPatchSelect />
        </TabsTrigger>
        <TabsTrigger value="season">
          S2025
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <div class="w-full h-fit justify-items-center self-center">
      <SummonerIcon class="size-16   mb-1 brightness-105 -mt-0.5 relative">
        <Motion
          v-tippy="timeLeft != '1:40' ? `Update available in ${timeLeft}` : 'Update Data'" as="button" :press="{
            rotate: '180deg',
          }" class="btn justify-self-end size-7 opacity-80 hover:opacity-100 -right-1 bottom-0 p-0 not-disabled:btn-neutral rounded-full absolute btn-square disabled:!opacity-90 disabled:!pointer-events-none backdrop-blur-md transition-colors dr-30 disabled:cursor-default" :disabled="timeLeft != '1:40'" @click="fetchData()">
          <icon name="ion:sync-sharp" class="size-4.5  text-nc" />
        </Motion>
      </SummonerIcon>

      <div class="align-bottom ">
        <SummonerName class="mt-2 text-6 font-medium truncate leading-none" />

        <span class="mb-0.25">
          #<SummonerTag class="font-medium leading-none" />
        </span>
      </div>
    </div>

    <div class=" w-full relative flex justify-center gap-5  ">
      <label v-tippy="'All Matches'" class="btn btn-square">
        <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="all" />
        <i-roles-queues class="size-6 dst" />
      </label>

      <label v-tippy="'Ranked Solo/Duo'" class="btn btn-square ">
        <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="solo" />
        <i-roles-challenger class="size-8.5 dst" />
      </label>

      <label v-tippy="'Ranked Flex'" class="btn btn-square">
        <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="flex" />
        <i-roles-flex class="size-6.5 dst" />

      </label>

      <label v-tippy="'Normal 5v5 SR'" class="btn btn-square">
        <input v-model="ans.queueSelect" name="queue-tabs" type="radio" class="peer hidden" value="sr" />
        <i-roles-all class="size-5 dst" />
      </label>
    </div>
  </div>
</template>