<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import type { SheetVariants } from '~/base/sheet/sheet-variants'
import { sheetVariants } from '~/base/sheet/sheet-variants'

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
  <DialogPortal>
    <DialogContent
      :class="
        cn(
          'pt-26 w-116 min-w-116 !border-l-accent/30 drop-shadow-sm',
          sheetVariants({ side }),
          props.class,
        )
      "
      v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
