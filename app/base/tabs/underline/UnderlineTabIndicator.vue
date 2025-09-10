<script lang="ts" setup>
import { motion } from 'motion-v'
import type { TabsIndicatorProps } from 'reka-ui'
import { TabsIndicator } from 'reka-ui'

defineOptions({ inheritAttrs: false })

const props = defineProps<
  TabsIndicatorProps & {
    class?: HTMLAttributes['class']
  }
>()
const forwarded = reactiveOmit(props, 'class')
</script>

<template>
  <TabsIndicator
    v-bind="{ ...forwarded, ...$attrs }"
    as-child>
    <motion.div

      :animate="{
        transform: 'translateX(var(--reka-tabs-indicator-position)',
        width: 'var(--reka-tabs-indicator-size)' }"

      :transition="{
        duration: 0.3,
      }"
      :class="cn('absolute -bottom-1 left-0 h-[2px] transition-all  px-2', props.class)">
      <motion.div class="h-full w-full rounded-md bgneutral/50 h-2px " />
    </motion.div>
  </TabsIndicator>
</template>
