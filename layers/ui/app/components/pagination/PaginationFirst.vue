<script setup lang="ts">
import type { PaginationFirstProps } from 'reka-ui'
import { PaginationFirst } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(),
  {
    asChild: true,
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <button :class="cn('btn btn-square btn-ghost btn-sm', props.class)" v>
      <slot>
        <icon class="size-4 shrink-0 opacity-80" name="left-pipe" />
      </slot>
    </button>
  </PaginationFirst>
</template>
