<script setup lang="ts">
const as = useAccountStore()
console.log('💠 - ajjjjjs:', as.currentSession)
const ix = useIndexStore()
const appConfig = useAppConfig()

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'midnight')
  // useAuth()
  ix.loadDefaults()
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
