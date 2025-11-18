<script setup lang="ts">
import {
  handleRemoval,
  postComment,
  updateComment,
  updateCommentVote,
} from '~/composables/tiptap'

const { threadId } = defineProps<{
  threadId: UUID
}>()
const thread = computed (() => ts().threads[threadId] ?? null)
const newComment = ref<Doc>(null)
const sortRef = useTemplateRef('sortRef')
const sorted = computed(() => {
  if (!thread.value)
    return null
  return sortRef.value?.sortedComments
})

const user = useSupabaseUser()
console.log('📎 - user:', user)
</script>

<template>
  <div class="h-max w-full max-w-210">
    <div class="flex w-full flex-col items-start justify-center space-y-6 pr-1">
      <h1 class="select-none">
        Comments
      </h1>
      <CommentEditor
        v-slot="{ editor }"
        v-model="newComment"

        class="min-h-36">
        <PostButton
          :editor
          :new-comment
          @click="() => {
            postComment(newComment, threadId)
            editor.commands.clearContent()
            editor.commands.blur()
          }" />
      </CommentEditor>
    </div>
    <div
      class="
        mt-8 inline-flex w-full items-center justify-end gap-2 px-1 align-bottom
      ">
      <span class="mt-0.5 text-2 opacity-60">Sort by: </span>
      <SortThread
        ref="sortRef"
        :disabled="!thread || !thread.length"
        :thread-id
        :thread />
    </div>

    <div
      v-if="thread && thread?.length"
      :key="sorted?.length"
      class="grid h-max auto-rows-max">
      <CommentItem
        v-for="comment in thread.filter(t => !t.parent_id)"
        :key="comment.id"
        :comment="comment" />
    </div>

    <div
      v-else
      class="grid h-44 w-full place-items-center">
      <p>No comments yet. Be the first!</p>
    </div>
  </div>
</template>
