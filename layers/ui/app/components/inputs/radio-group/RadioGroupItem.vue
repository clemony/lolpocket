<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui'
import { motion } from 'motion-v'
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from 'reka-ui'

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="
      cn(
        'border-neutral/60 bg-b1 aspect-square size-5 rounded-full border disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <AnimatePresence>
      <RadioGroupIndicator class="flex items-center justify-center">
        <slot>
          <motion.div
            :animate="{ opacity: 1, scale: 1 }"
            :initial="{ opacity: 0, scale: 0 }"
            :exit="{ opacity: 0, scale: 0 }"
            :transition="{ type: 'spring', duration: 0.3, bounce: 0.3 }"
          >
            <icon
              v-if="forwarded.value"
              class="text-neutral -mt-px size-5.25"
              name="codicon:circle-filled"
            />
          </motion.div>
        </slot>
      </RadioGroupIndicator>
    </AnimatePresence>
  </RadioGroupItem>
</template>
