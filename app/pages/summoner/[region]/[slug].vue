<script lang="ts" setup>
const route = useRoute()
const championKey = computed(() => route.params?.championKey)
</script>

<template>
  <NuxtLayout name="tab">
    <NuxtPage :champion-key />
  </NuxtLayout>
</template>
