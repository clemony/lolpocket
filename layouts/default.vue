<script setup lang="ts">
const ts = useTempStore()
const route = useRoute()

const client = useSupabaseClient()
client.auth.onAuthStateChange(async(event, session) => {
if (event === 'INITIAL_SESSION'){
    useSetAccount(session)
  } else {
      const { data, error } = await client.auth.setSession({access_token: ts.accessToken, refresh_token: ts.refreshToken})
      ts.accessToken = data.session.access_token
      ts.refreshToken = data.session.refresh_token
      ts.sessionInfo = data.session
  }
})

const drawerOpen = computed (() => {
  return !!(ts.sidebarTrigger || ts.PocketSheetTrigger || ts.championDrawerTrigger || ts.itemDrawerTrigger || ts.champSelectDrawerTrigger || ts.editPocketTrigger)
})



/*
    :class="{ 'bg-black transition-all duration-500': drawerOpen }"

      :class="{ 'scale-98 h-full rounded-xl overflow-hidden': drawerOpen }"
    */
</script>

<template>
  <main
    id="app"
    class="relative size-screen min-size-screen"
  >
    <Toaster
      close-button
      position="top-right"
      :hotkey="['KeyC']"
      :toast-options="{}"
      :expand="true"
    />

    <LazyChampionDrawer
      v-if="ts.selectedChampion"
      :key="ts.selectedChampion"
    />
    <ItemDrawer
      v-if="ts.selectedItem"
      :key="ts.selectedItem"
    />

    <div
      class="bg-b1 transition-all duration-400 size-screen min-h-screen grid"
    >
      <MainMenubar />
      <div class="size-screen ">
        <slot />
      </div>
    </div>
  </main>
</template>

<style></style>
