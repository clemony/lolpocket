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
  <NavigationMenu class="fixed top-22 left-18.75 z-10">
    <NavigationMenuList as-child>
      <motion.div
        :variants="variants"
        initial="hidden"
        exit="hidden"
        class="
          flex-col place-items-center gap-2.5 rounded-full border border-b3
          bg-b1/80 px-2 py-3.5 opacity-0 shadow-warm-soft backdrop-blur-lg
        ">
        <NavigationMenuItem as-child>
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
              class="
                w-50 max-w-50 rounded-xl border-b3/70 bg-b1/80 shadow-warm-soft
                shadow-black/6 drop-shadow-none backdrop-blur-lg
              ">
              <slot name="menu-content" />
            </HoverPopContent>
          </HoverCard>
        </NavigationMenuItem>

        <slot name="nav-links" />
      </motion.div>
    </NavigationMenuList>
  </NavigationMenu>
</template>
