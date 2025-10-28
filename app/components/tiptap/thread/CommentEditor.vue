<script setup lang="ts">
import Emoji, { gitHubEmojis } from '@tiptap/extension-emoji'
import { CharacterCount } from '@tiptap/extensions'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { CustomMention, emojiSuggestions, mentionSuggestions, normalizeJSONContent } from '~tiptap'

const props = defineProps<{
  modelValue: Doc | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

// Initialize editor
const editor = useEditor({
  content: props.modelValue ?? null,
  extensions: [
    StarterKit,
    /*     CharacterCount.configure({ limit: 2000 }),
    CustomMention.configure({
      deleteTriggerWithBackspace: true,
      suggestions: mentionSuggestions
    }),
    Emoji.configure({
      emojis: gitHubEmojis,
      enableEmoticons: true,
      suggestion: emojiSuggestions
    }), */
  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getJSON())
  },
})

watch(
  () => props.modelValue,
  (newContent) => {
    if (!editor.value)
      return
    const next = newContent
    editor.value.commands.setContent(next, { emitUpdate: false })
  }
)

function updateContent(newContent: Doc) {
  if (!editor.value)
    return

  const next = newContent

  editor.value.commands.setContent(next, { emitUpdate: false })

  toast({
    title: 'Comment Updated!',
    description: `Successfully updated your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
  })

  return true
}

// helper for handling refs
const target = shallowRef<HTMLElement>(null)
const { focused } = useFocus(target)
watch(focused, (focused) => {
  if (focused)
    editor.value.commands.focus()
})

// as().comments = []
</script>

<template>
  <button
    class="text-area group/text relative flex min-h-[80px] w-full cursor-text flex-col justify-between rounded-lg border p-2 text-start"
    @dblclick="editor?.commands.selectAll()"
    @click="editor?.commands.focus('end')">
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
        <!--         <EmojiMenu
          v-if="editor"
          :editor />
        <EditorChampionAndItemMenu
          v-if="editor"
          :editor />
        <EditorExtrasMenu
          v-if="editor"
          :editor /> -->
      </div>
      <div class="flex items-center gap-6">
        <!--         <CharacterCounter
          v-if="editor"
          :editor
          :limit="2000" /> -->
        <slot
          :editor
          :update-content="updateContent" />
      </div>
    </div>
  </button>
</template>