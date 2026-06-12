<script setup lang="ts">
import type { ButtonProps, TabsItem } from "@nuxt/ui"
import { inboxButtonProps, useInbox } from "~/domain/user/composables/useInbox"
import type {
  CommandButton,
  CommandMessage,
} from "~/domain/user/types/inbox.types"
import { createTestMessage } from "~/domain/user/utils/messages/test-message"

const boxes = useInbox()

const tab = ref<string>("messages")

const active = computed(() => safeObject(boxes.value[tab.value ?? "inbox"]))

const tabs: TabsItem[] = [
  {
    label: "Messages",
    value: "messages",
  },
  {
    label: "Notifications",
    value: "notifications",
  },
]
const buttonProps: ButtonProps & { tabindex?: string } = {
  size: "xs",
  tabindex: "-1",
  variant: "ghost",
  color: "tertiary",
  ui: {
    label: "text-xs group-hover/btn:underline text-n4 group-hover/btn:text-pc",
    trailingIcon: "text-n4 group-hover/btn:**:text-pc align-top size-3",
  },
}
</script>

<template>
  <SlidebarWrapper title="Inbox">
    <template #subtitle>
      <UButton
        label="send"
        @click="user().addInboxMessage(createTestMessage())" />
    </template>
    <template #description>
      <UTabs v-model:model-value="tab" :items="tabs">
        <template #trailing="{ item }">
          <UBadge
            v-if="item?.badge"
            size="sm"
            color="neutral"
            :variant="item.value === 'inbox' ? 'solid' : 'ghost'"
            :label="boxes[String(item.value)]?.count" />
        </template>
      </UTabs>
    </template>
    <div class="inset-0 flex size-full grow flex-col pt-4">
      <div
        class="inset-0 grow overflow-hidden rounded-4xl bg-p2 ring inset-shadow-xs ring-p4/60">
        <UScrollArea
          v-if="active.items && active.items.length"
          v-slot="{ item, index }"
          virtualize
          :ui="{
            root: 'size-full',
            viewport: 'divide-y-p3/80 divide-y px-0!',
          }"
          :items="active.items">
          <component
            :is="item.component"
            v-if="item?.component"
            :key="index"
            :index
            :message="item"
            v-bind="(item as CommandButton)?.props ?? undefined"
            @click="(item as CommandMessage)?.onClick" />
        </UScrollArea>
        <div v-else class="grid size-full grow place-items-center">
          <UEmpty
            variant="outline"
            :ui="{
              root: 'bg-transparent ring-0',
            }"
            v-bind="active.empty" />
        </div>
      </div>
    </div>
    <template #footer>
      <!-- FOOTER -->
      <div
        class="sticky bottom-0 flex w-full max-w-full flex-nowrap items-center justify-between overflow-hidden px-3">
        <HintTooltip
          :content="{
            side: 'top',
          }"
          text="Communication Settings">
          <UButton
            v-bind="buttonProps"
            icon="i-gear"
            :ui="{ base: 'anchor', leadingIcon: 'size-4 **:stroke-[2.1]' }" />
        </HintTooltip>
        <div class="flex items-center gap-1">
          <UButton v-bind="buttonProps" to="/docs/tos" label="Terms" />
          <span class="mx-px text-[9px] opacity-60">|</span>
          <UButton v-bind="buttonProps" to="/docs/privacy" label="Privacy" />
        </div>
      </div>
    </template>
  </SlidebarWrapper>
</template>
