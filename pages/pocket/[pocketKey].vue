<script setup lang="ts">
const route = useRoute()
// const pocket = ref(getPocket(props.pocketKey))
const pocket = ref(getPocket(route.params.pocketKey))
console.log('💠 - pocket:', pocket)
</script>

<template>
  <main class="h-screen w-full flex">
    <PocketBar :pocket="pocket" />
    <PocketNav :pocket="pocket" />

    <NuxtPage
      :pocket="pocket"
      :page-key="(route) => route.fullPath"
    />
  </main>
</template>

<style></style>
