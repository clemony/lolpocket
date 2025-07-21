<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'base/navigation-menu/navmenuvariantindex';

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button :class="cn(navigationMenuTriggerStyle(), 'flex flex-col justify-center size-full items-start py-2', className)">
    <slot />
  </button>
</template>