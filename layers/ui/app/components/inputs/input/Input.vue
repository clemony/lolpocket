<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'

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
    variant?: InputVariants['variant']
    inputClass?: HTMLAttributes['class']
  }>(),
  {
    placeholder: '',
    size: 'default',
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void
  (e: 'clearInput', payload: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
})

const inputRef = shallowRef<HTMLElement>()
const { focused } = useFocus(inputRef, { initialValue: props.focused })

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

function focusInput() {
  if (!focused.value) focused.value = true
}
defineExpose({
  focusInput,
  inputRef,
})
</script>

<template>
  <label
    v-bind="forwarded"
    :id="props.id"
    for="input"
    :class="cn(inputVariants({ size: props.size, variant }), props.class)">
    <slot />
    <input
      ref="inputRef"
      v-model="modelValue"
      name="inputRef"
      :placeholder
      autocomplete="off"
      :class="
        cn(
          'placeholder:text-sm placeholder:italic focus:placeholder:opacity-0',
          props.inputClass,
        )
      "
      @keydown.stop
      @keydown.enter.prevent>
    <slot name="2" />

    <slot name="3" />
  </label>
</template>
