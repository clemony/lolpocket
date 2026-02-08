<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
})
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="
      cn(
        'flex field-sizing-content min-h-16 w-full rounded-lg border border-p3 bg-transparent px-3 py-2 text-md shadow-xs transition-[color,box-shadow] outline-none placeholder:text-pc/60 placeholder:italic focus-visible:ring-1 focus-visible:ring-pc/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:aria-invalid:ring-domination/40',
        props.class,
      )
    " />
</template>
