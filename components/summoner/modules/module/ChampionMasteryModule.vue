<script lang="ts" setup>
const ds = useDataStore()
</script>

<template>
  <ModuleTemplate title="Top Champion Mastery" class="module-bg border border-b2">
    <div class=" size-[96%] grid grid-cols-3 p-i-c self-center ">
      <div v-for="i in top3Mastery" :key="i.championId" class="flex flex-col items-center justify-end h-full w-full  overflow-hidden">
        <div class="size-full"
      :style="
      {backgroundImage: `url(/img/champion/centered/${ds.champions.find((c) => c.id == i.championId).apiname}_0.jpg)`,
      backgroundSize: '453%',
      backgroundPositionX:'48%',
      backgroundPositionY:'21%',
      }">

      </div>
<!--         <div class="rounded-full shadow-sm  ">
          <div class="size-22 rounded-full overflow-hidden bg-neutral">
            <img :src="" class="size-22 rounded-full scale-115" />
          </div>
        </div> -->

       <div class="z-10 items-center flex flex-col gap-1  pb-5">
        <p class="text-5 font-semibold font-serif f-tt dst">
          {{ ds.champions.find((c) => c.id == i.championId).name }}
        </p>
        <p class="font-medium">
          Level {{ i.championLevel }}
        </p>
        <p class=" font-medium">
          {{ i.championPoints.toLocaleString() }}
        </p>

        <img
          :src="`/img/mastery/mastery-${
            computed (() => {
              const a = i.championLevel
              return a < 4 ? 0 : a >= 10 ? 10 : a
            }).value}.webp`" class="size-19 drop-shadow-sm  grayscale opacity-85 contrast-130"
        />
      </div>
      </div>
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>