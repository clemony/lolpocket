<script lang="ts" setup>

const props = defineProps<{
  build?: string
  pocket: pocket
  index: number
}>()

const pocket = ref(props.pocket)
const index = ref(props.index)
/* const build = ref()
const winrate = computed(() => {
  return (build.value.win / build.value.games) * 100
})
 */

 const winrate = ref(60)

const labels = ['Loss', 'Win']
const datasets = [
  {
    data: [100 - winrate.value, winrate.value],
  },
]

const colors = [getColorFromVariable('--color-b3'), '#a3be8c']
</script>

<template>


 
    <li class="list-row items-center">
 <!--      <div class="text-[2.3rem] font-thin opacity-30 tabular-nums mr-4">
        0{{ index }}
      </div> -->
      <div>
        <PocketIcon class="size-14 rounded-lg **:rounded-lg" :image="pocket.icon" />
      </div>
      <div class="list-col-grow text-5 ">
        <div class="capitalize  mb-1 tracking-tight">
          {{ pocket.name }}
        </div>
        <div class="text-xs uppercase  opacity-60">
          <template v-for="(champion, i) in pocket.champions.champions" :key="champion.name">
            <span v-if="i <= 2" class="text-1 tracking-wide font-medium scale-x-110">{{ champion.name }}<span v-if="i != 2 && i != pocket.champions.champions.length">, </span></span>
          </template>
        </div>
      </div>

      <div v-if="pocket.items.sets" class="grid grid-cols-3 grid-flow-row grid-rows-2 h-full w-auto">
       <template  v-for="(item, index) in pocket.items.sets[0].items" :key="item.id">
<div v-if="index < 6" class="size-full aspect-square">
<img :src='`/img/item/${item.id}.webp`' class="h-full w-auto aspect-square rounded-lg"  />
</div>
</template>
      </div>
      <div class="relative -mt-1">
        <Donut
          :datasets="datasets"
          :colors="colors"
          :labels="labels"
          type="gauge"
          aria="Recent winrate in percentage"
          class="size-18"
        />

        <span class="text-bc absolute top-5 left-5 text-5 opacity-60 font-thin font-medium drop-shadow-sm"> {{ winrate }} </span>
      </div>
    </li>
      
</template>

<style scoped>

</style>