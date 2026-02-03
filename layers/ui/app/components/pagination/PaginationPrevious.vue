<script setup lang="ts">
import type { PaginationPrevProps } from 'reka-ui'
import { PaginationPrev, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PaginationPrevProps & {
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
  <PaginationPrev
    v-bind="forwarded"
    data-slot="pagination-previous"
    :class="
      cn(
        `gap-1 px-2.5 sm:pr-2.5`,
        props.class,
      )
    "
  >
    <slot>
      <icon name="left" />
      <span class="hidden sm:block">Previous</span>
    </slot>
  </PaginationPrev>
</template>
