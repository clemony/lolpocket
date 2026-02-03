<script setup lang="ts">
const { side = 'top', sideOffset = 14, arrow = true, class: className, icon, img, text, trailingIcon } = defineProps<{
  class?: HTMLAttributes['class']
  text?: string
  img?: string
  icon?: string
  arrow?: boolean
  side?: Side
  sideOffset?: number
  trailingIcon?: string
}>()

const open = ref(false)
const anchor = ref({ x: 0, y: 0 })

const reference = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      bottom: anchor.value.y,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      ...anchor.value
    } as DOMRect)
}))
</script>

<template>
  <UTooltip
    :open="open"
    :reference="reference"
    :arrow
    :ui="{ content: 'z-101' }"
    :content="{ side, sideOffset, updatePositionStrategy: 'always' }"
  >
    <div
      :class="cn('', className)"
      @pointerenter="open = true"
      @pointerleave="open = false"
      @pointermove="(ev: PointerEvent) => {
        anchor.x = ev.clientX
        anchor.y = ev.clientY
      }"
    >
      <slot />
    </div>

    <template #content>
      <slot name="content">
        <div class="inline-flex align-baseline gap-1.5">
          <Img v-if="img" loading-type="spinner" :src="img" :alt="`${text}-icon`" class="size-4.5 rounded-full" />
          <Icon v-if="icon" :name="icon" class="size-3.5 text-nc" />
          {{ text }}

          <Icon v-if="trailingIcon" :name="trailingIcon" :class="cn('size-3.5 ml-3 inline text-nc', { 'scale-120 translate-y-0.5': trailingIcon === 'i' })" />
        </div>
      </slot>
    </template>
  </UTooltip>
</template>
