<script lang="ts" setup>
const ds = useDataStore()
const as = useAccountStore()
const ms = useMatchStore()

const time = ref(false)
const countdownSeconds = 100
const { remaining, start } = useCountdown(countdownSeconds, {
  onComplete() {
    time.value = false
  },
})
// TODO fix usermatchdata
async function fetchData() {
  const userMatchData = [] // this not const was removed ok
  // handleUserMatchData(matchArray)
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
  <div class=" relative w-full flex flex-col items-center gap-6">
    <SummonerIcon class="size-22  relative">
      <Motion
        v-tippy="timeLeft != '1:40' ? `Update available in ${timeLeft}` : 'Update Data'"
        as="button"
        :while-press="{
          rotate: '180deg',
        }"
        class="btn justify-self-end size-7 opacity-80 hover:opacity-100 -right-1 bottom-0 p-0 not-disabled:btn-neutral rounded-full absolute btn-square disabled:!opacity-90 disabled:!pointer-events-none backdrop-blur-md transition-colors dr-30 disabled:cursor-default"
        :disabled="timeLeft != '1:40'"
        @click="fetchData()">
        <icon
          name="ion:sync-sharp"
          class="size-4.5  text-nc" />
      </Motion>
    </SummonerIcon>

    <div class="flex flex-col justify-center items-center">
      <SummonerName class=" text-6 font-semibold dst truncate leading-none" />

      <p class=" mt-2.5 left-2">
        #<SummonerTag class="font-medium leading-none" />
      </p>
    </div>
  </div>
</template>