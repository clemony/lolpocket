<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  variant = "outline",
  class: className,
  size = "md",
  tooltipPlacement = "bottom",
  update,
  warning
} = defineProps<{
  class?: HTMLAttributes["class"]
  sidebar?: boolean
  warning?: boolean
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  update?: boolean
  tooltipPlacement?: Side
}>()

const menu = {
  contentClass: "font-medium capitalize",
  placement: tooltipPlacement,
  theme: "mini-tip base",
  delay: [0, 0],
  offset: [0, 16]
}
// todo finish scripts block and report

const btnClass = "fx-0!"
const { summoner } = storeToRefs(sSession())
</script>

<template>
  <div
    :class="
      cn(
        'grid auto-cols-fr grid-flow-col grid-rows-2 items-center gap-x-1 gap-y-1.5',
        className
      )
    ">
    <UpdateSummoner
      v-if="update"
      class="col-span-4! **:text-nc!"
      color="neutral"
      :size />

    <Tooltip label="Report">
      <UButton
        v-if="warning"
        :size
        tabindex="-1"
        :class="btnClass"
        :variant
        :summoner="summoner">
        <icon class="size-5.5" name="warning" />
      </UButton>
    </Tooltip>

    <Tooltip label="Block" trailing-icon="i-ban">
      <BlockButton
        v-if="summoner"
        :class="btnClass"
        :size
        :variant
        :summoner="summoner" />
    </Tooltip>

    <Tooltip trailing-icon="i-chat-dots" label="Message">
      <MessageButton
        v-if="summoner"
        :class="btnClass"
        :size
        :variant
        :summoner="summoner" />
    </Tooltip>

    <FollowButton
      v-if="summoner"
      :class="cn('[&_svg]:size-9.5! [&_svg]:**:stroke-1', btnClass)"
      :size
      :summoner="summoner" />
  </div>
</template>
