<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'base/navigation-menu/navmenuvariantindex'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button :class="cn(navigationMenuTriggerStyle())">
    <slot />
  </button>
</template>