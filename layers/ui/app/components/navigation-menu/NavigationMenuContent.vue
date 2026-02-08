<script setup lang="ts">
import type {
  NavigationMenuContentEmits,
  NavigationMenuContentProps,
} from 'reka-ui'
import { NavigationMenuContent, useForwardPropsEmits } from 'reka-ui'
import 'ui/css/components/navigation-menu.css'

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
        'NavigationMenuContent absolute justify-self-center overflow-hidden rounded-xl text-pc will-change-[transform,opacity]',
        props.class,
      )
    ">
    <slot />
  </NavigationMenuContent>
</template>
