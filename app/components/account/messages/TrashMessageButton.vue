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
    :variant="!message.read ? 'neutral' : 'ghost'"
    size="6"
    @click.stop="trashMsg(message.id)">
    <icon
      name="ph:trash-bold"
      class="pointer-events-none size-3.5" />
  </Button>
</template>
