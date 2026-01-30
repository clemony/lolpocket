<script lang="ts" setup>
const { comment } = defineProps<{
  comment: CommentData
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <!-- update comment -->
  <div class="mt-2 mb-1 pr-px pb-px pl-10">
    <CommentEditor
      v-slot="{ editor }"
      :mention-data="getLeagueMentionData()"
      @loaded="(e) => e.commands.setContent(comment.content)"
    >
      <PostButton
        cancellable
        :change="editor?.can()?.undo() && !editor?.isEmpty"
        save
        @click.stop="
          () => {
            updateComment(
              editor.getJSON() as Doc,
              comment.thread_id,
              comment.id,
            )
            editor.commands.clearContent()
            editor.commands.blur()
            emit('close')
          }
        "
      />
    </CommentEditor>
  </div>
</template>
