<script lang="ts" setup>
const { spells } = usePlayerStatsInject()

const best = computed (() => {
  if (!spells.value.best)
    return null
  return Object.entries(spells.value?.best)
})
</script>

<template>
  <div
    v-if="best && best.length"
    class="flex items-center gap-5">
    <Card
      class="flex! w-fit! items-center justify-center gap-5 p-4">
      <StatNumberLabel
        percent
        :stat="Object.values(spells.best)[0].winrate"
        :tip="[Object.values(spells.best)[0].winrate,
               Object.values(spells.best)[0].games,
               Object.values(spells.best)[0].pickrate]" />
      <ChampionSpellStat
        v-for="[k, v] in best"
        :key="k"
        :k
        :v />
    </Card>
  </div>
</template>