<script lang="ts" setup></script>

<template>
  <div class="contents">
    <Navbar />
    <UMain>
      <UContainer class="relative">
        <slot />
      </UContainer>
    </UMain>
    <SiteFooter />
  </div>
</template>
