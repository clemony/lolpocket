<script setup lang="ts">
import { renderCommentHTML } from './utils'

const { comment, depth, parentHovered } = defineProps<{
  comment: CommentItem
  depth?: number
  parentHovered?: boolean
}>()
const emit = defineEmits(['comment:reply', 'comment:remove', 'comment:vote', 'comment:update', 'trigger-hovered', 'comment:delete'])

function handleRemovalEmit() {
  emit('comment:remove', comment.id)
  console.log('🌱 - handleRemovalEmit - comment.id :', comment.id)
}
const replyContent = ref<Doc>(null)

const replying = shallowRef(false)
const editing = shallowRef(false)

const hasReplies = computed (() => comment.replies?.length)

const hovered = ref<boolean>(false)

const newContent = ref<Doc>(null)
const updated = shallowRef<boolean>(false)

watch(() => updated.value, (newVal) => {
  emit('trigger-hovered', newVal)
})
const renderedHtml = computed(() => {
  if (!comment.content)
    return null

  return renderCommentHTML(comment.content)
})

onMounted (() => {
  newContent.value = comment.content
})
</script>

<template>
  <Collapsible
    :id="comment.id"
    v-slot="{ open }"
    :default-open="!!comment.authorPuuid"
    :disabled="!hasReplies"
    :class="cn('z-auto pt-2 !overflow-visible h-max ', { ' ml-12': depth })">
    <!-- child trigger -->

    <CollapsibleTrigger
      v-if="!hasReplies && depth"
      :class="cn('border-b-b3 hover:border-shade-b3/20  pointer-events-none  absolute -z-1 z-1 grid h-7 w-8 -translate-x-7  border-b', { '!border-shade-b3/20': parentHovered })"
      @mouseenter="emit('trigger-hovered', true)"
      @mouseleave="emit('trigger-hovered', false)"
      @focusin="emit('trigger-hovered', true)"
      @focusout="emit('trigger-hovered', false)" />
    <div class="relative w-full">
      <!-- main trigger -->

      <CollapsibleTrigger
        v-if="hasReplies"
        ref="target"
        class="
          'transition-all group/tree absolute top-0 bottom-0 left-5 z-2 grid h-full w-4 shrink-0 items-center pt-19 pb-5.25 duration-300"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
        @focusin="hovered = true"
        @focusout="hovered = false">
        <Separator
          orientation="vertical"
          :class="cn(
            'group-hover/tree:border-shade-b3/20 border-shade-b3/10 transition-colors duration-200 bg-transparent rounded-bl-lg border-l',
            { '!border-shade-b3/20': hovered })" />
      </CollapsibleTrigger>

      <div class="relative grow pl-1">
        <!-- header -->

        <CommentHeader
          :comment
          :open />

        <!-- update comment -->
        <div
          v-if="editing"
          class="mt-2 mb-1 pr-px pb-px pl-10">
          <CommentEditor
            v-slot="{ editor }"
            v-model="newContent"
            @update:model-value="updated = true">
            <PostButton
              cancellable
              :change="(comment.content !== newContent) && !editor?.isEmpty"
              save
              @click.stop="() => {
                if (updated && !editor?.isEmpty) {
                  emit('comment:update', {
                    id: comment.id,
                    content: newContent,
                  })
                  updated = false
                  editing = false
                  editor.commands.blur()
                }
                else {
                  editing = false
                  editor.commands.blur()
                }
              }" />
          </CommentEditor>
        </div>

        <!-- render comment -->

        <div
          v-else-if="comment.content"
          :class="cn('tiptap py-2 pl-12.5', { 'opacity-60': !comment.authorPuuid })"
          v-html="renderedHtml" />

        <!-- comment toolbar -->
        <CommentToolbar
          :comment
          :editing
          :hovered="computed (() => hovered)"
          :replying
          :class="cn({ 'pl-6.5': editing })"
          @update:edit-model="e => editing = e"
          @comment:remove="handleRemovalEmit()"
          @update:reply-model="e => replying = e">
          <CommentVotes
            :comment
            @comment:vote="$emit('comment:vote', $event)" />
        </CommentToolbar>

        <!-- reply -->

        <div
          v-if="replying"
          class="mt-2  pr-px pb-px pl-12">
          <CommentEditor
            v-slot="{ editor }"
            v-model="replyContent">
            <PostButton
              cancellable
              :change="!editor?.isEmpty"
              @click.stop="() => {
                $emit('comment:reply', {
                  parentId: comment.id,
                  content: replyContent,
                  clearEditor: () => editor.commands.clearContent() })
                replying = false
                editor.commands.blur()
              }" />
          </CommentEditor>
        </div>
      </div>

      <!-- content  -->

      <CollapsibleContent
        v-if="comment.replies?.length"
        class=" relative flex w-full items-center">
        <div class="relative grid grow auto-rows-auto">
          <CommentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :comment="reply"
            :depth="(depth ?? 0) + 1"
            @trigger-hovered="e => hovered === e"
            @comment:vote="$emit('comment:vote', $event)"
            @comment:remove="$emit('comment:remove', $event)"
            @comment:update="$emit('comment:update', $event)"
            @comment:reply="$emit('comment:reply', $event)" />
        </div>
      </CollapsibleContent>

      <!-- collapse text trigger -->

      <CollapsibleTrigger
        v-if="comment.replies?.length"
        size="8"
        class="text-bc/30 hover:text-bc text-1 relative  ml-5 px-5"
        variant="link"
        :parent-hovered="hovered"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
        @focusin="hovered = true"
        @focusout="hovered = false">
        <span :class="cn(' border-shade-b3/10  absolute transition-colors duration-200 hover:border-shade-b3/20  dst top-0 left-0 h-1/2 w-4 rounded-bl-lg border-b', { '!border-shade-b3/25': hovered })" />
        {{ open ? 'Collapse' : `${comment.replies.length} replies...` }}
      </CollapsibleTrigger>
    </div>
  </Collapsible>
</template>