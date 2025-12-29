<script lang="ts" setup>
const { class: className, stat, time } = defineProps<{
  stat?: ItemSetStat | TimedStatDetail | StatDetail | undefined
  class?: HTMLAttributes['class']
  time?: boolean
}>()
</script>

<template>
  <div

    class="grid grid-rows-3 items-center leading-none select-none *:flex *:justify-center *:text-center">
    <div
      size="xs"
      class="flex items-center text-2 font-bold">
      {{ stat?.winrate }}
    </div>
    <span
      v-if="stat?.games"
      class="gap-1 text-0 font-medium text-bc/90">
      {{ stat?.games }}
    </span>
    <span
      v-if="(stat as TimedStatDetail)?.avgTimestamp && time"
      class="text-0 font-medium text-bc/90">
      {{ useDateFormat((stat as TimedStatDetail)?.avgTimestamp, 'm:ss') }}
    </span>
    <span
      v-else
      class="text-0 font-medium text-bc/90">
      {{ stat?.pickrate }}
    </span>
  </div>
</template>