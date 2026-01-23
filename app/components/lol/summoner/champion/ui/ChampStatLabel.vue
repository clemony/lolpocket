<script lang="ts" setup>
import { statLabels, statLabelsWithSynergy, statLabelsWithTime } from './stat-labels'

const { title, class: className, icon, separator, stat, type } = defineProps<{
  stat?: ItemSetStat | TimedStatDetail | StatDetail | undefined
  class?: HTMLAttributes['class']
  title?: string | number | string[]
  icon?: string[]
  type?: string
  separator?: boolean
}>()

const isA = computed (() => typeof title !== 'string' && typeof title !== 'number')

const labels = computed (() => type === 'time' ? statLabelsWithTime : type === 'synergy' ? statLabelsWithSynergy : statLabels)
</script>

<template>
  <div
    :class="cn('border-b1 from-b1 to-b1/45 after:from-b1 after:to-b1/45 absolute top-0 left-0 z-1 size-full h-[calc(100%+2px)] w-30 max-w-30 min-w-30 border-b bg-linear-to-r pr-6 pb-1 leading-none backdrop-blur-sm select-none after:absolute after:top-0 after:left-0 after:z-1 after:size-full after:bg-linear-to-b in-data-[style=full]:pt-1 in-data-[style=simple]:pt-3', className)">
    <Button
      variant="ghost"
      :data-type="stat ? `${stat?.winrate}% winrate
        ${stat?.games} games
        ${stat?.pickrate}% pickrate
        ${(stat as TimedStatDetail)?.avgTimestamp ? `${(((stat as TimedStatDetail)?.avgTimestamp / 1000) / 60).toFixed(2).replace('.', ':')} acquired` : ''}` : null"
      hover="inset"
      class="z-2 size-full flex-col items-start justify-between! gap-0 p-2!">
      <!-- title -->
      <h4
        v-if="title"
        :class="cn('dst leading-5.5 font-bold', { 'pt-1': !isA, 'pt-1 text-4xl!': typeof title === 'number' })">
        <template v-if="!isA">
          {{ title }}
        </template>
        <template v-else>
          <template
            v-for="str, i in title"
            :key="i">
            <br v-if="i !== 0" />{{ str }}
          </template>
        </template>
      </h4>
      <div v-else-if="icon">
        <Icon
          :name="icon[0]"
          :class="cn('', icon[1])" />
      </div>
      <Grow />
      <div
        class="relative flex h-fit grow-0 flex-col items-start justify-end gap-0.75 justify-self-end pt-[5px] **:text-xs **:font-medium">
        <Separator
          v-if="separator"
          :size="0"
          color="b3"
          class="absolute top-0 w-full opacity-70" />

        <!-- labels -->
        <div class="grid h-fit items-start justify-end gap-0.75">
          <span class="hidden in-data-[style=simple]:block">{{ stat?.games }} games</span>
          <span class="hidden in-data-[style=simple]:block">{{ stat?.winrate }} WR</span>
          <span
            v-for="l in labels"
            :key="l"
            class="opacity-60 in-data-[style=simple]:hidden">{{ l }}</span>
        </div>
      </div>
    </Button>
  </div>
</template>