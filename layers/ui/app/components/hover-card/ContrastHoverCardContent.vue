<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <HoverCardContent
    class="
      bgneutral/85 border-accent **:text-nc p-2 backdrop-blur-md **:justify-start
      **:text-sm **:font-normal
    "
    as-child>
    <motion.div :transition="{ type: 'spring' }">
      <slot />
    </motion.div>
  </HoverCardContent>
</template>
