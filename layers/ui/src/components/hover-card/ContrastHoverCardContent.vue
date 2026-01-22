<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <HoverCardContent
    class="
      bgneutral/85 border-accent p-2 backdrop-blur-md **:justify-start **:text-sm
      **:font-normal **:text-nc
    "
    as-child>
    <motion.div :transition="{ type: 'spring' }">
      <slot />
    </motion.div>
  </HoverCardContent>
</template>
