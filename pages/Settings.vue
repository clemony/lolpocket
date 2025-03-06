<script setup lang="ts">
const as = useAccountStore()

definePageMeta({
  name: 'settings',
  path: '/settings',
})
const route = useRoute()
</script>

<template>
  <NuxtLayout name="full-nav">
    <div class="w-full flex-col pl-14 ">
      <h1 class="text-9 dst pl-6">
        Settings
      </h1>
      <SimpleNav :model-value="settingLinks" />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
