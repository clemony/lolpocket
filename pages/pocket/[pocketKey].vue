<script setup lang="ts">
const route = useRoute()
// const pocket = ref(getPocket(props.pocketKey))
const pocket = ref(getPocket(route.params.pocketKey))
console.log('💠 - pocket:', pocket)
</script>

<template>
  <main class="h-screen w-full flex">
    <PocketNav :pocket="pocket" />

    <NuxtPage
      :pocket="pocket"
      :page-key="(route) => route.fullPath"
    />
    <PocketBar :pocket="pocket" />
  </main>
</template>

<style></style>
