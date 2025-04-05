<script lang="ts" setup>
import { motion } from 'motion-v'

const us = useUiStore()
</script>

<template>
  <div>
    <span v-if="us.sidebarExpanded" class="text-3 pt-4 text-bc/40  tracking-tight px-2 font-semibold text-left ">
      <slot />
    </span>

    <SidebarSeparator v-else class="!bg-b3/70" />
  </div>
</template>