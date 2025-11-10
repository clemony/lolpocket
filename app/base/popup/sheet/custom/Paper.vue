<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import {
  DialogClose,
  DialogContent,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import type { SheetVariants } from '~/base/popup/sheet/sheet-variants'
import { sheetVariants } from '../sheet-variants'

interface SheetContentProps extends DialogContentProps {
  side?: SheetVariants['side']
  class?: HTMLAttributes['class']
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
  <SheetPortal>
    <SheetOverlay />
    <DialogContent
      :class="cn(`
        h-screen max-h-screen border border-x-b3 bg-b1/92 !p-0 shadow-warm-soft
        outline-0 backdrop-blur-md
        focus:ring-0 focus:ring-offset-0 focus:outline-0
      `, sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
      @open-auto-focus.prevent>
      <slot />
    </DialogContent>
  </SheetPortal>
</template>
