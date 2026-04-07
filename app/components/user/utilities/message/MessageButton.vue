<script setup lang="ts">
const {
  variant = "shadow",
  class: className,
  size = "md",
  summoner
} = defineProps<{
  class?: HTMLAttributes["class"]
  summoner: MaybeRef<Summoner> | Partial<Summoner>
  variant?: any
  size?: any
}>()
</script>

<template>
  <UButton :class="cn('', className)" :variant="variant" :size="size">
    <icon class="" name="lucide:send" />
    <span class="**:capitalize">
      <slot />
    </span>
  </UButton>
</template>
