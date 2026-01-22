<script setup lang="ts">
const { comment } = defineProps<{
  comment?: CommentData
}>()
const emit = defineEmits(['comment:vote'])
const vote = ref<number>(0)
const calculatedVotes = computed (() => {
  let a = comment.score + vote.value
  if (comment.is_author)
    a = a - 1
  return a
})

onMounted (() => {
  if (comment.is_author)
    vote.value = 1
})
</script>

<template>
  <ToggleGroup
    v-model:model-value="vote"
    :disabled="!comment.uuid || comment.is_author"
    type="single"
    variant="ghost"
    size="sq-5"
    :on="!comment.uuid ? 'inset' : 'neutral'"
    as-child
    orientation="horizontal"
    @update:model-value="
      (val) => {
        if (!val) vote = 0;
      }
    ">
    <label
      for="downvote"
      :disabled="!comment.uuid"
      aria-label="downvote"
      class="
        grid size-7 cursor-pointer place-items-center
        has-disabled:cursor-not-allowed
      ">
      <ToggleGroupItem
        name="downvote"
        :value="-1">
        <icon
          name="mynaui:arrow-up"
          class="
            absolute size-3.5 -scale-y-100 opacity-40 **:stroke-2
            group-disabled/toggle:opacity-20 group-on/toggle:opacity-100
            group-on/toggle:group-not-disabled/toggle:stroke-[4]
          " />
      </ToggleGroupItem>
    </label>
    <Element
      variant="none"
      size="6"
      :class="
        cn('relative grid place-items-center px-2 text-xxs leading-3 lining-nums tabular-nums opacity-50 select-none',
           { 'opacity-100 font-medium': vote },
        )
      ">
      {{ calculatedVotes }}
    </Element>
    <label
      for="upvote"
      aria-label="upvote"
      class="
        grid size-7 cursor-pointer place-items-center
        has-disabled:cursor-not-allowed
      ">
      <ToggleGroupItem
        name="upvote"
        :value="1">
        <icon
          name="mynaui:arrow-up"
          class="
            group-disabled-not-on/toggle:opacity-20 absolute size-3.5 opacity-40
            **:stroke-2 group-on/toggle:opacity-100
            group-on/toggle:group-not-disabled/toggle:**:stroke-[4]
          " />
      </ToggleGroupItem>
    </label>
  </ToggleGroup>
</template>
