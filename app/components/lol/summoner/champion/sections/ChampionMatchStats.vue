<script lang="ts" setup>
const statRef = useTemplateRef('statRef')

const { isActive, progressBetween } = useScrollSection(
  'stats',
  statRef
)

const { stats, summoner } = usePlayerStatsInject()
</script>

<template>
  <div
    id="stats"
    ref="statRef"
    class="w-full">
    <div class="flex w-full items-center gap-6">
      <SimpleChampionStatCard
        title="KDA"
        :icon="['lol:melee', 'size-4.5 opacity-70']">
        {{ gameAvgFormat(stats?.kills, stats?.games) }}&thinsp;/&thinsp;{{
          gameAvgFormat(stats?.deaths, stats?.games) }}&thinsp;/&thinsp;{{
          gameAvgFormat(stats?.assists, stats?.games) }}
      </SimpleChampionStatCard>
      <SimpleChampionStatCard
        title="KDA at 15"
        :icon="['clock', 'size-4.25 opacity-70 **:stroke-[3]']">
        {{ gameAvgFormat(stats?.killsBefore15, stats?.games) }}&thinsp;/&thinsp;{{
          gameAvgFormat(stats?.deathsBefore15, stats?.games) }}&thinsp;/&thinsp;{{
          gameAvgFormat(stats?.assistsBefore15, stats?.games) }}
      </SimpleChampionStatCard>
    </div>
  </div>
</template>
