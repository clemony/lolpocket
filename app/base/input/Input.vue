<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  id?: string
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
  <label
    :id="props.id"
    :class="cn('input text-2 h-12 items-center [&>svg]:text-tint-bc/76 [&>svg]:**:stroke-[2.2]  [&>svg]:mt-0.25 [&>svg]:size-5', props.class)">
    <slot />
    <input
      v-bind="$attrs"
      v-model="modelValue"
      :autofocus="false" />
    <slot name="2" />
  </label>
</template>
