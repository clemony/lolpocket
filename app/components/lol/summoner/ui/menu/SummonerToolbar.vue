<script lang="ts" setup>
const {
  class: className,
  summoner,
  tooltipPlacement = 'bottom',
  update,
  warning
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  sidebar?: boolean
  warning?: boolean
  update?: boolean
  tooltipPlacement?: Side
}>()

const tippy = {
  contentClass: 'font-medium capitalize',
  delay: [0, 0],
  offset: [0, 16],
  placement: tooltipPlacement,
  theme: 'base',
}

// @todo finish scripts block and report
</script>

<template>
  <div
    class="items-center"
    :class="cn('', className)">
    <UpdateSummoner
      v-if="update"
      :placement="tooltipPlacement"
      class=""
      text
      variant="neutral"
      :show-icon="true"
      size="md"
      :summoner />

    <Button
      v-if="warning"
      v-tippy="{ ...tippy, content: 'Report' }"
      size="md"
      tabindex="-1"
      variant="neutral"
      :summoner>
      <icon
        name="warning"
        class="size-5.5" />
    </Button>
    <BlockButton
      v-tippy="{ ...tippy, content: 'Block' }"
      size="md"
      :summoner />
    <MessageButton
      v-tippy="{ ...tippy, content: 'Message' }"
      size="md"
      :summoner />

    <FollowButton
      class="w-full"
      :placement="tooltipPlacement"
      size="md"
      :summoner />
  </div>
</template>
