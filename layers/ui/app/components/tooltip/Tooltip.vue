<script setup lang="ts">
const { side = 'top', arrow = true, class: className, icon, img, text } = defineProps<{
  class?: HTMLAttributes['class']
  text?: string
  img?: string
  icon?: string
  arrow?: boolean
  side?: Side
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
    :content="{ side, sideOffset: 14, updatePositionStrategy: 'always' }"
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
        <Img v-if="img" loading-type="spinner" :src="img" :alt="`${text}-icon`" class="size-5 rounded-full" />
        <Icon v-if="icon" :name="icon" class="size-3.5 text-nc" />
        {{ text }}
      </slot>
    </template>
  </UTooltip>
</template>
