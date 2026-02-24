<script setup lang="ts">
import type { EmitsToProps } from "@nuxt/ui"
import type { TooltipContentEmits, TooltipContentProps } from "reka-ui"

const {
  side = "top",
  sideOffset = 20,
  arrow = true,
  class: className,
  icon,
  avatar,
  trailingIcon,
  title,
  ui,
  label,
  disabled,
  followPointer = true,
  interactive = false,
} = defineProps<{
  class?: HTMLAttributes["class"]
  avatar?: string
  ui?: Record<string, string>
  icon?: string
  arrow?: boolean
  side?: Side
  sideOffset?: number
  trailingIcon?: string
  disabled?: boolean
  followPointer?: boolean
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

function updateAnchor() {
  anchor.value = { x: nextX, y: nextY }
  rafId = 0
}

function onPointerEnter(ev: PointerEvent) {
  if (disabled) return
  if (pinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  anchor.value = { x: nextX, y: nextY }
  open.value = true
}

function onPointerLeave() {
  if (pinned.value) return
  open.value = false
}

function onPointerMove(ev: PointerEvent) {
  if (disabled || !followPointer || pinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  if (!rafId) rafId = requestAnimationFrame(updateAnchor)
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
type TooltipProps = Omit<TooltipContentProps, "as" | "asChild"> &
  Partial<EmitsToProps<TooltipContentEmits>>

const contentProps = computed<TooltipProps>(() => ({
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
    :open="disabled ? false : open"
    :delay-duration="0"
    :disable-hoverable-content="!interactive"
    :reference="reference"
    :ui="{ content: cn('z-50 overflow-hidden px-0', ui?.content) }"
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
          <div class="inline-flex gap-1.5 px-2.5 align-baseline">
            <Img
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
                cn(
                  'ml-2 inline size-3.5 translate-y-0.75 text-nc',
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
