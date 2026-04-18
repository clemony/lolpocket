<script lang="ts" setup>
import { button } from "#build/ui"
import type { ButtonProps } from "@nuxt/ui"
import { offsetTooltipContent } from "~~/layers/ui/app/variants/tooltip"
import { createTestMessage } from "../test-message"

const props = withDefaults(defineProps<ButtonProps & {}>(), {
  variant: "ghost",
  size: "sm",
  square: true
})

const delegated = reactiveOmit(props, "class")

const { inbox } = storeToRefs(user())
const unread = computed(() => {
  const unread = inbox.value?.messages.filter((m) => !m.read).length
  return {
    messages: unread ?? 0,
    notifications: inbox.value?.notifications?.length ?? 0
  }
})
const messages = computed(() => [
  ...inbox.value?.messages.filter((m) => !m.read).slice(0, 10),
  {
    id: "footer",
    title: "View all..."
  } as InboxMessage
])

const alerts = computed(() => [...inbox?.value.notifications])

const buttonProps: ButtonProps & { tabindex?: string } = {
  size: "sm",
  tabindex: "-1",
  variant: "ghost",
  ui: {
    base: "max-h-7.5",
    label: "text-2xs group-hover/btn:underline text-n4 group-hover/btn:text-pc"
  }
}
</script>

<template>
  <!-- mail -->
  <LazyUPopover
    mode="hover"
    :content="{
      side: 'bottom',
      align: 'end',
      sideOffset: 2,
      alignOffset: -5
    }"
    :ui="{ content: 'w-130 border-0 px-0!' }">
    <template #default="{ open }">
      <MailIndicatorButton :open :unread />
    </template>
    <template #content="{ open }">
      <!-- MESSAGES -->
      <div
        class="inline-flex h-9 w-full items-center justify-between border-b border-b-p3 px-2 py-0.5 text-sm">
        <h6 class="text-sm font-bold opacity-60">Unread Messages</h6>
        <UTooltip
          as-child
          text="View all messages 🡪"
          :content="offsetTooltipContent">
          <UButton v-bind="buttonProps" to="/inbox/all">
            <Icon name="i-inbox" class="size-4 **:stroke-[2.2]" />
          </UButton>
        </UTooltip>
      </div>
      <UScrollArea
        v-if="unread.messages"
        v-slot="{ item, index }"
        virtualize
        :ui="{ root: 'max-h-80', viewport: 'divide-y-p3/80 divide-y px-0!' }"
        :items="messages">
        <UButton
          v-if="item.id === 'footer' && unread.messages > 10"
          to="/inbox/all"
          color="base"
          :ui="{
            base: 'justify-center rounded-none text-xs inset-ring-0 fx-1! hover:ring-0',
            label: 'grow-0 group-hover/btn:underline'
          }"
          size="lg"
          block
          label="View all..." />
        <MessagePreview
          v-else-if="item.id !== 'footer'"
          :key="index"
          :message="item" />
      </UScrollArea>

      <div v-else class="grid h-18 w-full place-items-center">
        <UBadge size="lg" color="base" label="Nothing new!" />
      </div>

      <!-- NOTIFICATIONS -->
      <div
        class="inline-flex h-9 w-full items-center justify-between border-y border-y-p3 px-2 py-0.5 text-sm">
        <h6 class="text-sm font-bold opacity-60">Notifications</h6>
        <UTooltip as-child text="Clear all" :content="offsetTooltipContent">
          <UButton v-bind="buttonProps">
            <Icon name="i-reset" class="size-4 **:stroke-[2.2]" />
          </UButton>
        </UTooltip>
      </div>
      <UScrollArea
        v-if="unread.notifications"
        v-slot="{ item, index }"
        virtualize
        :ui="{ root: 'max-h-80', viewport: 'divide-y-p3/80 divide-y' }"
        :items="alerts">
      </UScrollArea>

      <div v-else class="grid h-18 w-full place-items-center">
        <UBadge size="lg" color="base" label="No notifications" />
      </div>
      <!-- FOOTER -->
      <div
        class="flex w-full max-w-full flex-nowrap items-center justify-between overflow-hidden border-t border-t-p3/80">
        <UTooltip
          as-child
          text="Message Settings"
          :content="offsetTooltipContent">
          <UButton v-bind="buttonProps">
            <Icon name="i-gear" class="size-4 **:stroke-[2.2]" />
          </UButton>
        </UTooltip>
        <div>
          <UButton v-bind="buttonProps" to="/docs/tos" label="Terms" />
          <span class="text-[9px] opacity-60">|</span>
          <UButton v-bind="buttonProps" to="/docs/privacy" label="Privacy" />
        </div>
      </div>
    </template>
  </LazyUPopover>
</template>
