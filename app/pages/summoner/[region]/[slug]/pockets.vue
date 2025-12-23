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
  title: 'pockets',
  icon: '',
  listClass: '**:stroke-[1.6]',
  order: 3,
})

const { summoner } = useSummonerInject()
watch(() => summoner.value, (v) => {
  console.log('💠 - watch - newVal:', v)
})
</script>

<template>
  <div>
    hi
  </div>
</template>