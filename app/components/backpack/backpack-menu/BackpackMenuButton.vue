<script lang="ts" setup>
import { motion } from 'motion-v'

const emit = defineEmits(['update:menu'])

const menuOpen = ref(false)
const toggleMenu = useToggle(menuOpen)
function handleClick() {
  menuOpen.value = toggleMenu()
  emit('update:menu', menuOpen.value)
}

const variants = {
  closed: {
    width: '17px',
    translate: '0 0',
  },
  open: {
    width: '22px',
    height: '22px',
    translate: '0 3px',
  },
}
</script>

<template>
  <AnimatePresence
    as="div"
    class="absolute grid place-items-center right-4 top-4 z-3">
    <Motion
      :animate="menuOpen ? 'open' : 'closed'"
      :variants="variants"
      :transition="{
        ease: 'easeInOut',
        duration: 0.4,
      }"
      class="btn z-1 peer  btn-md cursor-pointer pointer-events-auto   relative overflow-hidden justify-center items-center  w-6 px-0  !bg-[#00000000] !border-[#00000000] group-hover:!bg-[#000000] group-hover:!border-[#464646]  hover:!bg-[#00000090] hover:!border-[#46464690] cursor-pointer"
      :style="{ '--depth': 'none' }"
      :class="{ '!bg-[#00000099]  !z-10': menuOpen }"
      @click.stop.prevent="handleClick()">
      <AnimatePresence mode="popLayout">
        <motion.button
          v-if="!menuOpen"
          key="menu-more"
          as="div"
          :animate="{ opacity: [0, 1] }"
          :exit="{ opacity: [1, 0] }"
          :transition="{
            type: 'spring',
            duration: 0.5,
          }">
          <icon
            name="more"
            class="rotate-90 !text-[rgba(255,255,255,0.7)]  size-6 dst " />
        </motion.button>

        <Motion
          v-if="menuOpen"
          key="menu-close"
          as="div"
          :animate="{
            opacity: [0, 1],
            rotate: [0, -45],
          }"
          :exit="{
            opacity: [1, 0],
            rotate: [45, 0],
          }"
          :transition="{
            type: 'spring',
            duration: 0.5,
          }">
          <icon
            name="add-sm"
            class=" size-8  dst z-3 !text-[rgba(255,255,255,0.7)]" />
        </Motion>
      </AnimatePresence>
    </Motion>
  </AnimatePresence>
</template>