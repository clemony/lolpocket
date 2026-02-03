<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { DialogContent, useForwardPropsEmits } from 'reka-ui'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SheetPortal>
    <SheetOverlay />
    <DialogContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'border-x-b3 bg-b1/92 shadow-warm-soft h-screen max-h-screen border p-0! outline-0 backdrop-blur-md focus:ring-0 focus:ring-offset-0 focus:outline-0',
          props.class,
        )
      "
      @open-auto-focus.prevent
    >
      <slot />
    </DialogContent>
  </SheetPortal>
</template>
