<script lang="ts" setup>
import { motion } from 'motion-v'

const us = useUiStore()
</script>

<template>
  <animate-presence>
    <motion.button
      v-if="!us.sidebarExpanded"
      v-tippy="!us.sidebarExpanded ? `Search ${getDeviceKey()} K` : null"
      class=" btn absolute !h-10 !w-9  border-b3 hover:ring-neutral/50 flex  pointer-events-none  cursor-pointer items-center  btn-square opacity-0 h-0 !py-0  btn-neutral !bg-neutral/85 hover:ring-1 group inset-shadow-xs " :class="{ '!pointer-events-auto top-18 left-3.75': !us.sidebarExpanded }"
      :animate="{ opacity: [0, 1], translate: ['0, -10px', '0, 0'], scale: [0, 1] }"
      :transition="{ delay: 0.1, type: 'easeOut' }"
      :exit="{ opacity: [1, 0], translate: ['0, 0', '0, -10px'], scale: [1, 0] }"
      :style="{ '--noise': 0.01 }" @click.stop="us.commandOpen = true ">
      <icon
        name="search"
        class="-mt-px !text-nc   size-3.75 opacity-94 group-hover:opacity-100" />
    </motion.button>
  </animate-presence>
</template>