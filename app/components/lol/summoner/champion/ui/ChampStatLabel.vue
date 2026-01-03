<script lang="ts" setup>
const { title, class: className, separator, stat, time } = defineProps<{
  stat?: ItemSetStat | TimedStatDetail | StatDetail | undefined
  class?: HTMLAttributes['class']
  title?: string | number | string[]
  time?: boolean
  separator?: boolean
}>()

const isA = computed (() => typeof title !== 'string' && typeof title !== 'number')

const labels = computed (() => time ? statLabelsWithTime : statLabels)
</script>

<template>
  <div
    :class="cn('absolute top-0 left-0 z-1 size-full h-[calc(100%+2px)] w-30 max-w-30 min-w-30 border-b border-b1 bg-gradient-to-r from-b1 to-b1/45 pr-6 pb-1 leading-none backdrop-blur select-none after:absolute after:top-0 after:left-0 after:z-1 after:size-full after:bg-gradient-to-b after:from-b1 after:to-b1/45 in-data-[style=full]:pt-1 in-data-[style=simple]:pt-3', className)">
    <Button
      variant="ghost"
      :data-tip="stat ? `${stat?.winrate}% winrate
        ${stat?.games} games
        ${stat?.pickrate}% pickrate
        ${(stat as TimedStatDetail)?.avgTimestamp ? `${(((stat as TimedStatDetail)?.avgTimestamp / 1000) / 60).toFixed(2).replace('.', ':')} acquired` : ''}` : null"
      hover="inset"
      class="z-2 size-full flex-col items-start justify-between! gap-0 p-2!">
      <h4
        v-if="title"
        :class="cn('leading-5.5 font-bold dst', { 'pt-1': !isA, 'pt-1 text-8!': typeof title === 'number' })">
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
      <Grow />
      <div
        class="relative flex h-fit grow-0 flex-col items-start justify-end gap-0.75 justify-self-end pt-[5px] **:text-1 **:font-medium">
        <Separator
          v-if="separator"
          :size="0"
          color="b3"
          class="absolute top-0 w-full" />
        <div class="hidden flex-col items-start justify-end gap-0.75 in-data-[style=simple]:flex">
          <span>{{ stat?.games }} games</span>
          <span>{{ stat?.winrate }} WR</span>
        </div>
        <span
          v-for="l in labels"
          :key="l"
          class="opacity-60 in-data-[style=simple]:hidden">{{ l }}</span>
      </div>
    </Button>
  </div>
</template>