<script lang="ts" setup>
const { api } = defineProps<{
  api: SummonerInject
}>()
</script>

<template>
  <NuxtLayout
    :summoner-state="api"
    name="tab">
    <NuxtPage />
  </NuxtLayout>
</template>