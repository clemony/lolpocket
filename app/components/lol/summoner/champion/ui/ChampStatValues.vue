<script lang="ts" setup>
const { class: className, stat, type } = defineProps<{
  stat?: ItemSetStat | StatDetail | StatDetail | PairedChampionStat | undefined
  class?: HTMLAttributes['class']
  type?: string
}>()
</script>

<template>
  <div :class="cn('grid auto-rows-fr items-end gap-0.25 leading-none select-none *:flex *:justify-center *:text-center')">
    <div
      size="xs"
      class="flex items-center text-sm font-bold"
    >
      {{ stat?.winrate }}
    </div>
    <span
      v-if="stat?.games"
      class="gap-1 text-xxs font-medium text-bc/90"
    >
      {{ stat?.games }}
    </span>
    <span
      v-if="(stat as StatDetail)?.avgTimestamp && type === 'time'"
      class="text-xxs font-medium text-bc/90"
    >
      {{ useDateFormat((stat as StatDetail)?.avgTimestamp, 'm:ss') }}
    </span>
    <!-- <span
      v-if="(stat as PairedChampionStat)?.delta && type === 'synergy'"
      class="-ml-0.5 text-xxs font-medium text-bc/90">
      {{ Math.sign((stat as PairedChampionStat)?.delta) === 1 ? '+' : '' }}{{ (stat as PairedChampionStat)?.delta }}
    </span> -->
    <div
      v-if="(stat as PairedChampionStat)?.synergy && type === 'synergy'"
      :class="cn(Math.sign((stat as PairedChampionStat)?.delta) === -1 ? '-ml-1.25' : '-ml-1.75')"
    >
      <span class="text-xxs! font-medium! text-bc/90!">{{ Math.sign((stat as PairedChampionStat)?.synergy) === 1 ? '+' : '' }}{{ (stat as PairedChampionStat)?.delta }}</span>
    </div>
    <span
      v-if="!type"
      class="text-xxs font-medium text-bc/90"
    >
      {{ stat?.pickrate }}
    </span>
  </div>
</template>