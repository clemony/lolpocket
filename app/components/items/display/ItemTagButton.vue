<script setup lang="ts">
import type { AsTag } from 'reka-ui'
import type { ItemTag } from '~~/shared/appdata'
import { itemTags } from '~~/shared/appdata'

const { active, as, class: className, clear, size = 'xs', tag } = defineProps<{
  class?: HTMLAttributes['class']
  tag: ItemTag | string
  as?: AsTag | string
  active?: boolean
  size?: ButtonVariants['size']
  clear?: boolean
}>()

const tagValue = computed <ItemTag>(() => {
  if (typeof tag !== 'string')
    return tag

  return itemTags.find(t => t.id === tag)
})
</script>

<template>
  <Button
    v-if="tagValue"
    :variant="active ? 'base' : 'btn'"
    :size
    :as
    :hover="active ? 'neutral' : 'secondary'"
    :style="{
      backgroundColor: active ? tagValue.color : '',
    }"
    :class="cn('w-fit font-medium px-5 text-bc/90 capitalize shadow-xs dxs', { '  order-first text-white': active, 'pr-3': active && clear }, className)">
    {{ tagValue.name }}
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6] " />
  </Button>
</template>