<script setup lang="ts">
import { Primitive } from "reka-ui"
import type { CSSProperties } from "vue"

interface Props {
  as?: "div" | "article" | "button" | "span"
  class?: HTMLAttributes["class"]
  style?: CSSProperties
  ui?: {
    root?: HTMLAttributes["class"]
    container?: HTMLAttributes["class"]
  }
  disabled?: boolean
  perspective?: number
  rotateXMax?: number
  rotateYMax?: number
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  disabled: false,
  perspective: 900,
  rotateXMax: 7,
  rotateYMax: 10
})

const root = ref<HTMLElement | null>(null)
const pointer = ref({ x: 0, y: 0 })
const rotate = ref({ x: 0, y: 0 })

function resolveElement(target: unknown): HTMLElement | null {
  if (target instanceof HTMLElement) return target
  if (!target || typeof target !== "object") return null

  const candidate = (target as { $el?: unknown }).$el
  return candidate instanceof HTMLElement ? candidate : null
}

const rootStyle = computed(
  (): CSSProperties => ({
    perspective: `${props.perspective}px`,
    "--m-x": `${50 + pointer.value.x / 2}%`,
    "--m-y": `${50 + pointer.value.y / 2}%`,
    "--bg-x": `${50 + pointer.value.x / 4}%`,
    "--bg-y": `${50 + pointer.value.y / 3}%`,
    "--r-x": `${rotate.value.y}deg`,
    "--r-y": `${rotate.value.x}deg`,
    ...props.style
  })
)

const containerStyle = computed(
  (): CSSProperties => ({
    transform: `rotateX(${rotate.value.x}deg) rotateY(${rotate.value.y}deg)`
  })
)

function handlePointerMove(event: PointerEvent) {
  if (props.disabled) return

  const rect = resolveElement(root.value)?.getBoundingClientRect()
  if (!rect) return

  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const y = ((event.clientY - rect.top) / rect.height) * 2 - 1

  pointer.value = {
    x: x * 50,
    y: y * 50
  }

  rotate.value = {
    x: -(y * props.rotateXMax),
    y: x * props.rotateYMax
  }
}

function handlePointerLeave() {
  pointer.value = { x: 0, y: 0 }
  rotate.value = { x: 0, y: 0 }
}
</script>

<template>
  <Motion
    ref="root"
    v-bind="props"
    :style="rootStyle"
    :class="cn('relative isolate', props.class, props.ui?.root)"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave">
    <div
      :style="containerStyle"
      :class="
        cn(
          'size-full transition-transform duration-200 ease-out will-change-transform transform-3d',
          props.ui?.container
        )
      ">
      <slot />
    </div>
  </Motion>
</template>
