<script lang="ts" setup>
import type { RouteLocationNormalized } from "vue-router"

definePageMeta({
  middleware: [
    (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      if (!to.params.champion_key) return abortNavigation()
    },
    "set-champion-title",
  ],
  keepAlive: { max: 1 },
  search: false,
  prefix: "summoner",
})
</script>

<template>
  <div class="w-full">
    <NuxtLayout name="sticky-aside-layout">
      <template #left>
        <SummonerChampionAside />
      </template>

      <!-- stats -->
      <PlayerChampionSummary id="summary" />
      <!-- spells -->
      <ChampionSpellStats id="spells" />
      <!-- items -->
      <ChampionItemStats id="items" />
      <!-- runes -->
      <ChampionRuneStats id="runes" />
      <!-- skills -->
      <ChampionSkillStats id="skills" />
      <!-- pairings -->
      <ChampionDuoStats id="duos" />
      <!-- allies -->
      <ChampionAllyStats id="allies" />
      <!-- match -->
      <ChampionMatchStats id="stats" />
    </NuxtLayout>
  </div>
</template>
