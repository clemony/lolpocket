<script setup lang="ts">
definePageMeta({
  title: "Theme",
  description: "Choose your app interface colors.",
  icon: "i-swatch", //i-ci-swatches-palette
  order: 5,
  layout: "settings-layout",
  path: "/settings/theme",
  prefix: "Settings"
})
</script>

<template>
  <ThemeSettings />
</template>
