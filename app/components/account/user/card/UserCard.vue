<script lang="ts" setup>
const { comment, } = defineProps<{
  comment: CommentItem
}>()
</script>

<template>
  <div>
    <div class="flex items-center gap-4">
      <CommentAvatar
        :comment
        class="size-18" />
      <div class="line-clamp-2 inline">
        <h3 class="dst inline font-serif">
          {{ comment.authorName }}
        </h3>
        <span
          :data-role="comment.authorPuuid === 'defnotclem' ? 'mod' : null"
          class="align-baseline">
          <icon
            name="hash"
            class="inline size-3.5 align-middle" />{{ comment.authorTag }}</span>
      </div>
    </div>
  </div>
</template>

<style>
</style>