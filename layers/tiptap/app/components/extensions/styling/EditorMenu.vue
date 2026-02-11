<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3';

const { editor } = defineProps<{
  editor: Editor | null
}>()

const menu = [
  {
    action: () => editor?.commands.toggleBold(),
    icon: 'bold',
  },
  {
    action: () => editor?.commands.toggleItalic(),
    icon: 'italic',
  },
  {
    action: () => editor?.commands.toggleUnderline(),
    icon: 'lucide:underline',
  },
  {
    action: () => editor?.commands.toggleStrike(),
    icon: 'strikethrough',
  },
  {
    name: 'separator',
  },
  {
    action: () => editor?.commands.toggleHeading({ level: 1 }),
    icon: 'h1',
  },
  {
    action: () => editor?.commands.toggleHeading({ level: 2 }),
    icon: 'h2',
  },
]
</script>

<template>
  <div class="z-66! flex w-max flex-nowrap items-center gap-1 px-1 py-1.5">
    <template
      v-for="(item, i) in menu"
      :key="i">
      <UButton
        v-if="!item.name"
        variant="ghost"
        hover="inset"
        square
        class="size-9"
        @click="item.action?.()">
        <icon
          :name="item.icon ?? ''"
          :class="
            cn('', {
              'size-3.75 **:stroke-[2.6]': !['h1', 'h2'].includes(item.icon ?? ''),
              'size-4': item.icon === 'lucide:underline, bold',
            })
          " />
      </UButton>
      <Separator
        v-if="item.name === 'separator'"
        class="h-[11px] bg-p3"
        :size="2"
        orientation="vertical" />
    </template>
  </div>
</template>
