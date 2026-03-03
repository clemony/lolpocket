<script lang="ts" setup>
import { markRead, sortedMessages, toggleRead } from "./inbox-management"

defineOptions({
  meta: {
    name: "Inbox",
    badge: computed(
      () => (user().inbox?.messages ?? []).filter((m) => !m.read).length,
    ).value,
    class: "**:stroke-1.5",
    icon: "lucide:mail",
  },
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
        <div
          v-for="(message, i) in sortedMessages"
          :key="`${message.date}-${i}`"
          :class="
            cn(
              'group/msg flex w-full flex-col items-start gap-2 border-b border-b-p3 p-4 leading-tight whitespace-nowrap last:border-b-0',
              {
                'bg-p0/80': !message.read,
                'hover:bg-sidebar-accent bg-transparent opacity-70':
                  message.read,
              },
            )
          ">
          <Dialog>
            <UButton
              class="grid size-full justify-items-start"
              @click="markRead(message.id)">
              <div class="flex w-full items-center justify-between gap-2">
                <span class="text-sm font-medium text-pc/60">
                  {{ message.from.name }}
                </span>

                <span
                  class="relative flex h-5 items-center justify-self-end text-xs text-pc/80 *:absolute *:right-4 *:transition-opacity *:duration-200 *:first:opacity-0 group-hover/msg:*:first:opacity-100 group-hover/msg:*:last:pointer-events-none group-hover/msg:*:last:opacity-0">
                  <span class="flex size-fit gap-1">
                    <UButton @click.stop="toggleRead(message.id)">
                      {{ message.read ? "Mark Unread" : "Mark Read" }}
                    </UButton>

                    <TrashMessageButton :message />
                  </span>
                  <span>{{ formatTimeAgo(message.date) }}</span>
                </span>
              </div>
              <span
                :class="
                  cn('py-1 text-lg font-bold tracking-tight', {
                    'opacity-70': message.read,
                  })
                ">
                {{ message.title }}
              </span>
              <span
                class="line-clamp-2 w-[260px] text-start text-sm whitespace-break-spaces">
                {{ message.content }}
              </span>
            </UButton>

            <LazyMessage :message />
          </Dialog>
        </div>
      </template>

      <div v-else class="grid h-44 w-full place-items-center">
        <span class="overflow-hidden text-sm text-nowrap drop-shadow-2xs">
          {{ `No mail right now!` }}
        </span>
      </div>
    </div>
  </aside>
</template>
