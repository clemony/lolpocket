<script setup lang="ts">
const as = useAccountStore()
console.log("💠 - as:", as.userAccount)
const us = useUiStore()

const route = useRoute()

const ix = useIndexStore()
const appConfig = useAppConfig()
const signInOpen = ref(false)

onMounted(async () => {
  document.documentElement.setAttribute('data-theme', as.dataTheme ? as.dataTheme : 'midnight')
  useAuth()
const us = useUiStore()
const ix = useIndexStore()
 ix.loadDefaults()
})
</script>

<template>
    <div id="app" vaul-drawer-wrapper  class="flex flex-nowrap h-screen w-screen overflow-hidden bg-b1" :class="{ '!bg-b2/10': route.name == 'card' }" >
      <AppNavbar :sign-in-open="signInOpen" @reset:sign-in="signInOpen = false"/>

      <LazyAppCommand hydrate-on-interact/>

      <div class="flex h-screen min-h-screen w-full overflow-hidden relative grow">
        <div class="inset-0 left-0 top-0 z-0 absolute" :class="{ 'overflow-y-auto ': route.path != '/' }">
 <NuxtLoadingIndicator color="var(--color-neutral)" />

    <Toast
      position="top-right"
      :expand="true"
      :duration="Infinity" />


    <LazyNuxtPage :puuid="as.userAccount.riot.puuid" @open:sign-in="signInOpen = true"  :sign-in-open="signInOpen" />
  </div>
      </div>
    </div>
</template>

<style></style>
