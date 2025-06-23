<script setup lang="ts">
import { motion } from 'motion-v'

const route = useRoute()
</script>

<template>
  <LayoutGroup>
    <motion.div id="app" vaul-drawer-wrapper :transition="{}" class="flex flex-nowrap h-screen w-screen overflow-hidden bg-b1" :class="{ '!bg-b2/10': route.name == 'card' }" layout>
      <AppNavbar />

      <AppCommand />

      <div class="flex h-screen min-h-screen w-full overflow-hidden relative grow">
        <div class="inset-0 left-0 top-0 z-0 absolute" :class="{ 'overflow-y-auto ': route.path != '/' }">
          <slot />
        </div>
      </div>
    </motion.div>
  </LayoutGroup>
</template>

<style></style>
