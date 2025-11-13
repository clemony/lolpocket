<script setup lang="ts">
const { comment } = defineProps<{
  comment?: CommentData
}>()
const emit = defineEmits(['comment:vote'])
const vote = ref<number>(0)
const calculatedVotes = ref<number>(1)

watch(
  () => vote.value,
  (newVote, oldVote) => {
    if (newVote !== oldVote && as().account.puuid) {
      emit('comment:vote', {
        id: comment.id,
        puuid: as().account.puuid,
        newVote,
        oldVote,
      })
    }
  },
  { immediate: false },
)

onMounted (() => {
  calculatedVotes.value = comment.score
})
</script>

<template>
  <ToggleGroup
    v-model:model-value="vote"
    :disabled="!comment.author_id || comment.author_id === as().account.uuid"
    type="single"
    :class="{
      'pointer-events-none! **:pointer-events-none!': !comment.author_id,
    }"
    variant="ghost"
    size="sq-5"
    :on="!comment.author_id ? 'inset' : 'neutral'"
    as-child
    orientation="horizontal"
    @update:model-value="
      (val) => {
        if (!val) vote = 0;
      }
    ">
    <label
      for="downvote"
      :disabled="!comment.author_id"
      aria-label="downvote"
      class="
        grid size-7 cursor-pointer place-items-center
        disabled:pointer-events-none!
      ">
      <ToggleGroupItem
        name="downvote"
        :value="-1">
        <icon
          name="mynaui:arrow-up"
          class="
            absolute size-3.5 -scale-y-100 opacity-40
            **:stroke-2
            group-disabled/toggle:opacity-20
            group-on/toggle:opacity-100
            group-on/toggle:group-not-disabled/toggle:stroke-[4]
          " />
      </ToggleGroupItem>
    </label>
    <Element
      variant="none"
      size="6"
      :class="
        cn(
          `
            relative grid place-items-center px-2 text-0 leading-3 lining-nums
            tabular-nums opacity-50 select-none
          `,
          { 'opacity-100 font-medium': vote },
        )
      ">
      {{ calculatedVotes }}
    </Element>
    <label
      for="upvote"
      aria-label="upvote"
      class="grid size-7 cursor-pointer place-items-center">
      <ToggleGroupItem
        name="upvote"
        :value="1">
        <icon
          name="mynaui:arrow-up"
          class="
            absolute size-3.5 opacity-40
            **:stroke-2
            group-disabled/toggle:opacity-20
            group-on/toggle:opacity-100
            group-on/toggle:group-not-disabled/toggle:**:stroke-[4]
          " />
      </ToggleGroupItem>
    </label>
  </ToggleGroup>
</template>
