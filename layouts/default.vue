<script setup lang="ts">
const us = useUiStore()
</script>

<template>
  <div class="h-screen w-screen grid overflow-hidden tldr-30" :class="{ 'grid-cols-[270px_1fr]': us.sidebarExpanded, 'grid-cols-[54px_1fr]': !us.sidebarExpanded }">
    <AppSidebar />

    <div class="flex flex-col  h-screen min-h-screen w-full tldr-30">
      <NuxtLoadingIndicator color="var(--color-neutral)" />

      <Sonner
        position="top-right"

        :toast-options="{
          class: 'my-toast',
          descriptionClass: 'my-toast-description',
        }"
        :expand="true"
        :duration="6000" />

      <LazyNewFolderDialog />
      <LazyNewPocketDialog />

      <slot />
    </div>
  </div>
</template>

<style></style>
