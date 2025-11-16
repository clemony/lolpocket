<script setup lang="ts">
const route = useRoute()
const ss = useSummonerStore()

const summoner = await ss.ensureSummoner({ puuid: route.params.puuid as string })

navigateTo(`/summoner/${summoner.region.toLowerCase()}/${summoner.name.toLowerCase()}_${summoner.tag.toLowerCase()}`, {
  replace: true
})
</script>

<template>
  <div class="grid place-items-center">
    <h4>loading...</h4>
  </div>
</template>