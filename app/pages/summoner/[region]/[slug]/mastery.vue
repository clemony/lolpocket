<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()


const { fetchMastery } = useSummoner(summoner?.puuid)
const isOpen = ref(false)
const ix = useIndexStore()

function getFullMastery(){
  if (summoner?.mastery?.full?.length)
  return
fetchMastery(true)
}


const noMastery = computed (() => {
if (!summoner?.mastery?.full?.length)
return

const all = ix.champions.map(c => c.id)
const map = summoner?.mastery?.full?.map(c => c.id)

return useArrayDifference(all, map)
})

onMounted (() => {
  fetchMastery()
})


</script>

<template>
  <div :class="cn('py-14 px-1 flex-col gap-14 scrollbar-hidden !justify-start !items-center', className)">
    <div v-if="summoner?.mastery?.top" class="grid grid-cols-5 max-w-[1040px]  w-full h-fit  gap-8 ">
<h2 class="col-span-full dst font-bold">
  Highest Mastery
</h2>
<MasteryPhoto  v-for="champion in summoner.mastery.top.slice(0, 10)" :key="champion.id" :champion  />
    </div>

    <Collapsible v-model:open="isOpen"  as="div" class="Collapsible  max-w-[1040px] w-full justify-center">

    <CollapsibleTrigger  class="flex-nowrap group/more text-nowrap overflow-hidden pr-2 cursor-pointer w-full items-center mb-12 justify-start flex gap-4 text-2 text-bc/80 hover:text-bc">

<icon name="down-sm" :class="cn('transition-transform duration-200 text-bc/80 group-hover/more:text-bc   shrink-0 size-5', {'-rotate-90': !isOpen})"/>

    {{ isOpen ? 'View less...' : 'View all...'}}
  <Separator :class="cn(' transition-transform duration-1000  group-hover/more:bg-b3', {'scale-x-100 opacity-100 origin-left  transition-transform duration-1000  ': isOpen, 'scale-x-0 origin-right opacity-0  transition-transform duration-1000 ': !isOpen})" />

  </CollapsibleTrigger>
    <LazyCollapsibleContent  class="w-full  CollapsibleContent">
      <div v-if="summoner?.mastery?.full?.length"  class=" grid grid-cols-5  w-full h-fit  gap-8 "  >
      <MasteryPhoto  v-for="champion in summoner?.mastery?.full?.slice(10)" :key="champion.id" :champion  />

      <template  v-for="id in noMastery.value" :key="id" >
      <MasteryPhoto v-if="id" :champion-id="id" />
    </template>
    </div>
    <div v-else class="w-full p-14 grid place-items-center">
      <icon name="svg-spinners:bars-scale-middle" class="shrink-0"/>
    </div>
    <CollapsibleTrigger @click="getFullMastery()" class="btn mt-10 mx-auto text-2 text-bc/76 hover:text-bc btn-ghost font-medium">

    {{ isOpen ? 'View less...' : 'View all...'}}

  </CollapsibleTrigger>
  </LazyCollapsibleContent>
    </Collapsible>
  </div>
</template>