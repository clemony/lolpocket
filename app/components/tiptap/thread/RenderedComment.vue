<script setup lang="ts">
import { useMentionTooltips } from '~/composables/tiptap'

const { comment, depth, parentHovered } = defineProps<{
  comment: CommentData
  depth?: number
  parentHovered?: boolean
}>()
const emit = defineEmits([
  'comment:reply',
  'comment:vote',
  'trigger-hovered',
])
const replyContent = ref<Doc>(null)
const replying = shallowRef(false)
const editing = shallowRef(false)
const replies = computed(() => ts().threads[comment.thread_id].filter(c => c.parent_id === comment.id))
const newContent = ref<Doc>(null)
const updated = shallowRef<boolean>(false)
const hovered = ref<boolean>(false)
const container = useTemplateRef<HTMLElement>('container')
const reportRef = useTemplateRef('reportRef')
useMentionTooltips(container)
</script>

<template>
  <Collapsible
    :id="comment.id"
    v-slot="{ open }"
    :default-open="!!comment.author_id"
    :disabled="!replies.length"
    :class="cn('z-auto h-max pt-2 pb-2', { ' ml-12': depth })">
    <!-- child trigger -->

    <CollapsibleTrigger
      v-if="!replies.length && depth"
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
      <!-- main trigger -->

      <CollapsibleTrigger
        v-if="replies"
        ref="target"
        class="
          group/tree absolute top-0 bottom-0 left-5 z-2 grid h-full w-4 shrink-0
          items-center pt-19 pb-5.25 transition-all duration-300
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
      </CollapsibleTrigger>

      <div class="relative grow pl-1">
        <!-- header -->

        <!--         <CommentHeader
          :comment
          :has-replies="!!replies.length"
          :open>
          <UserMenu :comment />
        </CommentHeader> -->

        <!-- render comment -->

        <div
          v-if="comment.html"
          ref="container"
          :class="
            cn('tiptap py-2 pl-12.5', { 'opacity-60': !comment.author_id })
          "
          v-html="comment?.html" />

        <!-- comment toolbar -->
        <!--         <CommentToolbar
          :comment
          :editing
          :hovered="computed(() => hovered)"
          :replying
          :class="cn('pl-11.75', { 'pl-6.5': editing })"
          @update:edit-model="(e) => (editing = e)"
          @click:report="reportRef.report()"
          @update:reply-model="(e) => (replying = e)">
          <CommentVotes
            :comment
            @comment:vote="$emit('comment:vote', $event)" />
        </CommentToolbar> -->

        <!-- reply -->

        <div
          v-if="replying"
          class="mt-2 pr-px pb-px pl-12">
          <CommentEditor
            v-slot="{ editor }"
            v-model="replyContent">
            <PostButtonWrapper
              cancellable
              :change="!editor?.isEmpty"
              @click.stop="
                () => {
                  $emit('comment:reply', {
                    parent_id: comment.id,
                    content: replyContent,
                    clearEditor: () => editor.commands.clearContent(),
                  });
                  replying = false;
                  editor.commands.blur();
                }
              " />
          </CommentEditor>
        </div>
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
            @trigger-hovered="(e) => hovered === e"
            @comment:vote="$emit('comment:vote', $event)"
            @comment:reply="$emit('comment:reply', $event)" />
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
    </div>
    <ReportDialog
      ref="reportRef"
      :comment />
  </Collapsible>
</template>
