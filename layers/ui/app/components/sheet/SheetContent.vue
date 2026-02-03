<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { useAnimate } from 'motion-v'
import { DialogContent, useForwardPropsEmits } from 'reka-ui'

interface SheetContentProps extends DialogContentProps {
  side?: Side
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<SheetContentProps>()
const emits = defineEmits<DialogContentEmits>()

const delegated = reactiveOmit(props, 'side', 'class')
const forwarded = useForwardPropsEmits(delegated, emits)

const [scope, animate] = useAnimate()

function onStateChange(state: string) {
  const el = scope.value as HTMLElement
  if (!el) return

  let closedX = 0
  let closedY = 0

  if (props.side === 'left') closedX = -40
  if (props.side === 'right') closedX = 40
  if (props.side === 'top') closedY = -40
  if (props.side === 'bottom') closedY = 40

  if (state === 'open') {
    animate(el, { opacity: 1, x: 0, y: 0 }, { duration: 0.28 })
  }
  else {
    animate(el, { opacity: 0, x: closedX, y: closedY }, { duration: 0.22 })
  }
}
</script>

<template>
  <DialogContent
    v-bind="{ ...forwarded, ...$attrs }"
    ref="scope"
    :class="
      cn(
        'z-55 h-screen max-h-screen overflow-hidden drop-shadow-sm drop-shadow-black/20',
        props.class,
      )
    "
    @update:state="onStateChange"
    @open-auto-focus.stop
  >
    <slot />
  </DialogContent>
</template>
