<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'reka-ui'
import { DropdownMenuSubTrigger, useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<
  DropdownMenuSubTriggerProps & {
    class?: HTMLAttributes['class']
    inset?: boolean
    on?: ButtonVariants['on']
    hover?: ButtonVariants['hover']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
    base?: ButtonVariants['base']
  }
>(), {
  base: 'btn',
  hover: 'btn',
  on: 'secondary',
  size: '8',
  variant: 'ghost'
})
const delegatedProps = reactiveOmit(props, 'class', 'base', 'hover', 'on', 'size', 'variant')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwarded"
    :class="
      cn(
        buttonVariants({ base, hover, on, size, variant }),
        props.class,
      )
    ">
    <slot />

    <icon
      name="right"
      class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
