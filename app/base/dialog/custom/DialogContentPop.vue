<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import type { Easing, EasingDefinition } from 'motion-v'
import { AnimatePresence } from 'motion-v'
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
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
    <AnimatePresence>
      <DialogOverlay
        class="fixed inset-0 z-50 isolate bg-black/70"
        :class="{ 'opacity-0 invisible': props.noOverlay }">
        <AnimatePresence>
          <Motion
            class="overlay"
            :initial="overlayInitialState"
            :animate="overlayOpenState"
            :transition="{
              ease: 'easeOut',
              duration: 0.3,
            }"
            :exit="overlayInitialState" />
        </AnimatePresence>
      </DialogOverlay>

      <DialogContent
        as-child
        v-bind="forwarded"
        :class="
          cn(
            'fixed  left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-50 isolate  max-w-160  gap-4 border bg-b1 px-10 py-8 shadow-lg data-[state=closed]:duration-200  data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-95  data-[state=closed]:slide-out-to-bottom-[48%]  sm:rounded-xl',
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
            duration: 0.4,
          }"
          :exit="dialogInitialState">
          <slot />

          <DialogClose
            v-if="props.noButton"
            class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring focus:ring-n1 disabled:pointer-events-none">
            <icon
              name="x-sm"
              class="size-6" />

            <span class="sr-only">Close</span>
          </DialogClose>
        </Motion>
      </DialogContent>
    </AnimatePresence>
  </DialogPortal>
</template>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  inset: 0;
  z-index: 9999998;
  backdrop-filter: blur(3px);
}
</style>
