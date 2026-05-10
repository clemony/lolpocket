<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('anchor size-4', className)">
    <Icon
      name="i-lucide-calendar"
      class="size-full translate-x-1.5 scale-x-68 scale-y-74 justify-self-start" />
    <Icon
      name="i-arrow-up-down"
      class="absolute left-0 size-3.75 -translate-x-0.75" />
  </div>
</template>
