<script setup lang="ts">
import type { ListboxItemProps } from 'reka-ui'
import { ListboxItem, useForwardPropsEmits } from 'reka-ui'

interface Props extends ListboxItemProps {
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  on?: ButtonVariants['on']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}

const props = withDefaults(defineProps<Props>(), {
  size: '8',
  variant: 'ghost',
})

const delegatedProps = reactiveOmit(props, 'class', 'on', 'variant')

const forwardedProps = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <ListboxItem
    class="outline-0! outline-offset-0!"
    v-bind="forwardedProps"
    as-child
    :autofocus="false"
  >
    <Button
      :variant
      :size
      :hover
      :on
      :base
      :class="
        cn(
          'relative w-full justify-start capitalize outline-offset-0! duration-0! focus:outline-1',
          props.class,
        )
      "
    >
      <slot />
    </Button>
  </ListboxItem>
</template>
