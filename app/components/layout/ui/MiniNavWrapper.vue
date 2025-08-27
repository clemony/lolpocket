<script setup lang="ts">
import { motion } from 'motion-v'

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translateX(-100%) scale(0.99)',
  },
  visible: {
    opacity: 1,
    transform: 'translateX(0) scale(1)',
  },
}
</script>

<template>
  <NavigationMenu
    class="fixed top-22 left-18.75 z-10">
    <NavigationMenuList as-child>
      <motion.div
        :variants="variants"
        initial="hidden"
        :animate="us().showMiniNav ? 'visible' : 'hidden'"
        exit="hidden"
        class="opacity-0 border border-b3 py-3.5 px-2 rounded-full bg-b1/80 backdrop-blur-lg gap-2.5 place-items-center flex-col shadow-warm-soft">
        <NavigationMenuItem
          as-child>
          <HoverCard>
            <!-- ------------------------------ trigger ------------------------------ -->

            <HoverCardTrigger
              as-child
              class="mb-1">
              <slot name="menu-trigger" />
            </HoverCardTrigger>

            <!-- ------------------------------ content ------------------------------ -->

            <HoverPopContent
              :side-offset="14"
              :align-offset="-6"
              align="start"
              side="right"
              class="w-50 shadow-warm-soft shadow-black/6 border-b3/70 drop-shadow-none bg-b1/80 backdrop-blur-lg  rounded-xl max-w-50 ">
              <slot name="menu-content" />
            </HoverPopContent>
          </HoverCard>
        </NavigationMenuItem>

        <slot
          name="nav-links" />
      </motion.div>
    </NavigationMenuList>
  </NavigationMenu>
</template>