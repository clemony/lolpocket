<script lang="ts" setup>
const props = defineProps<{
container: any
championNum: number
}>()

const ds = useDataStore()

const champion = computed (() => {
return ds.champions.find((c) => c.key == top3Mastery[props.championNum].championId.toString())
})
</script>

<template>
  <Trinket size="mini"  :container="props.container" >

        <div class="size-fit relative place-items-center grid **:pointer-events-none group/c">
        <ChampionSplash :champion="champion" class="rounded-full size-34 min-h-20 z-1 aspect-square relative after:size-full after:absolute after:bg-[#000] after:z-1 after:rounded-full group-hover/c:after:opacity-70 after:transition-opacity after:duration-400 after:backdrop-blur-sm after:opacity-0">

          <div class="z-2 flex flex-col opacity-0 tldr-40 group-hover/c:opacity-90 justify-center items-center gap-1 size-full absolute text-[#FFF]">
            <p class="text-5 font-medium  font-tracking-tight dst -mt-1.5">
              {{ champion.name }}
            </p>
            <p class="text-2">
              {{top3Mastery[props.championNum].championPoints.toLocaleString() }}
            </p>
            <p class="text-2">
              Level {{ top3Mastery[props.championNum].championLevel }}
            </p>
          </div>

                <NuxtImg src="/img/ui/crystal-frame.webp"  class=" absolute scale-110  drop-shadow-sm drop-shadow-[#000]/50 z-3"/>

            <NuxtImg
              :src="`/img/mastery/mastery-${
                computed (() => {
                  const a = top3Mastery[props.championNum].championLevel
                  return a < 4 ? 0 : a >= 10 ? 10 : a
                }).value}.webp`" class="size-20 drop-shadow-sm drop-shadow-[#000]/50 -bottom-7.5 left-7.5 absolute z-4" />
        </ChampionSplash>
</div>
    
   

  </Trinket>
</template>
