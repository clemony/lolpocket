<script setup lang="ts">
import 'assets/css/components/navigation-menu.css'
import type {
  NavigationMenuContentEmits,
  NavigationMenuContentProps,
} from 'reka-ui'
import { NavigationMenuContent, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<
  NavigationMenuContentProps & { class?: HTMLAttributes['class'] }
>()

const emits = defineEmits<NavigationMenuContentEmits>()
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="
      cn(
        'justify-self-center NavigationMenuContent will-change-[transform,opacity]   overflow-hidden   rounded-xl  text-bc absolute ',
        props.class,
      )
    ">
    <slot />
  </NavigationMenuContent>
</template>
