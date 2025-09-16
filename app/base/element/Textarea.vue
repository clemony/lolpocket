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
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="
      cn(
        'border-b3 border placeholder:italic placeholder:text-bc/60 focus-visible:ring-1 focus-visible:ring-bc/50 dark:aria-invalid:ring-domination/40  flex field-sizing-content min-h-16 w-full rounded-lg  bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed  disabled:opacity-50 md:text-xs ',
        props.class,
      )
    " />
</template>
