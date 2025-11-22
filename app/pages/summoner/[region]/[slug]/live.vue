<script lang="ts" setup>
useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogTitle: '[og:title]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterTitle: '[twitter:title]'
})
definePageMeta({
  key: 'l',
  title: 'live',
  icon: 'mingcute:sound-line-line',
  iconStyle: '',
  order: 3,
})
</script>

<template>
  <div class="h-hit z-2 w-full bg-b1">
    <PagePlaceholder />
  </div>
</template>
