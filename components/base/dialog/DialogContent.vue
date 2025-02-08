<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'radix-vue'

const props = withDefaults(
  defineProps<
    DialogContentProps & {
      class?: HTMLAttributes['class']
      noAnimateIn?: boolean
      overlayOpacity?: number
    }
  >(),
  {
    overlayOpacity: 25,
  },
)
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed inset-0 z-80  data-[state=open]:animate-in data-[state=open]:fade-in-0 dialog-overlay"
      :style="{
        backgroundColor: '#000000',
        opacity: `${props.overlayOpacity}%`,
      }"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'bg-b1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0   data-[state=closed]:slide-out-to-bottom-[2%] data-[state=closed] z-500 :slide-out-to-bottom-[2%] data-[state=open]:slide-in-from-lbottom-1/2 data-[state=open]:slide-in-from-bottom-[2%] border-b3 fixed top-[45%] left-1/2  grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border p-6 shadow-lg duration-200',
          props.class,
        )
      "
    >
      <Hide>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog Description</DialogDescription>
      </Hide>
      <slot />

      <!--       <DialogClose
        class=" focus:ring-neutral/80  cursor-pointer data-[state=open]:text-bc/60  shadow-xs absolute top-4.25  right-5 rounded-sm  transition-opacity hover:opacity-100 focus:ring-1 focus:outline-hidden grid place-items-center disabled:pointer-events-none hover:stroke-[1.5]"
      >
        <icon
          name="x"
          class="size-3.5"
        />
        <span class="sr-only">Close</span>
      </DialogClose> -->
    </DialogContent>
  </DialogPortal>
</template>
