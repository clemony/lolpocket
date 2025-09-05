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
  (e: 'clear:input', payload: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <label
    :id="props.id"
    :class="cn('input text-2 h-12 items-center [&>svg]:text-tint-bc/70 [&>svg]:**:stroke-[2.2]   [&>svg]:size-5', props.class)">
    <slot />
    <input
      v-bind="$attrs"
      v-model="modelValue"
      class="focus:placeholder:opacity-0 placeholder:text-2 placeholder:italic "
      :autofocus="false"
      @keydown.stop
      @keydown.enter.prevent
      @autofocus.prevent />
    <slot name="2" />

    <Button
      v-if="modelValue"
      variant="ghost"
      class="btn-square size-7 opacity-100"
      @click="emits('clear:input', '')">
      <icon
        name="x"
        class="size-4" />
    </Button>
  </label>
</template>
