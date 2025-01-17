<script setup lang="ts">
  const ts = useTempStore()
</script>

<template>
  <main
    id="app"
    ref="app"
    :class="{ 'bg-black': ts.sidebarTrigger || ts.pocketDrawerTrigger || ts.championDrawerTrigger || ts.itemDrawerTrigger }">
    <Toaster
      closeButton
      position="top-right"
      :hotkey="['KeyC']"
      :toastOptions="{}"
      :expand="true" />
    <SidebarDrawer />
    <ChampionDrawer
      v-if="ts.selectedChampion"
      :key="ts.selectedChampion" />
    <ItemDrawer
      v-if="ts.selectedItem"
      :key="ts.selectedItem" />
    <PocketDrawer />
    <div
      class="bg-b1 transition-all duration-300"
      :class="{ 'scale-98 h-full rounded-xl overflow-hidden': ts.sidebarTrigger || ts.pocketDrawerTrigger || ts.championDrawerTrigger || ts.itemDrawerTrigger }">
      <MainMenubar />
      <!--     <div class="absolute z-0 top-0 left-0 inset-0 m-0 size-full overflow-y-clip border-none"> -->
      <div class="size-screen max-w-screen max-h-screen overflow-hidden">
        <slot />
      </div>
    </div>
  </main>
</template>

<style></style>
