<script setup lang="ts">
const { class: className, hash , to, at} = defineProps<{
  class?: HTMLAttributes['class']
  to?: string
  hash?: boolean
  at?: boolean
}>()
</script>

<template>
  <NavigationMenuLink @click="navigateTo(to)"  :class="cn('font-medium text-2 text-bc/70 underline-offset-2 hover:underline hover:text-bc flex  items-center', className)">
    <icon v-if="at" name="at" class="size-3.75" />
    <icon v-if="hash" name="hash" class="size-3.75" />
    <slot  />
  </NavigationMenuLink>
</template>