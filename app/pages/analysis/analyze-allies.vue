<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'ally analysis',

  meta: {
    altName: 'allies',
    path: '/analysis/allies',
    section: 'analysis',
    icon: 'typcn:heart',
  },
})
</script>

<template>
  <div>
  </div>
</template>