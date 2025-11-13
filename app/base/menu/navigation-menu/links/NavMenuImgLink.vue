<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <NavigationMenuLink
    :class="cn('relative grid size-full place-items-center', className)"
  >
    <slot />
  </NavigationMenuLink>
</template>
