<script setup lang="ts">
import type { Editor, JSONContent } from '@tiptap/vue-3'
import { renderCommentHTML } from '../utils'

const { comment, depth } = defineProps<{
  comment: CommentItem
  depth?: number
}>()
const emit = defineEmits(['comment:reply', 'comment:update'])
const replyContent = ref<Doc>(null)

const replying = shallowRef(false)
const editing = shallowRef(false)

const hasReplies = computed (() => comment.replies?.length)

const target = useTemplateRef<HTMLElement>('target')
const hovered = useElementHover(target)

watch(() => hovered.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})

// as().comments = []

const newContent = ref<Doc>(null)
const updated = shallowRef<boolean>(false)

watch(() => updated.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
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
    v-slot="{ open }"
    :default-open="true"
    :disabled="!hasReplies"
    :class="cn('z-auto pt-2 !overflow-auto ', { ' ml-8': depth })">
    <div
      v-if="!hasReplies && depth"
      class=" before:bg-b1 absolute  -z-1 grid h-14 w-16 -translate-x-5.75 grid-rows-2 -space-y-[0.5px] before:absolute before:top-2 before:left-0 before:z-0 before:h-9 before:w-1     ">
      <span class="border-l-b3/80 border-b-b3/40 z-1 rounded-bl-lg border-b border-l" />
      <span class="border-l-b3/80 border-t-b3/40  z-1 rounded-tl-lg border-t border-l" />
    </div>
    <div class="relative w-full">
      <CollapsibleTrigger
        v-if="hasReplies"
        ref="target"
        class="
          'transition-all group/tree absolute top-0 bottom-0 left-2.25 grid h-full w-4 shrink-0 items-center pt-12 pb-5.25 duration-300">
        <Separator
          orientation="vertical"
          :class="cn(
            'group-hover/tree:border-shade-b3/20 border-b3 transition-colors duration-200 bg-transparent rounded-bl-lg border-l')" />
      </CollapsibleTrigger>
      <div class="relative grow pl-1">
        <CommentHeader
          :comment
          :open />
        <div
          v-if="editing"
          class="mt-8 mb-1 pr-px pb-px pl-8">
          <CommentEditor
            v-slot="{ updateContent }"
            v-model="newContent"
            @update:model-value="updated = true">
            <PostButton
              save
              @click.stop="() => {
                if (updated){
                  const update = updateContent(newContent)
                  if (update) {
                    updated = false
                    editing = false
                  }
                }
              }" />
          </CommentEditor>
        </div>
        <div
          v-else-if="comment.content"
          class="prose  py-2 pl-9"
          v-html="renderedHtml" />
        <CommentToolbar
          :comment
          :editing
          :replying
          @update:edit-model="e => editing = e"
          @update:reply-model="e => replying = e" />

        <div
          v-if="replying"
          class="mt-2  pr-px pb-px pl-8">
          <CommentEditor
            v-model="replyContent">
            <PostButton
              @click.stop="() => {
                $emit('comment:reply', { parentId: comment.id, content: replyContent })
                replying = false
              }" />
          </CommentEditor>
        </div>
      </div>

      <!-- content  -->
      <CollapsibleContent
        v-if="comment.replies?.length"
        class=" relative flex w-full items-center">
        <div class="relative z-2 grid grow auto-rows-auto">
          <CommentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :comment="reply"
            :depth="(depth ?? 0) + 1"
            @reply="$emit('comment:reply', $event)" />
        </div>
      </CollapsibleContent>

      <CollapsibleTrigger
        v-if="comment.replies?.length"
        size="xs"
        class="text-bc/30 hover:text-bc text-1 relative  ml-2.25 px-8"
        variant="link">
        <span :class="cn('border-b3/80 absolute transition-colors duration-200  top-0 left-0 h-1/2 w-6 rounded-bl-lg border-b', { '!border-shade-b3/20': hovered === true })" />
        {{ open ? 'Collapse' : `${comment.replies.length} more...` }}
      </CollapsibleTrigger>
    </div>
  </Collapsible>
</template>