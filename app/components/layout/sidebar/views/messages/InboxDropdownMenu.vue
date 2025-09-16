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

const as = useAccountStore()
</script>

<template>
  <DropdownMenuLabel class="justify-between w-full flex">
    Inbox
    <label class="flex gap-2 text-xs">
      Unread
      <Switch
        v-model:model-value="inboxUnreadFilter"
        class="scale-90" />
    </label>
  </DropdownMenuLabel>

  <DropdownMenuSeparator />

  <DropdownMenuRadioGroup v-model:model-value="openBox">
    <HighlightDropdownRadioItem
      v-for="item in inboxBox"
      :key="item.name"
      class="font-medium"
      :value="item.name">
      <IconWrapper>
        <icon
          :name="item.icon.name"
          :class="item.icon.class" />
      </IconWrapper>
      {{ item.name }}
    </HighlightDropdownRadioItem>
  </DropdownMenuRadioGroup>

  <DropdownMenuLabel>Tools</DropdownMenuLabel>
  <DropdownMenuSeparator />

  <DropdownMenuItem @click="as.account.inbox.messages.push(testMessage)">
    <icon
      name="hugeicons:test-tube-01"
      class="size-4.5" />
    Send Test Message
  </DropdownMenuItem>
  <DropdownMenuItem>
    <IconWrapper>
      <icon
        name="fluent:mail-all-read-16-regular"
        class="" />
    </IconWrapper>
    Mark all as Read
  </DropdownMenuItem>

  <DropdownMenuItem>
    <IconWrapper>
      <icon
        name="fluent:mail-all-16-regular"
        class="" />
    </IconWrapper>
    Mark all as Unread
  </DropdownMenuItem>

  <DropdownMenuItem>
    <IconWrapper>
      <icon
        name="trash"
        class="size-4 !-ml-1 -mt-1" />
      <span class="absolute -bottom-1.5 opacity-70 text-md -right-1">🡭</span>
    </IconWrapper>
    Trash all Read Messages
  </DropdownMenuItem>
</template>
