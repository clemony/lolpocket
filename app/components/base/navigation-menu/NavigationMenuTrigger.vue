<script setup lang="ts">
import {
  NavigationMenuTrigger,

  useForwardProps,
} from 'reka-ui'
import type { NavigationMenuTriggerProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'
import { navigationMenuTriggerStyle } from './navmenuvariantindex'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)">
    <slot />
    <icon name="up-sm" class="relative top-px ml-1 transition duration-300 shrink-0 group-data-[state=open]:rotate-180" aria-hidden="true" />
  </NavigationMenuTrigger>
</template>
