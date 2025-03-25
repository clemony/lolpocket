<script setup lang="ts">
import { colord, extend } from 'colord'

const nc2 = computed (() => {
  const c = getTailwindVar('--color-neutral')
  console.log('💠 - nc2 - c:', c)
  return colord(c).lighten(0.8).toHex()
})
console.log('💠 - nc2 - nc2:', nc2)
</script>

<template>
  <DropdownMenuItem class="hover:!bg-b3/15 rounded-md-2">
    <slot />
  </DropdownMenuItem>
</template>

<style scoped>
:root {
  --color-nc2: v-bind(nc2);
}
</style>