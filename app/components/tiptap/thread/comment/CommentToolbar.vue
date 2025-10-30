<script setup lang="ts">
const { class: className, comment, editing, replying } = defineProps<{
  comment?: CommentItem
  replying: boolean
  editing: boolean
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['update:reply-model', 'update:edit-model', 'comment:remove'])

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
  <div :class="cn('relative  inline-flex w-full translate-y-1 items-center pl-3   align-bottom', className)">
    <template
      v-if="comment.authorPuuid">
      <Toggle
        v-model:model-value="editModel"
        variant="link"
        size="8"
        active="link"
        base="btn"
        hover="link"
        class="text-1 inline w-17 px-1 text-end align-bottom opacity-30"
        @update:model-value="e => emit('update:edit-model', e)">
        {{ !editModel ? 'Edit' : 'Cancel' }}
      </Toggle>

      <span class="relative grid size-2 place-items-center opacity-40">
        <icon
          name="slash"
          class="absolute size-4" />
      </span>

      <Button
        v-if="comment && comment.authorPuuid === as().account.puuid"
        variant="link"
        hover="link"
        :disabled="comment.authorPuuid !== as().account.puuid"
        size="8"
        class="text-1 inline px-1 align-bottom opacity-30 disabled:hidden"
        @click="emit('comment:remove')">
        Remove
      </Button>

      <span class="relative grid size-2 place-items-center opacity-40">
        <icon
          name="slash"
          class="absolute size-4" />
      </span>

      <Toggle
        v-model:model-value="replyModel"
        variant="link"
        size="8"
        base="btn"
        hover="link"
        active="link"
        class="text-1 inline w-17 px-1 align-bottom opacity-30 "
        @update:model-value="e => emit('update:reply-model', e)">
        {{ !replyModel ? 'Reply' : 'Cancel' }}
      </Toggle>
    </template>
    <Grow />
    <slot />
  </div>
</template>