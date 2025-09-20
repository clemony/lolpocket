<script lang="ts" setup>
const {
  sidebar,
  class: className,
  summoner,
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  sidebar?: boolean
}>()

const tippy = {
  contentClass: 'font-medium capitalize',
  delay: [0, 0],
  offset: [0, 16],
  placement: 'bottom',
  theme: 'basic',
}
</script>

<template>
  <div
    class="items-center"
    :class="cn('', className)">
    <UpdateSummoner
      class="col-span-full"
      text
      variant="neutral"
      :show-icon="true"
      size="md"
      :summoner />
    <BlockButton
      v-tippy="{ ...tippy, content: 'Block' }"
      size="md"
      :summoner />
    <MessageButton
      v-tippy="{ ...tippy, content: 'Message' }"
      size="md"
      :summoner />

    <FollowButton
      v-tippy="{ ...tippy, content: 'Message' }"
      size="md"
      :summoner />
  </div>
</template>
