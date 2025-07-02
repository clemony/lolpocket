<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/navmenuvariantindex'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button :class="cn(navigationMenuTriggerStyle(),'flex flex-col size-full py-2', className)">
    <slot />
  </button>
</template>