<script setup lang="ts">
const { value, class: className } = defineProps<{
  value: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <DropdownMenuRadioItem :value="value" :class="cn('[&_svg]:text-nc hover:!bg-b3/15 pl-10 !text-nc/90 text-2', className)">
    <slot />
  </DropdownMenuRadioItem>
</template>