<script lang="ts" setup></script>

<template>
  <main class="h-screen w-screen! overflow-y-auto">
    <!-- header -->
    <header
      class="
        sticky top-0 z-2 flex shrink-0 items-center gap-2 border-b border-b3
        bg-b1/80 p-4 backdrop-blur-lg
      ">
      <Button
        variant="neutral"
        class="size-7 text-xxs font-bold">
        LP
      </Button>

      <span class="opacity-70">|</span>
      <Button
        variant="link"
        size="md"
        @click="navigateTo('/nexus')">
        Nexus
      </Button>
    </header>
    <div class="relative flex size-full flex-1 flex-col gap-4">
      <slot />
    </div>
    <!-- toaster -->
    <Toast
      position="top-right"
      :expand="true"
      :duration="Infinity" />
  </main>
  <!-- loading -->
  <NuxtLoadingIndicator
    style="
      top: auto;
      bottom: 0;
      height: 5px;
      background: repeating-linear-gradient(
        to right,
        var(--color-n3) 0%,
        var(--color-n2),
        var(--color-neutral) 100%
      );
    " />
</template>
