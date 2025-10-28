<script setup lang="ts">
import type { HoverCardContentProps } from 'reka-ui'
import { HoverCardContent, HoverCardPortal, useForwardProps } from 'reka-ui'
<<<<<<< HEAD
=======
import { computed } from 'vue'
>>>>>>> refs/remotes/origin/main

const props = withDefaults(
  defineProps<HoverCardContentProps & {
    class?: HTMLAttributes['class']
    variant?: PopoverContentVariants['variant']
  }>(),
  {
    sideOffset: 4,
  }
)
const { base } = popoverContentVariants({ variant: props.variant })
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
provide('popoverVariant', props.variant)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwarded"
<<<<<<< HEAD
      :class="cn('z-50 w-64 outline-none overflow-hidden', base(), props.class)">
      <slot :variant />
=======
      :class="
        cn(
          'z-50 w-64 rounded-lg border bg-b1/90 backdrop-blur-md border-b2   shadow-lg outline-none overflow-hidden',
          props.class,
        )
      ">
      <slot />
>>>>>>> refs/remotes/origin/main
    </HoverCardContent>
  </HoverCardPortal>
</template>
