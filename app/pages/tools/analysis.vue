<script setup lang="ts">
import { getMatchesByPuuid } from "~~/server/api/riotClient";

definePageMeta({
  title: "analysis",
  icon: "chart",
  order: 5,
  path: "/tools/analysis",
  search: "hidden",
});

const summoner = ref<Summoner>(null);
console.log("💠 - summoner:", summoner);

onMounted(async () => {
  const q = computedAsync(() => ms().analysisQueueSelect);
  const p = computedAsync(() => ms().analysisPatchSelect);
  const s = computedAsync(() => ss().getSummoner(as().account.puuid));
  await { p, q, s };
  summoner.value = s.value;
});
</script>

<template>
  <div class="oveflow-hidden size-full">
    <menu
      class="overflow-hidden border-r border-r-b3/40 shadow-warm-2 shadow-black/7"
    >
      <DataFilterPanel />
    </menu>

    <main class="relative w-full grow overflow-x-hidden overflow-y-auto px-10">
      <NuxtPage v-if="summoner" :matches="getMatchesByPuuid(summoner)" />
    </main>
  </div>
</template>

<style scoped></style>
