<script lang="ts" setup>
import { motion } from 'motion-v'

const { open, toggle } = useAppSidebar()
const trigger = useTemplateRef<HTMLElement>('trigger')
const isHovered = useElementHover(trigger, { delayEnter: 400, delayLeave: 300 })

watch(() => isHovered.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
  if (newVal === true)
    toggle(true)
})
</script>

<template>
  <button
    ref="trigger"
    :class="cn('group/btn fixed inset-y-0 left-0 z-30 grid h-[99vh] w-8 place-items-center border border-transparent transition-all duration-150 hover:rounded-r-lg hover:border-b3 hover:bg-b1/90 hover:backdrop-blur-md')">
    <span
      :class="cn('relative grid h-32 w-3 rounded-full border border-b3 bg-tint-b3/40 transition-opacity duration-200 group-hover/btn:border-shade-b3/4 group-hover/btn:bg-tint-b3/10 after:absolute after:h-32 after:w-8 after:place-self-center', { 'opacity-0': open })" />
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
        :initial="{ x: -303 }"
        :animate="{ x: 0 }"
        :exit="{ x: -303 }"
        :transition="{
          duration: 0.2,
          type: 'spring',
          stiffness: 280,
          damping: 32,
        }"
        class="fixed inset-y-0 left-0 z-40">
        <AppSidebar @close="toggle(false)" />
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s var(--spring);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
