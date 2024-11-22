<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'
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

<template><input v-model="modelValue" spellcheck='false'
  :class="cn('flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base-content/60 focus-visible:outline-none focus-visible:ring-1 hover:ring-1 focus-visible:ring-neutral/40 hover:ring-neutral/5    disabled:cursor-not-allowed disabled:opacity-50', props.class)"></template>
