<script lang="ts" setup>
import {
  LazyChat,
  LazyMessage,
  LazyMessagePreview,
  LazyNotification,
  UButton
} from "#components"
import type { InboxMessage, InboxNotification } from "#shared/types"
import { nowInstantString } from "#shared/utils"
import type { ButtonProps } from "@nuxt/ui"
import { useInbox } from "~/domain/user/composables/useInbox"
import type {
  Box,
  CommandButton,
  CommandMessage
} from "~/domain/user/types/inbox.types"

const { activeComponent } = defineProps<{
  activeComponent: string | null
}>()
const emit = defineEmits(["updateModal"])

const buttonProps: ButtonProps & { tabindex?: string } = {
  size: "xs",
  tabindex: "-1",
  variant: "ghost",
  ui: {
    label: "text-xs group-hover/btn:underline text-n4 group-hover/btn:text-pc",
    trailingIcon: "text-n4 group-hover/btn:**:text-pc align-top size-3"
  }
}

const overlay = useOverlay()
const modal = overlay.create(LazyMessage)

async function openModal(message: InboxMessage) {
  if (modal.isOpen) modal.patch({ message })
  emit("updateModal", true)

  try {
    await modal.open({ message })
    if (!modal.isOpen && !message.read_at) message.read_at = nowInstantString()
  } finally {
    emit("updateModal", false)
  }
}

const boxes = useInbox()

const active = computed(() =>
  safeObject(boxes.value[activeComponent ?? "inbox"])
)
</script>

<template>
  <div
    class="relative flex size-full max-h-180 grow flex-col justify-between overflow-hidden">
    <div
      class="inline-flex h-9 w-full items-center justify-between border-b border-b-p3 px-2 py-0.5 text-sm">
      <h6 class="text-sm font-semibold opacity-90">
        {{ active.label }}
      </h6>
      <div class="flex items-center gap-2">
        <HintTooltip
          v-for="action in active.actions"
          :key="action.label"
          v-bind="action.tooltip">
          <UButton v-bind="action" />
        </HintTooltip>
        <HintTooltip side="bottom" label="Communication Settings">
          <UButton
            v-bind="buttonProps"
            icon="i-gear"
            :ui="{ leadingIcon: 'size-4 **:stroke-[2.1]' }" />
        </HintTooltip>
      </div>
    </div>
    <UScrollArea
      v-if="active.items && active.items.length"
      v-slot="{ item, index }"
      virtualize
      :ui="{
        root: 'h-166 max-h-166',
        viewport: 'divide-y-p3/80 divide-y px-0!'
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
    <div v-else class="grid size-full h-166 grow place-items-center">
      <UEmpty
        variant="outline"
        :ui="{
          root: 'bg-transparent'
        }"
        v-bind="active.empty" />
    </div>
    <!-- FOOTER -->
    <div
      class="sticky bottom-0 flex h-9 max-h-9 w-full max-w-full flex-nowrap items-center justify-between overflow-hidden border-t border-t-p3/80">
      <div>
        <UButton v-bind="buttonProps" to="/docs/tos" label="Terms" />
        <span class="text-[9px] opacity-60">|</span>
        <UButton v-bind="buttonProps" to="/docs/privacy" label="Privacy" />
      </div>
    </div>
  </div>
</template>
