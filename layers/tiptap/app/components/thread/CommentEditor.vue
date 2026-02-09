<script setup lang="ts">
import Emoji, { emojis } from '@tiptap/extension-emoji'
import { CharacterCount } from '@tiptap/extensions'
import StarterKit from '@tiptap/starter-kit'
import type { Editor } from '@tiptap/vue-3'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const props = defineProps<{
  modelValue?: Doc | null
  class?: HTMLAttributes['class']
  mentionData?: MentionData
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'loaded', value: Editor): void
}>()

const editor = useEditor({
  content: props.modelValue ?? null,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getJSON())
  },
  extensions: [
    StarterKit,
    CharacterCount.configure({ limit: 2000 }),
    BadgeMentions.configure({
      // suggestions: mentionSuggestions,
    }),
    Emoji.configure({
      emojis,
      enableEmoticons: true,
      HTMLAttributes: {
        class: 'emoji',
      },
      // suggestion: emojiSuggestions,
    }),
  ],
})

// helper for handling refs
const target = shallowRef<HTMLElement | null>(null)
const { focused } = useFocus(target)
watch(focused, (focused) => {
  if (focused) editor.value?.commands.focus()
})

onMounted(() => {
  if (editor.value) emit('loaded', editor.value)
})
</script>

<template>
  <button
    ref="target"
    :class="
      cn(
        'group/text relative flex min-h-[80px] w-full cursor-text flex-col justify-between rounded-lg border border-p3/80 p-2 text-start ring inset-shadow-xs ring-transparent transition-all duration-200 focus-within:ring-pc/60',
        props.class,
      )
    "
    @dblclick="editor?.commands.selectAll()">
    <div class="w-full grow p-2 pr-12">
      <EditorContent
        id="editor"
        class="mr-12 w-full grow border-0 text-md outline-0!"
        :editor="editor" />
      <BubbleMenu
        v-if="editor"
        :editor />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-end gap-1 self-end">
        <EmojiMenu
          v-if="editor"
          :editor />
        <MentionTabMenu
          v-if="editor"
          :mention-data
          :editor />
        <EditorExtrasMenu
          v-if="editor"
          :editor />
        <Separator
          class="mr-1 ml-0.75 h-4 self-center"
          orientation="vertical" />
       <UButton
          class="disabled:opacity-30"
          variant="ghost"
          hover="inset"
          :disabled="!editor?.can()?.undo()"
          square
          size="xs"
          @click="editor?.commands.undo()">
          <icon
            class="size-4 opacity-60 group-hover/button:opacity-100"
            name="lucide:undo" />
        </UButton>
       <UButton
          class="disabled:opacity-30"
          variant="ghost"
          hover="inset"
          :disabled="!editor?.can()?.redo()"
          square
          size="xs"
          @click="editor?.commands.redo()">
          <icon
            class="size-4 opacity-60 group-hover/button:opacity-100"
            name="lucide:redo" />
        </UButton>
      </div>
      <div class="flex items-center gap-6">
        <CharacterCounter
          v-if="editor"
          :editor
          :limit="2000" />

        <slot :editor />
      </div>
    </div>
  </button>
</template>
