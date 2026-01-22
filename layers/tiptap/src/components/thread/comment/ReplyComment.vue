<script lang="ts" setup>
import { getLeagueMentionData } from '~/composables/tiptap/useLeagueMentions'

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
      v-model="replyContent"
      :mention-data="getLeagueMentionData">
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