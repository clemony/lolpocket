<script setup lang="ts">
import type { DataOrientation, Direction } from './types'
import {
  DISTANCE_INJECTION_KEY,
  MAGNIFICATION_INJECTION_KEY,
  MOUSE_X_INJECTION_KEY,
  MOUSE_Y_INJECTION_KEY,
  ORIENTATION_INJECTION_KEY,
} from './injectionKeys'

interface DockProps {
  class?: HTMLAttributes['class']
  direction?: Direction
  distance?: number
  magnification?: number
  orientation?: DataOrientation
}

const props = withDefaults(defineProps<DockProps>(), {
  direction: 'middle',
  distance: 90,
  magnification: 60,
  orientation: 'horizontal',
})

const dockRef = ref<HTMLElement | null>(null)
const mouseX = ref(Infinity)
const mouseY = ref(Infinity)
const magnification = computed(() => props.magnification)
const distance = computed(() => props.distance)

const dockClass = computed(() => ({
  'items-center': props.direction === 'middle',
  'items-end': props.direction === 'bottom',
  'items-start': props.direction === 'top',
}))

function onMouseMove(e: MouseEvent) {
  requestAnimationFrame(() => {
    mouseX.value = e.pageX
    mouseY.value = e.pageY
  })
}

function onMouseLeave() {
  requestAnimationFrame(() => {
    mouseX.value = Infinity
    mouseY.value = Infinity
  })
}
provide(MOUSE_X_INJECTION_KEY, mouseX)
provide(MOUSE_Y_INJECTION_KEY, mouseY)
provide(ORIENTATION_INJECTION_KEY, props.orientation)
provide(MAGNIFICATION_INJECTION_KEY, magnification)
provide(DISTANCE_INJECTION_KEY, distance)
</script>

<template>
  <div
    ref="dockRef"
    role="button"
    :tabindex="0"
    :class="
      cn(
        'supports-backdrop-blur:bg-b1/80 bg-b1/90 shadow-sm drop-shadow-black/5 shadow-black/5 dss mx-auto mt-8 flex h-[60px] w-max rounded-2xl border p-2 backdrop-blur-md transition-all gap-4',
        orientation === 'vertical' && 'flex-col w-[62px] h-max',
        props.class,
        dockClass,
      )
    "
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @focus="onMouseMove"
    @blur="onMouseLeave">
    <slot />
  </div>
</template>
