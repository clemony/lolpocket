<script setup lang="ts">
import { ContextMenuLabel } from 'reka-ui'
import type { ContextMenuLabelProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn('px-2 py-1.5 text-2 font-semibold text-bc',
         inset && 'pl-8', props.class,
      )"
  >
    <slot />
  </ContextMenuLabel>
</template>
