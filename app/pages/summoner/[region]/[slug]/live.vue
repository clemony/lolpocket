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
  twitterTitle: '[twitter:title]',
})
definePageMeta({
  title: 'Live Match',
  icon: 'lucide:rss',
  iconStyle: '',
  order: 4,
  slug: 'live',
})
</script>

<template>
  <div class="h-hit z-2 w-full bg-p0">
    <PagePlaceholder />
  </div>
</template>
