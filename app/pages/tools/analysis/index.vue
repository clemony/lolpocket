<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'analysis',
  title: 'analysis',
  icon: 'chart',
  parent: '/analysis',
  path: '/analysis',
})
</script>

<template>
  <div></div>
</template>
