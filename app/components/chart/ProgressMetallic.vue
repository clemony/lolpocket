<script lang="ts" setup>
import type { TooltipProps } from "@nuxt/ui"
import { progress } from "motion-v"
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
const progressId = `radial-winrate-progress-${useId()}`
const glintId = `radial-winrate-glint-${useId()}`
const sheenId = `radial-winrate-sheen-${useId()}`
const haloId = `radial-winrate-halo-${useId()}`

const labelProps = computed(() => ({
  id: arcId,
}))

const arcPath = computed(() => getWinrateArc(size, label?.radius))
const sizing = computed(() => arcPath.value?.sizing || size)
const progressRadius = 46
const progressCircumference = 2 * Math.PI * progressRadius

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

const progressValue = computed(() => wr.value || 0)
const progressOffset = computed(
  () => progressCircumference * (1 - progressValue.value / 100)
)
const progressColor = computed(() =>
  color
    ? `var(--color-${color})`
    : progressValue.value
      ? `var(--color-${winrateColor(progressValue.value)})`
      : "var(--color-p3)"
)

const isHovered = shallowRef<boolean>(false)

const strokeWidth = computed(() =>
  isHovered.value ? thickness * 1.2 : thickness * 1.0
)

const glintWidth = computed(() =>
  isHovered.value
    ? Math.max(thickness * 0.54, 1)
    : Math.max(thickness * 0.84, 1)
)

function onHover() {
  isHovered.value = true
}

function onLeave() {
  isHovered.value = false
}
</script>

<template>
  <div
    :class="cn('relative aspect-square rounded-full', ui?.root)"
    @mouseenter="onHover"
    @mouseleave="onLeave">
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
        <path :id="labelProps.id" :d="arcPath.path" />
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
    <!-- RADIAL PROGRESS BAR -->
    <svg
      class="group/progress absolute inset-0 -rotate-90 overflow-visible hover:brightness-114"
      :class="ui?.progress"
      :style="{
        width: sizing,
        height: sizing,
        color: progressColor,
        '--radial-winrate-color': progressColor,
      }"
      viewBox="0 0 100 100"
      :aria-valuenow="progressValue"
      role="progressbar">
      <defs>
        <!--PROGRESS DEF-->
        <linearGradient
          :id="progressId"
          gradientUnits="userSpaceOnUse"
          x1="16"
          y1="88"
          x2="88"
          y2="12">
          <stop
            offset="0%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 88%, black)" />
          <stop
            offset="14%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 96%, black)" />
          <stop offset="34%" stop-color="var(--radial-winrate-color)" />
          <stop
            offset="52%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 54%, white)" />
          <stop
            offset="66%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 84%, white)" />
          <stop offset="82%" stop-color="var(--radial-winrate-color)" />
          <stop
            offset="100%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 38%, white)" />
        </linearGradient>

        <!--GLINT DEF-->
        <linearGradient
          :id="glintId"
          gradientUnits="userSpaceOnUse"
          x1="26"
          y1="18"
          x2="76"
          y2="82">
          <stop offset="0%" stop-color="white" stop-opacity=".78" />
          <stop
            offset="24%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 42%, white)"
            stop-opacity=".44" />
          <stop
            offset="56%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 72%, black)"
            stop-opacity=".08" />
          <stop offset="100%" stop-color="white" stop-opacity=".46" />
        </linearGradient>

        <!--SHEEN DEF-->
        <linearGradient
          :id="sheenId"
          gradientUnits="userSpaceOnUse"
          x1="-130"
          y1="50"
          x2="70"
          y2="50">
          <stop offset="0%" stop-color="white" stop-opacity="0" />
          <stop offset="38%" stop-color="white" stop-opacity="0" />
          <stop
            offset="48%"
            stop-color="color-mix(in oklab, var(--radial-winrate-color) 24%, white)"
            stop-opacity=".7" />
          <stop offset="56%" stop-color="white" stop-opacity=".48" />
          <stop offset="68%" stop-color="white" stop-opacity="0" />
          <stop offset="100%" stop-color="white" stop-opacity="0" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="250 0"
            to="-28 0"
            dur="10s"
            keySplines="
			0.99 0.3 0.72 0.84;
			0.99 0.3 0.72 0.84;
			0.99 0.3 0.72 0.84;
			0.99 0.3 0.72 0.84;
			0.99 0.3 0.72 0.84;
			0.99 0.3 0.72 0.84"
            keyTimes="
			0;0.22;0.33;0.55;0.66;0.88;1"
            calcMode="spline"
            repeatCount="indefinite" />
        </linearGradient>

        <!--HALO DEF-->
        <!--        <filter :id="haloId" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.1" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .66 0" />
        </filter>-->
      </defs>

      <circle
        class="opacity-20"
        cx="50"
        cy="50"
        :r="progressRadius"
        fill="none"
        stroke="currentColor"
        :stroke-width="thickness"
        vector-effect="non-scaling-stroke" />

      <!--HALO-->
      <!--      <circle
        v-if="progressValue"
        class="opacity-40"
        cx="50"
        cy="50"
        :r="progressRadius"
        fill="none"
        stroke="currentColor"
        :stroke-width="thickness * 2.15"
        :stroke-dasharray="progressCircumference"
        :stroke-dashoffset="progressOffset"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
        :filter="`url(#${haloId})`" />-->

      <!--PROGRESS-->
      <circle
        v-if="progressValue"
        class="saturate-130 duration-500 ease-spring-soft"
        cx="50"
        cy="50"
        :r="progressRadius"
        fill="none"
        :stroke="`url(#${progressId})`"
        :stroke-width="strokeWidth"
        :stroke-dasharray="progressCircumference"
        :stroke-dashoffset="progressOffset"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke" />

      <!--GLINT-->
      <circle
        v-if="progressValue"
        class="opacity-30 mix-blend-screen duration-500 ease-spring-soft"
        cx="50"
        cy="50"
        :r="progressRadius"
        fill="none"
        :stroke="`url(#${glintId})`"
        :stroke-width="glintWidth"
        :stroke-dasharray="progressCircumference"
        :stroke-dashoffset="progressOffset"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke" />

      <!--SHEEN-->
      <circle
        v-if="progressValue"
        class="opacity-50 mix-blend-screen ease-in"
        cx="50"
        cy="50"
        :r="progressRadius"
        fill="none"
        :stroke="`url(#${sheenId})`"
        :stroke-width="thickness * 0.92"
        :stroke-dasharray="progressCircumference"
        :stroke-dashoffset="progressOffset"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke" />
    </svg>

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
