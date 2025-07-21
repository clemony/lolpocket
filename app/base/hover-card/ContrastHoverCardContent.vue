<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <HoverCardContent class="bg-n1/85 border-accent backdrop-blur-md **:text-nc p-2 **:text-2 **:justify-start **:font-normal" as-child>
    <motion.div :transition="{ type: 'spring' }">
      <slot />
    </motion.div>
  </HoverCardContent>
</template>