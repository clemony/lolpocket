<script setup lang="ts">
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
const container = ref<HTMLElement | null>(null)
let animationFrame = 0
let rect: DOMRect | null = null

function resolveElement(target: unknown): HTMLElement | null {
  if (target instanceof HTMLElement) return target
  if (!target || typeof target !== "object") return null

  const candidate = (target as { $el?: unknown }).$el
  return candidate instanceof HTMLElement ? candidate : null
}

const rootStyle = computed(
  (): CSSProperties => ({
    perspective: `${props.perspective}px`,
    "--m-x": "50%",
    "--m-y": "50%",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    ...props.style
  })
)

const containerStyle: CSSProperties = {
  transform: "rotateX(0deg) rotateY(0deg)"
}

function writeMotion(x: number, y: number, rotateX: number, rotateY: number) {
  const rootEl = resolveElement(root.value)
  const containerEl = resolveElement(container.value)
  if (!rootEl || !containerEl) return

  rootEl.style.setProperty("--m-x", `${50 + x * 25}%`)
  rootEl.style.setProperty("--m-y", `${50 + y * 25}%`)
  rootEl.style.setProperty("--bg-x", `${50 + x * 12.5}%`)
  rootEl.style.setProperty("--bg-y", `${50 + y * 16.67}%`)
  rootEl.style.setProperty("--r-x", `${rotateY}deg`)
  rootEl.style.setProperty("--r-y", `${rotateX}deg`)
  containerEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function scheduleMotion(
  x: number,
  y: number,
  rotateX: number,
  rotateY: number
) {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  animationFrame = requestAnimationFrame(() => {
    animationFrame = 0
    writeMotion(x, y, rotateX, rotateY)
  })
}

function handlePointerEnter() {
  rect = resolveElement(root.value)?.getBoundingClientRect() ?? null
}

function handlePointerMove(event: PointerEvent) {
  if (props.disabled || user().settings?.reduce_motion) return

  rect ??= resolveElement(root.value)?.getBoundingClientRect() ?? null
  if (!rect) return
  if (!rect.width || !rect.height) return

  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
  const rotateX = -(y * props.rotateXMax)
  const rotateY = x * props.rotateYMax

  scheduleMotion(x, y, rotateX, rotateY)
}

function handlePointerLeave() {
  rect = null
  scheduleMotion(0, 0, 0, 0)
}

onBeforeUnmount(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <div
    ref="root"
    v-bind="props"
    :style="rootStyle"
    :class="
      cn('group/hover-card relative isolate', props.class, props.ui?.root)
    "
    @pointerenter="handlePointerEnter"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave">
    <div
      ref="container"
      :style="containerStyle"
      :class="
        cn(
          'size-full transition-transform duration-200 ease-out will-change-transform transform-3d',
          props.ui?.container
        )
      ">
      <slot />
    </div>
  </div>
</template>
