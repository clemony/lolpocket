<script setup lang="ts">
import { PaginationNext } from 'reka-ui'
import type { PaginationNextProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<PaginationNextProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <button :class="cn('btn btn-ghost btn-square btn-sm', props.class)">
      <slot>
        <icon name="right-sm" class="size-4 stroke-[1.7]  " />
      </slot>
    </button>
  </PaginationNext>
</template>
