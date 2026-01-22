<script setup lang="ts">
import type { DialogOverlayProps } from 'reka-ui'
import { useAnimate } from 'motion-v'
import { DialogOverlay } from 'reka-ui'

const props = defineProps<
  DialogOverlayProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const [overlay, animate] = useAnimate()

function onStateChange(state: string) {
  animate(
    overlay.value,
    { opacity: state === 'open' ? 1 : 0 },
    { duration: 0.3, ease: 'easeInOut' }
  )
}
</script>

<template>
  <DialogOverlay
    ref="overlay"
    data-slot="sheet-overlay"
    :class="cn('fixed inset-0 z-40 bg-black/80', props.class)"
    v-bind="delegatedProps"
    @update:state="onStateChange">
    <slot />
  </DialogOverlay>
</template>