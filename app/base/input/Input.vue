<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { InputSize, InputVariantProps } from '~/assets/variants/input-variants'
import { inputVariants } from '~/assets/variants/input-variants'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<InputVariantProps & {
    class?: HTMLAttributes['class']
    defaultValue?: string
    modelValue?: string
    id?: string
    size?: InputSize
  }>(),
  {
    size: 'default'
  }
)

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
    :class="cn(inputVariants({ size: props.size }), props.class)">
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
