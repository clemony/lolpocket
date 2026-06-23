<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"
import type { DateLike } from "@vueuse/core"

export interface ChatBubbleProps {
  ui?: {
    root?: string
    avatar?: string
    header?: string
    date?: string
    bubble?: string
    footer?: string
    shadow?: string
  }
}
const {
  date,
  header,
  text,
  footer,
  side = "right",
  ui,
} = defineProps<{
  date?: DateLike
  header?: string
  avatar?: AvatarProps
  text?: string
  footer?: string
  side?: "left" | "right"
  ui?: ChatBubbleProps["ui"]
}>()

const caret =
  '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"><path fill="black" d="M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z"/></svg>'
const arrow = `url("data:image/svg+xml,${encodeURIComponent(caret)}")`
</script>

<template>
  <div
    class="chat"
    :class="
      cn(
        'relative w-full grow',
        side === 'right' ? 'chat-end' : 'chat-start',
        ui?.root
      )
    ">
    <div class="avatar chat-image size-max">
      <slot name="avatar">
        <UAvatar
          v-if="avatar"
          v-bind="avatar"
          :ui="{ root: 'avatar chat-image' }" />
      </slot>
    </div>
    <div class="chat-header px-2 pb-0.5 text-xs">
      <div class="font-medium">
        {{ header }}
      </div>
      <time v-if="date" class="text-xs opacity-50">{{ useTimeAgo(date) }}</time>
    </div>
    <div class="relative flex w-full! grow">
      <div
        :style="{
          mask: `${arrow} center / contain no-repeat`,
          WebkitMask: `${arrow} center / contain no-repeat`,
        }"
        :class="
          cn(
            'pointer-events-none absolute right-0 bottom-0 z-1 size-3.5 origin-bottom translate-x-3.25 translate-y-px -scale-x-100 place-self-center bg-p2',

            ui?.shadow
          )
        "></div>
      <div
        :class="
          cn(
            'chat-bubble z-2 m-0! w-full! max-w-full! grow before:origin-bottom',
            ui?.bubble
          )
        ">
        <slot>{{ text }}</slot>
      </div>
    </div>
    <div class="chat-footer opacity-50">
      {{ footer }}
    </div>
  </div>
</template>
