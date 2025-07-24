<script lang="ts" setup>
import { motion } from 'motion-v'

const us = useUiStore()
</script>

<template>
  <div class="flex items-center justify-start">
    <Btn
      v-tippy="!us.sidebarExpanded ? 'Backpack' : null"
      @click="navigateTo('/backpack')">
      <IconWrapper
        name="radix-icons:backpack"
        class="size-4.5 "
        :class="{ 'top-0': !us.sidebarExpanded }" />

      <span
        class="tldr-40 justify-start justify-self-start text-start"
        :class="{ 'opacity-0  -tracking-[100%] pointer-events-none': !us.sidebarExpanded }">
        Backpack
      </span>
    </Btn>
  </div>
</template>