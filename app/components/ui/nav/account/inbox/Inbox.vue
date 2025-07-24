<script setup lang="ts">
import { Message, Notification } from '#components'
import { motion } from 'motion-v'
import { itemVariants, variants } from './inbox-variants'

const { inbox: inboxType } = defineProps<{
  inbox: string
}>()
const as = useAccountStore()
const inbox = computed (() => inboxType == 'Notifications' ? as.userAccount.inbox.notifications : as.userAccount.inbox.messages)
</script>

<template>
  <motion.div
    value="Notifications"
    class="  overflow-y-scroll flex flex-col absolute inset-0 top-0 left-0"
    :variants="variants"
    initial="hidden"
    animate="visible"
    exit="exit"
    :transition="{ delayChildren: 0.2, staggerChildren: 0.2 }">
    <template v-if="inbox.length">
      <component
        :is="inboxType == 'Notifications' ? Notification : Message"
        v-for="(item, i) in inbox"
        :key="i"
        :item="item"
        @clear-notification="inbox.splice(i, 1)" />
    </template>

    <motion.div
      v-else
      :variants="itemVariants"
      class="size-full grid place-items-center">
      <span class="text-2 dst">
        {{ `No ${inboxType.toLowerCase()} right now!` }}
      </span>
    </motion.div>
  </motion.div>
</template>