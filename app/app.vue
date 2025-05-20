<script setup lang="ts">
const as = useAccountStore()
const appConfig = useAppConfig()
const useHead = useHeader()

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'midnight')
  getPatch()
  useAuth()
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--color-neutral)" />

    <Toast
      position="top-right"
      :expand="true"
      :duration="Infinity" />

    <LazyNewPocketDialog />
    <LazyNuxtPage :puuid="as.userAccount.riot.puuid" />
  </NuxtLayout>
</template>

<style></style>
