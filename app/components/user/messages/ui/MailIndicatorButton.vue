<script lang="ts" setup>
import type { BadgeProps } from "@nuxt/ui"

const { unread, open } = defineProps<{
  unread: Record<string, number>
  open: boolean | undefined
}>()

const badge: BadgeProps = {
  size: "md",
  variant: "solid",
  ui: {
    base: "px-2.5",
    label: "text-sm!"
  }
}
</script>

<template>
  <UButton
    tabindex="-1"
    size="md"
    :ui="{ base: 'translate-x-1 gap-1.5 px-3!' }"
    variant="ghost"
    color="tertiary">
    <UBadge
      v-bind="badge"
      icon="i-lucide-mail"
      :color="unread.messages ? 'neutral' : 'base'"
      :label="unread.messages ? unread.messages.toString() : '0'" />

    <UBadge
      icon="i-lucide-bell"
      v-bind="badge"
      :color="unread.notifications ? 'neutral' : 'base'"
      :label="unread.notifications ? unread.notifications.toString() : '0'" />
  </UButton>
</template>
