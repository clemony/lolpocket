<script setup lang="ts">
const as = useAccountStore()
</script>

<template>
  <div class="grid grid-cols-[0.5fr_2fr] w-screen h-screen pt-[7vh]">

      <nav >
        <ul class="text-bc/80 flex flex-col gap-6 pl-6 mt-2 [&_li]:pl-2">
          <h1 class="text-9 mb-5 drop-shadow-sm">Settings</h1>
        <li><a
          href="#"
          class="font-semibold"
        >General</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Theme</a></li>
        <li><a href="#">Storage</a></li>
        <li><a href="#">Hotkeys</a></li>
        </ul>
      </nav>

      <div
        class="carousel carousel-vertical h-screen w-full overflow-x-hidden overflow-y-scroll [&_>a]:w-full [&_>div]:flex [&_>div]:flex-col justify-start"
      >
        <div class="carousel-item size-full flex flex-col">
          <div class="w-full h-22">
            <a id="general"></a>
          </div>
          <GeneralSettings />
        </div>
        <div class="carousel-item size-full">
          <a
            id="account"
            class="h-22"
          ></a>
          <AccountSettings scroll-to="theme" />
        </div>
        <div class="carousel-item size-full">
          <a
            id="theme"
            class="h-22"
          ></a>
          <ThemeSettings scroll-to="theme" />
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
</div>
</template>

<style scoped></style>
