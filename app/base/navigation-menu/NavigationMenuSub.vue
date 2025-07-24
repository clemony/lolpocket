<script setup lang="ts">
import { NavigationMenuSub } from 'reka-ui'

const { defaultValue } = defineProps<{
  defaultValue?: string
}>()
</script>

<template>
  <NavigationMenuSub :default-value="defaultValue">
    <slot />
  </NavigationMenuSub>
</template>