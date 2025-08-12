<script lang="ts" setup>
const { class: className, summoner, sidebar } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  sidebar?: boolean
}>()

const tippy = { placement: 'bottom', offset: [0, 14], theme: 'basic', contentClass: 'font-medium capitalize' }
</script>

<template>
  <div
    class="items-center "
    :class="cn('', className)">
    <UpdateSummoner
      class="col-span-full"
      text
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
      size="md"
      :class="cn('[&_svg]:size-5.5')"
      :summoner />
  </div>
</template>