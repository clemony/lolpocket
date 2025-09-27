<script lang="ts" setup>
const {
  championName,
  class: className,
  summoner,
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
  championName: string
}>()
console.log('💠 - summoner?:', summoner)
const playerData = inject<PlayerData>('playerData')
const champKey = computed(() => String(ix().champKeyByName(championName)))
</script>

<template>
  <Collapsible :class="cn('max-w-210 w-full h-56', className)">
    <CollapsibleTrigger class="flex gap-6">
      <Champion
        translate="0%, 6%"
        class="aspect-square max-h-54 max-w-54 rounded-xl size-54"
        :img="getSplash(champKey, 'tile')">
        <div
          class="absolute bottom-0 left-0 inset-0 p-2 z-1 grid items-end justify-start bg-radial-[at_70%_30%] bg-size-[120%] from-transparent from-50% to-black/90">
          <h2
            class="font-black text-start text-shadow-sm dst text-11 text-white/90">
            {{ hyphenateChampionName(championName) }}
          </h2>
        </div>
      </Champion>
      <div class="w-100">
        <SummonerChampionLineChart
          :summoner
          :matches="playerData.matches"
          :champion-name />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent"></CollapsibleContent>
  </Collapsible>
</template>
