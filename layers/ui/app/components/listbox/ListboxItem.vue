<script setup lang="ts">
import type { ListboxItemProps } from 'reka-ui'
import { ListboxItem, useForwardPropsEmits } from 'reka-ui'

interface Props extends ListboxItemProps {
  class?: HTMLAttributes['class']

  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'ghost',
  size: 'sm',
})

const delegatedProps = reactiveOmit(props, 'class', 'variant')

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
