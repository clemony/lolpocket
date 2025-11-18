<script setup lang="ts">
const {
  class: className,
  comment,
} = defineProps<{
  comment?: CommentData
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits([
  'update:reply-model',
  'update:edit-model',
  'comment:remove',
  'click:report',
])

const replying = shallowRef<boolean>(false)
const editing = shallowRef<boolean>(false)
const toggleReply = useToggle(replying)
const toggleEdit = useToggle(editing)

const btnClass = 'disabled:hidden inline px-1 align-bottom text-1 opacity-50'

const buttonProps = {
  base: 'btn' as ButtonVariants['base'],
  hover: 'link' as ButtonVariants['hover'],
  on: 'link' as ButtonVariants['on'],
  size: 'max' as ButtonVariants['size'],
  variant: 'link' as ButtonVariants['variant']
}
</script>

<template>
  <div class="relative grow pl-1">
    <slot
      :editing
      :replying
      :toggle-edit
      :toggle-reply />

    <div
      :class="
        cn('relative inline-flex w-full translate-y-1 items-center pl-11.75 align-bottom', { 'pl-6.5': editing },
           className,
        )
      ">
      <template v-if="!comment.removed">
        <template v-if="comment && comment.is_author">
          <Toggle
            v-model:model-value="editing"
            v-bind="buttonProps"
            :class="btnClass"
            @update:model-value="(e) => emit('update:edit-model', e)">
            {{ !editing ? "Edit" : "Cancel" }}
          </Toggle>

          <Icons
            wrapper-class="relative grid size-2 place-items-center opacity-40"
            name="slash"
            class="absolute size-4" />

          <Button
            v-bind="buttonProps"
            :class="btnClass"
            :disabled="!comment.is_author"
            @click="() => emit('comment:remove')">
            Remove
          </Button>
        </template>

        <Button
          v-if="!comment.is_author"
          v-bind="buttonProps"
          :class="btnClass"
          @click="emit('click:report')">
          Report
        </Button>

        <Icons
          wrapper-class="relative grid size-2 place-items-center opacity-40"
          name="slash"
          class="absolute size-4" />

        <Toggle
          v-model:model-value="replying"
          v-bind="buttonProps"
          :class="btnClass"
          @update:model-value="(e) => emit('update:reply-model', e)">
          {{ !replying ? "Reply" : "Cancel" }}
        </Toggle>
      </template>
      <Grow />
      <CommentVotes
        :comment />
    </div>
  </div>
</template>
