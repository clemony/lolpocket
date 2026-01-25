<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const {
  class: className,
  editor,
  limit,
} = defineProps<{
  class?: HTMLAttributes['class']
  editor: Editor | undefined
  limit?: number
}>()
</script>

<template>
  <div
    :class="
      cn('text-bc/60 pointer-events-none inline self-end text-xs! select-none',
         className,
      )
    ">
    {{ editor.storage.characterCount.characters() }}
    <template v-if="limit">
      &nbsp;/&nbsp;
    </template>
    {{ limit }} characters
  </div>
</template>
