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
const state = inject<SummonerData>(SummonerKey)
const champKey = computed(() => String(ix().champKeyByName(championName)))
</script>

<template>
  <Collapsible :class="cn('h-56 w-full max-w-210', className)">
    <CollapsibleTrigger class="flex gap-6">
      <Champion
        translate="0%, 6%"
        class="aspect-square size-54 max-h-54 max-w-54 rounded-xl"
        :img="getSplash(champKey, 'tile')">
        <div
          class="
            absolute inset-0 bottom-0 left-0 z-1 grid items-end justify-start
            bg-radial-[at_70%_30%] from-transparent from-50% to-black/90
            bg-size-[120%] p-2
          ">
          <h2
            class="
              text-11 text-start font-black text-white/90 dst text-shadow-sm
            ">
            {{ hyphenateChampionName(championName) }}
          </h2>
        </div>
      </Champion>
      <div class="w-100">
        <SummonerChampionLineChart
          :summoner
          :matches="state.matches"
          :champion-name />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent"></CollapsibleContent>
  </Collapsible>
</template>
