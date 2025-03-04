<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" :class="cn('flex h-9 w-full rounded-md border border-b2  border border-b2 -input bg-transparent px-3 py-1 text-2 shadow-sm transition-colors file:border border-b2 -0 file:bg-transparent file:text-2 file:font-medium placeholder:text-b2-bc focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-b2 disabled:cursor-not-allowed disabled:opacity-50', props.class)">
</template>
