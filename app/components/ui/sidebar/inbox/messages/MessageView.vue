<script lang="ts" setup>
import { formatTimeAgo } from 'utils/normalize/formatTimeAgo'
import { markRead, sortedMessages, toggleRead, trashMsg } from '../inbox-management'

const as = useAccountStore()
</script>

<template>
  <SidebarContentWrapper
    title="Inbox"
    dropdown>
    <template #dropdown-menu>
      <InboxDropdownMenu />
    </template>
    <template #subheader>
      <SidebarInput
        placeholder="Search messages..."
        class="input h-12 !bg-b1 my-2" />
    </template>

    <SidebarGroupContent class="gap-0  -mt-2 overflow-hidden  w-full !flex flex-col items-start">
      <template
        v-if="as.userAccount?.inbox?.messages.length">
        <div
          v-for="message, i in sortedMessages"
          :key="`${message.date}-${i}`"
          :class="cn('flex w-full flex-col items-start gap-2 whitespace-nowrap border-b border-b-b3 p-4 leading-tight last:border-b-0 group/msg', { ' bg-b1 ': !message.read, 'bg-b2/60 hover:bg-sidebar-accent opacity-60': message.read })">
          <Dialog>
            <DialogTrigger
              class="grid size-full justify-items-start"
              @click="markRead(message.id)">
              <div class="flex w-full justify-between items-center gap-2">
                <span class="text-2 font-medium text-bc/60">{{ message.from.name }}</span>

                <span class="text-1 flex h-5 items-center justify-self-end text-bc/80 relative *:absolute *:right-0 *:first:opacity-0 group-hover/msg:*:first:opacity-100 group-hover/msg:*:last:opacity-0 *:transition-opacity group-hover/msg:*:last:pointer-events-none *:duration-200">
                  <span class="flex gap-1 size-fit">

                    <button
                      class=""
                      :class="cn('btn btn-xs text-1 hover:underline rounded-md  overflow-hidden', { 'btn-neutral': !message.read, 'btn-ghost': message.read })"
                      @click.stop="toggleRead(message.id)">
                      {{ message.read ? 'Mark Unread' : 'Mark Read' }}
                    </button>

                    <TrashMessageButton :message />
                  </span>
                  <span>{{ formatTimeAgo(message.date) }}</span>
                </span>
              </div>
              <span :class="cn('font-bold tracking-tight py-1 text-4', { 'opacity-70': message.read })">{{ message.title }}</span>
              <span class="line-clamp-2 text-start w-[260px] whitespace-break-spaces text-2">
                {{ message.content }}
              </span>
            </DialogTrigger>

            <Message :message />
          </Dialog>
        </div>
      </template>

      <div
        v-else
        class="w-full h-44 grid place-items-center">
        <span class="text-2 dst">
          {{ `No mail right now!` }}
        </span>
      </div>
    </SidebarGroupContent>
  </SidebarContentWrapper>
</template>
