<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes['class']
    noAnimateIn?: boolean
  }
>()
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
      class="data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed inset-0 z-50 bg-black/25"
      :class="{ 'data-[state=open]:animate-in data-[state=open]:fade-in-0 ': props.noAnimateIn == true }"
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
      <slot />

      <DialogClose
        class="ring-offset-b1 focus:ring-neutral/80 data-[state=open]:bg-b2/60 data-[state=open]:text-bc/60 absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-1 focus:outline-hidden disabled:pointer-events-none"
      >
        <icon
          name="teenyicons:x-small-outline"
          class="h-4 w-4"
        />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
