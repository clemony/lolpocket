<script lang="ts" setup>
const { api } = defineProps<{
  api: SummonerApi
}>()
const route = useRoute()
const championKey = computed (() => route.params?.championKey)
</script>

<template>
  <NuxtLayout
    :api
    name="tab">
    <NuxtPage
      :api
      :champion-key />
  </NuxtLayout>
</template>