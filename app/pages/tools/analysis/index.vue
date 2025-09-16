<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'analysis',

  title: 'analysis',
  path: '/analysis',
  parent: '/analysis',
  icon: 'chart',
})
</script>

<template>
  <div></div>
</template>
