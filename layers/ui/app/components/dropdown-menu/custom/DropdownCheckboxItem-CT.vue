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
      cn('text-nc/80! hover:bg-b3/15! [&_svg]:text-nc text-sm', className)
    "
  >
    <slot />
  </DropdownMenuCheckboxItem>
</template>
