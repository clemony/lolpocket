<script setup lang="ts">
const { class: className, placeholder = '' } = defineProps<{
  class?: HTMLAttributes['class']
  placeholder?: string
}>()

const target = useTemplateRef('target')
function focusInput() {
  target.value.focusInput()
}
defineExpose({
  focusInput
})
</script>

<template>
  <Input
    ref="target"
    data-slot="input-group-control"
    :placeholder
    :class="cn(
      `
        peer flex-1 rounded-none border-0 bg-transparent shadow-none
        inset-shadow-none ring-offset-transparent outline-0
        focus-within:ring-0
        hover:ring-0
        focus:ring-0
        focus-visible:ring-0 focus-visible:ring-transparent
        dark:bg-transparent
      `,
      className,
    )" />
</template>
