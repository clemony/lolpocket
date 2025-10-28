<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const { class: className, editor, limit } = defineProps<{
  class?: HTMLAttributes['class']
  editor: Editor | undefined
  limit?: number
}>()
</script>

<template>
  <div
    :class="cn('inline select-none pointer-events-none !text-1 text-bc/60 self-end', className)">
    {{ editor.storage.characterCount.characters() }}
    <template v-if="limit">
      &nbsp;/&nbsp;
    </template>
    {{ limit }} characters
  </div>
</template>