<script setup lang="ts">
const { class: className, comment, open } = defineProps<{
  class?: HTMLAttributes['class']
  comment: CommentItem
  open: boolean
}>()
</script>

<template>
  <div
    class="pointer-events-none relative flex h-14 w-full grow -translate-x-4 items-center justify-start gap-2.5 px-3 select-none">
    <CollapsibleTrigger
      :disabled="!comment.replies?.length"
      class="pointer-events-auto mr-3.5 h-full disabled:opacity-0">
      <CaretRotate
        direction="right" />
    </CollapsibleTrigger>
    <SummonerIcon
      :id="comment.authorIcon"
      as="button"
      class="pointer-events-auto size-9 translate-y-px rounded-full"
      @click="useNavigateToSummoner(comment.authorPuuid)" />

    <div
      class=" flex-col "
      @click.stop>
      <button
        class="inline-flex cursor-pointer align-bottom leading-none hover:*:first:underline"
        @click="useNavigateToSummoner(comment.authorPuuid)">
        <span class="!text-4 inline  font-semibold">
          {{ comment.authorName || 'Summoner' }}
        </span>
        <span class="text-2 ml-1 inline-flex align-bottom">
          <icon
            name="hash"
            class="mt-0.5 inline size-3" />
          {{ comment.authorTag || 'Runeterra' }}
        </span>
      </button>

      <div class="text-1   flex items-center gap-2 opacity-60">
        {{ parseISOString(comment.createdAt) }}
      </div>
    </div>
  </div>
</template>