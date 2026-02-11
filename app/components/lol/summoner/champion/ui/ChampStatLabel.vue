<script lang="ts" setup>
import {
    statLabels,
    statLabelsWithSynergy,
    statLabelsWithTime,
} from './stat-labels';

const {
  title,
  class: className,
  icon,
  separator,
  stat,
  type,
} = defineProps<{
  stat?: StatDetail | StatDetail | undefined
  class?: HTMLAttributes['class']
  title?: string | number | string[]
  icon?: string[]
  type?: string
  separator?: boolean
}>()

const isA = computed(
  () => typeof title !== 'string' && typeof title !== 'number'
)

const labels = computed(() =>
  type === 'time'
    ? statLabelsWithTime
    : type === 'synergy'
      ? statLabelsWithSynergy
      : statLabels
)

const avgTimestampLabel = computed(() => {
  const ts = (stat as StatDetail | undefined)?.avgTimestamp
  if (!ts) return ''
  return `${(ts / 1000 / 60).toFixed(2).replace('.', ':')} acquired`
})
</script>

<template>
  <div
    :class="
      cn(
        'absolute top-0 left-0 z-1 size-full h-[calc(100%+2px)] w-30 max-w-30 min-w-30 border-b border-p0 bg-linear-to-r from-p0 to-p0/45 pr-6 pb-1 leading-none backdrop-blur-sm select-none after:absolute after:top-0 after:left-0 after:z-1 after:size-full after:bg-linear-to-b after:from-p0 after:to-p0/45 in-data-[style=full]:pt-1 in-data-[style=simple]:pt-3',
        className,
      )
    ">
    <UButton
      class="z-2 size-full flex-col items-start justify-between! gap-0 p-2!"
      variant="ghost"
      :data-type="
        stat
          ? `${stat?.winrate}% winrate
        ${stat?.games} games
        ${stat?.pickrate}% pickrate
        ${avgTimestampLabel}`
          : null
      "
      hover="inset">
      <!-- title -->
      <h4
        v-if="title"
        :class="
          cn('leading-5.5 font-bold dst', {
            'pt-1': !isA,
            'pt-1 text-4xl!': typeof title === 'number',
          })
        ">
        <template v-if="!isA">
          {{ title }}
        </template>
        <template v-else>
          <template
            v-for="(str, i) in title"
            :key="i">
            <br v-if="i !== 0">
            {{ str }}
          </template>
        </template>
      </h4>
      <div v-else-if="icon?.[0]">
        <Icon
          :name="icon[0]"
          :class="cn('', icon[1])" />
      </div>
      <Grow />
      <div
        class="relative flex h-fit grow-0 flex-col items-start justify-end gap-0.75 justify-self-end pt-[5px] **:text-xs **:font-medium">
        <Separator
          v-if="separator"
          class="absolute top-0 w-full opacity-70"
          :size="0"
          color="p3" />

        <!-- labels -->
        <div class="grid h-fit items-start justify-end gap-0.75">
          <span class="hidden in-data-[style=simple]:block">
            {{ stat?.games }} games
          </span>
          <span class="hidden in-data-[style=simple]:block">
            {{ stat?.winrate }} WR
          </span>
          <span
            v-for="l in labels"
            :key="l"
            class="opacity-60 in-data-[style=simple]:hidden">
            {{ l }}
          </span>
        </div>
      </div>
    </UButton>
  </div>
</template>
