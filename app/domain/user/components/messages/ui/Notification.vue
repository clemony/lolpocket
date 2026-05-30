<script lang="ts" setup>
import type { createTestMessage } from "../../../utils/messages/test-message"
import {
  createTestNotification,
  expandTestTemplate
} from "../../../utils/messages/test-message"

const { message } = defineProps<{
  message: InboxNotification
}>()
console.log("🥸 - message:", message)
const template = computed(() => expandTestTemplate(message))
console.log("🥸 - template:", template)
</script>

<template>
  <Chat v-bind="template" class="first:mt-3" />
</template>
