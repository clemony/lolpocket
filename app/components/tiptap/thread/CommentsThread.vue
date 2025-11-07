<script setup lang="ts">
import { handlePost, handleRemoval, handleReply, handleUpdate, handleVote, postComment, postNotClemComment } from '#tiptap'

const newComment = ref<Doc>(null)
// as().comments = []

const sortRef = useTemplateRef('sortRef')
const sorted = computed (() => sortRef.value?.sortedComments)
</script>

<template>
  <div class="h-max w-full max-w-210 ">
    <div class="flex  w-full flex-col items-start  justify-center space-y-6  pr-1">
      <h1 class="select-none">
        Comments <Button @click="as().comments = []">
          clear comments
        </Button>
      </h1>
      <CommentEditor
        v-slot="{ editor }"
        v-model="newComment"
        class="min-h-36 ">
        <PostButtonWrapper
          :editor
          :new-comment
          @post:comment="e => handlePost(editor, newComment, e)" />
      </CommentEditor>
    </div>
    <div class="mt-8 inline-flex w-full items-center justify-end gap-2 px-1 align-bottom">
      <span class="text-2 mt-0.5 opacity-60">Sort by: </span>
      <SortThread ref="sortRef" />
    </div>
    <div
      v-if="sorted?.length"
      :key="sorted?.length"
      class="grid-rows-max grid h-max">
      <CommentItem
        v-for="comment in sorted"
        :key="comment.id"
        :comment="comment"
        @comment:update="handleUpdate"
        @comment:remove="handleRemoval"
        @comment:vote="handleVote"
        @comment:reply="handleReply" />
    </div>
  </div>
</template>