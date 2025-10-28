<script setup lang="ts">
import type { JSONContent } from '@tiptap/core'

const newComment = ref<Doc>(null)
function handleReply({ content, parentId }: { parentId: string, content: JSONContent[] }) {
  // Replace with actual save call (e.g. Supabase insert)
  const reply: CommentItem = {
    authorPuuid: as().account.puuid,
    id: crypto.randomUUID(),
    authorIcon: as().account.icon,
    authorName: as().account.name,
    authorTag: as().account.tag,
    content: {
      content,
      type: 'doc',
    },
    createdAt: new Date().toISOString(),
    editedAt: null,
    parentId,
    replies: [],
  }

  addReply(as().comments, parentId, reply)
}

function addReply(list: CommentItem[], parentId: string, reply: CommentItem) {
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

function postComment(editor) {
  as().comments.push({
    authorPuuid: as().account.puuid,
    id: crypto.randomUUID(),
    authorIcon: as().account.icon,
    authorName: as().account.name,
    authorTag: as().account.tag,
    content: newComment.value,
    createdAt: new Date().toISOString(),
    editedAt: null,
    replies: [],
  })
  editor.commands.clearContent()
  editor.commands.blur()
}

// @todo  this supabase
/* function deleteComment(deleteComment: string) {
  if (comment.parentId) {
    console.log('🌱 - deleteComment - comment.parentId:', comment.parentId)
    const a = as().comments.find(p => p.id === comment.id)
    console.log('🌱 - deleteComment - as().comments:', as().comments)
    console.log('🌱 - deleteComment - a:', a)

    const b = a.replies.findIndex(c => c.id === deleteComment)
    if (b)
      a.replies.splice(b, 1)
  }
  else if (!comment.parentId) {
    const a = as().comments.findIndex(p => p.id === comment.parentId)
    if (a)
      as().comments.splice(a, 1)
  }
} */
</script>

<template>
  <div class="w-full max-w-200 space-y-6">
    <h1 class="select-none">
      Comments
    </h1>
    <CommentEditor
      v-slot="{ editor }"
      v-model="newComment">
      <PostButton @click.stop="postComment(editor)" />
    </CommentEditor>

    <div
      v-if="as().comments.length"
      class="">
      <CommentItem

        v-for="comment in as().comments"
        :key="comment.id"
        :comment="comment"
        @comment:reply="handleReply" />
    </div>
  </div>
</template>