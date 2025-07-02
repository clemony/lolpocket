<script setup lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from 'reka-ui'
import { NavigationMenuContent, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<NavigationMenuContentEmits>()
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="cn(
      'left-0   bg-blend-screen  bg-b1/92 backdrop-blur-md overflow-hidden  border border-b3 rounded-xl  text-bc shadow-lg shadow-black/10 absolute w-auto',
      props.class,
    )">
    <slot />

  </NavigationMenuContent>
</template>
<!-- data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 -->