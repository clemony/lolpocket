<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import {
  DialogClose,
  DialogContent,

  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'

import type { HTMLAttributes } from 'vue'
import type { SheetVariants } from './sheetIndex'
import { sheetVariants } from './sheetIndex'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'side', 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " />

    <DialogContent
      :class="cn('overflow-hidden h-screen drop-shadow-sm drop-shadow-black  max-h-screen', sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }">
      <slot />

      <!--       <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <icon name="x-sm" class="size-6" />
      </DialogClose> -->
    </DialogContent>
  </DialogPortal>
</template>
