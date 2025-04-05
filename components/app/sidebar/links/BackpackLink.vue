<script lang="ts" setup>
import { motion } from 'motion-v'

const us = useUiStore()
</script>

<template>
  <div class="flex items-center justify-start">
    <SidebarButton v-tippy="!us.sidebarExpanded ? 'Backpack' : null" @click="navigateTo('/backpack')">
      <SidebarIcon name="radix-icons:backpack" class="size-4.75 stroke-2" :class="{'top-0': !us.sidebarExpanded}"/>
<span class="tldr-40 justify-start justify-self-start text-start" :class="{'opacity-0  -tracking-[100%] pointer-events-none': !us.sidebarExpanded }">
    Backpack
</span>
    </SidebarButton>
  </div>
</template>