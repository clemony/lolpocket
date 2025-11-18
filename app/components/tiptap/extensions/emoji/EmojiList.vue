<script setup lang="ts">
import type { EmojiItem } from '@tiptap/extension-emoji'
import type { Editor } from '@tiptap/vue-3'

const props = defineProps<{
  class?: HTMLAttributes['class']
  items: EmojiItem[]
  editor: Editor | null
  command: (payload: EmojiItem) => any
}>()

console.log('🌱 - items:', props.items)
const { command, editor, items } = toRefs(props)
const target = useTemplateRef<HTMLDivElement>('target')

const { onKeyDown } = useGridFocusTrap(target, {
  columnWidth: 5,
  items,
  onSelect: emoji => command.value(emoji),
})

defineExpose({ onKeyDown })
</script>

<template>
  <div
    ref="target"
    data-theme="base"
    class="tippy-box grid min-w-54 grid-cols-5 gap-x-1 gap-y-0.5 px-2 py-2">
    <template v-if="items.length">
      <Button
        v-for="(item, index) in items"
        :key="index"
        size="sq-8"
        variant="ghost"
        hover="inset"
        tabindex="0"
        :class="
          cn('rounded-md text-6 focus:bg-b2/80 focus:ring focus:ring-b3',
            `
              index-${index}
            `,
          )
        "
        @click="command(item)">
        <span class="dss drop-shadow-black/20">{{ item.emoji }}</span>
      </Button>
    </template>
    <div
      v-else
      class="justify-center">
      No result
    </div>
  </div>
</template>
