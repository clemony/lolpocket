<script setup lang="ts">
import { keystoneIndex } from '~~/shared/indexes'

const { class: className, item } = defineProps<{
  class?: HTMLAttributes['class']
  item: Index
}>()

const keystoneStyle = computed (() => {
  if (item?.key === 'rune' || keystoneIndex?.includes(item.id))
    return 'scale-110 object-contain'
  return null
})
const runeStyle = computed (() => {
  if (item?.key === 'rune' && !keystoneIndex?.includes(item.id))
    return '!rounded-full inset-ring inset-ring-black/80'
  return null
})
</script>

<template>
  <Element
    v-if="item"
    :class="cn('size-full overflow-hidden rounded-lg drop-shadow-sm', runeStyle, className)">
    <img
      v-if="item"
      :src="['item', 'rune', 'spell'].includes(item?.key)
        ? `/img/${item.key}s/${item.id}.webp`
        : `/img/champions/${item.id}.webp`"
      :alt="item.name"
      :class="cn('size-full ', keystoneStyle)" />
  </Element>
</template>