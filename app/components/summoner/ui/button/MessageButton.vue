<script setup lang="ts">
const { class: className, summoner, variant = 'shadow', size = 'md' } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  variant?: any
  size?: any
}>()
</script>

<template>
  <Button
    :class="cn('', className)"
    :variant="variant"
    :size="size">
    <icon
      name="lucide:send"
      class="" />
    <span
      class="**:capitalize">
      <slot />
    </span>
  </Button>
</template>