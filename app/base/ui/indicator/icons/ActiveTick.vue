<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <transition-fade
    group
    :class="cn('flex items-center gap-3 font-medium italic', className)">
    <Button
      variant="neutral"
      class="size-5.25 rounded-full p-0!">
      <Tick class="size-6.5 stroke-[1.4]" />
    </Button>
    Active
  </transition-fade>
</template>
