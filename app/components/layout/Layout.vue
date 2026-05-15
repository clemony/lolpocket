<script lang="ts" setup>
const { color = "base" } = defineProps<{
  color?: "base" | "transparent" | "primary"
}>()
</script>

<template>
  <div class="contents">
    <Navbar :color />
    <UMain>
      <slot />
    </UMain>
    <SiteFooter />
  </div>
</template>
