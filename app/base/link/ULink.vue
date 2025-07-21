<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NuxtLink :class="cn('hover:underline underline-offset-2 cursor-pointer', className)">
    <slot />
  </NuxtLink>
</template>