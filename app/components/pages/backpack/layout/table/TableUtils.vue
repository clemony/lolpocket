<script lang="ts" setup>
import type { RowSelectionState, Table } from "@tanstack/vue-table"
import { useTableInject } from "~/composables/ui/useTableProvider"

const props = withDefaults(
  defineProps<
    {
      as?: string
      class?: HTMLAttributes["class"]
      disabled?: boolean
      rowSelection: RowSelectionState
      side?: Side
      sideOffset?: number
      tableApi?: Table<Pocket>
      ui?: {
        content?: string
      }
    }
  >(),
  {
    as: "div",
    side: "top",
    sideOffset: 24
  }
)

const { setRowSelected } = useTableInject<Pocket>()
const open = defineModel<boolean>("open", { default: false })
const listOpen = shallowRef<boolean>(false)
const triggerRef = useTemplateRef<HTMLElement>("triggerRef")
const contentRef = ref<HTMLElement | null>(null)
const anchor = ref({ x: 0, y: 0 })
const placement = ref<{ side: Side }>({ side: props.side })
const hasPointerAnchor = shallowRef(false)

const selectedRows = computed(
  () => props.tableApi?.getSelectedRowModel().flatRows ?? []
)

const selectedCount = computed(
  () => Object.values(props.rowSelection ?? {}).filter(Boolean).length
)
const hasSelection = computed(() => selectedCount.value > 0)
const hasMany = computed(() => selectedCount.value > 1)

const tableUtils = computed(() => [
  {
    label: `Move${hasMany.value ? " All" : ""} to...`,
    icon: "i-folder-to",
    onClick: () => {}
  },
  {
    label: `Archive${hasMany.value ? " All" : ""}`,
    icon: "i-archive-restore",
    onClick: () => {}
  },
  {
    label: `Delete${hasMany.value ? " All" : ""}`,
    icon: "i-trash",
    onClick: () => {}
  }
])

function resolveElement(target: unknown): Element | null {
  if (target instanceof Element) return target
  if (!target || typeof target !== "object") return null

  const candidate = (target as { $el?: unknown }).$el
  return candidate instanceof Element ? candidate : null
}

function oppositeSide(side: Side): Side {
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

function setFallbackAnchor() {
  const triggerEl = resolveElement(triggerRef.value)
  const rect = triggerEl?.getBoundingClientRect()

  anchor.value = {
    x: rect ? rect.left + rect.width / 2 : window.innerWidth / 2,
    y: rect ? rect.top + rect.height / 2 : window.innerHeight / 2
  }
  placement.value = { side: props.side }
}

function setAnchorFromPointer(x: number, y: number) {
  anchor.value = { x, y }
  hasPointerAnchor.value = true

  const triggerEl = resolveElement(triggerRef.value)
  if (!triggerEl) {
    placement.value = { side: props.side }
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
  const nearestSide = (Object.entries(distances).sort(
    (a, b) => a[1] - b[1]
  )[0]?.[0] ?? props.side) as Side

  placement.value = {
    side: oppositeSide(nearestSide)
  }
}

const longPressDelay = 500
const longPressDistanceThreshold = 10
const longPressReleaseGrace = 300
const longPressArmed = shallowRef(false)
let longPressStart: { x: number; y: number } | undefined
let longPressTimer: ReturnType<typeof setTimeout> | undefined
let longPressResetTimer: ReturnType<typeof setTimeout> | undefined

function clearLongPressTimer() {
  if (!longPressTimer) return

  clearTimeout(longPressTimer)
  longPressTimer = undefined
}

function clearLongPressResetTimer() {
  if (!longPressResetTimer) return

  clearTimeout(longPressResetTimer)
  longPressResetTimer = undefined
}

function resetLongPress() {
  clearLongPressTimer()
  clearLongPressResetTimer()
  longPressStart = undefined
  longPressArmed.value = false
}

function scheduleLongPressReset() {
  clearLongPressResetTimer()
  longPressResetTimer = setTimeout(resetLongPress, longPressReleaseGrace)
}

function pointerDistanceFromStart(event: PointerEvent) {
  if (!longPressStart) return 0

  const dx = event.clientX - longPressStart.x
  const dy = event.clientY - longPressStart.y

  return Math.sqrt(dx * dx + dy * dy)
}

function startLongPress(event: PointerEvent) {
  resetLongPress()
  longPressStart = { x: event.clientX, y: event.clientY }
  longPressTimer = setTimeout(() => {
    longPressArmed.value = true
    setAnchorFromPointer(event.clientX, event.clientY)
    void openAt(event)
  }, longPressDelay)
}

function updateLongPress(event: PointerEvent) {
  if (!longPressStart || longPressArmed.value) return

  if (pointerDistanceFromStart(event) >= longPressDistanceThreshold) {
    resetLongPress()
  }
}

function finishLongPress() {
  clearLongPressTimer()

  if (longPressArmed.value) scheduleLongPressReset()
  else resetLongPress()
}

function onTriggerPointerDown(event: PointerEvent) {
  if (props.disabled) return

  setAnchorFromPointer(event.clientX, event.clientY)
  startLongPress(event)
}

function closeBubble() {
  open.value = false
}

async function openAt(event: MouseEvent | PointerEvent) {
  if (props.disabled) return

  open.value = false
  setAnchorFromPointer(event.clientX, event.clientY)

  await nextTick()

  if (hasSelection.value) open.value = true
}

async function openFromLongPress(event: MouseEvent | PointerEvent) {
  if (props.disabled || !longPressArmed.value) return false

  resetLongPress()
  await openAt(event)

  return open.value
}

function onDocumentPointerDown(event: PointerEvent) {
  if (!open.value) return

  const target = event.target as Node | null
  if (!target) return

  const contentEl = resolveElement(contentRef.value)
  if (contentEl?.contains(target)) return

  closeBubble()
}

function onDocumentKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeBubble()
}

watch(
  () => open.value,
  (value) => {
    if (value && !hasPointerAnchor.value) setFallbackAnchor()
  }
)

watch(hasSelection, (value) => {
  if (!value) closeBubble()
})

onMounted(() => {
  document.addEventListener("pointermove", updateLongPress, true)
  document.addEventListener("pointerup", finishLongPress, true)
  document.addEventListener("pointercancel", resetLongPress, true)
  document.addEventListener("pointerdown", onDocumentPointerDown, true)
  document.addEventListener("keydown", onDocumentKeydown, true)
})

onBeforeUnmount(() => {
  resetLongPress()
  document.removeEventListener("pointermove", updateLongPress, true)
  document.removeEventListener("pointerup", finishLongPress, true)
  document.removeEventListener("pointercancel", resetLongPress, true)
  document.removeEventListener("pointerdown", onDocumentPointerDown, true)
  document.removeEventListener("keydown", onDocumentKeydown, true)
})

const bubbleStyle = computed(() => {
  const offset = `${props.sideOffset}px`
  const transform = {
    top: `translate3d(-50%, calc(-100% - ${offset}), 0)`,
    right: `translate3d(${offset}, -50%, 0)`,
    bottom: `translate3d(-50%, ${offset}, 0)`,
    left: `translate3d(calc(-100% - ${offset}), -50%, 0)`
  }[placement.value.side]

  return {
    left: `${anchor.value.x}px`,
    top: `${anchor.value.y}px`,
    transform
  }
})

defineExpose({
  close: closeBubble,
  openFromLongPress
})

const listRows = computed(() =>
  selectedRows.value
    .map((p) => p.original)
    .map((p) => ({
      label: p.label,
      avatar: {
        src: p.skin ? getSplash(p.skin, "tile") : undefined
      },
      value: p.key,
      onSelect() {
        setRowSelected(p.key, false)
      }
    }))
)
</script>

<template>
  <component
    :is="props.as"
    ref="triggerRef"
    :class="cn('contents', props.class)"
    @pointerdown.capture="onTriggerPointerDown">
    <slot />
  </component>

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0">
      <div
        v-if="open && hasSelection"
        ref="contentRef"
        :style="bubbleStyle"
        :class="
          cn(
            'fixed z-200 inline-flex h-max origin-center items-center gap-1.5 rounded-2xl bg-p0/86 px-2 py-1.5 align-middle shadow-sm ring shadow-black/8 ring-border backdrop-blur-sm',
            props.ui?.content
          )
        ">
        <UButton
          v-for="item in tableUtils"
          :key="item.label"
          :aria-label="item.label"
          :disabled="!hasSelection"
          square
          :icon="item.icon"
          :ui="{
            base: 'anchor size-9! rounded-lg bg-transparent shadow-none drop-shadow-none',
            leadingIcon:
              'size-4.5 text-pc **:stroke-[2.26] group-disabled/btn:opacity-40'
          }"
          variant="outline"
          @click="item.onClick">
          <template #default>
            <span class="sr-only">{{ item.label }}</span>
          </template>
        </UButton>

        <UPopover
          v-model:open="listOpen"
          :ui="{
            content: 'shadow-sm'
          }"
          :content="{
            side: 'top'
          }">
          <UButton
            v-if="selectedRows.length"
            :label="String(selectedRows.length)"
            variant="ghost"
            :ui="{
              base: 'h-9! gap-2 bg-transparent shadow-none drop-shadow-none',
              trailingIcon: 'size-3 opacity-100 **:stroke-[12%]!'
            }"
            :trailing-icon="listOpen ? 'i-edit-line' : 'i-pen'"
            class="ml-0.5" />
          <template #content>
            <UListbox :items="listRows"> </UListbox>
          </template>
        </UPopover>
      </div>
    </Transition>
  </Teleport>
</template>
