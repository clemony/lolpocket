<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/navmenuvariantindex'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button :class="cn(navigationMenuTriggerStyle())">
    <slot />
  </button>
</template>