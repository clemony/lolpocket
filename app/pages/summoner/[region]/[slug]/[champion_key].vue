<script lang="ts" setup>
definePageMeta({
  middleware: (to, from) => {
    if (!to.params.champion_key) return abortNavigation()
  },
  keepAlive: { max: 1 },
})
</script>

<template>
  <div
    :class="
      cn(
        'relative z-auto mx-auto grid h-fit min-h-screen w-full max-w-[1280px] grid-cols-[260px_1fr] gap-x-1 pb-44',
      )
    "
  >
    <SummonerChampionAside />
    <SummonerChampionMain />
  </div>
</template>
