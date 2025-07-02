<script setup lang="ts">
import { motion } from 'motion-v'

import type { ContextMenuContentEmits, ContextMenuContentProps } from 'reka-ui'
import {
  ContextMenuContent,

  ContextMenuPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ContextMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

defineOptions({
inheritAttrs: false
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const variants = {
visible: {
  opacity: 1,
  scale: 1,
},
hidden: {
  opacity: 0,
  scale: 0.6,
}
}
</script>

<template>
  <ContextMenuPortal>
    <AnimatePresence>
    <ContextMenuContent as-child
      v-bind="forwarded, $attrs">
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
      :class="cn(
        'z-50 min-w-32 overflow-hidden rounded-lg border border-b2  bg-b1/80 backdrop-blur-md p-1 text-popover-bc shadow-md ',
        props.class,
      )">
      <slot />
    </motion.div>
    </ContextMenuContent>
  </AnimatePresence>
  </ContextMenuPortal>
</template>
