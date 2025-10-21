<script setup lang="ts">
import { Placeholder } from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Placeholder.configure({ placeholder: props.placeholder ?? 'Write a reply...' }),
  ],
  onUpdate: ({ editor }) => emit('update:modelValue', editor.getHTML()),
})
</script>

<template>
  <EditorContent
    :editor="editor"
    class="border rounded-md p-2 min-h-[80px]" />
</template>