<script setup lang="ts">
import type { HoverCardTriggerProps } from 'reka-ui'
<<<<<<< HEAD
import { HoverCardTrigger, useForwardProps } from 'reka-ui'
=======
import { HoverCardTrigger } from 'reka-ui'
>>>>>>> refs/remotes/origin/main

const props = defineProps<HoverCardTriggerProps & {

  active?: TriggerVariants['active']
  base?: TriggerVariants['base']
  class?: HTMLAttributes['class']
  hover?: TriggerVariants['hover']
  size?: TriggerVariants['size']
  variant?: TriggerVariants['variant']
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <HoverCardTrigger
    v-bind="forwarded"
    :class="cn(triggerVariants({ base, variant, size, hover, active }), '', props.class)">
    <slot />
  </HoverCardTrigger>
</template>
