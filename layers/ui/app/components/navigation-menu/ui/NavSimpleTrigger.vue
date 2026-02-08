<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import { NavigationMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwarded"
    :class="
      cn(
        'group btn inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium capitalize btn-ghost transition-colors hover:bg-p2/60 hover:text-pc focus:bg-p2/60 focus:text-pc focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-p2/60! data-[state=open]:bg-p2/60!',
        props.class,
      )
    ">
    <slot />
  </NavigationMenuTrigger>
</template>
