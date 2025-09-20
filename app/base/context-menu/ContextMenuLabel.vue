<script setup lang="ts">
import type { ContextMenuLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { ContextMenuLabel } from 'reka-ui'

const props = defineProps<
  ContextMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn(
        'px-2 py-1.5 text-xs font-semibold text-bc',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </ContextMenuLabel>
</template>
