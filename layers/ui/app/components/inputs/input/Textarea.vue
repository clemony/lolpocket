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
        'border-b3 text-md placeholder:text-bc/60 focus-visible:ring-bc/50 dark:aria-invalid:ring-domination/40 flex field-sizing-content min-h-16 w-full rounded-lg border bg-transparent px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none placeholder:italic focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        props.class,
      )
    "
  />
</template>
