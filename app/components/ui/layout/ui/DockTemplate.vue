<script setup lang="ts">
import type { Transition } from 'motion-v'
import { animate, motion, motionValue } from 'motion-v'

const menuVariants = {}
const variants = {
  hidden: { width: '46px' },
  visible: { width: '180px' },
}

const hover = ref(false)

const dockRef = ref<HTMLElement | null>(null)
const { width, height } = useWindowSize()

const x = motionValue(50)
const y = motionValue(50)

// style binding
const style = computed(() => ({
  transform: `translate(${x.get()}px, ${y.get()}px)`,
}))

// Animate snap instead of jumping
function snap() {
  const edgeX = x.get() < width.value / 2 ? 0 : width.value - 180
  const edgeY = Math.min(Math.max(y.get(), 0), height.value - 80)

  animate(x, edgeX, { type: 'spring', stiffness: 200, damping: 20 })
  animate(y, edgeY, { type: 'spring', stiffness: 200, damping: 20 })
}

// Toggle expand on tap (mobile)
function toggleExpand() {
  hover.value = !hover.value
}
const transition: Transition = {
  type: 'spring', // ✅ now literal
  stiffness: 120,
  damping: 12,
  mass: 0.6,
}
</script>

<template>
  <Motion
    ref="dockRef"
    as-child

    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="transition"
    :style="style"
    class="fixed translate-y-1/4 flex pointer-events-auto rounded-r-2xl bg-b1 backdrop-blur-lg shadow-warm-soft overflow-hidden">
    <NavigationMenu>
      <motion.div
        :variants="menuVariants"
        while-hover="visible"
        @hover-start="hover = true"
        @hover-end="hover = false"
        @click="toggleExpand">
        <NavigationMenuList
          class="flex py-0 size-full max-w-full"
          as-child>
          <motion.div
            :variants="variants"
            initial="hidden"
            class="py-3.5 place-items-center bg-b1 grid grid-cols-1 size-full gap-2.5 relative"
            :animate="hover ? 'visible' : 'hidden'"
            exit="hidden">
            <div class="px-3 flex justify-center w-full h-2.75">
              <Button
                variant="secondary"
                class=" size-full shadow-none  -mt-1 max-w-24  rounded-full" />
            </div>
            <div class="px-2 pointer-events-none w-full">
              <slot name="header" />
            </div>
            <Separator />
            <div class="px-2 w-full">
              <slot name="nav-links" />
            </div>
            <div class="px-2 w-full">
              <slot name="footer" />
            </div>
          </motion.div>
        </NavigationMenuList>
      </motion.div>
    </NavigationMenu>
  </Motion>
</template>