<script setup lang="ts">
import type { Comment } from '@types'

const comments = ref<Comment[]>([])
const newComment = ref('')

function handleReply({ content, parentId }: { parentId: string, content: string }) {
  // Replace with actual save call (e.g. Supabase insert)
  const reply: Comment = {
    id: crypto.randomUUID(),
    authorId: 'me',
    content,
    createdAt: new Date().toISOString(),
    parentId,
    replies: [],
  }

  addReply(comments.value, parentId, reply)
}

function addReply(list: Comment[], parentId: string, reply: Comment) {
  for (const comment of list) {
    if (comment.id === parentId) {
      comment.replies ??= []
      comment.replies.push(reply)
      return
    }
    if (comment.replies?.length)
      addReply(comment.replies, parentId, reply)
  }
}

function postComment() {
  comments.value.push({
    id: crypto.randomUUID(),
    authorId: 'me',
    content: newComment.value,
    createdAt: new Date().toISOString(),
    replies: [],
  })
  newComment.value = ''
}
</script>

<template>
  <div class="space-y-4">
    <CommentEditor
      v-model="newComment"
      placeholder="Write a comment..." />
    <button
      class="text-xs bg-primary text-white px-3 py-1 rounded"
      @click="postComment">
      Post Comment
    </button>

    <div
      v-if="comments.length"
      class="mt-6 space-y-4">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        @reply="handleReply" />
    </div>
  </div>
</template>