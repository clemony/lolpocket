<script lang="ts" setup>
</script>

<template>
  <div
    id="app"
    class="relative h-screen min-h-screen w-screen max-w-screen overflow-y-auto">
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <AppSidebarTrigger />
    <!-- page -->
    <slot />
  </div>
</template>
