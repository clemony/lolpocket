<script lang="ts" setup></script>

<template>
  <div class="w-full">
    <UContainer class="relative overflow-y-auto pt-15">
      <UMain>
        <slot />
      </UMain>
    </UContainer>
    <SiteFooter />
  </div>
</template>
