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
        'group inline-flex  items-center justify-center     focus:outline-none disabled:pointer-events-none disabled:opacity-40    ',
        props.class,
      )
    ">
    <slot />
  </NavigationMenuTrigger>
</template>
