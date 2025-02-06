<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { SheetVariants } from './shindex'
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { sheetVariants } from './shindex'

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

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

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
    <DialogOverlay class="isolate data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-70 bg-black/70" />

    <DialogContent
      ref="target"
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
      class="!z-80 isolate  bg-b1 px-0 focus:ring-0 focus:ring-offset-0 focus:outline-0"
    >
      <Hide>
        <DialogTitle> </DialogTitle>
        <DialogDescription> </DialogDescription>
      </Hide>
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
