<script setup lang="ts">
const { value, class: className } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuCheckboxItem
    :value="value"
    :class="cn('[&_svg]:text-nc hover:!bg-b3/15 !text-nc/80 text-2', className)">
    <slot />
  </DropdownMenuCheckboxItem>
</template>