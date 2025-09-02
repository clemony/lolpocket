<script lang="ts" setup>
definePageMeta({
  name: 'pocket-entry',
  path: '/pocket',
  level: 0,
  order: 0,
})

const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocketKey)))
</script>

<template>
  <LazyNuxtPage
    v-if="pocket"
    :pocket="pocket" />
</template>