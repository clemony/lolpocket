<script setup lang="ts">
import { handleReply, handleUpdate, handleVote, postComment } from '~tiptap'

const newComment = ref<Doc>(null)

// @todo  this
/* function deleteComment(deleteComment: string) {
  how to delete?
} */
</script>

<template>
  <div class="h-max w-full max-w-210 space-y-6">
    <div class="flex  w-full flex-col items-start  justify-center space-y-6 pr-6 pl-2">
      <h1 class="select-none">
        Comments
      </h1>
      <CommentEditor
        v-slot="{ editor }"
        v-model="newComment"
        class="min-h-36 ">
        <PostButton @click.stop="postComment(editor, newComment)" />
      </CommentEditor>
    </div>

    <div
      v-if="as().comments.length"
      class="">
      <CommentItem
        v-for="comment in as().comments"
        :key="comment.id"
        :comment="comment"
        @comment:update="handleUpdate"
        @comment:vote="handleVote"
        @comment:reply="handleReply" />
    </div>
  </div>
</template>