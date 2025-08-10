<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'analysis',

  meta: {
    title: 'analysis',
    path: '/analysis',
    section: 'analysis',
    icon: 'chart',
  },
})
</script>

<template>
  <div>
  </div>
</template>