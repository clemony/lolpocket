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
        align?: Align
        alignOffset?: number
        sideOffset?: number
        trailingIcon?: string
        disabled?: boolean
        followPointer?: boolean
        inertia?: boolean | number
        interactive?: boolean
        label?: string
        title?: string
      }
  >(),
  {
    side: "bottom",
    sideOffset: 20,
    as: "div",
    arrow: false,
    disableClosingTrigger: false,
    followPointer: true,
    inertia: true,
    interactive: false,
  },
)

const emit = defineEmits(["pinned", "unpinned"])

const open = ref(false)
const pinned = ref(false)
const anchor = ref({ x: 0, y: 0 })
const triggerRef = ref<unknown>(null)
const contentRef = ref<HTMLElement | null>(null)
let rafId = 0
let nextX = 0
let nextY = 0
let currentX = 0
let currentY = 0

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

  return props?.inertia ? 0.22 : 0
}

function scheduleAnchorUpdate() {
  if (!rafId) rafId = requestAnimationFrame(updateAnchor)
}

function updateAnchor() {
  rafId = 0

  if (!open.value || pinned.value || !props?.followPointer || props?.disabled)
    return

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
  if (props?.disabled) return
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
  if (props?.disabled || !props?.followPointer || pinned.value) return
  nextX = ev.clientX
  nextY = ev.clientY
  scheduleAnchorUpdate()
}

function onClick(ev: MouseEvent) {
  if (props?.disabled || !props?.interactive) return
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
  side: props?.side,
  sideOffset: props?.sideOffset,
  align:
    props?.align || ["left", "right"].includes(props?.side) ? "start" : "start",
  alignOffset:
    props?.alignOffset || ["left", "right"].includes(props?.side) ? 46 : -4,
  updatePositionStrategy: props?.followPointer ? "always" : "optimized",
  arrowPadding: 3,
}))

defineExpose({ pinned, isOpen: open })
</script>

<template>
  <UTooltip
    :disable-closing-trigger
    :disabled
    :arrow="arrow"
    :open="disabled ? false : open"
    :delay-duration="0"
    :disable-hoverable-content="!interactive"
    :reference="reference"
    :ui="{ content: cn('z-50', props?.ui?.content), arrow: props?.ui?.arrow }"
    :content="contentProps">
    <Primitive
      ref="triggerRef"
      :as="props?.as"
      :class="cn('size-fit', props?.class)"
      @click.prevent="onClick"
      @pointerenter="onPointerEnter"
      @pointerleave="onPointerLeave"
      @pointermove="onPointerMove">
      <slot :pinned />
    </Primitive>

    <template #content>
      <div
        ref="contentRef"
        :class="
          cn(
            'inline-flex items-center gap-1.5 align-baseline',
            props?.ui?.content,
          )
        ">
        <slot name="content">
          <div class="inline-flex gap-2 align-baseline">
            <LazyAvatarLoading
              v-if="avatar"
              icon="i-image-circle"
              spinner
              size="2xs"
              :src="avatar"
              :alt="`${label}-icon`"
              :ui="{ root: 'bg-transparent' }" />
            <Icon v-if="icon" :name="icon" class="size-3.5 text-nc" />
            {{ label }}

            <Icon
              v-if="trailingIcon"
              :name="trailingIcon"
              :class="
                cn(
                  'ml-1 inline size-3.75 self-center align-middle text-nc',
                  { 'scale-120': trailingIcon === 'i' },
                  ui?.trailingIcon,
                )
              " />
          </div>
        </slot>
      </div>
    </template>
  </UTooltip>
</template>
