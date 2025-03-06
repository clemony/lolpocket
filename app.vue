<script setup lang="ts">
const ts = useTempStore()
const as = useAccountStore()
const ds = useDataStore()
const appConfig = useAppConfig()
const useHead = useHeader()

// const router = useRouter();
// const history = router.options.history;

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'midnight')
  getPatch()
})
</script>

<template>
  <NuxtLayout>
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<style></style>
