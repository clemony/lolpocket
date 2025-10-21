<script setup lang="ts">
import type { Comment } from '@types'
import CommentEditor from './CommentEditor.vue'

const { comment, depth } = defineProps<{
  comment: Comment
  depth?: number
}>()

const emit = defineEmits(['reply'])

const replying = ref(false)
const replyContent = ref('')
</script>

<template>
  <div
    class="space-y-2 border-l border-muted/40 pl-3"
    :style="{ marginLeft: `${(depth ?? 0) * 16}px` }">
    <div>
      <div class="text-sm font-semibold">
        @{{ comment.authorId }}
      </div>
      <div
        class="prose dark:prose-invert"
        v-html="comment.content" />
    </div>

    <div class="flex items-center gap-2 text-xs text-muted-foreground">
      <button
        class="hover:underline"
        @click="replying = !replying">
        Reply
      </button>
    </div>

    <div
      v-if="replying"
      class="mt-2 space-y-2">
      <CommentEditor
        v-model="replyContent"
        placeholder="Write a reply..." />
      <button
        class="text-xs bg-primary text-white px-2 py-1 rounded"
        @click="$emit('reply', { parentId: comment.id, content: replyContent })">
        Post
      </button>
    </div>

    <div
      v-if="comment.replies?.length"
      class="mt-3 space-y-3">
      <CommentItem
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
        :depth="(depth ?? 0) + 1"
        @reply="$emit('reply', $event)" />
    </div>
  </div>
</template>