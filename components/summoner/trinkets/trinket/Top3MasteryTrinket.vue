<script lang="ts" setup>
const props = defineProps<{
container: any
}>()

const ds = useDataStore()
</script>

<template>
  <Trinket size="md"  :container="props.container" class="grid-cols-3 size-full border border-neutral pt-1 px-5 pb-6" solid>
      <div v-for="(champ, index) in top3Mastery" :key="champ.championId" class="grid size-full justify-center group/champ">
        

        <div class="size-fit relative place-items-center grid self-end group-first/champ:self-start  group-last/champ:self-start ">
        <ChampionSplash :champion="ds.champions.find((c) => c.key == champ.championId.toString())" class="rounded-full size-34 min-h-20 z-1 aspect-square">

                <NuxtImg src="/img/ui/crystal-frame.webp"  class=" absolute scale-110  drop-shadow-sm drop-shadow-[#000]/50"/>

            <NuxtImg
              :src="`/img/mastery/mastery-${
                computed (() => {
                  const a = champ.championLevel
                  return a < 4 ? 0 : a >= 10 ? 10 : a
                }).value}.webp`" class="size-20 drop-shadow-sm drop-shadow-[#000]/50 -bottom-7.5 left-7.5 absolute" />
        </ChampionSplash>
</div>
        <!--   <div class="z-10 items-center flex flex-col gap-1 justify-end h-full pb-6">
            <p class="text-5 font-semibold font-serif f-tt dst">
              {{ ds.champions.find((c) => c.key == champ.championId.toString()).name }}
            </p>
            <p class="font-medium">
              Level {{ champ.championLevel }}
            </p>
            <p class=" font-medium">
              {{ champ.championPoints.toLocaleString() }}
            </p>
          </div> -->
        </div>
   

  </Trinket>
</template>