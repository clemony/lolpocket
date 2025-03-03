<script setup lang="ts">
const ts = useTempStore()
const as = useAccountStore()
const ds = useDataStore()
const appConfig = useAppConfig()
const useHead = useHeader()

// const router = useRouter();
// const history = router.options.history;

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'daylight')
  getPatch()
})
</script>

<template>
  <NuxtLayout>
    <!-- <Progress /> -->
    <LazyNuxtPage />

    <!-- <StepLoader /> -->
  </NuxtLayout>
</template>

<style></style>
