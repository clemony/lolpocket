<script setup lang="ts">
import { vElementHover } from '@vueuse/components'
import { renderStaticHTML } from '~~/shared/utils/mentions/renderStaticHTML'

const { comment, depth, parentHovered } = defineProps<{
  comment: CommentData
  depth?: number
  parentHovered?: boolean
}>()
const emit = defineEmits([
  'trigger-hovered',
])

const replies = ts().getChildComments(comment.thread_id, comment.id)
const hovered = ref<boolean>(false)
const renderedHtml = computed(() => {
  if (!comment.content)
    return null
  return renderStaticHTML(comment.content)
})
const author = computedAsync(
  async () => {
    if (comment.removed)
      return null
    const a = acc().getByUuid(comment.uuid)
    return {
      ...a,
      ...await ss().resolveByPuuid(a?.puuid)
    }
  },
  null,
)
const container = useTemplateRef<HTMLElement>('container')
useTooltips(container)
</script>

<template>
  <div class="relative h-max">
    <!-- main trigger -->

    <button
      v-if="replies"
      ref="target"
      class="
        group/tree absolute inset-y-0 top-3 bottom-2.25 left-5 z-2 grid w-4
        shrink-0 grow items-center pt-19 pb-5.25 transition-all duration-300
      "
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      @focusin="hovered = true"
      @focusout="hovered = false">
      <Separator
        orientation="vertical"
        :class="
          cn('rounded-bl-lg border-l border-shade-b3/10 bg-transparent transition-colors duration-200 group-hover/tree:border-shade-b3/20',
             { '!border-shade-b3/20': hovered },
          )
        " />
    </button>
    <Collapsible
      :id="comment.id"
      v-slot="{ open }"
      :default-open="!comment?.removed"
      :disabled="!replies?.length"
      :class="cn('z-auto h-max pt-2 pb-2', { ' ml-12': depth })">
      <!-- child trigger
      v-element-hover="" -->

      <CollapsibleTrigger
        v-if="!replies?.length && depth"
        :class="
          cn('pointer-events-none absolute -z-1 grid h-7 w-8 -translate-x-7 border-b border-b-b3 hover:border-shade-b3/20',
             { '!border-shade-b3/20': parentHovered },
          )
        "
        @mouseenter="emit('trigger-hovered', true)"
        @mouseleave="emit('trigger-hovered', false)"
        @focusin="emit('trigger-hovered', true)"
        @focusout="emit('trigger-hovered', false)" />
      <div class="relative w-full">
        <!-- comment toolbar -->
        <CommentToolbar
          v-slot="{ toggleEdit, editing, toggleReply, replying }"
          :comment
          :hovered="computed(() => hovered)">
          <!-- header -->

          <CommentHeader
            :comment
            :author
            :has-replies="!!replies?.length"
            :open>
            <UserMenu
              :author
              :comment />
          </CommentHeader>

          <!-- update comment -->
          <UpdateComment
            v-if="comment?.content && comment?.is_author && editing"
            :comment
            @close="toggleEdit" />

          <!-- render comment -->

          <div
            v-else-if="!editing"
            ref="container"
            class="tiptap py-2 pl-12.5"
            v-html="comment?.html ?? renderedHtml" />

          <!-- reply -->
          <ReplyComment
            v-if="replying"
            :comment
            @close="toggleReply" />
        </CommentToolbar>
      </div>

      <!-- content  -->

      <CollapsibleContent
        v-if="replies?.length"
        class="relative flex w-full items-center">
        <div class="relative grid grow auto-rows-auto">
          <CommentItem
            v-for="reply in replies"
            :key="reply.id"
            :comment="reply"
            :depth="(depth ?? 0) + 1"
            @trigger-hovered="(e) => hovered === e" />
        </div>
      </CollapsibleContent>

      <!-- collapse text trigger -->

      <CollapsibleTrigger
        v-if="replies?.length"
        size="8"
        class="
          relative ml-5 px-5 text-1 text-bc/30 hover:text-bc hover:underline
        "
        :parent-hovered="hovered"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
        @focusin="hovered = true"
        @focusout="hovered = false">
        <span
          :class="
            cn('absolute top-0 left-0 h-1/2 w-4 rounded-bl-lg border-b border-shade-b3/10 dst transition-colors duration-200 hover:border-shade-b3/20',
               { '!border-shade-b3/25': hovered },
            )
          " />
        {{ open ? "Collapse" : `${replies?.length} replies...` }}
      </CollapsibleTrigger>
    </Collapsible>
  </div>
</template>
