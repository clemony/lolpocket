<script lang="ts" setup>
import { trashMsg } from '../../views/messages/inbox-management'

const { class: className, message } = defineProps<{
  class?: HTMLAttributes['class']
  message: InboxMessage
}>()
</script>

<template>
  <Button
    v-tippy="'Send to Trash'"
    :variant="!message.read ? 'neutral' : 'ghost'"
    size="xxs"
    @click.stop="trashMsg(message.id)">
    <icon
      name="ph:trash-bold"
      class="size-3.5 pointer-events-none" />
  </Button>
</template>
