<script lang="ts" setup>
definePageMeta({
  title: "Live",
  description: "Real time match data.",
  icon: "i-bx-play-circle",
  order: 4,
  search: false,
  class: " scale-105",
})
</script>

<template>
  <div class="w-full">
    <NuxtLayout name="sticky-aside-layout">
      <template #left> </template>
      <PagePlaceholder />
    </NuxtLayout>
  </div>
</template>
