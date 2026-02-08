<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { DialogContent, DialogPortal, useForwardPropsEmits } from 'reka-ui'

interface SheetContentProps extends DialogContentProps {
  side?: Side
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
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'w-116 min-w-116 border-l-accent/30! pt-26 drop-shadow-sm',
          props.class,
        )
      ">
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
