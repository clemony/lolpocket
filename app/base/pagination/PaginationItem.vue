<script setup lang="ts">
import { PaginationListItem } from 'reka-ui'
import type { PaginationListItemProps } from 'reka-ui'

import { buttonVariants } from '../button/button-variants'
import type { ButtonVariants } from '../button/button-variants'

const props = withDefaults(defineProps<PaginationListItemProps & {
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  shape?: ButtonVariants['shape']
  isActive?: boolean
}>(), {
  size: 'sm',
  shape: 'square',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'isActive')
</script>

<template>
  <PaginationListItem
    data-slot="pagination-item"
    v-bind="delegatedProps"
    :class="cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
        shape,
      }),
      props.class)">
    <slot />
  </PaginationListItem>
</template>
