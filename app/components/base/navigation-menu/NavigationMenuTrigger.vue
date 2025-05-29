<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import {
  NavigationMenuTrigger,

  useForwardProps,
} from 'reka-ui'
import { navigationMenuTriggerStyle } from './navmenuvariantindex'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwarded"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)">
    <slot />
    <icon name="up-sm" class="relative top-px ml-1 transition duration-300 shrink-0 group-data-[state=open]:rotate-180" aria-hidden="true" />
  </NavigationMenuTrigger>
</template>
