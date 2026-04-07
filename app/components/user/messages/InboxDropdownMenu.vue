<script lang="ts" setup>
import { inboxUnreadFilter } from "./inbox-management"
import { createTestMessage } from "./test-message"
</script>

<template>
  <Label
    class="flex w-full items-center justify-between p-2"
    for="inbox-switch">
    Show Unread Only
    <USwitch v-model:model-value="inboxUnreadFilter" name="inbox-switch" />
  </Label>

  <USeparator class="my-1.5" />

  <div class="px-2 pt-1 text-sm font-semibold opacity-50">
    Tools
  </div>
  <UButton @click="user().addInboxMessage(createTestMessage())">
    <icon class="size-4.5" name="hugeicons:test-tube-01" />
    Send Test Message
  </UButton>
  <UButton>
    <IconWrapper>
      <icon class="" name="fluent:mail-all-read-16-regular" />
    </IconWrapper>
    Mark all as Read
  </UButton>

  <UButton>
    <IconWrapper>
      <icon class="" name="fluent:mail-all-16-regular" />
    </IconWrapper>
    Mark all as Unread
  </UButton>

  <USeparator class="my-1.5" />

  <UButton>
    <IconWrapper>
      <icon class="-mt-1 -ml-1! size-4" name="trash" />
      <span class="absolute -right-1 -bottom-1.5 text-lg opacity-70">🡭</span>
    </IconWrapper>
    Trash all Read Messages
  </UButton>
</template>
