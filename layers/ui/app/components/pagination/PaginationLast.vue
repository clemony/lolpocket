<script setup lang="ts">
import type { PaginationLastProps } from 'reka-ui'
import { PaginationLast } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<PaginationLastProps & { class?: HTMLAttributes['class'] }>(),
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
  <PaginationLast v-bind="delegatedProps">
    <button :class="cn('btn btn-square btn-ghost btn-sm', props.class)">
      <slot>
        <icon
          class="size-4"
          name="right-pipe" />
      </slot>
    </button>
  </PaginationLast>
</template>
