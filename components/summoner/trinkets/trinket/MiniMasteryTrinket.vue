<script lang="ts" setup>
const props = defineProps<{
container: any
championNum: number
}>()

const ds = useDataStore()
</script>

<template>
  <Trinket size="mini"  :container="props.container" >

        <div class="size-fit relative place-items-center grid **:pointer-events-none">
        <ChampionSplash :champion="ds.champions.find((c) => c.key == top3Mastery[props.championNum].championId.toString())" class="rounded-full size-34 min-h-20 z-1 aspect-square">

                <NuxtImg src="/img/ui/crystal-frame.webp"  class=" absolute scale-110  drop-shadow-sm drop-shadow-[#000]/50"/>

            <NuxtImg
              :src="`/img/mastery/mastery-${
                computed (() => {
                  const a = top3Mastery[props.championNum].championLevel
                  return a < 4 ? 0 : a >= 10 ? 10 : a
                }).value}.webp`" class="size-20 drop-shadow-sm drop-shadow-[#000]/50 -bottom-7.5 left-7.5 absolute" />
        </ChampionSplash>
</div>
    
   

  </Trinket>
</template>
