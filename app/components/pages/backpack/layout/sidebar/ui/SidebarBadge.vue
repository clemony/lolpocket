<script lang="ts" setup>
import type { BadgeProps } from "@nuxt/ui"

const props = withDefaults(defineProps<BadgeProps>(), {
  size: "xs",
  color: "neutral"
})
</script>

<template>
  <UBadge
    v-bind="props"
    :color="props.label === 0 ? 'transparent' : props.color"
    :ui="{
      ...props?.ui,
      base: cn('h-4.25! shrink-0 rounded-[0.44rem] px-1.5', props.ui?.base),
      label: cn(
        'text-xs font-semibold',
        { 'opacity-80': !props.color || props.color === 'primary' },
        props.ui?.label
      )
    }" />
</template>
