<script lang="ts" setup>
const {
  hideZero,
  ally,
  champion,
  class: className,
  entry,
  arcWidth = 3,
  size = 32,
} = defineProps<{
  champion?: ChampionStats
  ally?: AllyStatDetail
  entry?: RankedEntry
  arcWidth?: number
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

const labels = {
  win: {
    name: "Win",
    color:
      cssVar(`--color-${entry?.tier?.toLowerCase() || "insp"}`) ||
      "var(--color-insp)",
  },
  loss: {
    name: "Loss",
    color: "var(--color-p3)",
  },
} as const
</script>

<template>
  <ClientOnly>
    <DonutChart
      v-if="data"
      :data
      :height="size"
      :radius="80"
      :class="cn('', className)"
      :pad-angle="-0.1"
      :arc-width
      :categories="labels"
      :hide-tooltip="true"
      :hide-legend="true">
      <div class="text-center">
        <span
          :class="
            cn('text-3xs font-medium text-pc ds-2xs', {
              'opacity-0': hideZero && (!wr || wr === 0),
            })
          ">
          {{ wr || 0 }}
        </span>
      </div>
    </DonutChart>
  </ClientOnly>
</template>
