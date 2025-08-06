<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  class?: HTMLAttributes['class']
  summoner: Summoner
}>()

const { data } = useSummonerChampions(summoner.matches.simplified, { mode: 'lite', limit: 5 })
watch(() => data.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
/* const champions = computed (() => {
if (!summoner || !championStats.value)
return

return Object.entries(championStats.value).map(a => a.sort((a[1],  b[1]) => a - b[1]))
}) */
const ix = useIndexStore()
</script>

<template>
  h
<!-- <div v-if="championStats" class="avatar-group -space-x-5">
  <div v-for="champion in champions" :key="champion." class="avatar">
    <div :class="cn('w-9', className)">
      <ChampionIcon :id="ix.champIdByKey(champion)" class="object-cover size-full"/>
    </div>
  </div>
</div> -->
</template>