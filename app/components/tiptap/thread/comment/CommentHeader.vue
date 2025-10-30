<script setup lang="ts">
const { class: className, comment, hovered, open } = defineProps<{
  class?: HTMLAttributes['class']
  comment: CommentItem
  open: boolean
  hovered?: ComputedRef<boolean>
}>()

const summoner = computed (() => {
  return {
    name: comment.authorName,
    puuid: comment.authorPuuid,
    icon: comment.authorIcon,
    tag: comment.authorTag,
  }
})
/*      :id=""
            @click="useNavigateToSummoner()" */
</script>

<template>
  <div
    class="pointer-events-none relative flex h-14 w-full grow  items-center justify-start gap-2.5 pr-3 pl-12 select-none">
    <div class="absolute top-2.5 left-0 flex flex-col  items-center gap-2">
      <Popover>
        <PopoverTrigger
          :disabled="!comment.authorPuuid"
          size="c"
          class="hover-ring z-4 size-max translate-y-px not-disabled:pointer-events-auto ">
          <SummonerIcon
            v-if="comment.authorPuuid"
            class="pointer-events-none size-9 rounded-full" />
          <Element
            v-else
            variant="neutral"
            size="c-9"
            class="overflow-hidden">
            <i-ui-oh-no class="absolute !size-9 " />
          </Element>
        </PopoverTrigger>
        <LazySummonerPopover
          v-if="comment.authorPuuid"
          :puuid="comment.authorPuuid" />
      </Popover>
      <CollapsibleTrigger
        :disabled="!comment.replies?.length"
        class="pointer-events-auto size-5  disabled:opacity-0">
        <CaretFlip
          :class="cn('text-bc/40 -translate-x-px hover:!text-bc/90', { '!text-bc/90': hovered })" />
      </CollapsibleTrigger>
    </div>
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
            v-if="comment.authorTag"
            name="hash"
            class="mt-0.5 inline size-3" />
          {{ comment.authorTag }}
        </span>
      </button>

      <div class="flex  items-center gap-2 *:align-bottom ">
        <span class="text-1 opacity-60   ">
          {{ parseISOStringToRelative(comment.createdAt) }}
        </span>
        <span
          v-if="comment.editedAt"
          v-tippy="{ content: 'Edited', theme: 'base', placement: 'top-start', followCursor: true }"
          class="text-0  inline ">
          <span class="opacity-60">
            -&thinsp;
          </span>
          <icon
            name="lucide:pencil"
            class="inline size-3 align-middle opacity-60" />
          <span
            class="pointer-events-auto ml-1 opacity-70 hover:underline hover:opacity-100">
            {{ parseISOStringToDate(comment.editedAt) }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>