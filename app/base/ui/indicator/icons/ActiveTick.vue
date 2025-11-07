<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <transition-fade
    group
    :class="cn('flex gap-3 items-center  font-medium italic', className)">
    <Button
      variant="neutral"
      class="rounded-full size-5.25 !p-0">
      <Tick class="size-6.5 stroke-[1.4]" />
    </Button>
    Active
  </transition-fade>
</template>
