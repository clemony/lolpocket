<script setup lang="ts">
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string
  modelValue?: string
  class?: HTMLAttributes['class']
  id?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void
  (e: 'clear:input', payload: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
})
</script>

<template>
  <label
    :id="props.id"
    for="input"
    :class="
      cn(
        'input text-2 h-12 items-center [&>svg]:text-tint-bc/70 [&>svg]:**:stroke-[2.2]   [&>svg]:size-5',
        props.class,
      )
    ">
    <slot />
    <input
      v-bind="$attrs"
      v-model="modelValue"
      name="input"
      class="focus:placeholder:opacity-0 placeholder:text-2 placeholder:italic"
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
