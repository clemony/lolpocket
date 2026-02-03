<script lang="ts" setup></script>

<template>
  <UContainer
    class="relative overflow-y-auto"
  >
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <AppSidebar />
    <!-- page -->
    <UMain><slot /></UMain>
    <SiteFooter />
  </UContainer>
</template>
