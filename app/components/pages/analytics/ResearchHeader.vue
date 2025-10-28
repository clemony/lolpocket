<script lang="ts" setup>
const time = ref(false)
const countdownSeconds = 100
const { remaining, start } = useCountdown(countdownSeconds, {
  onComplete() {
    time.value = false
  },
})
<<<<<<< HEAD
// @todo fix usermatchdata
=======
// TODO fix usermatchdata
>>>>>>> refs/remotes/origin/main
async function fetchData() {
  const userMatchData = [] // this not const was removed ok
  // handleUserMatchData(matchArray)
  start()
}
const timeLeft = computed(() => {
  let minutes = Math.floor(remaining.value / 60)
  let extraSeconds = remaining.value % 60
  minutes = minutes < 10 ? 0 + minutes : minutes
  extraSeconds = extraSeconds < 10 ? 0 + extraSeconds : extraSeconds
  return minutes && extraSeconds ? `${minutes}:${extraSeconds}` : null
})
</script>

<template>
<<<<<<< HEAD
  <div class="relative flex w-full flex-col items-center gap-6">
    <SummonerIcon class="relative size-22">
=======
  <div class="relative w-full flex flex-col items-center gap-6">
    <SummonerIcon class="size-22 relative">
>>>>>>> refs/remotes/origin/main
      <Motion
        v-tippy="
          timeLeft !== '1:40' ? `Update available in ${timeLeft}` : 'Update Data'
        "
        as="button"
        :while-press="{
          rotate: '180deg',
        }"
<<<<<<< HEAD
        class="btn not-disabled:btn-neutral btn-square dr-30 absolute -right-1 bottom-0 size-7 justify-self-end rounded-full p-0 opacity-80 backdrop-blur-md transition-colors hover:opacity-100 disabled:!pointer-events-none disabled:cursor-default disabled:!opacity-90"
=======
        class="btn justify-self-end size-7 opacity-80 hover:opacity-100 -right-1 bottom-0 p-0 not-disabled:btn-neutral rounded-full absolute btn-square disabled:!opacity-90 disabled:!pointer-events-none backdrop-blur-md transition-colors dr-30 disabled:cursor-default"
>>>>>>> refs/remotes/origin/main
        :disabled="timeLeft !== '1:40'"
        @click="fetchData()">
        <icon
          name="ion:sync-sharp"
<<<<<<< HEAD
          class="text-nc size-4.5" />
      </Motion>
    </SummonerIcon>

    <div class="flex flex-col items-center justify-center">
      <SummonerName class="text-6 dst truncate leading-none font-semibold" />

      <p class="left-2 mt-2.5">
        #
        <SummonerTag class="leading-none font-medium" />
=======
          class="size-4.5 text-nc" />
      </Motion>
    </SummonerIcon>

    <div class="flex flex-col justify-center items-center">
      <SummonerName class="text-6 font-semibold dst truncate leading-none" />

      <p class="mt-2.5 left-2">
        #
        <SummonerTag class="font-medium leading-none" />
>>>>>>> refs/remotes/origin/main
      </p>
    </div>
  </div>
</template>
