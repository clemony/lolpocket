<script setup lang="ts">
const {class: className } = defineProps<{
class?: HTMLAttributes['class']

}>()
</script>

<template>

      <label
      :class="cn('input h-12 rounded-lg bg-b1 mt-2  relative', className)">
        <slot  />
      </label>
</template>