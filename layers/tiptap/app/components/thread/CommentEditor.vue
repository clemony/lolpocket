<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import Emoji, { emojis } from '@tiptap/extension-emoji'
import { CharacterCount } from '@tiptap/extensions'
import StarterKit from '@tiptap/starter-kit'
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
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getJSON())
  },
})

// helper for handling refs
const target = shallowRef<HTMLElement>(null)
const { focused } = useFocus(target)
watch(focused, (focused) => {
  if (focused) editor.value.commands.focus()
})

onMounted(() => {
  emit('loaded', editor.value)
})
</script>

<template>
  <button
    ref="target"
    :class="
      cn(
        'group/text border-b3/80 focus-within:ring-bc/60 relative flex min-h-[80px] w-full cursor-text flex-col justify-between rounded-lg border p-2 text-start ring inset-shadow-xs ring-transparent transition-all duration-200',
        props.class,
      )
    "
    @dblclick="editor?.commands.selectAll()"
  >
    <div class="w-full grow p-2 pr-12">
      <EditorContent
        id="editor"
        class="text-md mr-12 w-full grow border-0 outline-0!"
        :editor="editor"
      />
      <BubbleMenu v-if="editor" :editor />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-end gap-1 self-end">
        <EmojiMenu v-if="editor" :editor />
        <MentionTabMenu v-if="editor" :mention-data :editor />
        <EditorExtrasMenu v-if="editor" :editor />
        <Separator
          class="mr-1 ml-0.75 h-4 self-center"
          orientation="vertical"
        />
        <Button
          class="disabled:opacity-30"
          variant="ghost"
          hover="inset"
          :disabled="!editor?.can()?.undo()"
          square
          size="xs"
          @click="editor.commands.undo()"
        >
          <icon
            class="size-4 opacity-60 group-hover/button:opacity-100"
            name="lucide:undo"
          />
        </Button>
        <Button
          class="disabled:opacity-30"
          variant="ghost"
          hover="inset"
          :disabled="!editor?.can()?.redo()"
          square
          size="xs"
          @click="editor.commands.redo()"
        >
          <icon
            class="size-4 opacity-60 group-hover/button:opacity-100"
            name="lucide:redo"
          />
        </Button>
      </div>
      <div class="flex items-center gap-6">
        <CharacterCounter v-if="editor" :editor :limit="2000" />

        <slot :editor />
      </div>
    </div>
  </button>
</template>
