<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes['class']
    noOverlay?: boolean
    noButton?: boolean
    delay?: number
  }
>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const variants = {
  dialogInitialState: {
    filter: 'blur(10px)',
    opacity: 0,
    rotateX: 5,
    rotateY: 25,
    transformPerspective: 500,
    z: -100,
  },
  dialogOpenState: {
    filter: 'blur(0px)',
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
}
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0
        isolate z-50 bg-black/80
      "
      :class="{ 'invisible opacity-0': props.noOverlay }">
      <Motion
        class="overlay"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }" />
    </DialogOverlay>

    <DialogContent
      as-child
      v-bind="forwarded"
      :class="
        cn('data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-[48%] fixed top-1/2 left-1/2 isolate z-50 max-w-160 translate-x-[-50%] translate-y-[-50%] gap-4 border bg-b1 px-10 py-8 shadow-lg sm:rounded-xl',
          props.class,
        )
      ">
      <Motion
        class="modal-container"
        :variants="variants"
        :transition="{
          duration: 0.2,
          ease: 'easeOut',
        }"
        initial="dialogInitialState"
        animate="dialogOpenState"
        exit="dialogInitialState"
        :style="{ transformPerspective: 500 }">
        <slot />

        <DialogClose
          v-if="props.noButton"
          class="
            ring-offset-background focus:ringneutral absolute top-4 right-4
            rounded-sm opacity-70 transition-opacity hover:opacity-100
            focus:ring focus:outline-none disabled:pointer-events-none
          ">
          <icon
            name="x-sm"
            class="size-6" />

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
