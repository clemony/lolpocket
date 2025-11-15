<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { DialogContent, useForwardPropsEmits } from 'reka-ui'
import type { SheetVariants } from './sheet-variants'
import { sheetVariants } from './sheet-variants'

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
    :class="
      cn(
        'h-screen max-h-screen overflow-hidden drop-shadow-sm drop-shadow-black',
        sheetVariants({ side }),
        props.class,
      )
    "
    v-bind="{ ...forwarded, ...$attrs }"
    @open-auto-focus.stop>
    <slot />
  </DialogContent>
</template>
