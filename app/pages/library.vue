<script setup lang="ts">
definePageMeta({
  order: 3,
  command: defineAsyncComponent(
    () =>
      import("~/components/layout/navigation/command/route/LibraryCommand.vue"),
  ),
  icon: "i-lucide-library",
  title: "Library",
})
</script>

<template>
  <NuxtPage />
</template>
