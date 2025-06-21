<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import { NavigationMenuTrigger, useForwardProps } from 'reka-ui'
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

    <span class="size-5 max-w-5 min-w-5 relative">
      <icon name="up-sm" class="absolute top-px ml-1 transition duration-300 shrink-0 group-data-[state=open]:rotate-180 size-4.5" aria-hidden="true" />
    </span>
  </NavigationMenuTrigger>
</template>
