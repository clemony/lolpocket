<script lang="ts" setup>
const props = defineProps<{
  player: any
  match: any
}>()

const player = computed (() => {
  return props.player
})

const match = computed (() => {
  return props.match
})

const playerWin = computed (() => {
  const a = match.value.teams[0].win ? 100 : 200
  const b = player.value.teamId

  return a == b
})
</script>

<template>
  <div
    :class="playerWin ? 'bg-inspiration' : 'bg-domination'"
    class="!text-2 w-full shadow-sm flex-nowrap flex py-1 gap-2 mb-2 items-center pl-2 !font-medium !tracking-wide rounded-md text-white capitalize">
    <icon
      name="uis:graph-bar"
      class="size-3.5 text-white shrink-0" />

    <span class="flex w-full font-mono  text-center grow"> {{ playerWin ? 'Win' : 'Loss' }}</span>
  </div>
</template>