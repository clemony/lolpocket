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
  <UPage :class="cn('z-auto pb-44')">
    <template #left>
      <UPageAside
        class="grid h-fit auto-rows-max items-start gap-3 overflow-y-auto px-1 **:select-none">
        <SummonerChampionAside />
      </UPageAside>
    </template>

    <UPageBody class="z-auto">
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
    </UPageBody>
  </UPage>
</template>
