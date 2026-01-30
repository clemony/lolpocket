<script setup lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui'
import { NavigationMenuLink, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  NavigationMenuLinkProps & {
    class?: HTMLAttributes['class']
  }
>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forwarded"
    :class="cn('relative cursor-pointer', props.class)"
  >
    <slot />
  </NavigationMenuLink>
</template>
