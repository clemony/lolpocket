<script setup lang="ts">
const { comment } = defineProps<{
  comment?: CommentItem
}>()
const emit = defineEmits(['comment:vote'])
const commentVotes = ref<number>(233)
const vote = ref<number>(0)
const calculatedVotes = computed (() => comment.upvotes.length - comment.downvotes.length)

watch(() => vote.value, (newVote, oldVote) => {
  console.log('💠 - watch - newVal:', newVote)

  if (newVote !== oldVote && as().account.puuid) {
    emit('comment:vote', {
      id: comment.id,
      puuid: as().account.puuid,
      newVote,
      oldVote
    })
  }
})

onMounted (() => {
  if (!as().account?.puuid)
    return
  if (comment.upvotes.includes(as().account.puuid))
    vote.value = 1
  else if (comment.downvotes.includes(as().account.puuid))
    vote.value = -1
})
// @todo actual votes
</script>

<template>
  <ToggleGroup
    v-model:model-value="vote"
    type="single"
    variant="ghost"
    size="sq-5"
    on="neutral"
    as-child
    orientation="horizontal"
    @update:model-value="(val) => {
      if (!val) vote = 0
    }">
    <label
      for="downvote"
      aria-label="downvote"
      class="grid size-7 cursor-pointer place-items-center">
      <ToggleGroupItem
        name="downvote"
        :value="-1">
        <icon
          name="mynaui:arrow-up"
          class="group-on/toggle:opacity-100 group-on/toggle:**:stroke-[4] absolute size-3.5 -scale-y-100 opacity-40  **:stroke-2" />
      </ToggleGroupItem>
    </label>
    <Element
      variant="none"
      size="xxs"
      :class="cn('text-0 relative grid place-items-center px-2 leading-3 lining-nums tabular-nums opacity-50 select-none', { 'opacity-100 font-medium': vote })">
      {{ calculatedVotes }}
    </Element>
    <label
      for="upvote"
      aria-label="upvote"
      class="grid size-7 cursor-pointer place-items-center ">
      <ToggleGroupItem
        name="upvote"
        :value="1">
        <icon
          name="mynaui:arrow-up"
          class="group-on/toggle:opacity-100 group-on/toggle:**:stroke-[4] absolute size-3.5 opacity-40  **:stroke-2" />
      </ToggleGroupItem>
    </label>
  </ToggleGroup>
</template>