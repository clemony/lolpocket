<script lang="ts" setup>
import type { TooltipProps } from "@nuxt/ui"
import { getChampWinrateArc } from "./champWinrateArc"

const {
  hideZero,
  ally,
  champion,
  entry,
  ui,
  style,
  thickness = 3,
  color,
  size = 32,
  winrate = true,
} = defineProps<{
  champion?: ChampionStats
  ally?: AllyStatDetail
  style?: Record<string, Record<string, CSSStyleValue>>
  entry?: RankedEntry
  thickness?: number
  hideZero?: boolean
  size?: number
  color?: string
  ui?: Record<string, HTMLAttributes["class"]>
  tooltip?: TooltipProps
  winrate?: boolean
  arc?: Arc
}>()
interface Arc {
  label: string
  style: Record<string, CSSStyleValue>
  class: HTMLAttributes["class"]
  viewBox: number
}
const arcDefaults computed (() => ({
id: `champ-winrate-arc-${useId()}`
}))

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


const arc = computed(() => getChampWinrateArc(size, arc.id))
const sizing = computed(() => arc.value.sizing)
</script>

<template>
  <div :class="cn('relative aspect-square rounded-full', ui?.root)">
    <svg
      v-if="arc.label"
      class="pointer-events-none absolute scale-107 overflow-visible text-p3"
      :class="arc.class"
      :style="{
        width: sizing,
        height: sizing,
        ...style?.icon,
      }"
      :viewBox="arc.viewBox"
      aria-hidden="true">
      <defs>
        <path :id="arc.id" :d="arc.path" />
      </defs>

      <text
        text-anchor="middle"
        dominant-baseline="text-before-edge"
        font-size="1em"
        fill="currentColor"
        :class="cn('font-medium tracking-wide', ui?.arcLabel)">
        <textPath :href="`#${arc.id}`" :startOffset="`${}%`">
          {{ arcLabel }}
        </textPath>
      </text>
    </svg>

    <!--   <svg  width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#b3b3b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg> -->
    <UTooltip as-child v-bind="tooltip" :disabled="!tooltip">
      <div
        v-motion="{
          whileHover: {
            '--thickness': `calc(${thickness} * 1.2px)`,
            scale: '102%',
            filter: 'brightness(124%)',
          },
          transition: {
            ease: 'easeInOut',
            duration: 0.6,
          },
        }"
        :class="cn('radial-progress', ui?.progress)"
        :style="{
          '--value': wr || 0,
          '--size': sizing,
          scale: '100%',
          '--thickness': `calc(${thickness} * 1px)`,
          color: color
            ? `var(--color-${color})`
            : wr
              ? `var(--color-${winrateColor(wr)})`
              : 'var(--color-p3)',
        }"
        :aria-valuenow="wr || 0"
        role="progressbar" />

      <template #content>
        <slot name="content" />
      </template>
    </UTooltip>
    <span
      v-if="winrate"
      :class="
        cn(
          'absolute place-self-center text-3xs font-medium text-pc ds-2xs',
          {
            'opacity-0': hideZero && (!wr || wr === 0),
          },
          ui?.label
        )
      ">
      {{ wr || 0 }}
    </span>
  </div>
</template>
