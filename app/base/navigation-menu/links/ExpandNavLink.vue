<script setup lang="ts">
import { motion } from 'motion-v'

const { size, variant } = defineProps<{
  variant?: any
  size?: any
}>()
const variants = {
  hidden: {
    display: 'none',
    opacity: 0,
  },
  visible: {
    display: 'inline',
    opacity: 1,
  },
}
</script>

<template>
  <NavigationMenuItem class="size-full max-w-full">
    <NavMenuLink as-child>
      <Button
        class="h-11 flex flex-row flex-nowrap items-start w-full gap-6 justify-start overflow-hidden"
        :variant="variant">
        <div
          class="w-4.75 h-full place-self-center grid place-items-center shrink-0">
          <slot name="icon" />
        </div>

        <motion.div
          :variants="variants"
          class="w-full text-3 font-medium overflow-hidden">
          <slot name="content" />
        </motion.div>
      </Button>
    </NavMenuLink>
  </NavigationMenuItem>
</template>
