<script setup lang="ts">
definePageMeta({
  name: 'Summoner Search',
  path: '/summoner',
  search: 'hidden',
})

const state = await useSummonerProvider()
</script>

<template>
  <NuxtPage :state />
</template>
