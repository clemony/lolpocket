<script lang="ts" setup>
import { trashMsg } from './inbox-management'

const { class: className, message } = defineProps<{
  class?: HTMLAttributes['class']
  message: InboxMessage
}>()
</script>

<template>
  <Button
    v-tippy="'Send to Trash'"
    class="size-6"
    :color="!message.read ? 'neutral' : 'transparent'"
    @click.stop="trashMsg(message.id)"
  >
    <icon class="pointer-events-none size-3.5" name="ph:trash-bold" />
  </Button>
</template>
