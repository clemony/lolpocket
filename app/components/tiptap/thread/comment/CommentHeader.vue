<script setup lang="ts">
const {
  class: className,
  comment,
  hasReplies,
  hovered,
  hydratedSummoner,
  open,
} = defineProps<{
  class?: HTMLAttributes['class']
  comment: CommentData
  open: boolean
  hydratedSummoner?: Summoner | null
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
            cn('-translate-x-px text-bc/40 hover:text-bc/90!',
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
          inline-flex cursor-pointer align-bottom leading-none
          hover:*:first:underline
        "
        @click="useNavigateToSummoner(comment.author.puuid)">
        <span class="inline text-4! font-semibold">
          {{ hydratedSummoner?.name || comment.author?.username || "Summoner" }}
        </span>
        <span class="ml-1 inline-flex align-bottom text-2">
          <icon
            v-if="hydratedSummoner?.tag"
            name="hash"
            class="mt-0.5 inline size-3" />
          {{ hydratedSummoner?.tag }}
        </span>
      </button>

      <div
        class="flex items-center gap-2 *:align-bottom">
        <span class="text-1 opacity-60">
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
          class="inline text-0">
          <span class="opacity-60"> -&thinsp; </span>
          <icon
            name="lucide:pencil"
            class="inline size-3 align-middle opacity-60" />
          <span
            class="
              pointer-events-auto ml-1 opacity-70 hover:underline
              hover:opacity-100
            ">
            {{ parseISOStringToDate(comment.updated) }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
