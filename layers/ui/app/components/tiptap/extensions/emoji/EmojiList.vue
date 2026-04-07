<script setup lang="ts">
import type { EmojiItem } from "@tiptap/extension-emoji"
import type { Editor } from "@tiptap/vue-3"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  items: EmojiItem[]
  editor: Editor | null
  command: (payload: EmojiItem) => any
}>()

console.log("🌱 - items:", props.items)
const { command, editor, items } = toRefs(props)
const target = useTemplateRef<HTMLDivElement>("target")

/* const { onKeyDown } = useGridFocusTrap(target, {
  columnWidth: 5,
  items,
  onSelect: emoji => command.value(emoji),
})

defineExpose({ onKeyDown }) */
</script>

<template>
  <div
    ref="target"
    class="grid min-w-54 grid-cols-5 gap-x-1 gap-y-0.5 p-2"
    data-theme="base">
    <template v-if="items.length">
      <UButton
        v-for="(item, index) in items"
        :key="index"
        size="sm"
        square
        variant="ghost"
        hover="inset"
        tabindex="0"
        :class="
          cn(
            'rounded-md text-xxl focus:bg-p2/80 focus:ring focus:ring-p3',
            `index-${index}`
          )
        "
        @click="command(item)">
        <span class="drop-shadow-black/20 ds-sm">{{ item.emoji }}</span>
      </UButton>
    </template>
    <div v-else class="justify-center">
      No result
    </div>
  </div>
</template>
