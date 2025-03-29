<script lang="ts" setup>
const ds = useDataStore()
</script>

<template>
  <ModuleTemplate title="" class="module-bg border border-b2 relative rounded-xl ">
    <div class="size-full grid  grid-cols-3 p-i-c self-center ">
      <div v-for="(i, index) in top3Mastery" :key="i.championId" class="flex flex-col items-center justify-end h-full rounded-xl w-full group ">
        <div
          class=" absolute  h-full w-[180px] z-0 mask-bottom "
          :class="{ '-left-1': index == 0, '': index == 1, '-right-1': index == 2 }">
          <div
            class="size-full z-0"
            :class="{ 'mask-right': index == 0, 'mask-right h-full': index == 1, 'mask-left': index == 2 }">
            <div
              class="size-full "
              :style="
                { backgroundImage: `url(/img/champion/centered/${ds.champions.find((c) => c.id == i.championId).apiname}_0.jpg)`,
                  backgroundSize: '363%',
                  backgroundPositionX: '50%',
                  backgroundPositionY: '30%',
                  backgroundRepeat: 'no-repeat',
                }"
              :class="{ 'mask-left ': index == 1 }">
            </div>
          </div>
        </div>
        <div class="size-full z-30">
          <!--         <div class="rounded-full shadow-sm  ">
          <div class="size-22 rounded-full overflow-hidden bg-neutral">
            <img :src="" class="size-22 rounded-full scale-115" />
          </div>
        </div> -->

          <div class="z-10 items-center flex flex-col gap-1 justify-end h-full pb-6">
            <img
              :src="`/img/mastery/mastery-${
                computed (() => {
                  const a = i.championLevel
                  return a < 4 ? 0 : a >= 10 ? 10 : a
                }).value}.webp`" class="size-17 drop-shadow-sm  grayscale opacity-85 contrast-130" />
            <p class="text-5 font-semibold font-serif f-tt dst">
              {{ ds.champions.find((c) => c.id == i.championId).name }}
            </p>
            <p class="font-medium">
              Level {{ i.championLevel }}
            </p>
            <p class=" font-medium">
              {{ i.championPoints.toLocaleString() }}
            </p>
          </div>
        </div>
      </div>
      <div class="size-full absolute overflow-hidden rounded-xl scale-125 grid place-self-center bg-gradient-to-b from-transparent from-20%  to-b1 to-80% top-0 left-0 ">
      </div>
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>