<script setup lang="ts">
import { emojiSuggestions, Mentions, mentionSuggestions } from '#tiptap'
import Emoji, { emojis } from '@tiptap/extension-emoji'
import { CharacterCount } from '@tiptap/extensions'
import StarterKit from '@tiptap/starter-kit'
import Suggestion from '@tiptap/suggestion'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const props = defineProps<{
  modelValue: Doc | null
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
// as().comments = []
// Initialize editor
const editor = useEditor({
  content: props.modelValue ?? null,
  extensions: [
    StarterKit,
    CharacterCount.configure({ limit: 2000 }),
    Mentions.configure({
      suggestions: mentionSuggestions,
    }),
    Emoji.configure({
      emojis,
      enableEmoticons: true,
      HTMLAttributes: {
        class: 'emoji',
      },
      suggestion: emojiSuggestions,
    }),

  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getJSON())
  },
})
watch(() => editor.value, (newVal) => {
  console.log('🌱 - editor:', editor.value?.$doc)
})

// helper for handling refs
const target = shallowRef<HTMLElement>(null)
const { focused } = useFocus(target)
watch(focused, (focused) => {
  if (focused)
    editor.value.commands.focus()
})
</script>

<template>
  <button
    ref="target"
    :class="cn(' group/text relative flex min-h-[80px] w-full cursor-text flex-col justify-between focus-within:ring-bc/60 transition-all duration-200 ring-transparent ring inset-shadow-xs rounded-lg border border-b3/80 p-2 text-start', props.class)"
    @dblclick="editor?.commands.selectAll()">
    <div class="w-full grow p-2 pr-12">
      <EditorContent
        id="editor"
        :editor="editor"
        class="text-3 mr-12 w-full grow border-0 !outline-0" />
      <BubbleMenu
        v-if="editor"
        :editor />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-end gap-1 self-end">
        <EmojiMenu
          v-if="editor"
          :editor />
        <MentionLeagueMenu
          v-if="editor"
          :editor />
        <EditorExtrasMenu
          v-if="editor"
          :editor />
        <Separator
          orientation="vertical"
          class="mr-1 ml-0.75 h-4 self-center" />
        <Button
          variant="ghost"
          hover="inset"
          class="disabled:opacity-30"
          :disabled="!editor?.can()?.undo()"
          size="sq-7"
          @click="editor.commands.undo()">
          <icon
            name="lucide:undo"
            class="size-4 opacity-60 group-hover/button:opacity-100 " />
        </Button>
        <Button
          variant="ghost"
          hover="inset"
          class="disabled:opacity-30"
          :disabled="!editor?.can()?.redo()"
          size="sq-7"
          @click="editor.commands.redo()">
          <icon
            name="lucide:redo"
            class="size-4 opacity-60 group-hover/button:opacity-100" />
        </Button>
      </div>
      <div class="flex items-center gap-6">
        <CharacterCounter
          v-if="editor"
          :editor
          :limit="2000" />
        <slot
          :editor />
      </div>
    </div>
  </button>
</template>