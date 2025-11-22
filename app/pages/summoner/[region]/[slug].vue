<script lang="ts" setup>
const state = useSummonerInject()
</script>

<template>
  <NuxtLayout
    :summoner-state="state"
    name="tab">
    <NuxtPage />
  </NuxtLayout>
</template>