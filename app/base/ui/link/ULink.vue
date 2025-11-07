<script lang="ts" setup>
const { class: className, to } = defineProps<{
  class?: HTMLAttributes['class']
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    :class="cn('hover:underline underline-offset-2 cursor-pointer', className)">
    <slot />
  </NuxtLink>
</template>
