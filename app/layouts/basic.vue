<script lang="ts" setup></script>

<template>
  <main class="overflow-y-auto !w-screen h-screen">
    <!-- header -->
    <header
      class="sticky top-0 flex shrink-0 items-center gap-2 border-b z-2 border-b3 bg-b1/80 backdrop-blur-lg p-4">
      <Button
        variant="neutral"
        class="size-7 text-3xs font-bold">
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
    <div class="flex flex-1 flex-col gap-4 relative size-full">
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
