<script lang="ts" setup>
import type { ChipProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    ChipProps & {
      size?: string
    }
  >(),
  {
    color: "diminuendo",
    size: "md",
    inset: true
  }
)

const delegated = reactiveOmit(props, "class", "color")
</script>

<template>
  <UChip
    v-bind="delegated"
    :ui="{ ...props.ui, base: cn('ring-2', props.ui?.base) }">
    <template #content>
      <div class="anchor relative size-full rounded-full bg-[#fff]">
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
      </div>
    </template>
    <slot />
  </UChip>
</template>
