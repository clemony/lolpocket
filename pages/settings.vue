<script setup lang="ts">
definePageMeta({
})
</script>

<template>
  <NuxtLayout name="header-layout" class="pt-0 overflow-hidden  pt-24 @container/settings ">
    <div class="w-full mb-22 px-18">
    <h1 class="flex gap-3">Settings

      <LazyAdminLink />
    </h1>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
