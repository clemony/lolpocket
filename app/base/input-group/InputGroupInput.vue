<script setup lang="ts">
const { class: className, placeholder = '' } = defineProps<{
  class?: HTMLAttributes['class']
  placeholder?: string
}>()
</script>

<template>
  <Input
    data-slot="input-group-control"
    :placeholder
    :class="cn(
      'flex-1 rounded-none peer border-0 inset-shadow-none shadow-none focus-within:ring-0  hover:ring-0 outline-0 border-0 bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent ring-offset-transparent dark:bg-transparent',
      className,
    )" />
</template>
