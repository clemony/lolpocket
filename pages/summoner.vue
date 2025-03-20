<script lang="ts" setup>
const route = useRoute()

</script>

<template>
  <NuxtLayout
    name="header-layout" :class="{ '!pt-28': route.path == '/summoner/match-history' }">
    <template #header>
      <div v-if="route.path == '/summoner/analysis'" class="w-full flex items-center ml-4 relative">
       
      </div>
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>

</style>