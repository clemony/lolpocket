<script lang="ts" setup>
import { trashMsg } from '../inbox-management'

const {class: className, message } = defineProps<{
class?: HTMLAttributes['class']
message: InboxMessage
}>()
</script>

<template>
                    <button
                      v-tippy="'Send to Trash'"
                      :class="cn('btn btn-xs text-1  btn-square  rounded-md  overflow-hidden', { 'btn-neutral hover:border-nc': !message.read, 'btn-ghost hover:!border-b4 hover:ring hover:ring-b4': message.read }, className)"
                      @click.stop="trashMsg(message.id)">
                      <icon
                        name="ph:trash-bold"
                        class="size-3.5 pointer-events-none" />
                    </button>
</template>