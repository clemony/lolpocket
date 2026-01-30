<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  tag: ItemTag
}>()
</script>

<template>
  <span
    :class="
      cn(
        'dst grid size-6! shrink-0 place-items-center rounded-full shadow-xs',
        className,
      )
    "
    :style="{
      backgroundColor: tag.color,
    }"
  >
    <component
      :is="tag.icon"
      v-if="tag.icon"
      :class="
        cn('dst absolute size-3.75! text-white/95', {
          'size-4.25!': tag.name !== 'Movement',
        })
      "
    />
  </span>
</template>
