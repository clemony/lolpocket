<script setup lang="ts">
  const as = useAccountStore()
</script>

<template>
  <NuxtLayout
    name="split-layout"
    title="Settings"
    class="*:first:pl-18"
    col1Size="22%">
    <template #1>
      <nav class="text-bc/80 flex flex-col gap-6 pl-6 mt-2">
        <a
          href="#"
          class="font-semibold"
          >General</a
        >
        <a href="#">Account</a>
        <a href="#">Theme</a>
        <a href="#">Storage</a>
        <a href="#">Hotkeys</a>
      </nav>
    </template>
    <template #2>
      <div
        id="pocket-contents"
        class="carousel carousel-vertical h-screen w-full overflow-x-hidden overflow-y-scroll [&_>a]:w-full [&_>div]:flex [&_>div]:flex-col justify-start">
        <div class="carousel-item size-full flex flex-col">
          <div class="w-full h-22"><a id="general"></a></div>
          <GeneralSettings />
        </div>
        <div class="carousel-item size-full">
          <a
            id="account"
            class="h-22"></a>
          <AccountSettings scrollTo="theme" />
        </div>
        <div class="carousel-item size-full">
          <a
            id="theme"
            class="h-22"></a>
          <ThemeSettings scrollTo="theme" />
        </div>
        <div class="carousel-itemsize-full">
          <a id="hotkeys"></a>
          <HotkeySettings />
        </div>
        <div class="carousel-item size-full">
          <a id="storage"></a>
          <StorageSettings />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
