<script setup lang="ts">
import type { PaginationPrevProps } from 'reka-ui'
import { PaginationPrev } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <button :class="cn('btn btn-ghost btn-square btn-sm', props.class)">
      <slot>
        <icon
          name="left-sm"
          class="size-4 shrink-0 stroke-[1.7]  " />
      </slot>
    </button>
  </PaginationPrev>
</template>
