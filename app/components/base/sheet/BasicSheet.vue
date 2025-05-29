<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { DialogClose, DialogContent, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { SheetVariants } from '~/components/base/sheet/sheetIndex'

import { sheetVariants } from './sheetIndex'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<
  SheetContentProps & {

  }
>()
// pr
const emits = defineEmits<
  DialogContentEmits & {
    'update:clicked'
  }
>()

const delegatedProps = reactiveOmit(props, 'side', 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const target = ref()
const { isOutside } = useMouseInElement(target)

function handleClick() {
  if (isOutside.value) {
    emits('update:clicked')
  }
}
</script>

<template>
  <DialogPortal>
    <DialogClose class="pointer-events-auto" as-child @click="handleClick">
    <!--   <DialogOverlay class="top-[5vh] isolate data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-57 bg-black/40" /> -->
    </DialogClose>
    <DialogContent
      ref="target"
      :class="cn('', sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
      class="!z-58 isolate !pt-[5vh] max-h-screen  bg-b1/92 backdrop-blur-md !p-0 focus:ring-0 focus:ring-offset-0 focus:outline-0 outline-0 border border-b2 -x-b2  "
      @open-auto-focus.prevent
      @interact-outside="event => {
        const target = event.target as HTMLElement;
        if (target?.closest('.sidebar-button')) return event.preventDefault()
      }"
    >
      <Hide>
        <DialogTitle> </DialogTitle>
        <DialogDescription> </DialogDescription>
      </Hide>
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
