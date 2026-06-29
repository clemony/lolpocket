<script lang="ts" setup>
import type { ChipProps } from "@nuxt/ui"
import type { MotionValue } from "motion-v"
import { motion } from "motion-v"
import { chipTheme } from "~~/layers/ui/app/theme/chip"

const props = withDefaults(
  defineProps<
    ChipProps & {
      size?: string
      motion?: {
        scale: MotionValue<string>
        transform: MotionValue<string>
      }
      ui?: ChipProps["ui"] & {
        anchor?: HTMLAttributes["class"]
      }
    }
  >(),
  {
    color: "diminuendo",
    size: "md",
    inset: true,
  }
)

const delegated = reactiveOmit(props, "class", "color", "motion")

const size = computed(() => {
  if (props.size !== undefined) return chipTheme.variants.size[props.size]
  return "md" as ChipProps["size"]
})
</script>

<template>
  <UChip
    v-bind="delegated"
    :ui="{ ...props.ui, base: cn('ring-0', props.ui?.base) }">
    <template #content>
      <motion.div
        :style="props.motion"
        :class="
          cn(
            'anchor relative size-full rounded-full bg-[#fff]',
            {
              'ring-2 ring-p0': props.inset,
            },
            size,
            props.ui?.anchor
          )
        ">
        <div
          :class="
            cn(
              'absolute z-1 status size-full animate-ping rounded-full saturate-110',
              twBg[props.color]
            )
          " />
        <div
          :class="
            cn(
              'absolute z-2 status size-full rounded-full saturate-110',
              twBg[props.color]
            )
          " />
      </motion.div>
    </template>
    <slot />
  </UChip>
</template>
