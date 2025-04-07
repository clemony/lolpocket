<script lang="ts" setup>
const route = useRoute()

</script>

<template>

      <NuxtLayout
        name="header-layout" :class="{ '!pt-28 flex': route.path == '/summoner/match-history' }">

        <template #sidebar >

        <SummonerSidebar  />
        </template>
        <template #header>
          <div v-if="route.path == '/summoner/research'" class="w-full flex items-center ml-4 relative">
          </div>
        </template>
        <NuxtPage />
      </NuxtLayout>

</template>
