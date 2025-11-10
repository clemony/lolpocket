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
        class="
          flex h-11 w-full flex-row flex-nowrap items-start justify-start gap-6
          overflow-hidden
        "
        :variant="variant">
        <div
          class="
            grid h-full w-4.75 shrink-0 place-items-center place-self-center
          ">
          <slot name="icon" />
        </div>

        <motion.div
          :variants="variants"
          class="w-full overflow-hidden text-3 font-medium">
          <slot name="content" />
        </motion.div>
      </Button>
    </NavMenuLink>
  </NavigationMenuItem>
</template>
