<script setup lang="ts">
const us = useUiStore()

const route = useRoute()
</script>

<template>
  <div class="h-screen @max-4xl/container/app:!grid-cols-[0_1fr] w-screen grid overflow-hidden transition-width dr-30 " :class="{ 'grid-cols-[270px_1fr]': us.sidebarExpanded, 'grid-cols-[54px_1fr]': !us.sidebarExpanded && route.path != '/', 'grid-cols-[0px_1fr]': !us.sidebarExpanded && route.path == '/' }">
    <AppSidebar />

    <div class="flex flex-col  h-screen min-h-screen w-full ">
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
