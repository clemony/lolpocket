<script lang="ts" setup>
const itemRef = useTemplateRef('itemRef')

const { isActive, progressBetween } = useScrollSection(
  'items',
  itemRef
)
const { matchData } = usePlayerStatsInject()

const data = await useChampionItemTimelineStats(matchData)
console.log('🥸 - data:', data)
</script>

<template>
  <div
    id="items"
    ref="itemRef"
    class="w-full">
    <div class="grid w-full auto-rows-fr gap-3 overflow-hidden">
      <ChampionItemRow
        title="Early"
        :data="data?.early" />

      <div class="grid w-full grid-cols-2 justify-start">
        <ChampionItemRow
          title="Boots"
          class=""
          :data="data?.boots" />

        <ChampionItemRow
          title="Trinket"
          :data="data?.trinket"
          class="pl-20" />
      </div>

      <ChampionItemRow
        v-if="data?.support.length"
        :data="data.support"
        title="Support" />

      <ChampionItemRow
        v-for="index in 6"
        :key="index"
        :data="data?.legendary[index - 1]"
        :title="index" />
    </div>
  </div>
</template>