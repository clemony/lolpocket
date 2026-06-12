<script lang="ts" setup>
import { AnimatePresence } from "motion-v"
import type { ComponentPublicInstance } from "vue"

import {
  LazyItemInfoCard,
  LazyRuneCommand,
  LazySpellCommand,
} from "#components"
import { useObjectData } from "~/domain/app/composables/useObjectData"
import type {
  SidebarSearchEntry,
  SidebarSearchGroup,
} from "~/domain/app/utils/searchEntries"

const props = defineProps<{
  item: SidebarSearchEntry
}>()
const emit = defineEmits(["update:selected"])
const open = defineModel<boolean>("open", { default: false })
const modalRef = ref<HTMLElement | ComponentPublicInstance | null>(null)
const viewportMargin = 16
const dragConstraints = shallowRef({
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
})
let measureFrame = 0
let settleMeasureFrame = 0
let resizeObserver: ResizeObserver | undefined

const modalKey = computed(() => `${props.item.group}:${props.item.id}`)

const cardComponent = computed<Component | undefined>(() => {
  const groups: Record<string, Component> = {
    spell: LazySpellCommand,
    item: LazyItemInfoCard,
    rune: LazyRuneCommand,
  }
  return groups[props.item.group]
})

function resolveElement(
  target: Element | ComponentPublicInstance | null
): HTMLElement | null {
  if (target instanceof HTMLElement) return target
  if (target instanceof Element) return null

  const candidate = target?.$el
  return candidate instanceof HTMLElement ? candidate : null
}

function updateDragConstraints() {
  const element = resolveElement(modalRef.value)
  if (!element) return

  const width = element.offsetWidth
  const height = element.offsetHeight
  if (!width || !height) return

  const centeredLeft = (window.innerWidth - width) / 2
  const centeredTop = (window.innerHeight - height) / 2

  dragConstraints.value = {
    bottom: window.innerHeight - viewportMargin - (centeredTop + height),
    left: viewportMargin - centeredLeft,
    right: window.innerWidth - viewportMargin - (centeredLeft + width),
    top: viewportMargin - centeredTop,
  }
}

function cancelScheduledMeasure() {
  if (measureFrame) cancelAnimationFrame(measureFrame)
  if (settleMeasureFrame) cancelAnimationFrame(settleMeasureFrame)
  measureFrame = 0
  settleMeasureFrame = 0
}

async function refreshDragConstraints() {
  await nextTick()
  cancelScheduledMeasure()
  measureFrame = requestAnimationFrame(() => {
    updateDragConstraints()

    settleMeasureFrame = requestAnimationFrame(() => {
      updateDragConstraints()
      measureFrame = 0
      settleMeasureFrame = 0
    })
  })
}

watch(open, (value) => {
  if (value) refreshDragConstraints()
})

watch(modalKey, () => {
  if (open.value) refreshDragConstraints()
})

watch(
  () => resolveElement(modalRef.value),
  (element) => {
    resizeObserver?.disconnect()
    resizeObserver = undefined

    if (!element) return

    resizeObserver = new ResizeObserver(() => {
      refreshDragConstraints()
    })
    resizeObserver.observe(element)
  },
  { flush: "post" }
)

onMounted(() => {
  window.addEventListener("resize", refreshDragConstraints)

  console.log("🥸 - hi:")
})

onBeforeUnmount(() => {
  cancelScheduledMeasure()
  resizeObserver?.disconnect()
  window.removeEventListener("resize", refreshDragConstraints)
})

const data = useObjectData({
  id: () => props.item.id,
  type: props.item.group as MaybeRefOrGetter,
})
</script>

<template>
  <AnimatePresence>
    <UCard
      v-if="open"
      ref="modalRef"
      v-motion="{
        drag: true,
        whileDrag: {
          scale: 1.03,
          transition: {
            duration: 0.2,
            type: 'spring',
            bounce: 0.4,
          },
        },
        dragConstraints,
        initial: {
          opacity: 0,
          y: 30,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: 30,
        },
      }"
      :ui="{
        root: 'pointer-events-auto! z-1! h-max w-fit max-w-200 rounded-5xl bg-n1/90 backdrop-blur-md',
        body: 'p-0 text-nc',
        header: 'text-nc',
      }"
      @pointerdown.capture="updateDragConstraints">
      <div class="flex">
        <div class="size-fit p-4">
          <div
            v-motion="{
              layout: true,
            }"
            :default-open="true"
            :ui="{ root: 'flex flex-row' }">
            <component
              :is="cardComponent"
              v-if="cardComponent"
              :key="modalKey"
              :object-data="data" />

            <UButton
              variant="ghost"
              icon="i-right"
              :ui="{ base: 'h-full! max-h-full! rounded-full hover:bg-p3/60!' }"
              size="sm"
              aria-label="Close"
              :aria-describedby="`Collapse ${props.item.label} additional info.`" />
          </div>
        </div>
        <UCard
          variant="ghost"
          :ui="{
            root: '',
            body: 'p-0',
            header: 'p-2!',
          }">
          <template #header>
            <UButton
              variant="ghost"
              icon="i-x"
              :ui="{ base: 'rounded-full hover:bg-p3/60!' }"
              size="sm"
              aria-label="Close"
              :aria-describedby="`Close ${props.item.label} info dialog.`"
              @click.stop.prevent="open = false" />
          </template>
        </UCard>
      </div>
    </UCard>
  </AnimatePresence>
</template>
