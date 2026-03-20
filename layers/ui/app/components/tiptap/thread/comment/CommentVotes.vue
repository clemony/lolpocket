<script setup lang="ts">
const { comment } = defineProps<{
  comment?: CommentData
}>()
const emit = defineEmits(["comment:vote"])
const vote = ref<number>(0)
const calculatedVotes = computed(() => {
  let a = (comment?.score ?? 0) + vote.value
  if (comment?.is_author) a = a - 1
  return a
})

onMounted(() => {
  if (comment?.is_author) vote.value = 1
})
</script>

<template>
  <ToggleGroup
    v-model:model-value="vote"
    :disabled="!comment?.uuid || comment?.is_author"
    type="single"
    variant="ghost"
    class="size-5"
    :on="!comment?.uuid ? 'inset' : 'neutral'"
    as-child
    orientation="horizontal"
    @update:model-value="
      (val) => {
        if (!val) vote = 0
      }
    ">
    <label
      class="grid size-7 cursor-pointer place-items-center has-disabled:cursor-not-allowed"
      for="downvote"
      :disabled="!comment?.uuid"
      aria-label="downvote">
      <ToggleGroupItem name="downvote" :value="-1">
        <icon
          class="absolute size-3.5 -scale-y-100 opacity-40 **:stroke-2 group-disabled/toggle:opacity-20 group-on/toggle:opacity-100 group-on/toggle:group-not-disabled/toggle:stroke-[4]"
          name="mynaui:arrow-up" />
      </ToggleGroupItem>
    </label>
    <div
      :class="
        cn(
          'relative grid size-6 place-items-center px-2 text-2xs leading-3 lining-nums tabular-nums opacity-50 select-none',
          { 'font-medium opacity-100': vote }
        )
      ">
      {{ calculatedVotes }}
    </div>
    <label
      class="grid size-7 cursor-pointer place-items-center has-disabled:cursor-not-allowed"
      for="upvote"
      aria-label="upvote">
      <ToggleGroupItem name="upvote" :value="1">
        <icon
          class="group-disabled-not-on/toggle:opacity-20 absolute size-3.5 opacity-40 **:stroke-2 group-on/toggle:opacity-100 group-on/toggle:group-not-disabled/toggle:**:stroke-[4]"
          name="mynaui:arrow-up" />
      </ToggleGroupItem>
    </label>
  </ToggleGroup>
</template>
