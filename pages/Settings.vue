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
    <div>
      <h1 class="text-9 px-9 dst">
        Settings
      </h1>
      <SimpleNav  :model-value="settingLinks"/>
    </div>

  </NuxtLayout>
</template>

<style scoped></style>
