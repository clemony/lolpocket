<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NavigationMenuLink
    :class="cn('grid relative place-items-center size-full ', className)">
    <slot />
  </NavigationMenuLink>
</template>
