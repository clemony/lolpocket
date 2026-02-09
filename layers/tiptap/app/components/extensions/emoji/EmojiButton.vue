<script setup lang="ts">
import type { EmojiItem } from '@tiptap/extension-emoji';

const {
  class: className,
  index,
  item,
} = defineProps<{
  class?: HTMLAttributes['class']
  item: EmojiItem
  index: number
}>()
</script>

<template>
 <UButton
    :id="index"
    square
    variant="ghost"
    hover="inset"
    tabindex="0"
    :class="
      cn(
        'text-4xl',
        `
          index-${index}
        `,
      )
    ">
    <span
      v-if="item.emoji"
      class="dst drop-shadow-black/10">
      {{ item.emoji }}
    </span>
    <span
      v-else-if="item.fallbackImage"
      class="size-6 dss drop-shadow-black/10">
      <img
        class="object-contain"
        :alt="item.name"
        :src="item.fallbackImage">
    </span>
  </UButton>
</template>
