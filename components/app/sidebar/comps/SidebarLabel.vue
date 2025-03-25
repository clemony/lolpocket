<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <AnimatePresence>
    <Motion
      v-if="us.sidebarExpanded" :exit="{ width: 0, height: 0, opacity: 0 }"
      :transition="{ duration: 0.1, ease: 'easeInOut' }" as-child>
      <div class="text-3 pt-4 text-bc/40  tracking-tight px-2 font-semibold text-left ">
        <slot />
      </div>
    </Motion>
  </AnimatePresence>
</template>