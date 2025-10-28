<script setup lang="ts">
import type { EmojiItem } from '~tiptap'

const { class: className, index, item } = defineProps<{
  class?: HTMLAttributes['class']
  item: EmojiItem
  index: number
}>()
</script>

<template>
  <Button
    :id="index"
    size="sq-md"
    variant="ghost"
    hover="inset"
    tabindex="0"
    :class="cn('text-9', `index-${index}`)">
    <span
      v-if="item.emoji"
      class="dst drop-shadow-black/10">
      {{ item.emoji }}
    </span>
    <span
      v-else-if="item.fallbackImage"
      class="dss drop-shadow-black/10  size-6">
      <img
        :alt="item.name"
        :src="item.fallbackImage"
        class="object-contain" />
    </span>
  </Button>
</template>