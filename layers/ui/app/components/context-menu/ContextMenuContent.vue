<script setup lang="ts">
import type { ContextMenuContentEmits, ContextMenuContentProps } from 'reka-ui'
import { motion } from 'motion-v'
import {
  ContextMenuContent,
  ContextMenuPortal,
  useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<
  ContextMenuContentProps & {
    class?: HTMLAttributes['class']
    align?: Align
    side?: Side
  }
>()
const emits = defineEmits<ContextMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
}
</script>

<template>
  <ContextMenuPortal>
    <AnimatePresence>
      <ContextMenuContent
        v-bind="forwarded"
        as-child>
        <motion.div
          :variants="variants"
          initial="hidden"
          animate="visible"
          :transition="{
            type: 'spring',
            bounce: 0.3,
            duration: 0.35,
          }"
          exit="hidden"
          :class="
            cn(
              'text-popover-bc border-b4/60 z-50 min-w-32 overflow-hidden rounded-lg border bg-p0/90 p-1 shadow-md backdrop-blur-md',
              props.class,
            )
          ">
          <slot />
        </motion.div>
      </ContextMenuContent>
    </AnimatePresence>
  </ContextMenuPortal>
</template>
