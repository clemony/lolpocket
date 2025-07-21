<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import {
  DialogClose,
  DialogContent,

  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'], noOverlay?: boolean, noButton?: boolean, delay?: number }>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const variants = {
  dialogOpenState: {
    opacity: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  dialogInitialState: {
    opacity: 0,
    filter: 'blur(10px)',
    z: -100,
    rotateY: 25,
    rotateX: 5,
    transformPerspective: 500,
  },
}
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 isolate bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" :class="{ 'opacity-0 invisible': props.noOverlay }">
      <Motion class="overlay" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :exit="{ opacity: 0 }" />
    </DialogOverlay>

    <DialogContent
      as-child

      v-bind="forwarded"
      :class="
        cn(
          'fixed  left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-50 isolate  max-w-160  gap-4 border bg-b1 px-10 py-8 shadow-lg data-[state=closed]:duration-200  data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-95  data-[state=closed]:slide-out-to-bottom-[48%]  sm:rounded-xl',
          props.class,
        )">
      <Motion
        class="modal-container" :variants="variants"
        :transition="{
          duration: 0.2,
          ease: 'easeOut',
        }" initial="dialogInitialState" animate="dialogOpenState"
        exit="dialogInitialState" :style="{ transformPerspective: 500 }">
        <slot />

        <DialogClose
          v-if="props.noButton"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring focus:ring-n1 disabled:pointer-events-none ">
          <icon name="x-sm" class="size-6" />

          <span class="sr-only">Close</span>
        </DialogClose>
      </Motion>
    </DialogContent>
  </DialogPortal>
</template>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 9999998;
  backdrop-filter: blur(3px);
}
</style>