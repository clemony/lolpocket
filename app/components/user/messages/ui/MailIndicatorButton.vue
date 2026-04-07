<script lang="ts" setup>
const { unread, open } = defineProps<{
  unread: Record<string, number>
  open: boolean | undefined
}>()
</script>

<template>
  <UButton
    tabindex="-1"
    size="sm"
    :ui="{ base: 'gap-1.5 px-1.5!' }"
    variant="ghost"
    color="tertiary">
    <UBadge
      icon="i-lucide-mail"
      size="sm"
      variant="solid"
      :color="unread.messages ? 'neutral' : 'base'"
      :label="unread.messages ? unread.messages.toString() : '0'" />

    <UBadge
      icon="i-lucide-bell"
      size="sm"
      variant="solid"
      :color="unread.notifications ? 'neutral' : 'base'"
      :label="unread.notifications ? unread.notifications.toString() : '0'" />
  </UButton>
</template>
