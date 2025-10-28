<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{
  editor: Editor | null
}>()

const menu = [
  {
    action: () => editor.commands.toggleBold(),
    icon: 'bold',
  },
  {
    action: () => editor.commands.toggleItalic(),
    icon: 'italic',
  },
  {
    action: () => editor.commands.toggleStrike(),
    icon: 'strikethrough',
  },
  {
    name: 'separator'
  },
  {
    action: () => editor.commands.toggleHeading({ level: 1 }),
    icon: 'h1',
  },
  {
    action: () => editor.commands.toggleHeading({ level: 2 }),
    icon: 'h2',
  },
]
</script>

<template>
  <div class="tippy-content flex gap-1 items-center">
    <template
      v-for="item, i in menu"
      :key="i">
      <Button
        v-if="!item.name"
        variant="ghost"
        hover="inset"
        size="sq-sm"
        @click="item.action()">
        <icon
          :name="item.icon"
          :class="cn('', { 'size-3.75 **:stroke-[2.6]': !['h1', 'h2'].includes(item.icon), 'size-4': item.icon === 'bldc' })" />
      </Button>
      <Separator
        v-if="item.name === 'separator'"
        class="h-[11px] bg-b3"
        orientation="vertical" />
    </template>
  </div>
</template>

<style>
#tippy-2 {
  background-color: transparent;
}
</style>