<script lang="ts" setup>
import { motion } from 'motion-v'

const us = useUiStore()
</script>

<template>
  <div

    class="w-fit overflow-hidden  items-center text-nowrap tldr-40  justify-start justify-self-start text-start shrink-0 truncate justify-start " :class="{ ' opacity-0   pointer-events-none': !us.sidebarExpanded }">
    <slot />
  </div>
</template>