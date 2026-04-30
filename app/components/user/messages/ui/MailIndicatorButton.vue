<script lang="ts" setup>
import type { InboxMessage } from "#shared/types"
import type { ButtonProps } from "@nuxt/ui"

const props = defineProps<
  ButtonProps & {
    activeComponent: string | null
  }
>()
const emit = defineEmits(["update:component"])

const { inbox } = storeToRefs(user())
const inboxMessages = computed<InboxMessage[]>(
  () => (inbox.value?.messages ?? []) as InboxMessage[]
)
const unread = computed(() => {
  const unread = inboxMessages.value.filter(
    (m: InboxMessage) => !m.read_at
  ).length
  return {
    messages: unread ?? 0,
    notifications:
      inbox.value?.notifications?.filter(
        (notification) => !notification.read_at
      ).length ?? 0
  }
})

const items = computed(() => [
  {
    value: "inbox",
    leadingIcon: "i-lucide-mail",
    label: "Messages",
    unread: unread.value.messages ? unread.value.messages : "0",
    ui: { leadingIcon: "**:stroke-[2.2]" }
  },
  {
    value: "notifications",
    leadingIcon: "i-ui-notification",
    label: "notifications",
    unread: unread.value.notifications
      ? unread.value.notifications.toString()
      : "0",
    ui: { leadingIcon: "**:stroke-[1.1]", trailing: "flex gap-1.5" }
  }
])
</script>

<template>
  <UButton
    v-for="item in items"
    :key="item.value"
    v-bind="item"
    block
    :active="props.activeComponent === item.value"
    active-variant="solid"
    variant="ghost"
    :item
    :ui="{
      base: cn('h-9! capitalize')
    }"
    @click="emit('update:component', item.value)">
    <template v-if="Number(item.unread)" #trailing>
      <UBadge
        size="xs"
        :label="item.unread"
        :ui="{
          base: 'h-5.5! rounded-lg px-2.25!',
          label: 'text-sm font-semibold'
        }"
        color="neutral">
      </UBadge>
    </template>
  </UButton>
</template>
