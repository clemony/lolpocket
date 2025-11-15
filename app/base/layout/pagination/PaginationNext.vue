<script setup lang="ts">
import type { PaginationNextProps } from 'reka-ui'
import { PaginationNext, useForwardProps } from 'reka-ui'
import { buttonVariants } from '~/assets/variants/variant-index'

const props = withDefaults(
  defineProps<
    PaginationNextProps & {
      size?: any
      class?: HTMLAttributes['class']
    }
  >(),
  {
    size: 'default',
  },
)

const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    :class="
      cn(
        buttonVariants({ variant: 'ghost', size }),
        'aspect-square btn-square gap-1',
        props.class,
      )
    "
    v-bind="forwarded">
    <slot>
      <icon
        name="right"
        class="size-4" />
    </slot>
  </PaginationNext>
</template>
