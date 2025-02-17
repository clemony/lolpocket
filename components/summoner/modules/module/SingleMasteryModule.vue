<script lang="ts" setup>
const ds = useDataStore()

const champion = computed (() => {
return  ds.champions.find((c) => c.id == championMastery.championId)

})
</script>

<template>
  <ModuleTemplate title="Champion Mastery">
    <div class=" place-self-center  size-[96%]  rounded-xl border border-b2 shadow-sm overflow-hidden" :style="{
      backgroundImage:
      `url(/img/champion/centered/${champion.apiname}_0.jpg)`,
      backgroundSize: '250%',
      backgroundPositionX:'40%',
      backgroundPositionY:'21%',
    }" >
      <div class="py-3 px-4 size-full bg-radial-[at_75%_0] from-b1/2 from-15% via-b1/90 via-50% to-b1 to-80% inset-shadow flex">
      
      
      
          <div class="flex gap-6 self-end w-full">

        <div class="font-medium self-end pb-4 pl-3 grow flex flex-col gap-2">
            <h1 class="!text-9 font-serif  opacity-90 dst font-bold pb-3 ">{{champion.name}}</h1>

            <div v-tippy="`${championMastery.championPointsSinceLastLevel.toLocaleString()} / ${championMastery.championPointsUntilNextLevel.toLocaleString()} to next level`" class="group flex flex-col gap-1">
          <p>Mastery Level {{championMastery.championLevel}}</p>
          <p class="pb-3">{{championMastery.championPoints.toLocaleString()}} Total Points</p>

                <progress
              class="bg-b3/60 progress w-68 opacity-90 dst group-hover:ring group-hover:ring-neutral/40 transition-all duration-300" :value="championMastery.championPointsSinceLastLevel" :max="championMastery.championPointsSinceLastLevel + championMastery.championPointsUntilNextLevel"
            ></progress>
        </div>
        </div>

          <div class="self-end">
      <img
          :src="`/img/mastery/mastery-${
            computed (() => {
              const a = championMastery.championLevel
              return a < 4 ? 0 : a >= 10 ? 10 : a
            }).value}.webp`" class="size-30 drop-shadow-sm self-end grayscale opacity-90 contrast-150"
        />
          </div>
            </div>

      </div>
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>