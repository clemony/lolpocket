<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import { NavigationMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwarded"
    :class="cn('group inline-flex  items-center justify-center gap-1 rounded-lg  text-2  font-medium transition-colors hover:bg-b2/60   hover:text-bc btn btn-ghost focus:bg-b2/60 focus:text-bc focus:outline-none disabled:pointer-events-none disabled:opacity-50  data-[active]:!bg-b2/60  data-[state=open]:!bg-b2/60 capitalize', props.class)">
    <slot />
  </NavigationMenuTrigger>
</template>
