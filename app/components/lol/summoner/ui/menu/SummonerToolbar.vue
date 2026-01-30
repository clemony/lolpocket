<script lang="ts" setup>
const {
  class: className,
  size = '9',
  tooltipPlacement = 'bottom',
  update,
  variant = 'border',
  warning,
} = defineProps<{
  class?: HTMLAttributes['class']
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
  theme: 'mini-tip base',
}
// @todo finish scripts block and report

const btnClass = 'fx-0!'
const { summoner } = storeToRefs(s_session())
</script>

<template>
  <div
    :class="
      cn(
        'grid auto-cols-fr grid-flow-col grid-rows-2 items-center gap-x-1 gap-y-1.5',
        className,
      )
    "
  >
    <UpdateSummoner
      v-if="update"
      class="col-span-4! **:text-nc!"
      variant="neutral"
      :size
    />

    <Tooltip text="Report">
      <Button
        v-if="warning"
        :size
        tabindex="-1"
        :class="btnClass"
        :variant
        :summoner="summoner"
      >
        <icon class="size-5.5" name="warning" />
      </Button>
    </Tooltip>

    <Tooltip text="Block">
      <BlockButton :class="btnClass" :size :variant :summoner="summoner" />
    </Tooltip>

    <Tooltip text="Message">
      <MessageButton
        :class="btnClass"
        :size
        :variant
        :summoner="summoner"
      />
    </Tooltip>

    <FollowButton
      :class="cn('[&_svg]:size-9.5! [&_svg]:**:stroke-1', btnClass)"
      :variant
      :size
      :summoner="summoner"
    />
  </div>
</template>
