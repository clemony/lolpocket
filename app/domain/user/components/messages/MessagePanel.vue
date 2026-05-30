<script lang="ts" setup>
import type { InboxMessage } from "#shared/types"
import {
  markRead,
  sortedMessages,
  toggleRead
} from "../../utils/messages/inbox-management"

defineOptions({
  meta: {
    name: "Inbox",
    badge: computed(
      () =>
        ((user().inbox?.messages ?? []) as InboxMessage[]).filter(
          (m: InboxMessage) => !m.read_at
        ).length
    ).value,
    class: "**:stroke-1.5",
    icon: "lucide:mail"
  }
})
</script>

<template>
  <aside>
    <SidebarHeaderWrapper>
      <template #header>
        <SidebarTitleDropdown title="Inbox">
          <template #content>
            <InboxDropdownMenu />
          </template>
        </SidebarTitleDropdown>
      </template>
      <template #subheader>
        <div class="px-3">
          <UInput
            class="input mb-3 h-12 bg-p0!"
            placeholder="Search messages..." />
        </div>
      </template>
    </SidebarHeaderWrapper>

    <div class="-mt-4 flex! w-full flex-col items-start gap-0 overflow-hidden">
      <template v-if="user().inbox?.messages.length">
        <MessagePreview
          v-for="(message, i) in sortedMessages"
          :key="message.id"
          :message="message"
          :i="i" />
      </template>

      <div v-else class="grid h-44 w-full place-items-center">
        <span class="overflow-hidden text-sm text-nowrap drop-shadow-2xs">
          {{ `No mail right now!` }}
        </span>
      </div>
    </div>
  </aside>
</template>
