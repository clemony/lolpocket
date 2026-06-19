<script lang="ts" setup>
import type { TooltipProps } from "@nuxt/ui"
import { getWinrateArc } from "./radialWinrateArc"

const {
  ui,
  label,
  style,
  thickness = 3,
  color,
  value,
  size = 32,
} = defineProps<{
  style?: Record<string, CSSStyleValue>
  thickness?: number
  size?: number
  color?: string
  value?: number
  ui?: Record<string, HTMLAttributes["class"]>
  tooltip?: TooltipProps
  label?: string
}>()
console.log("🥸 - value:", value)

const sizing = computed(() => `calc(var(--spacing) * ${size})`)

const calc = computed(() => (value ? value / 100 : 0))
console.log("🥸 - calc:", calc)
</script>

<template>
  <div
    :class="
      cn(
        'relative aspect-square origin-center rotate-90 rounded-full',
        ui?.root
      )
    ">
    <!-- PROGRESS BAR -->
    <UTooltip as-child v-bind="tooltip" :disabled="!tooltip">
      <div
        v-motion="{
          whileHover: {
            '--thickness': `calc(${thickness} * 1.2px)`,
            scale: '102%',
            filter: 'brightness(124%)',
          },
          transition: {
            ease: 'easeOut',
            duration: 0.4,
          },
        }"
        :class="cn('radial-progress', ui?.progress)"
        :style="{
          '--value': value || 0,
          '--size': sizing,
          scale: '100%',
          '--thickness': `calc(${thickness} * 1px)`,
          color: color ? `var(--color-${color})` : 'var(--color-neutral)',
        }"
        aria-valuemin="0"
        :aria-valuemax="8"
        :aria-valuenow="calc"
        role="progressbar" />

      <template #content>
        <slot name="content" />
      </template>
    </UTooltip>

    <!-- CENTER LABEL -->
    <span
      v-if="label"
      :class="
        cn(
          'absolute place-self-center text-3xs font-medium text-pc ds-2xs',
          ui?.label
        )
      ">
      {{ label || "" }}
    </span>
  </div>
</template>
