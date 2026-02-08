<script setup lang="ts">
import type { PaginationNextProps } from 'reka-ui'
import { PaginationNext, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PaginationNextProps & {
      size?: any
      class?: HTMLAttributes['class']
    }
  >(),
  {
    size: 'default',
  }
)

const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext
    v-bind="forwarded"
    data-slot="pagination-next"
    :class="
      cn(
        'aspect-square btn-square gap-1',
        props.class,
      )
    ">
    <slot>
      <icon
        class="size-4"
        name="right" />
    </slot>
  </PaginationNext>
</template>
