<script setup lang="ts">
import type { PaginationEllipsisProps } from 'reka-ui'
import { PaginationEllipsis } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<
  PaginationEllipsisProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('flex size-9 items-center justify-center', props.class)">
    <slot>
      <icon
        class="dst"
        name="more" />
    </slot>
  </PaginationEllipsis>
</template>
