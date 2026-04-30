<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"
import type { DateLike } from "@vueuse/core"

const {
  date,
  header,
  text,
  footer,
  side = "right"
} = defineProps<{
  date?: DateLike
  header?: string
  avatar?: AvatarProps
  text?: string
  footer?: string
  side?: "left" | "right"
}>()
console.log("🥸 - text:", text)
console.log("🥸 - header:", header)
console.log("🥸 - date:", date)
</script>

<template>
  <div
    class="chat"
    :class="cn('w-full px-10', side === 'right' ? 'chat-end' : 'chat-start')">
    <div class="avatar chat-image">
      <UAvatar
        v-if="avatar"
        v-bind="avatar"
        :ui="{ root: 'chat-image avatar' }" />
    </div>
    <div class="chat-header px-2 pb-0.5 text-xs">
      <div class="font-medium">
        {{ header }}
      </div>
      <time v-if="date" class="text-xs opacity-50">{{ useTimeAgo(date) }}</time>
    </div>
    <div class="chat-bubble">
      {{ text }}
    </div>
    <div class="chat-footer opacity-50">
      {{ footer }}
    </div>
  </div>
</template>
