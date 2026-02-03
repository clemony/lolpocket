<script setup lang="ts">
import type { PaginationListItemProps } from 'reka-ui'
import { PaginationListItem } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PaginationListItemProps & {
      size?: any
      class?: HTMLAttributes['class']
      shape?: any
      isActive?: boolean
    }
  >(),
  {
    shape: 'square',
    size: 'sm',
  }
)

const delegatedProps = reactiveOmit(props, 'class', 'size', 'isActive')
</script>

<template>
  <PaginationListItem
    v-bind="delegatedProps"
    data-slot="pagination-item"
    square
    :class="
      props.class
    "
  >
    <slot />
  </PaginationListItem>
</template>
