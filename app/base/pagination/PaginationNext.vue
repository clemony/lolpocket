<script setup lang="ts">
import { PaginationNext, useForwardProps } from 'reka-ui'
import type { PaginationNextProps } from 'reka-ui'
import { buttonVariants } from '../button/button-variants'
import type { ButtonVariants } from '../button/button-variants'

const props = withDefaults(defineProps<PaginationNextProps & {
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}>(), {
  size: 'default',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    :class="cn(buttonVariants({ variant: 'ghost', size }), 'gap-1 px-2.5 sm:pr-2.5', props.class)"
    v-bind="forwarded">
    <slot>
      <icon
        name="right-sm"
        class="size-4 stroke-[1.7]  " />
    </slot>
  </PaginationNext>
</template>
