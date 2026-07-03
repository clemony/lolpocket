<script lang="ts" setup>
import type { TooltipProps } from "@nuxt/ui"
import { getWinrateArc } from "./radialWinrateArc"

const {
  hideZero,
  ally,
  champion,
  entry,
  ui,
  label,
  style,
  thickness = 3,
  color,
  size = 32,
  hoverScaling = "102%",
  winrate = true,
} = defineProps<{
  champion?: ChampionStats
  ally?: AllyStatDetail
  style?: Record<string, CSSStyleValue>
  entry?: RankedEntry
  thickness?: number
  hideZero?: boolean
  size?: number | string
  color?: string
  hoverScaling?: string
  ui?: Record<string, HTMLAttributes["class"]>
  tooltip?: TooltipProps | null
  winrate?: boolean
  label?: LabelOptions
}>()

interface LabelOptions {
  text?: string
  anchor?: "start" | "end" | "middle"
  shape?: "default" | "arc"
  baseline?: string
  textStyle?: Record<string, string | number | undefined>
  style?: Record<string, string | number | undefined>
  ui?: {
    root?: HTMLAttributes["class"]
    label?: HTMLAttributes["class"]
  }
  offset?: number
  radius?: number
  size?: number | string
}

const arcId = `champ-winrate-arc-${useId()}`

const labelProps = computed(() => ({
  id: arcId,
}))

const arcPath = computed(() => getWinrateArc(size, label?.radius))
const sizing = computed(() => arcPath.value?.sizing || size)

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
</script>

<template>
  <div :class="cn('relative aspect-square rounded-full', ui?.root)">
    <!-- BACKGROUND RING -->
    <Icon
      name="lucide:circle"
      :style="{
        width: sizing,
        height: sizing,
        ...style,
      }"
      :class="cn('absolute scale-107 text-p3', ui?.ring)" />

    <!-- ARC LABEL -->
    <svg
      v-if="label?.shape === 'arc'"
      class="pointer-events-none absolute scale-107 overflow-visible"
      :class="label?.ui?.root"
      :style="{
        width: sizing,
        height: sizing,
        ...label?.style,
      }"
      viewBox="0 0 24 24"
      aria-hidden="true">
      <defs>
        <path :id="`winrate-arc-${size}`" :d="arcPath.path" />
      </defs>

      <text
        :text-anchor="label?.anchor ?? 'middle'"
        :style="label?.textStyle"
        :dominant-baseline="label?.baseline ?? 'text-before-edge'"
        fill="currentColor"
        :class="cn('font-medium tracking-wide', label?.ui?.label)">
        <textPath
          :href="`#${labelProps.id}`"
          :startOffset="
            label?.offset !== undefined ? `${label?.offset}%` : '50%'
          "
          :font-size="label?.size">
          {{ label?.text }}
        </textPath>
      </text>
    </svg>
    <!-- PROGRESS BAR -->
    <div
      v-motion="{
        whileHover: {
          scale: hoverScaling,
        },
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        },
      }"
      :class="cn('radial-progress hover:brightness-114', ui?.progress)"
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

    <!-- CENTER LABEL -->
    <span
      v-if="label?.shape === 'default'"
      :class="
        cn(
          'absolute place-self-center text-3xs font-medium text-pc ds-2xs',
          {
            'opacity-0': hideZero && (!wr || wr === 0),
          },
          ui?.label
        )
      ">
      {{ label?.text || wr || "" }}
    </span>
  </div>
</template>
