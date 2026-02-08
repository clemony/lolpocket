<script setup lang="ts">
import type { AsTag } from 'reka-ui'

const {
  active,
  as,
  class: className,
  clear,
  size = 'sm',
  tag,
} = defineProps<{
  class?: HTMLAttributes['class']
  tag: ItemTag | string
  as?: AsTag | string
  active?: boolean
  size?: ButtonVariants['size']
  clear?: boolean
}>()

const tagValue = computed<ItemTag>(() => {
  if (typeof tag !== 'string') return tag

  return itemTags.find(t => t.id === tag)
})
</script>

<template>
  <Button
    v-if="tagValue"
    variant="outline"
    hover="btn"
    :size
    :as
    :class="
      cn(
        'w-fit px-5 text-sm! font-medium! text-pc/90 capitalize',
        {
          'hover:**:text-pc hover:text-pc order-first text-white': active,
          'pr-3': active && clear,
        },
        className,
      )
    "
    :style="{
      backgroundColor: `${(is().filters.tags.length && is().filters.tags.includes(tagValue.id)) || active ? tagValue.color : 'transparent'}`,
    }">
    {{ tagValue.name }}
    <icon
      v-if="clear"
      class="size-4 text-white **:stroke-[2.6]"
      name="x" />
  </Button>
</template>
