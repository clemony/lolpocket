<script setup lang="ts">
import type { Transition } from 'motion-v'
import { animate, motion, motionValue } from 'motion-v'

const hover = ref(false)

const { width, height } = useWindowSize()

const SNAP_THRESHOLD = 40

// local motion values
const x = motionValue(as().settings.dockX)
const y = motionValue(as().settings.dockY)

// keep them in sync with store
x.on('change', val => as().settings.dockX = val)
y.on('change', val => as().settings.dockY = val)

function snap() {
  const cx = x.get()
  const cy = y.get()

  const nearLeft = cx < 40
  const nearRight = width.value - cx < 40
  const nearTop = cy < 40
  const nearBottom = height.value - cy < 40

  if (nearLeft) {
    animate(x, 0, { type: 'spring', stiffness: 200, damping: 20 })
    as().settings.dockSide = 'left'
  }
  else if (nearRight) {
    animate(x, width.value - 180, { type: 'spring', stiffness: 200, damping: 20 })
    as().settings.dockSide = 'right'
  }
  else if (nearTop) {
    animate(y, 0, { type: 'spring', stiffness: 200, damping: 20 })
    as().settings.dockSide = 'top'
  }
  else if (nearBottom) {
    animate(y, height.value - 80, { type: 'spring', stiffness: 200, damping: 20 })
    as().settings.dockSide = 'bottom'
  }
  else {
    // Not near an edge → stay where dropped
    as().settings.dockSide = 'floating'
  }
}

// Toggle expand on tap (mobile)
function toggleExpand() {
  hover.value = !hover.value
}

const transition: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 12,
  mass: 0.6,
}

function maybeMagnet() {
  const cx = x.get()
  const cy = y.get()

  // Horizontal edges
  if (cx < SNAP_THRESHOLD) {
    x.set(0)
    as().settings.dockSide = 'left'
  }
  else if (width.value - cx < SNAP_THRESHOLD) {
    x.set(width.value - 180) // adjust for expanded width
    as().settings.dockSide = 'right'
  }

  // Vertical edges (top/bottom)
  if (cy < SNAP_THRESHOLD) {
    y.set(0)
    as().settings.dockSide = 'top'
  }
  else if (height.value - cy < SNAP_THRESHOLD) {
    y.set(height.value - 80) // dock height
    as().settings.dockSide = 'bottom'
  }
}

const dockClass = computed(() => {
  switch (as().settings.dockSide) {
    case 'left':
      return 'flex-col items-center justify-start'
    case 'right':
      return 'flex-col items-center justify-start'
    case 'top':
      return 'flex-row items-center justify-center'
    case 'bottom':
      return 'flex-row items-center justify-center'
    default:
      return 'flex-col items-center justify-start' // fallback
  }
})
const sideSM = '46px'
const sideLG = '180px'

const variants = computed(() => {
  if (as().settings.dockSide === 'left' || as().settings.dockSide === 'right') {
    return {
      hidden: { maxWidth: sideSM, height: '100%' },
      visible: { minWidth: sideLG, height: '100%' },
    }
  }
  else {
    return {
      hidden: { height: sideLG, width: '100%' },
      visible: { height: sideLG, width: '100%' },
    }
  }
})
</script>

<template>
  <motion.div
    drag
    :drag-momentum="false"
    :drag-elastic="0.2"
    :drag-constraints="{ left: 0, top: 0, right: width - 180, bottom: height - 80 }"
    :style="{ x, y }"
    :initial="{ opacity: 1, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="transition"

    class="fixed z-20 isolate pointer-events-auto  !px-0 "
    :class="[dockClass]"
    as-child
    @drag="maybeMagnet"
    @drag-end="snap">
    <NavigationMenu>
      <motion.div
        :variants="variants"
        initial="hidden"
        while-hover="visible"
        :animate="hover || as().settings.dockSide == 'floating' ? 'visible' : 'hidden'"
        @hover-start="hover = true"
        @hover-end="hover = false"
        @click="toggleExpand">
        <NavigationMenuList
          as-child>
          <motion.div
            initial="hidden"
            :class="cn('size-full max-w-full relative place-items-center  grid grid-cols-1 rounded-2xl bg-b1/80 backdrop-blur-lg border border-b3/60 shadow-warm-soft drop-shadow-md inset-shadow-xs drop-shadow-black/5 overflow-hidden cursor-move', { 'min-w-[180px]': as().settings.dockSide == 'floating' })"
            :animate="hover || as().settings.dockSide == 'floating' ? 'visible' : 'hidden'"
            exit="hidden">
            <!--             <div class="px-3 flex   relative justify-center w-full h-5 ">
              <icon
                name="material-symbols-light:drag-handle"
                class="size-6 dst object-center -translate-y-px absolute opacity-80" />
            </div>

            <Separator class="bg-b3/60 !my-0" /> -->

            <div class="px-2 py-2.5 pointer-events-none w-full ">
              <slot name="header" />
            </div>
            <Separator class="bg-b3/60" />
            <div class="px-2 py-4 w-full">
              <slot name="nav-links" />
            </div>
            <div class="px-2 pb-2.5 w-full">
              <slot name="footer" />
            </div>
          </motion.div>
        </NavigationMenuList>
      </motion.div>
    </NavigationMenu>
  </motion.div>
</template>