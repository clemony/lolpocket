<script setup lang="ts">
definePageMeta({
  name: "summoner-resolver-short",
  layout: false,
  search: false,
})

const route = useRoute()
const puuid = String(route.params.puuid ?? "")

if (!puuid) {
  await navigateTo("/", { replace: true })
} else {
  await navigateTo(`/_r/summoner/${encodeURIComponent(puuid)}`, {
    replace: true,
  })
}
</script>

<template>
  <div class="grid min-h-screen place-items-center p-6 text-sm text-muted">
    Resolving summoner and redirecting...
  </div>
</template>
