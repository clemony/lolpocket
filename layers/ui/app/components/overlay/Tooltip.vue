<script setup lang="ts">
import type { EmitsToProps, TooltipProps } from "@nuxt/ui"
import type {
  PrimitiveProps,
  TooltipContentEmits,
  TooltipContentProps
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
        followPointer?: boolean
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
    sideOffset: 6,
    as: "div",
    flip: true,
    pin: true,
    arrow: false,
    disableClosingTrigger: false,
    followPointer: true,
    inertia: false,
    delayDuration: 90,
    closeDelay: 0,
    interactive: false
  }
)

const emit = defineEmits(["pinned", "unpinned"])

const open = ref(false)
const pinned = ref(false)
const anchor = ref({ x: 0, y: 0 })
const placement = ref<{ side: Side; alignOffset: number }>({
  side: "bottom",
  alignOffset: 0
})
const flipOffset = ref({ x: 0, y: 0 })
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
  const distance = 3

  switch (side) {
    case "top":
      return { x: 0, y: distance }
    case "right":
      return { x: -distance, y: 0 }
    case "bottom":
      return { x: 0, y: -distance }
    case "left":
      return { x: distance, y: 0 }
  }
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
      flipOffset.value = { x: 0, y: 0 }
      flipRafId = 0
    })
  })
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
  anchor.value = { x, y }

  const triggerEl = resolveElement(triggerRef.value)
  if (!triggerEl) {
    placement.value = {
      side: props?.side ?? "bottom",
      alignOffset: props?.alignOffset ?? 0
    }
    return
  }

  const rect = triggerEl.getBoundingClientRect()
  const clampedX = Math.min(Math.max(x, rect.left), rect.right)
  const clampedY = Math.min(Math.max(y, rect.top), rect.bottom)
  const distances: Record<Side, number> = {
    top: clampedY - rect.top,
    right: rect.right - clampedX,
    bottom: rect.bottom - clampedY,
    left: clampedX - rect.left
  }
  const nextCursorSide = (Object.entries(distances).sort(
    (a, b) => a[1] - b[1]
  )[0]?.[0] ?? "bottom") as Side
  const currentCursorSide = props?.flip
    ? getOppositeSide(placement.value.side)
    : placement.value.side
  const cursorSide =
    distances[currentCursorSide] <=
    distances[nextCursorSide] + sideSwitchHysteresis
      ? currentCursorSide
      : nextCursorSide
  const side = props?.flip ? getOppositeSide(cursorSide) : cursorSide

  if (side === "top" || side === "bottom") {
    placement.value = {
      side,
      alignOffset: clampedX - rect.left
    }
    return
  }

  placement.value = {
    side,
    alignOffset: clampedY - rect.top
  }
}

function scheduleAnchorUpdate() {
  if (!rafId) rafId = requestAnimationFrame(updateAnchor)
}

function updateAnchor() {
  rafId = 0

  if (!open.value || isPinned.value || !props?.followPointer || props?.disabled)
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
  if (props?.disabled || !props?.followPointer || isPinned.value) return
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

const reference = computed(
  () =>
    resolveElement(triggerRef.value) ?? {
      getBoundingClientRect: () =>
        ({
          width: 0,
          bottom: anchor.value.y,
          height: 0,
          left: anchor.value.x,
          right: anchor.value.x,
          top: anchor.value.y,
          ...anchor.value
        }) as DOMRect
    }
)
type ContentProps = Omit<TooltipContentProps, "as" | "asChild"> &
  Partial<EmitsToProps<TooltipContentEmits>>

const contentProps = computed<ContentProps>(() => ({
  side: props?.followPointer ? placement.value.side : props?.side,
  sideOffset: props?.sideOffset,
  align: props?.followPointer ? "start" : (props?.align ?? "center"),
  alignOffset: props?.followPointer
    ? placement.value.alignOffset
    : props?.alignOffset,
  updatePositionStrategy: props?.followPointer ? "always" : "optimized",
  arrowPadding: 3
}))

const resolvedSide = computed(
  () => contentProps.value.side ?? props?.side ?? "bottom"
)

const disableClosingTrigger = computed(
  () => props?.disableClosingTrigger || props?.interactive
)

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
    :arrow="arrow"
    :open="isTooltipOpen"
    :delay-duration="0"
    :disable-hoverable-content="!interactive"
    :reference="reference"
    :ui="{ content: cn('z-200', props?.ui?.content), arrow: props?.ui?.arrow }"
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
        :style="{
          transform: `translate3d(${flipOffset.x}px, ${flipOffset.y}px, 0)`
        }"
        :class="
          cn(
            'inline-flex items-center gap-1.5 align-baseline transition-transform duration-150 ease-out will-change-transform motion-reduce:transition-none',
            props?.ui?.content
          )
        ">
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
                  root: cn('absolute -ml-1 overflow-hidden bg-transparent')
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
