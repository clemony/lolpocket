<script setup lang="ts">
const emit = defineEmits(['update:puuid'])
definePageMeta({
})
const route = useRoute()

const summoner = await ss().resolveOrFetch(route.params.puuid as string)

if (summoner && summoner.region && summoner.name && summoner.tag) {
  navigateTo(`/summoner/${summoner.region.toLowerCase()}/${summoner.name.toLowerCase()}_${summoner.tag.toLowerCase()}`, {
    replace: true
  })
}
</script>

<template>
  <div>Loading...</div>
</template>