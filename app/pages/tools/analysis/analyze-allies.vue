<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'ally analysis',

  title: 'allies',
  path: '/analysis/allies',
  parent: '/analysis',
  icon: 'typcn:heart',
})
</script>

<template>
  <div></div>
</template>
