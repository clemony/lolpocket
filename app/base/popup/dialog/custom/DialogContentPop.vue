<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { AnimatePresence, motion } from 'motion-v'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes['class']
    noOverlay?: boolean
    noButton?: boolean
    delay?: number
    side?: Side
  }
>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const dialogOpenState = {
  opacity: 1,
  scale: 1,
}

const dialogInitialState = {
  opacity: 0,
  scale: 0.8,
}

const overlayOpenState = {
  opacity: 1,
}

const overlayInitialState = {
  opacity: 0,
}
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="blur-0! fixed inset-0 isolate z-50 bg-black/70"
      :class="{ 'invisible opacity-0': props.noOverlay }">
      <motion.div
        class="overlay"
        :initial="overlayInitialState"
        :animate="overlayOpenState"
        :transition="{
          ease: 'easeOut',
          duration: 0.3,
        }"
        :exit="overlayInitialState" />
    </DialogOverlay>

    <DialogContent
      as-child
      v-bind="forwarded"
      :class="
        cn('data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-[48%] fixed top-1/2 left-1/2 isolate z-50 translate-x-[-50%] translate-y-[-50%] gap-4 border bg-b1 px-10 py-8 shadow-lg sm:rounded-xl',
           props.class,
        )
      ">
      <Motion
        class="modal-container"
        :initial="dialogInitialState"
        :animate="dialogOpenState"
        :transition="{
          type: 'spring',
          bounce: 0.35,
          duration: 0.3,
        }"
        :exit="dialogInitialState">
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
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  inset: 0;
  z-index: 9999998;
}
</style>
