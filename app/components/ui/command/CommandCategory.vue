<script lang="ts" setup>
import { motion } from 'motion-v'

const { results, name } = defineProps<{
  name: string
  results: any
}>()

const variants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
  },
  visible: {
    opacity: 1,
    maxHeight: '100%',
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
    transform: 'translateY(-4px)',
  },
  visible: {
    opacity: 1,
    maxHeight: '250px',
    transform: 'translateY(0)',
  },

  exit: {
    opacity: 0,
    maxHeight: 0,
    transform: 'translateY(-4px)',
  },
}
</script>

<template>
  <Collapsible v-if="results.length" :default-open="true" as-child>
    <motion.div
          :variants="variants"
          initial="hidden"
          :animate="results.length ? 'visible' : 'hidden'"
          exit="hidden">
    <AnimatePresence as="div" multiple>
      <CollapsibleTrigger as-child>
        <motion.button
          class="px-4 z-1 g h-10 flex gap-3 items-center font-medium w-full group"
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden">
          <span class="flex  items-center group-hover:text-bc group-hover:**:text-bc **:text-bc/60 text-bc/70  gap-3">
            <slot name="icon" />
            {{ name }}
          </span>
          <Grow />
          <Badge class="tracking-normal mr-1 group-hover:opacity-100">
            {{ results.length }}
          </Badge>
          <PlusMinusExpand class="!text-bc " />
        </motion.button>
      </CollapsibleTrigger>

        <Motion as-child
          :variants="contentVariants"
          initial="hidden"
          animate="visible"
          exit="exit" class="overflow-hidden">
      <CollapsibleContent class="CollapsibleContent">
          <motion.ul
            class="flex relative  flex-col   ml-5 pl-2 pr-4 border-l border-l-b4  overflow-auto max-h-70 "
            :transition="{
              staggerChildren: 0.5,
              type: 'spring',
              bounce: 0.2,
            }">
            <slot />
          </motion.ul>
      </CollapsibleContent>
        </Motion>
    </AnimatePresence>
  </motion.div>
  </Collapsible>
</template>