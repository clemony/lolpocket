<script lang="ts" setup>
definePageMeta({
  title: "App",
  description: "Manage general app utilities and settings.",
  icon: "i-gear",
  path: "/settings",
  layout: "settings-layout",
  class: "**:stroke-[2.4]!",
  prefix: "Settings",
  order: 1
})
</script>

<template>
  <AppSettings />
</template>
