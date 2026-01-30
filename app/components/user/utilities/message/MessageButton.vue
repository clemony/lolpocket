<script setup lang="ts">
const {
  class: className,
  size = 'md',
  summoner,
  variant = 'shadow',
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: MaybeRef<Summoner> | Partial<Summoner>
  variant?: any
  size?: any
}>()
</script>

<template>
  <Button :class="cn('', className)" :variant="variant" :size="size">
    <icon class="" name="lucide:send" />
    <span class="**:capitalize">
      <slot />
    </span>
  </Button>
</template>
