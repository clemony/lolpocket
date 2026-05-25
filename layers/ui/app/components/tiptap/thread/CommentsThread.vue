<script setup lang="ts">
import { postComment } from "~/composables/tiptap/commentPost"
import { getLeagueMentionData } from "~/composables/tiptap/useLeagueMentions"

const { threadId } = defineProps<{
  threadId: UUID
}>()
const thread = ref<CommentData[] | null>(null)
const newComment = ref<Doc | null>(null)
const sortBy = shallowRef<"best" | "new">("best")

function updateSort() {
  thread.value = threads().getSortedRootComments(threadId, sortBy.value)
}
onMounted(() => {
  thread.value = threads().getSortedRootComments(threadId, "best")
})
</script>

<template>
  <div class="h-max w-full max-w-210">
    <div class="flex w-full flex-col items-start justify-center space-y-6 pr-1">
      <h1 class="select-none">Comments</h1>
      <CommentEditor
        v-slot="{ editor }"
        v-model="newComment"
        class="min-h-36"
        :mention-data="getLeagueMentionData()">
        <PostButton
          :editor
          :new-comment
          @click="
            () => {
              if (!newComment) return
              postComment(newComment, threadId)
              editor?.commands.clearContent()
              editor?.commands.blur()
            }
          " />
      </CommentEditor>
    </div>
    <div
      class="mt-8 inline-flex w-full items-center justify-end gap-2 px-1 align-bottom">
      <span class="mt-0.5 text-sm opacity-60">Sort by:</span>
      <SortThread
        v-model:model-value="sortBy"
        :disabled="!thread?.length"
        @update:model-value="updateSort()" />
    </div>

    <div
      v-if="thread && thread?.length"
      :key="thread?.length"
      class="grid h-max auto-rows-max">
      <CommentItem
        v-for="comment in thread.filter((t) => !t.parent_id)"
        :key="comment.id"
        :comment="comment" />
    </div>

    <div v-else class="grid h-44 w-full place-items-center">
      <p>No comments yet. Be the first!</p>
    </div>
  </div>
</template>
