<script lang="ts" setup>
import { UButton } from "#components"
import type { ButtonProps } from "@nuxt/ui"
import { inboxButtonProps, useInbox } from "~/domain/user/composables/useInbox"
import type {
  Box,
  CommandButton,
  CommandMessage
} from "~/domain/user/types/inbox.types"

const { activeComponent } = defineProps<{
  activeComponent?: string | null
}>()
const emit = defineEmits(["updateModal"])

function updateModal() {
  emit("updateModal", true)
}
const inbox = computed<Record<string, Box> | undefined>(
  () => useInbox(() => updateModal).value
)

const active = safeObject(
  computed(() => inbox.value?.[activeComponent ?? "inbox"]).value
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
            v-bind="inboxButtonProps"
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
      <UEmpty variant="outline" v-bind="active.empty" />
    </div>
    <!-- FOOTER -->
    <div
      class="sticky bottom-0 flex h-9 max-h-9 w-full max-w-full flex-nowrap items-center justify-between overflow-hidden border-t border-t-p3/80">
      <div>
        <UButton v-bind="inboxButtonProps" to="/docs/tos" label="Terms" />
        <span class="text-[9px] opacity-60">|</span>
        <UButton v-bind="inboxButtonProps" to="/docs/privacy" label="Privacy" />
      </div>
    </div>
  </div>
</template>
