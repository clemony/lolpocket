<script setup lang="ts">
import { motion } from 'motion-v'


const route = useRoute()


</script>

<template>
  <LayoutGroup>
    <motion.div :transition="{}" class="h-screen   w-screen flex overflow-hidden flex-nowrap " :class="{ '!bg-b2/10': route.name == 'card' }" layout>
      <AppNavbar />
      <AppCommand />
      <div class="flex relative overflow-hidden h-screen min-h-screen grow w-full ">
   
        <div class="inset-0 absolute left-0 top-0 z-0" :class="{ 'overflow-y-auto ': route.path != '/' }">
          <slot />
        </div>
      </div>
    </motion.div>
  </LayoutGroup>
</template>

<style></style>
