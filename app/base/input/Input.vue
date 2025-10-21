<script setup lang="ts">
import type { InputVariants } from '@variants'
import { useVModel } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import { inputVariants } from '~/assets/variants/input-variants'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    defaultValue?: string
    focused?: boolean
    modelValue?: string
    id?: string
    size?: InputVariants['size']
    placeholder?: string
  }>(),
  {
    placeholder: '',
    size: 'default',
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

const input = shallowRef<HTMLInputElement>()
const { focused } = useFocus(input, { initialValue: props.focused })

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <label
    :id="props.id"
    for="input"
    v-bind="forwarded"
    :class="cn(inputVariants({ size: props.size }), props.class)">
    <slot />
    <input
      ref="input"
      v-model="modelValue"
      name="input"
      :placeholder
      autocomplete="off"
      class="focus:placeholder:opacity-0 placeholder:text-2 placeholder:italic"
      @keydown.stop
      @keydown.enter.prevent />
    <slot name="2" />

    <slot name="3" />
  </label>
</template>
