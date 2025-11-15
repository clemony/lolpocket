<script lang="ts" setup>
import { postComment } from '~/composables/tiptap'

const { comment } = defineProps<{
  comment: CommentData
}>()
const emit = defineEmits(['close'])

const replyContent = ref<Doc>(null)
</script>

<template>
  <div
    class="mt-2 pr-px pb-px pl-12">
    <CommentEditor
      v-slot="{ editor }"
      v-model="replyContent">
      <PostButton
        cancellable
        :change="!editor?.isEmpty"
        @click.stop="() => {
          postComment(replyContent, comment.thread_id, comment.id)
          editor.commands.clearContent()
          editor.commands.blur()
          emit('close')
        }" />
    </CommentEditor>
  </div>
</template>