<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
const emits = defineEmits<DialogContentEmits>()

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class']
  noOverlay?: boolean
  noButton?: boolean
  delay?: number
 }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const dialogOpenState = {
  opacity: 1,
  filter: 'blur(0px)',
  transition: {
    delay: props.delay || 0.2,
    duration: 0.3,
    ease: [0.17, 0.67, 0.51, 1],
    opacity: {
      delay: 0.2,
      duration: 0.2,
      ease: 'easeOut',
    },
  },
}

const dialogInitialState = {
  opacity: 0,
  filter: 'blur(10px)',
  transition: {
    duration: 0.2,
    ease: [0.67, 0.17, 0.62, 0.64],
  },
}
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 isolate bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" :class="{'opacity-0 invisible': props.noOverlay}">
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
        class="modal-container" :initial="dialogInitialState" :animate="dialogOpenState"
        :exit="dialogInitialState" :style="{ transformPerspective: 500 }">
        <slot />

        <DialogClose v-if="props.noButton"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring focus:ring-neutral disabled:pointer-events-none ">
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