<script setup lang="ts">
import type { PaginationListItemProps } from 'reka-ui'
import { PaginationListItem } from 'reka-ui'
import { buttonVariants } from '~/assets/variants/variant-index'

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
    data-slot="pagination-item"
    v-bind="delegatedProps"
    :class="cn(props.class)">
    <slot />
  </PaginationListItem>
</template>
