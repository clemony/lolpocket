<script setup lang="ts">
const {
  side = "top",
  sideOffset = 16,
  arrow = true,
  class: className,
  icon,
  img,
  text,
  trailingIcon,
  ui,
  label,
  disabled,
} = defineProps<{
  class?: HTMLAttributes["class"]
  text?: string
  img?: string
  ui?: Record<string, string>
  icon?: string
  arrow?: boolean
  side?: Side
  sideOffset?: number
  trailingIcon?: string
  disabled?: boolean
  label?: string
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
  nextX = ev.clientX
  nextY = ev.clientY
  anchor.value = { x: nextX, y: nextY }
  open.value = true
}

function onPointerLeave() {
  open.value = false
}

function onPointerMove(ev: PointerEvent) {
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
    :open="open"
    :delay-duration="0"
    :disable-hoverable-content="true"
    :reference="reference"
    :ui="{ content: 'z-101' }"
    :content="{
      side,
      sideOffset,
      updatePositionStrategy: 'always',
    }">
    <div
      :class="cn('', className)"
      @pointerenter="onPointerEnter"
      @pointerleave="onPointerLeave"
      @pointermove="onPointerMove">
      <slot>
        <span class="hover:underline">{{ label }}</span>
      </slot>
    </div>

    <template #content>
      <slot name="content">
        <div class="inline-flex gap-1.5 align-baseline">
          <Img
            v-if="img"
            loading-type="spinner"
            :src="img"
            :alt="`${text}-icon`"
            class="size-4.5 rounded-full" />
          <Icon v-if="icon" :name="icon" class="size-3.5 text-nc" />
          {{ text }}

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
    </template>
  </UTooltip>
</template>
