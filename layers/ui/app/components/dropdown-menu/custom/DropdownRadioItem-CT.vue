<script setup lang="ts">
const { class: className, value } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuRadioItem
    :value="value"
    :class="
      cn('text-nc/90! hover:bg-b3/15! [&_svg]:text-nc pl-10 text-sm', className)
    "
  >
    <slot />
  </DropdownMenuRadioItem>
</template>
