<script setup lang="ts">
import type { NavigationMenuRootEmits, NavigationMenuRootProps } from 'reka-ui'
import { NavigationMenuRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NavigationMenuRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<NavigationMenuRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)">
    <slot />
  </NavigationMenuRoot>
</template>
