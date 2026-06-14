<script setup lang="ts">
import type { ItemTag } from "~~/shared/constants/items/collection/itemTags"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
  tag: ItemTag
}>()
</script>

<template>
  <span
    :class="
      cn(
        'grid size-6! shrink-0 place-items-center rounded-full shadow-xs ds-2xs',
        className
      )
    "
    :style="{
      backgroundColor: tag.color,
    }">
    <component
      :is="tag.icon"
      v-if="tag.icon"
      :class="
        cn('absolute size-3.75! text-white/95 ds-2xs', {
          'size-4.25!': tag.name !== 'Movement',
        })
      " />
  </span>
</template>
