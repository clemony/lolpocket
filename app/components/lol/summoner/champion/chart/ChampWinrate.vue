<script lang="ts" setup>
const {
  hideZero,
  ally,
  champion,
  class: className,
  entry,
  size = 32,
} = defineProps<{
  champion?: ChampionStats
  ally?: AllyStatDetail
  entry?: RankedEntry
  class?: HTMLAttributes["class"]
  hideZero?: boolean
  size?: number
}>()

const obj = computed(() => {
  return (
    champion ||
    ally ||
    entry || {
      win: 0,
      loss: 0,
      wr: 0,
      games: 0,
    }
  )
})

const wr = computed(() => {
  if (!obj.value) {
    return
  }
  if (obj.value.win) {
    const total = obj.value.win + (obj.value?.loss || 0)
    return roundDecimalToPercent(obj.value.win, total)
  }
  return 0
})

const data = computed(() => [obj.value?.win ?? 0, obj.value?.loss ?? 0])
</script>

<template>
  <DonutChart
    v-if="data"
    :data
    :height="size"
    :radius="80"
    :pad-angle="-0.1"
    :arc-width="3"
    :categories="winLossLabels"
    :hide-tooltip="true"
    :hide-legend="true">
    <div class="text-center">
      <span
        :class="
          cn('text-3xs! font-medium text-pc ds-2xs', {
            'opacity-0': hideZero && (!wr || wr === 0),
          })
        ">
        {{ wr || 0 }}
      </span>
    </div>
  </DonutChart>
</template>
