<script lang="ts" setup>
import { vElementHover } from "@vueuse/components";
import { motion } from "motion-v";

const { close, open, toggle } = useAppSidebar();
</script>

<template>
  <button
    v-element-hover="[() => (open = true), { delayEnter: 200 }]"
    class="group/btn fixed top-0 left-0 z-30 grid h-screen w-8 place-items-center"
  >
    <span
      class="relative grid h-32 w-3 rounded-full border border-b3 bg-tint-b3/40 group-hover/btn:border-shade-b3/4 group-hover/btn:bg-tint-b3/10 after:absolute after:h-32 after:w-8 after:place-self-center"
    />
  </button>
  <!-- sidebar overlay + motion -->
  <Teleport to="body">
    <!--     <Transition name="fade">
      <button
        v-if="open"

        class="fixed inset-0 z-40 bg-black/40"
        @click.self="close" />
    </Transition>
 -->
    <AnimatePresence>
      <motion.div
        v-if="open"
        :initial="{ x: -303, opacity: [1, 1, 1, 0] }"
        :animate="{ x: 0, opacity: [0, 1, 1, 1] }"
        :exit="{ x: -303, opacity: [1, 1, 1, 0] }"
        :transition="{
          duration: 0.2,
          type: 'spring',
          stiffness: 280,
          damping: 32,
        }"
        class="fixed inset-y-0 left-0 z-40"
      >
        <AppSidebar @close="toggle(false)" />
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
