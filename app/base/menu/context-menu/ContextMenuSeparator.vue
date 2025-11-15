<script setup lang="ts">
import type { ContextMenuSeparatorProps } from 'reka-ui'
import { ContextMenuSeparator } from 'reka-ui'

const props = defineProps<
  ContextMenuSeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 my-1 h-px w-[101%] border border-b3/60', props.class)" />
</template>
