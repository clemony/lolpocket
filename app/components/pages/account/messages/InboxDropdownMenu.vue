<script lang="ts" setup>
import { testMessage } from '../messages/test-message'
import {
  inboxBox,
  inboxUnreadFilter,
  markRead,
  openBox,
  toggleRead,
  trashAllRead,
} from './inbox-management'
</script>

<template>
  <Label
    for="inbox-switch"
    class="justify-between items-center px-2 py-2 w-full flex">

    Show Unread Only
    <Switch
      v-model:model-value="inboxUnreadFilter"
      name="inbox-switch" />

  </Label>

  <DropdownMenuSeparator class=" my-1.5" />

  <div class="text-2 opacity-50  pt-1 px-2 font-semibold">
    Tools
  </div>
  <PopoverItem @click="as().account.inbox.messages.push(testMessage)">
    <icon
      name="hugeicons:test-tube-01"
      class="size-4.5" />
    Send Test Message
  </PopoverItem>
  <PopoverItem>
    <IconWrapper>
      <icon
        name="fluent:mail-all-read-16-regular"
        class="" />
    </IconWrapper>
    Mark all as Read
  </PopoverItem>

  <PopoverItem>
    <IconWrapper>
      <icon
        name="fluent:mail-all-16-regular"
        class="" />
    </IconWrapper>
    Mark all as Unread
  </PopoverItem>

  <DropdownMenuSeparator class=" my-1.5" />

  <PopoverItem>
    <IconWrapper>
      <icon
        name="trash"
        class="size-4 !-ml-1 -mt-1" />
      <span class="absolute -bottom-1.5 opacity-70 text-4 -right-1">🡭</span>
    </IconWrapper>
    Trash all Read Messages
  </PopoverItem>
</template>
