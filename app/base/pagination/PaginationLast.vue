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
          name="teenyicons:double-caret-right-small-outline"
          class="size-6.25 opacity-80 " />
      </slot>
    </button>
  </PaginationLast>
</template>
