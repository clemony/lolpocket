<script setup lang="ts">
import { ContextMenuLabel } from 'radix-vue'
import type { ContextMenuLabelProps } from 'radix-vue'
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
      cn('px-2 py-1.5 text-xs font-semibold text-foreground',
         inset && 'pl-7', props.class,
      )"
  >
    <slot />
  </ContextMenuLabel>
</template>
