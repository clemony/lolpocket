<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('wrapper anchor size-4', className)">
    <Icon name="i-lucide-folder" class="absolute size-4 **:stroke-[2.3]" />
    <Icon
      name="i-lucide-plus"
      class="plus-icon absolute -right-1 size-2.75 translate-y-0 rounded-full bg-p1 opacity-100 **:stroke-[3] group-hover/btn:bg-p3" />
  </div>
</template>
