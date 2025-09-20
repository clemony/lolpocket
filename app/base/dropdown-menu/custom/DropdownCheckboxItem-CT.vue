<script setup lang="ts">
const { class: className, value } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuCheckboxItem
    :value="value"
    :class="
      cn('[&_svg]:text-nc hover:!bg-b3/15 !text-nc/80 text-xs', className)
    ">
    <slot />
  </DropdownMenuCheckboxItem>
</template>
