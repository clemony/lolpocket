<script lang="ts" setup>
import { motion } from 'motion-v'
import { PopoverContent } from 'reka-ui'
</script>

<template>
  <PopoverContent
    :hide-when-detached="false"
    position-strategy="absolute"
    class="w-124 h-full overflow-hidden justify-center relative grid items-start"
    as-child
    @escape-key-down.prevent
    @open-auto-focus.prevent
    @pointer-down-outside.prevent
    @interact-outside.prevent>
    <motion.div
      class="w-124 h-full overflow-hidden justify-center relative grid items-start">
      <aside
        id="asideRef"
        class="w-124 h-[94vh] grid  *:pb-40 *:pt-22  items-start *:justify-start overflow-y-auto min-h-[90vh] scrollbar-hidden">
        <slot />
      </aside>
    </motion.div>
  </PopoverContent>
</template>