<script lang="ts" setup>
const { playerWin } = defineProps<{
  playerWin: boolean
}>()
</script>

<template>
  <div
    :class="playerWin ? 'bg-inspiration' : 'bg-domination'"
    class="!text-2 w-full max-w-20 shadow-sm flex-nowrap flex py-1 gap-2 mb-2 items-center pl-2 !font-medium !tracking-wide rounded-md text-white capitalize">
    <icon
      name="uis:graph-bar"
      class="size-3.5 text-white shrink-0" />

    <span class="flex w-full   text-center grow"> {{ playerWin ? 'Win' : 'Loss' }}</span>
  </div>
</template>