<script setup lang="ts">
const ts = useTempStore()
const as = useAccountStore()
const route = useRoute()

const client = useSupabaseClient()
client.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    useSetAccount(session)
  }
})

const drawerOpen = computed (() => {
  return !!(ts.sidebarTrigger || ts.pocketDrawerTrigger || ts.championDrawerTrigger || ts.itemDrawerTrigger || ts.champSelectDrawerTrigger)
})


</script>

<template>
  <main
    id="app"
    ref="app"
    class="relative size-screen min-size-screen"
    :class="{ 'bg-black transition-all duration-500': drawerOpen }"
  >
    <Toaster
      close-button
      position="top-right"
      :hotkey="['KeyC']"
      :toast-options="{}"
      :expand="true"
    />
    <SidebarDrawer />

    <LazyChampSelectDrawer v-if="route.params.pocketKey" />
    <LazyChampionDrawer
      v-if="ts.selectedChampion"
      :key="ts.selectedChampion"
    />
    <ItemDrawer
      v-if="ts.selectedItem"
      :key="ts.selectedItem"
    />
    <PocketDrawer />

    <div
      class="bg-b1 transition-all duration-400 size-screen min-h-screen grid"
      :class="{ 'scale-98 h-full rounded-xl overflow-hidden': drawerOpen }"
    >
      <MainMenubar />
      <div class="size-screen ">
        <slot />
      </div>
    </div>
  </main>
</template>

<style></style>
