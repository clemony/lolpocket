<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'ally analysis',
  title: 'allies',
  icon: 'typcn:heart',
  parent: '/analysis',
  path: '/analysis/allies',
})
</script>

<template>
  <div></div>
</template>
