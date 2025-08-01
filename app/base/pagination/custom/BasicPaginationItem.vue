<script setup lang="ts">
import type { PaginationListItemProps } from 'reka-ui'
import { PaginationListItem } from 'reka-ui'

import type { ButtonVariants } from '../../button/button-variants'
import { buttonVariants } from '../../button/button-variants'

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
      props.class)">
    <slot />
  </PaginationListItem>
</template>
