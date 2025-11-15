<script setup lang="ts">
import type { SelectSeparatorProps } from 'reka-ui'
import { SelectSeparator } from 'reka-ui'

const props = defineProps<
  SelectSeparatorProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 my-1 h-px bg-b3/60', props.class)" />
</template>
