<script setup lang="ts">
import type { HoverCardTriggerProps } from 'reka-ui'
import { HoverCardTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  HoverCardTriggerProps & {
    on?: ButtonVariants['on']
    base?: TriggerVariants['base']
    class?: HTMLAttributes['class']
    hover?: TriggerVariants['hover']
    size?: TriggerVariants['size']
    variant?: TriggerVariants['variant']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <HoverCardTrigger
    v-bind="forwarded"
    :class="
      cn(
        triggerVariants({ base, variant, size, hover, on }),
        `justify-start px-2`,
        props.class,
      )
    ">
    <slot />
  </HoverCardTrigger>
</template>
