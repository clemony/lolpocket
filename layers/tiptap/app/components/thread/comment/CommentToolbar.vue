<script setup lang="ts">
const { class: className, comment } = defineProps<{
  comment?: CommentData
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits([
  'update:reply-model',
  'update:edit-model',
  'click:report',
])

const replying = shallowRef<boolean>(false)
const editing = shallowRef<boolean>(false)
const toggleReply = useToggle(replying)
const toggleEdit = useToggle(editing)

const btnClass = 'disabled:hidden inline px-1 align-bottom text-xs opacity-50'
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
        cn(
          'relative inline-flex w-full translate-y-1 items-center pl-11.75 align-bottom',
          { 'pl-6.5': editing },
          className,
        )
      ">
      <template v-if="comment && !comment.removed">
        <template v-if="comment && comment.is_author">
          <Toggle
            v-model:model-value="editing"
            :class="btnClass"
            @update:model-value="(e) => emit('update:edit-model', e)">
            {{ !editing ? "Edit" : "Cancel" }}
          </Toggle>

          <Icons
            class="absolute size-4"
            wrapper-class="relative grid size-2 place-items-center opacity-40"
            name="slash" />

          <UButton
            :class="btnClass"
            :disabled="!comment.is_author"
            @click="() => removeComment(comment, 'user')">
            Remove
          </UButton>
        </template>

        <UButton
          v-if="!comment.is_author">
          Report
        </UButton>

        <Icons
          class="absolute size-4"
          wrapper-class="relative grid size-2 place-items-center opacity-40"
          name="slash" />

        <Toggle
          v-model:model-value="replying"
          :class="btnClass"
          @update:model-value="(e) => emit('update:reply-model', e)">
          {{ !replying ? "Reply" : "Cancel" }}
        </Toggle>
      </template>
      <Grow />
      <CommentVotes v-if="comment" :comment />
    </div>
  </div>
</template>
