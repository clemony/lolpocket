<script setup lang="ts">
import type { PaginationLastProps } from 'reka-ui'
import { PaginationLast } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<PaginationLastProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationLast v-bind="delegatedProps">
    <button :class="cn('btn btn-ghost btn-square btn-sm', props.class)">
      <slot>
        <icon
          name="material-symbols:last-page"
          class="size-4.5" />
      </slot>
    </button>
  </PaginationLast>
</template>
