<script lang="ts" setup>
const {
  hideZero,
  ally,
  champion,
  class: className,
  entry,
  ui,
  thickness = 3,
  color,
  size = 32
} = defineProps<{
  champion?: ChampionStats
  ally?: AllyStatDetail
  entry?: RankedEntry
  thickness?: number
  class?: HTMLAttributes["class"]
  hideZero?: boolean
  size?: number
  color?: string
  ui?: Record<string, HTMLAttributes["class"]>
}>()

const obj = computed(() => {
  return (
    champion ||
    ally ||
    entry || {
      win: 0,
      loss: 0,
      wr: 0,
      games: 0
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

const sizing = `calc(var(--spacing) * ${size})`
</script>

<template>
  <div :class="cn('relative aspect-square rounded-full', ui?.root)">
    <Icon
      name="lucide:circle"
      :style="{
        width: sizing,
        height: sizing
      }"
      :class="cn('absolute scale-107 text-p3 **:stroke-[2.4]')" />
    <div
      :class="cn('radial-progress', ui?.progress)"
      :style="{
        '--value': wr || 0,
        '--size': sizing,
        '--thickness': `calc(${thickness} * 1px)`,
        color: color
          ? `var(--color-${color})`
          : wr
            ? `var(--color-${winrateColor(wr)})`
            : 'var(--color-p3)'
      }"
      :aria-valuenow="wr || 0"
      role="progressbar">
      <span
        :class="
          cn(
            'text-3xs font-medium text-pc ds-2xs',
            {
              'opacity-0': hideZero && (!wr || wr === 0)
            },
            ui?.label
          )
        ">
        {{ wr || 0 }}
      </span>
    </div>
  </div>
</template>
