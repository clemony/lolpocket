<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'img/favicon.png',
    },
  ],
})

const appConfig = useAppConfig()
</script>

<template>
  <NuxtLayout>
    <LazyNuxtPage
      :transition="{
        name: 'global-page-transition',
      }"
      class="z-1" />
  </NuxtLayout>
</template>
