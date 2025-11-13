<script lang="ts" setup>
import {
  inboxBox,
  inboxUnreadFilter,
  markRead,
  openBox,
  toggleRead,
  trashAllRead,
} from "./inbox-management";
import { testMessage } from "./test-message";
</script>

<template>
  <Label
    for="inbox-switch"
    class="flex w-full items-center justify-between px-2 py-2"
  >
    Show Unread Only
    <Switch v-model:model-value="inboxUnreadFilter" name="inbox-switch" />
  </Label>

  <DropdownMenuSeparator class="my-1.5" />

  <div class="px-2 pt-1 text-2 font-semibold opacity-50">Tools</div>
  <PopoverItem @click="as().inbox.messages.push(testMessage)">
    <icon name="hugeicons:test-tube-01" class="size-4.5" />
    Send Test Message
  </PopoverItem>
  <PopoverItem>
    <IconWrapper>
      <icon name="fluent:mail-all-read-16-regular" class="" />
    </IconWrapper>
    Mark all as Read
  </PopoverItem>

  <PopoverItem>
    <IconWrapper>
      <icon name="fluent:mail-all-16-regular" class="" />
    </IconWrapper>
    Mark all as Unread
  </PopoverItem>

  <DropdownMenuSeparator class="my-1.5" />

  <PopoverItem>
    <IconWrapper>
      <icon name="trash" class="-mt-1 -ml-1! size-4" />
      <span class="absolute -right-1 -bottom-1.5 text-4 opacity-70">🡭</span>
    </IconWrapper>
    Trash all Read Messages
  </PopoverItem>
</template>
