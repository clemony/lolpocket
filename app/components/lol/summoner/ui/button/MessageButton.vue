<script setup lang="ts">
const {
  class: className,
  size = 'md',
  summoner,
  variant = 'shadow',
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner | Partial<Summoner>
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
    <span class="**:capitalize">
      <slot />
    </span>
  </Button>
</template>
