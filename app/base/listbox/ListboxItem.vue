<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from 'reka-ui'
import { ListboxItem, useForwardPropsEmits } from 'reka-ui'

interface Props extends ListboxItemProps {
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xs',
  variant: 'ghost'
})

const delegatedProps = reactiveOmit(props, 'class', 'active', 'variant')

const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <ListboxItem
    v-bind="forwardedProps"
    as-child
    class="!outline-0 !outline-offset-0">
    <Button
      :variant
      :size
      :hover
      :active
      :base
      :class="
        cn('w-full relative justify-start focus:outline-1 !outline-offset-0 capitalize', props.class) ">
      <slot />
    </Button>
  </ListboxItem>
</template>
