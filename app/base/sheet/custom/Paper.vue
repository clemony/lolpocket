<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import {
  DialogClose,
  DialogContent,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import type { SheetVariants } from '~/base/sheet/sheet-variants'
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
  <DialogContent
    :class="cn('max-h-screen h-screen bg-b1/92 backdrop-blur-md !p-0 focus:ring-0 focus:ring-offset-0 focus:outline-0 outline-0 border border-x-b3 shadow-warm-soft', sheetVariants({ side }), props.class)"
    v-bind="{ ...forwarded, ...$attrs }"
    @open-auto-focus.prevent>
    <slot />
  </DialogContent>
</template>
