<script lang="ts" setup>
import {
  markRead,
  sortedMessages,
  toggleRead,
  trashMsg,
} from './inbox-management'

defineOptions({
  meta: {
    name: 'Inbox',
    badge: computed(() => as().inbox.messages.filter(m => !m.read).length)
      .value,
    class: '**:stroke-1.5',
    icon: 'lucide:mail',
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
          <Input
            placeholder="Search messages..."
            class="input mb-3 h-12 bg-b1!" />
        </div>
      </template>
    </SidebarHeaderWrapper>

    <div class="-mt-4 flex! w-full flex-col items-start gap-0 overflow-hidden">
      <template v-if="as().inbox?.messages.length">
        <div
          v-for="(message, i) in sortedMessages"
          :key="`${message.date}-${i}`"
          :class="
            cn('group/msg flex w-full flex-col items-start gap-2 border-b border-b-b3 p-4 leading-tight whitespace-nowrap last:border-b-0',
              {
                ' bg-b1/80 ': !message.read,
                'bg-transparent hover:bg-sidebar-accent opacity-70':
                  message.read,
              },
            )
          ">
          <Dialog>
            <DialogTrigger
              class="grid size-full justify-items-start"
              @click="markRead(message.id)">
              <div class="flex w-full items-center justify-between gap-2">
                <span class="text-2 font-medium text-bc/60">
                  {{ message.from.name }}
                </span>

                <span
                  class="
                    relative flex h-5 items-center justify-self-end text-1
                    text-bc/80 *:absolute *:right-4 *:transition-opacity
                    *:duration-200 *:first:opacity-0
                    group-hover/msg:*:first:opacity-100
                    group-hover/msg:*:last:pointer-events-none
                    group-hover/msg:*:last:opacity-0
                  ">
                  <span class="flex size-fit gap-1">
                    <Button
                      :variant="!message.read ? 'neutral' : 'ghost'"
                      size="6"
                      @click.stop="toggleRead(message.id)">
                      {{ message.read ? "Mark Unread" : "Mark Read" }}
                    </Button>

                    <TrashMessageButton :message />
                  </span>
                  <span>{{ formatTimeAgo(message.date) }}</span>
                </span>
              </div>
              <span
                :class="
                  cn('py-1 text-4 font-bold tracking-tight', {
                    'opacity-70': message.read,
                  })
                ">
                {{ message.title }}
              </span>
              <span
                class="
                  line-clamp-2 w-[260px] text-start text-2
                  whitespace-break-spaces
                ">
                {{ message.content }}
              </span>
            </DialogTrigger>

            <LazyMessage :message />
          </Dialog>
        </div>
      </template>

      <div
        v-else
        class="grid h-44 w-full place-items-center">
        <span class="overflow-hidden text-2 text-nowrap dst">
          {{ `No mail right now!` }}
        </span>
      </div>
    </div>
  </aside>
</template>
