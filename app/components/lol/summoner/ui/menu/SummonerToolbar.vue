<script lang="ts" setup>
const {
  class: className,
  size = '9',
  summoner,
  tooltipPlacement = 'bottom',
  update,
  variant = 'outline',
  warning,
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
  sidebar?: boolean
  warning?: boolean
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  update?: boolean
  tooltipPlacement?: Side
}>()

const tippy = {
  contentClass: 'font-medium capitalize',
  delay: [0, 0],
  offset: [0, 16],
  placement: tooltipPlacement,
  theme: 'outline',
}
// @todo finish scripts block and report

const btnClass = 'fx-0!'
</script>

<template>
  <div
    :class="cn('grid auto-cols-fr grid-flow-col grid-rows-2 items-center gap-1', className)">
    <UpdateSummoner
      v-if="update"
      class="col-span-4! bg-neutral"
      :placement="tooltipPlacement"
      variant="neutral"
      :size />

    <Button
      v-if="warning"
      v-tippy="{ ...tippy, content: 'Report' }"
      :size
      tabindex="-1"
      :class="btnClass"
      :variant
      :summoner>
      <icon
        name="warning"
        class="size-5.5" />
    </Button>
    <BlockButton
      v-tippy="{ ...tippy, content: 'Block' }"
      :class="btnClass"
      :size
      :variant
      :summoner />
    <MessageButton
      v-tippy="{ ...tippy, content: 'Message' }"
      :class="btnClass"
      :size
      :variant
      :summoner />

    <FollowButton
      :class="cn('[&_svg]:size-9.5! [&_svg]:**:stroke-[1]', btnClass)"
      :variant
      :placement="tooltipPlacement"
      :size
      :summoner />
  </div>
</template>
