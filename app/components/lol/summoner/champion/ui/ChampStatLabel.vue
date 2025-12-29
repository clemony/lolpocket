<script lang="ts" setup>
const { title, class: className, percent, stat } = defineProps<{
  stat: ItemSetStat | TimedStatDetail | StatDetail | undefined
  percent?: boolean
  class?: HTMLAttributes['class']
  title?: string | string[]
}>()

const isA = computed (() => typeof title !== 'string')
</script>

<template>
  <Button
    hover="inset"
    variant="ghost"
    :class="cn('relative mt-4 mr-6 flex size-24 min-h-24 max-w-24 min-w-24 cursor-default flex-col items-start justify-between overflow-hidden p-2 leading-none select-none', className)"
    :data-tip="`${stat?.winrate}% winrate
        ${stat?.games} games
        ${stat?.pickrate}% pickrate
        ${(stat as TimedStatDetail)?.avgTimestamp ? `${(((stat as TimedStatDetail)?.avgTimestamp / 1000) / 60).toFixed(2).replace('.', ':')} acquired` : ''}`">
    <h4
      v-if="title"
      :class="cn('leading-5.25 font-bold dst', { 'pt-1': !isA })">
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
    <div class="flex grow flex-col items-start justify-end gap-0.75 **:text-1 **:font-medium">
      <span>{{ stat?.games }} games</span>
      <span>{{ stat?.winrate }}{{ percent ? '%' : '' }} WR</span>
    </div>
  </Button>
</template>