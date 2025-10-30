<script setup lang="ts">
import { parseAbsolute, parseAbsoluteToLocal } from '@internationalized/date'
import { useRouteHash } from '@vueuse/router'
import { handleRemoval, handleReply, handleUpdate, handleVote, postComment } from '~tiptap'

const newComment = ref<Doc>(null)

useScrollToHash('#app')
const sort = shallowRef<string>('best')

const sortedComments = computed(() => {
  const comments = [...as().comments] // make a shallow copy to avoid mutating original

  if (sort.value === 'best') {
    comments.sort((a, b) =>
      (b.upvotes.length - b.downvotes.length) - (a.upvotes.length - a.downvotes.length))
  }

  else if (sort.value === 'new') {
    comments.sort((a, b) =>
      parseAbsoluteToLocal(b.createdAt).toDate().getTime()
      - parseAbsoluteToLocal(a.createdAt).toDate().getTime()
    )
  }

  return comments
})
</script>

<template>
  <div class="h-max w-full max-w-210 ">
    <div class="flex  w-full flex-col items-start  justify-center space-y-6  pr-1">
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
    <div class="mt-8 inline-flex w-full items-center justify-end gap-2 px-1 align-bottom">
      <span class="text-2 mt-0.5 opacity-60">Sort by: </span>
      <Select v-model:model-value="sort">
        <VarSelectTrigger
          variant="ghost"
          hover="inset"
          class="hover:!border-b4/50 w-28 justify-start pl-3"
          size="sm">
          <SelectValue />
          <icon
            name="down"
            class="absolute right-1.5 size-4 opacity-60 group-hover/select:opacity-100" />
        </VarSelectTrigger>
        <LazySelectContent>
          <SelectItem value="best">
            Best
          </SelectItem>
          <SelectItem value="new">
            New
          </SelectItem>
        </LazySelectContent>
      </Select>
    </div>
    <div
      v-if="as().comments.length"
      class="">
      <CommentItem
        v-for="comment in sortedComments"
        :key="comment.id"
        :comment="comment"
        @comment:update="handleUpdate"
        @comment:remove="handleRemoval"
        @comment:vote="handleVote"
        @comment:reply="handleReply" />
    </div>
  </div>
</template>