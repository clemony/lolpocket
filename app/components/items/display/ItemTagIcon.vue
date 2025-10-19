<script setup lang="ts">
import type { ItemTag } from '~~/shared/appdata'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  tag: ItemTag
}>()
</script>

<template>
  <span
    :class="cn('!size-6 dst shadow-xs shrink-0 grid place-items-center rounded-full', className)"

    :style="{
      backgroundColor: tag.color,
    }">
    <component
      :is="tag.icon"
      v-if="tag.icon"
      :class="cn('!size-3.75 text-white/95 absolute dst', { '!size-4.25': tag.name !== 'Movement' })" />
  </span>
</template>