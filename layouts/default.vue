<script setup lang="ts">
import { motion } from 'motion-v'

const us = useUiStore()

const route = useRoute()
</script>

<template>
  <LayoutGroup>
    <motion.div :transition="{}" class="h-screen  w-screen flex overflow-hidden flex-nowrap " layout>
      <AppNavbar />
      <AppCommand  />
      <div class="flex flex-col  h-screen min-h-screen grow w-full">
        <NuxtLoadingIndicator color="var(--color-neutral)" />

        <Toast
          position="top-center"
          :expand="true"
          :duration="Infinity" />

        <LazyNewPocketDialog />

        <slot />
      </div>
    </motion.div>
  </LayoutGroup>
</template>

<style></style>
