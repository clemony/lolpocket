<script setup lang="ts">
definePageMeta({
  title: "Theme",
  description: "Personalize your app.",
  icon: "i-ci-swatches-palette", //"i-swatch", //
  order: 5,
  layout: "settings-layout",
  path: "/settings/theme",
  prefix: "Settings",
})
</script>

<template>
  <ThemeSettings />
</template>
