<script setup lang="ts">
import type { EmitsToProps, TooltipProps } from "@nuxt/ui"
import type {
  PrimitiveProps,
  TooltipContentEmits,
  TooltipContentProps,
} from "reka-ui"
import { Primitive } from "reka-ui"

const props = withDefaults(
  defineProps<
    TooltipProps &
      PrimitiveProps & {
        avatar?: string
        as?: string
        ui?: TooltipUi
        icon?: string
        side?: Side
        flip?: boolean
        align?: Align
        alignOffset?: number
        sideOffset?: number
        trailingIcon?: string
        disabled?: boolean
        followCursor?: boolean
        inertia?: boolean | number
        interactive?: boolean
        pinned?: boolean
        pin?: boolean
        closeDelay?: number
        label?: string
        title?: string
      }
  >(),
  {
    sideOffset: 10,
    as: "div",
    flip: true,
    pin: false,
    arrow: false,
    disableClosingTrigger: false,
    followCursor: true,
    inertia: false,
    delayDuration: 90,
    closeDelay: 0,
    interactive: false,
  }
)

const emit = defineEmits(["pinned", "unpinned"])

const open = shallowRef<boolean>(false)
const pinned = shallowRef<boolean>(false)
const anchor = shallowRef({ x: 0, y: 0 })
const placement = shallowRef<{ side: Side; alignOffset: number }>({
  side: "bottom",
  alignOffset: 0,
})
const flipOffset = shallowRef({ x: 0, y: 0 })
const triggerRef = ref<unknown>(null)
const contentRef = ref<HTMLElement | null>(null)
let rafId = 0
let flipRafId = 0
let nextX = 0
let nextY = 0
let currentX = 0
let currentY = 0
const sideSwitchHysteresis = 60
let openTimeoutId: ReturnType<typeof setTimeout> | undefined
let closeTimeoutId: ReturnType<typeof setTimeout> | undefined
const isPinned = computed(() => props?.pinned ?? pinned.value)
const isTooltipOpen = computed(() =>
  props?.disabled ? false : props?.pinned ? true : open.value
)
const zeroOffset = { x: 0, y: 0 }
const flipOffsets: Record<Side, { x: number; y: number }> = {
  top: { x: 0, y: 3 },
  right: { x: -3, y: 0 },
  bottom: { x: 0, y: -3 },
  left: { x: 3, y: 0 },
}

function resolveElement(target: unknown): Element | null {
  if (target instanceof Element) return target
  if (!target || typeof target !== "object") return null

  const candidate = (target as { $el?: unknown }).$el
  return candidate instanceof Element ? candidate : null
}

function getInertiaFactor() {
  if (typeof props?.inertia === "number") {
    return Math.min(Math.max(props?.inertia, 0), 0.95)
  }

  return props?.inertia ? 0.1 : 0
}

function getFlipOffset(side: Side) {
  return flipOffsets[side]
}

function getOppositeSide(side: Side): Side {
  switch (side) {
    case "top":
      return "bottom"
    case "right":
      return "left"
    case "bottom":
      return "top"
    case "left":
      return "right"
  }
}

function playFlipSlide(side: Side) {
  if (flipRafId) cancelAnimationFrame(flipRafId)

  flipOffset.value = getFlipOffset(side)

  flipRafId = requestAnimationFrame(() => {
    flipRafId = requestAnimationFrame(() => {
      flipOffset.value = zeroOffset
      flipRafId = 0
    })
  })
}

function setAnchor(x: number, y: number) {
  if (anchor.value.x === x && anchor.value.y === y) return

  anchor.value = { x, y }
}

function setPlacement(side: Side, alignOffset: number) {
  const current = placement.value
  if (current.side === side && current.alignOffset === alignOffset) return

  placement.value = { side, alignOffset }
}

function getDistanceForSide(
  side: Side,
  top: number,
  right: number,
  bottom: number,
  left: number
) {
  switch (side) {
    case "top":
      return top
    case "right":
      return right
    case "bottom":
      return bottom
    case "left":
      return left
  }
}

function clearOpenTimer() {
  if (!openTimeoutId) return
  clearTimeout(openTimeoutId)
  openTimeoutId = undefined
}

function clearCloseTimer() {
  if (!closeTimeoutId) return
  clearTimeout(closeTimeoutId)
  closeTimeoutId = undefined
}

function scheduleOpen() {
  clearCloseTimer()

  if (open.value) return

  const delay = Math.max(props?.delayDuration ?? 0, 0)
  if (!delay) {
    open.value = true
    return
  }

  clearOpenTimer()
  openTimeoutId = setTimeout(() => {
    open.value = true
    openTimeoutId = undefined
  }, delay)
}

function scheduleClose() {
  clearOpenTimer()

  const delay = Math.max(props?.closeDelay ?? 0, 0)
  if (!delay) {
    open.value = false
    return
  }

  clearCloseTimer()
  closeTimeoutId = setTimeout(() => {
    open.value = false
    closeTimeoutId = undefined
  }, delay)
}

function setAnchorFromPointer(x: number, y: number) {
  setAnchor(x, y)

  const triggerEl = resolveElement(triggerRef.value)
  if (!triggerEl) {
    setPlacement(props?.side ?? "bottom", props?.alignOffset ?? 0)
    return
  }

  const rect = triggerEl.getBoundingClientRect()
  const clampedX = Math.min(Math.max(x, rect.left), rect.right)
  const clampedY = Math.min(Math.max(y, rect.top), rect.bottom)
  const topDistance = clampedY - rect.top
  const rightDistance = rect.right - clampedX
  const bottomDistance = rect.bottom - clampedY
  const leftDistance = clampedX - rect.left
  let nextCursorSide: Side = "top"
  let nearestDistance = topDistance

  if (rightDistance < nearestDistance) {
    nextCursorSide = "right"
    nearestDistance = rightDistance
  }
  if (bottomDistance < nearestDistance) {
    nextCursorSide = "bottom"
    nearestDistance = bottomDistance
  }
  if (leftDistance < nearestDistance) {
    nextCursorSide = "left"
    nearestDistance = leftDistance
  }

  const currentCursorSide = props?.flip
    ? getOppositeSide(placement.value.side)
    : placement.value.side
  const currentDistance = getDistanceForSide(
    currentCursorSide,
    topDistance,
    rightDistance,
    bottomDistance,
    leftDistance
  )
  const cursorSide =
    currentDistance <= nearestDistance + sideSwitchHysteresis
      ? currentCursorSide
      : nextCursorSide
  const side = props?.flip ? getOppositeSide(cursorSide) : cursorSide

  if (side === "top" || side === "bottom") {
    setPlacement(side, clampedX - rect.left)
    return
  }

  setPlacement(side, clampedY - rect.top)
}

function scheduleAnchorUpdate() {
  if (!rafId) rafId = requestAnimationFrame(updateAnchor)
}

function updateAnchor() {
  rafId = 0

  if (!open.value || isPinned.value || !props?.followCursor || props?.disabled)
    return

  const factor = getInertiaFactor()

  if (!factor) {
    currentX = nextX
    currentY = nextY
    setAnchorFromPointer(nextX, nextY)
    return
  }

  const dx = nextX - currentX
  const dy = nextY - currentY
  const settle = 0.25

  if (Math.abs(dx) <= settle && Math.abs(dy) <= settle) {
    currentX = nextX
    currentY = nextY
    setAnchorFromPointer(nextX, nextY)
    return
  }

  currentX += dx * factor
  currentY += dy * factor
  setAnchorFromPointer(currentX, currentY)

  scheduleAnchorUpdate()
}

function onPointerEnter(ev: PointerEvent) {
  if (props?.disabled) return
  if (isPinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  currentX = nextX
  currentY = nextY
  setAnchorFromPointer(nextX, nextY)
  scheduleOpen()
}

function onPointerLeave() {
  if (isPinned.value) return
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = 0
  }
  scheduleClose()
}

function onPointerMove(ev: PointerEvent) {
  if (props?.disabled || !props?.followCursor || isPinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  scheduleAnchorUpdate()
}

function onClick(ev: MouseEvent) {
  if (props?.disabled || props?.pin === false) return
  emit("pinned")
  ev.preventDefault()
  nextX = ev.clientX
  nextY = ev.clientY
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = 0
  }
  clearOpenTimer()
  clearCloseTimer()
  currentX = nextX
  currentY = nextY
  setAnchorFromPointer(nextX, nextY)
  pinned.value = true
  open.value = true
}

function closePinned() {
  clearOpenTimer()
  clearCloseTimer()
  pinned.value = false
  open.value = false
  emit("unpinned")
}

function onTooltipOpenChange(value: boolean) {
  if (isPinned.value && !value) return

  if (value) clearCloseTimer()
  else clearOpenTimer()
  open.value = value
}

function onDocumentPointerDown(ev: PointerEvent) {
  if (!isPinned.value) return

  const target = ev.target as Node | null
  if (!target) return

  const triggerEl = resolveElement(triggerRef.value)
  const contentEl = resolveElement(contentRef.value)

  if (triggerEl?.contains(target)) return
  if (contentEl?.contains(target)) return

  closePinned()
}

function onDocumentKeydown(ev: KeyboardEvent) {
  if (ev.key !== "Escape") return
  if (!open.value) return
  closePinned()
}

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (flipRafId) cancelAnimationFrame(flipRafId)
  clearOpenTimer()
  clearCloseTimer()
  document.removeEventListener("pointerdown", onDocumentPointerDown, true)
  document.removeEventListener("keydown", onDocumentKeydown, true)
})

onMounted(() => {
  document.addEventListener("pointerdown", onDocumentPointerDown, true)
  document.addEventListener("keydown", onDocumentKeydown, true)
})

function getPointerRect() {
  return {
    width: 0,
    bottom: anchor.value.y,
    height: 0,
    left: anchor.value.x,
    right: anchor.value.x,
    top: anchor.value.y,
    x: anchor.value.x,
    y: anchor.value.y,
  } as DOMRect
}

const pointerReference = computed(() => ({
  getBoundingClientRect: getPointerRect,
}))
const reference = computed(() =>
  props?.followCursor
    ? pointerReference.value
    : (resolveElement(triggerRef.value) ?? pointerReference.value)
)
type ContentProps = Omit<TooltipContentProps, "as" | "asChild"> &
  Partial<EmitsToProps<TooltipContentEmits>>

const contentProps = computed<ContentProps>(() => ({
  side: props?.followCursor ? placement.value.side : props?.side,
  sideOffset: props?.sideOffset,
  align: props?.align ?? "center",
  alignOffset: props?.followCursor
    ? (props?.alignOffset ?? 0)
    : props?.alignOffset,
  updatePositionStrategy: props?.followCursor ? "always" : "optimized",
  arrowPadding: 7,
}))

const resolvedSide = computed(
  () => contentProps.value.side ?? props?.side ?? "bottom"
)

const disableClosingTrigger = computed(
  () => props?.disableClosingTrigger || props?.interactive
)
const tooltipUi = computed(() => ({
  content: cn("z-200", props?.ui?.content),
  arrow: props?.ui?.arrow,
}))
const motionContentBase =
  "lp-tooltip-motion relative inline-flex items-center gap-1.5 align-baseline transition-transform duration-100 ease-out will-change-transform motion-reduce:transition-none"
const motionStyle = computed(() => ({
  transform: `translate3d(${flipOffset.value.x}px, ${flipOffset.value.y}px, 0)`,
}))

watch(resolvedSide, (side, previousSide) => {
  if (!open.value) return
  if (!previousSide || side === previousSide) return

  playFlipSlide(side)
})

defineExpose({ pinned, isOpen: open })
</script>

<template>
  <UTooltip
    :disable-closing-trigger="true"
    :disabled
    :arrow="props?.arrow"
    :open="isTooltipOpen"
    :delay-duration="0"
    :disable-hoverable-content="!interactive"
    :reference="reference"
    :ui="tooltipUi"
    :content="contentProps"
    @update:open="onTooltipOpenChange">
    <Primitive
      ref="triggerRef"
      :as="props?.as"
      as-child
      :class="cn(props?.asChild ? '' : 'size-fit', props?.class)"
      @click="onClick"
      @pointerenter="onPointerEnter"
      @pointerleave="onPointerLeave"
      @pointermove="onPointerMove">
      <slot :pinned />
    </Primitive>

    <template #content>
      <div
        ref="contentRef"
        :style="motionStyle"
        :class="cn(motionContentBase, props?.ui?.content)">
        <slot name="content">
          <div class="inline-flex items-center gap-2 align-baseline">
            <div
              v-if="avatar"
              class="relative inline-grid size-3.5 place-items-center align-middle">
              <LazyUAvatar
                v-if="avatar"
                hydrate-on-visible
                icon="i-image-circle"
                spinner
                decoding="async"
                loading="lazy"
                :quality="30"
                size="2xs"
                :src="avatar"
                :alt="`${label}-icon`"
                :ui="{
                  root: cn('absolute -ml-1 overflow-hidden bg-transparent'),
                }" />
            </div>
            <Icon
              v-if="icon"
              :name="icon"
              class="inline size-3.5 align-icon text-nc" />
            {{ label }}

            <Icon
              v-if="trailingIcon"
              :name="trailingIcon"
              :class="
                cn(
                  'ml-1 inline size-3.75 self-center align-middle text-nc',
                  { 'scale-120': trailingIcon === 'i' },
                  ui?.trailingIcon
                )
              " />
          </div>
        </slot>
      </div>
    </template>
  </UTooltip>
</template>
