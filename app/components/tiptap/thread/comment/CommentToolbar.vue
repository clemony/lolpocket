<script setup lang="ts">
const { class: className, comment, editing, replying } = defineProps<{
  comment?: CommentData
  replying: boolean
  editing: boolean
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['update:reply-model', 'update:edit-model', 'comment:remove', 'click:report'])

const replyModel = shallowRef<boolean>(false)
const editModel = shallowRef<boolean>(false)

watch(() => replying, (newVal) => {
  console.log('🌱 - newVal:', newVal)
  replyModel.value = newVal
})
watch(() => editing, (newVal) => {
  editModel.value = newVal
})
onMounted (() => {
  replyModel.value = replying
  editModel.value = editing
})
</script>

<template>
  <div
    :class="cn(`
      relative inline-flex w-full translate-y-1 items-center pl-3 align-bottom
    `, className)">
    <template v-if="!comment.removed">
      <template
        v-if="comment && comment.author_id === as().account.puuid ">
        <Toggle
          v-model:model-value="editModel"
          variant="link"
          size="8"
          on="link"
          base="btn"
          hover="link"
          class="inline px-1 align-bottom text-1 opacity-30"
          @update:model-value="e => emit('update:edit-model', e)">
          {{ !editModel ? 'Edit' : 'Cancel' }}
        </Toggle>

        <span class="relative grid size-2 place-items-center opacity-40">
          <icon
            name="slash"
            class="absolute size-4" />
        </span>

        <Button
          variant="link"
          hover="link"
          :disabled="comment.author_id !== as().account.puuid"
          size="max"
          class="
            inline px-1 align-bottom text-1 opacity-30
            disabled:hidden
          "
          @click="() => emit('comment:remove')">
          Remove
        </Button>
      </template>

      <Button
        v-if="comment.author_id !== as().account.puuid"
        variant="link"
        hover="link"
        size="max"
        class="
          inline px-1 align-bottom text-1 opacity-30
          disabled:hidden
        "
        @click="emit('click:report')">
        Report
      </Button>

      <span class="relative grid size-2 place-items-center opacity-40">
        <icon
          name="slash"
          class="absolute size-4" />
      </span>

      <Toggle
        v-model:model-value="replyModel"
        variant="link"
        size="max"
        base="btn"
        hover="link"
        on="link"
        class="inline px-1 align-bottom text-1 opacity-30"
        @update:model-value="e => emit('update:reply-model', e)">
        {{ !replyModel ? 'Reply' : 'Cancel' }}
      </Toggle>
    </template>
    <Grow />
    <slot />
  </div>
</template>