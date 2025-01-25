<script setup lang="ts">
const ts = useTempStore()
const as = useAccountStore()
const ds = useDataStore()
const colorMode = useColorMode()
const appConfig = useAppConfig()
const useHead = useHeader()
// const router = useRouter();
// const history = router.options.history;

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', 'light')

  // os
  ts.userOS = getOS()

  await preloadComponents('HoverSidebar')
})

const scroll = ref(null)
const { isScrolling } = useScroll(scroll)
</script>

<template>
  <NuxtLayout>
    <!-- <Progress /> -->
    <LazyNuxtPage :page-key="(route) => route.fullPath" />

    <!-- <StepLoader /> -->
  </NuxtLayout>
</template>

<style></style>
