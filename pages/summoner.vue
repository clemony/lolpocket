<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <NuxtLayout
    name="header-layout" :class="{ '!pt-28': route.path == '/summoner/match-history' }">
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>

</style>