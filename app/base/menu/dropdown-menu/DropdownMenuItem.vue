<script setup lang="ts">
import type { DropdownMenuItemProps } from 'reka-ui'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    DropdownMenuItemProps & {
      class?: HTMLAttributes['class']
      inset?: boolean
      on?: ButtonVariants['on']
      hover?: ButtonVariants['hover']
      size?: ButtonVariants['size']
      variant?: ButtonVariants['variant']
      base?: ButtonVariants['base']
    }
  >(),
  {
    base: 'btn',
    hover: 'btn',
    on: 'secondary',
    size: '8',
    variant: 'ghost',
  },
)

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwarded"
    :class="
      cn(
        buttonVariants({ base, hover, on, size, variant }),
        inset && '!pl-8',
        'group/menu-item justify-start px-2 text-2',
        props.class,
      )
    ">
    <slot />
  </DropdownMenuItem>
</template>
