<script setup lang="ts">
import type { PaginationPrevProps } from 'reka-ui'
import { PaginationPrev, useForwardProps } from 'reka-ui'

import { buttonVariants } from '../button/button-variants'
import type { ButtonVariants } from '../button/button-variants'

const props = withDefaults(defineProps<PaginationPrevProps & {
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}>(), {
  size: 'default',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationPrev
    data-slot="pagination-previous"
    :class="cn(buttonVariants({ variant: 'ghost', size }), 'gap-1 px-2.5 sm:pr-2.5', props.class)"
    v-bind="forwarded">
    <slot>
      <icon name="left-sm" />
      <span class="hidden sm:block">Previous</span>
    </slot>
  </PaginationPrev>
</template>
