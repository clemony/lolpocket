<script setup lang="ts">
import type { EmitsToProps, TooltipProps } from "@nuxt/ui"
import type { TooltipContentEmits, TooltipContentProps } from "reka-ui"

const {
  side = "top",
  sideOffset = 16,
  arrow = false,
  class: className,
  icon,
  avatar,
  trailingIcon,
  title,
  ui: uiProps,
  kbds,
  label,
  disabled,
  followPointer = true,
  inertia = true,
  interactive = false,
} = defineProps<{
  class?: HTMLAttributes["class"]
  avatar?: string
  ui?: TooltipUi
  kbds?: TooltipProps["kbds"]
  icon?: string
  arrow?: boolean
  side?: Side
  sideOffset?: number
  trailingIcon?: string
  disabled?: boolean
  followPointer?: boolean
  inertia?: boolean | number
  interactive?: boolean
  label?: string
  title?: string
}>()

const emit = defineEmits(["pinned", "unpinned"])

const open = ref(false)
const pinned = ref(false)
const anchor = ref({ x: 0, y: 0 })
const triggerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
let rafId = 0
let nextX = 0
let nextY = 0
let currentX = 0
let currentY = 0

function getInertiaFactor() {
  if (typeof inertia === "number") {
    return Math.min(Math.max(inertia, 0), 0.95)
  }

  return inertia ? 0.22 : 0
}

function scheduleAnchorUpdate() {
  if (!rafId) rafId = requestAnimationFrame(updateAnchor)
}

function updateAnchor() {
  rafId = 0

  if (!open.value || pinned.value || !followPointer || disabled) return

  const factor = getInertiaFactor()

  if (!factor) {
    currentX = nextX
    currentY = nextY
    anchor.value = { x: nextX, y: nextY }
    return
  }

  const dx = nextX - currentX
  const dy = nextY - currentY
  const settle = 0.25

  if (Math.abs(dx) <= settle && Math.abs(dy) <= settle) {
    currentX = nextX
    currentY = nextY
    anchor.value = { x: nextX, y: nextY }
    return
  }

  currentX += dx * factor
  currentY += dy * factor
  anchor.value = { x: currentX, y: currentY }

  scheduleAnchorUpdate()
}

function onPointerEnter(ev: PointerEvent) {
  if (disabled) return
  if (pinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  currentX = nextX
  currentY = nextY
  anchor.value = { x: nextX, y: nextY }
  open.value = true
}

function onPointerLeave() {
  if (pinned.value) return
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = 0
  }
  open.value = false
}

function onPointerMove(ev: PointerEvent) {
  if (disabled || !followPointer || pinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  scheduleAnchorUpdate()
}

function onContextMenu(ev: MouseEvent) {
  if (disabled || !interactive) return
  emit("pinned")
  ev.preventDefault()
  nextX = ev.clientX
  nextY = ev.clientY
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = 0
  }
  currentX = nextX
  currentY = nextY
  anchor.value = { x: nextX, y: nextY }
  pinned.value = true
  open.value = true
}

function closePinned() {
  pinned.value = false
  open.value = false
  emit("unpinned")
}

function onDocumentPointerDown(ev: PointerEvent) {
  if (!pinned.value) return

  const target = ev.target as Node | null
  if (!target) return

  if (triggerRef.value?.contains(target)) return
  if (contentRef.value?.contains(target)) return

  closePinned()
}

function onDocumentKeydown(ev: KeyboardEvent) {
  if (ev.key !== "Escape") return
  if (!open.value) return
  closePinned()
}

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  document.removeEventListener("pointerdown", onDocumentPointerDown, true)
  document.removeEventListener("keydown", onDocumentKeydown, true)
})

onMounted(() => {
  document.addEventListener("pointerdown", onDocumentPointerDown, true)
  document.addEventListener("keydown", onDocumentKeydown, true)
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
type ContentProps = Omit<TooltipContentProps, "as" | "asChild"> &
  Partial<EmitsToProps<TooltipContentEmits>>

const contentProps = computed<ContentProps>(() => ({
  side,
  sideOffset,
  align: ["left", "right"].includes(side) ? "start" : "center",
  alignOffset: ["left", "right"].includes(side) ? 46 : 0,
  updatePositionStrategy: followPointer ? "always" : "optimized",
}))
</script>

<template>
  <UTooltip
    :disabled
    :arrow="arrow"
    :open="disabled ? false : open"
    :delay-duration="0"
    :disable-hoverable-content="!interactive"
    :reference="reference"
    :ui="{ content: cn('z-50', uiProps?.content), arrow: uiProps?.arrow }"
    :content="contentProps">
    <div
      ref="triggerRef"
      :class="cn('size-fit', className)"
      @contextmenu.prevent="onContextMenu"
      @pointerenter="onPointerEnter"
      @pointerleave="onPointerLeave"
      @pointermove="onPointerMove">
      <slot>
        <span class="hover:underline">{{ title }}</span>
      </slot>
    </div>

    <template #content>
      <div ref="contentRef">
        <slot name="content">
          <div class="inline-flex gap-1.5 align-baseline">
            <LazyImg
              v-if="avatar"
              loading-type="spinner"
              :src="avatar"
              :alt="`${label}-icon`"
              class="size-4.5 rounded-full" />
            <Icon v-if="icon" :name="icon" class="size-3.5 text-nc" />
            {{ label }}

            <Icon
              v-if="trailingIcon"
              :name="trailingIcon"
              :class="
                cn('', { 'scale-120': trailingIcon === 'i' }, ui?.trailingIcon)
              " />
          </div>
        </slot>
      </div>
    </template>
  </UTooltip>
</template>
