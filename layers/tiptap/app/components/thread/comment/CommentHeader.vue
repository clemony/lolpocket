<script setup lang="ts">
const {
  author,
  class: className,
  comment,
  hasReplies,
  hovered,
  open,
} = defineProps<{
  class?: HTMLAttributes['class']
  comment: CommentData
  open: boolean
  author?: AccountData | null
  hasReplies: boolean
  hovered?: ComputedRef<boolean>
}>()

/*      :id=""
            @click="useNavigateToSummoner()" */
</script>

<template>
  <div
    class="
      pointer-events-none relative flex h-14 w-full grow items-center
      justify-start gap-2.5 pr-3 pl-12 select-none
    ">
    <div class="absolute left-0 flex size-9 flex-col items-center gap-2">
      <slot />
      <CollapsibleTrigger
        :disabled="!hasReplies"
        class="pointer-events-auto size-5 disabled:opacity-0">
        <CaretFlip
          :class="
            cn('text-bc/40 hover:text-bc/90! -translate-x-px',
               { '!text-bc/90': hovered },
            )
          " />
      </CollapsibleTrigger>
    </div>
    <div
      class="flex-col"
      @click.stop>
      <button
        class="
          inline-flex cursor-pointer space-y-0.5 align-bottom
          hover:*:first:underline
        "
        @click="`/summoner/${author.puuid}`">
        <span :class="cn('inline text-lg! leading-none font-semibold', { 'text-md! text-bc/60 ': comment.removed })">
          {{ author?.username || "Mysterious Summoner" }}
        </span>
        <span class="ml-1 inline-flex align-bottom text-sm leading-none">
          <icon
            v-if="author?.tag"
            name="hash"
            class="mt-0.5 inline size-3" />
          {{ author?.tag }}
        </span>
      </button>

      <div
        class="flex items-center gap-2 leading-5">
        <span class="text-xs opacity-60">
          {{ parseISOStringToRelative(comment?.created) }}
        </span>
        <span
          v-if="comment?.updated"
          v-tippy="{
            content: 'Edited',
            theme: 'base',
            placement: 'top-start',
            followCursor: true,
          }"
          class="inline self-start text-[0.85rem]!">
          <span class="opacity-40"> -&thinsp; </span>
          <span
            class="
              pointer-events-auto mr-1.5 opacity-50 hover:underline
              hover:opacity-100
            ">
            {{ parseISOStringToDate(comment.updated) }}
          </span>
          <icon
            name="edit-line"
            class="inline size-3 align-[-0.017em] opacity-40" />
        </span>
      </div>
    </div>
  </div>
</template>
