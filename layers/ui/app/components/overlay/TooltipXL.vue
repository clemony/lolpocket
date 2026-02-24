<script setup lang="ts">
const {
  side = "top",
  sideOffset = 20,
  arrow = true,
  class: className,
  icon,
  img,
  trailingIcon,
  title,
  ui,
  label,
  disabled,
} = defineProps<{
  class?: HTMLAttributes["class"]
  img?: string
  ui?: Record<string, string>
  icon?: string
  arrow?: boolean
  side?: Side
  sideOffset?: number
  trailingIcon?: string
  disabled?: boolean
  label?: string
  title?: string
}>()

const open = ref(false)
const anchor = ref({ x: 0, y: 0 })
let rafId = 0
let nextX = 0
let nextY = 0

function updateAnchor() {
  anchor.value = { x: nextX, y: nextY }
  rafId = 0
}

function onPointerEnter(ev: PointerEvent) {
  if (disabled) return
  nextX = ev.clientX
  nextY = ev.clientY
  anchor.value = { x: nextX, y: nextY }
  open.value = true
}

function onPointerLeave() {
  open.value = false
}

function onPointerMove(ev: PointerEvent) {
  if (disabled) return
  nextX = ev.clientX
  nextY = ev.clientY
  if (!rafId) rafId = requestAnimationFrame(updateAnchor)
}

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
})

const reference = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      bottom: anchor.value.y,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      ...anchor.value,
    }) as DOMRect,
}))
</script>

<template>
  <UTooltip
    :disabled
    :open="disabled ? false : open"
    :delay-duration="0"
    :disable-hoverable-content="true"
    :reference="reference"
    :ui="{ content: 'z-101' }"
    :content="{
      side,
      sideOffset,
      align: ['left', 'right'].includes(side) ? 'start' : 'center',
      alignOffset: ['left', 'right'].includes(side) ? 46 : 0,
      updatePositionStrategy: 'always',
    }">
    <div
      :class="cn('size-fit', className)"
      @pointerenter="onPointerEnter"
      @pointerleave="onPointerLeave"
      @pointermove="onPointerMove">
      <slot>
        <span class="hover:underline">{{ title }}</span>
      </slot>
    </div>

    <template #content>
      <slot />
    </template>
  </UTooltip>
</template>
