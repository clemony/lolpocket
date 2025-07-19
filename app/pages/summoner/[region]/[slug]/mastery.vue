<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const ix = useIndexStore()
const { fetchMastery } = useSummoner(summoner?.puuid)
console.log('💠 - summoner?:', summoner?.mastery)

onMounted (() => {
  fetchMastery()
})
</script>

<template>
  <div :class="cn('max-w-[1040px] pt-14', className)">
    <div v-if="summoner?.mastery?.top" class="grid grid-cols-5  w-full h-fit gap-x-6 gap-y-5 ">

      <Card v-for="champion in summoner.mastery.top" :key="champion.id" class="grid grid-rows-[2fr_0.5fr] aspect-square p-0 overflow-hidden  p-2 ">

          <div class=" relative  overflow-hidden inset-shadow-sm  rounded-xl  size-full grid place-items-center">
            <Img :alt="ix.champNameById(champion.id)" :img="getSplash(ix.champKeyById(champion.id), 'tile')" class="size-full absolute object-cover " />
          </div>

<div class="size-full relative flex">
<!--   <Separator class="w-full absolute top-0 bg-gold h-1.5 inset-shadow-sm inset-shadow-iron/60 -scale-y-100"  /> -->
          <Img
            :img="`/img/mastery/mastery-${champion.level < 4 ? 0 : champion.level >= 10 ? 10 : champion.level}.webp`"
            :alt="ix.champNameById(champion.id)" class="size-26 absolute drop-shadow-sm drop-shadow-[#000]/50 -top-10 z-4 left-1.5" />
</div>
      </Card>
    </div>
  </div>
</template>