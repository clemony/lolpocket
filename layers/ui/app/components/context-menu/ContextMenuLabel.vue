<script setup lang="ts">
import type { ContextMenuLabelProps } from 'reka-ui'
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
        'flex items-center gap-2 px-2 py-1.5 text-sm font-semibold text-pc/50',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </ContextMenuLabel>
</template>
