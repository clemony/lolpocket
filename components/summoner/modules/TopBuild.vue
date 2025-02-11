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
  <li v-if="index < 4" class="items-center  p-0 group">
    <!--      <div class="text-[2.3rem] font-thin opacity-30 tabular-nums mr-4">
        0{{ index }}
      </div> -->
    <!--  <div class="flex flex-col gap-2"> -->
    <div class="flex gap-3">
      <PocketIcon class="size-14 rounded-lg **:rounded-lg" :image="pocket.icon" />

      <div class="list-col grow">
        <div class="capitalize f-sb   text-4  tracking-tight">
          {{ pocket.name }}
        </div>

        <template v-for="(champion, i) in pocket.champions.children" :key="champion.name">
          <span v-if="i <= 2" class=" text-1 opacity-80 uppercase font-medium  scale-x-110">{{ champion.name }}<span v-if="i != 2 && i != pocket.champions.children.length">, </span></span>
        </template>
      </div>

      <div class="relative -mt-1">
        <Donut
          :datasets="datasets"
          :colors="colors"
          :labels="labels"
          type="gauge"
          aria="Recent winrate in percentage"
          class="!size-14"
        />

        <span class="text-bc absolute top-4.5 left-3.25 !text-1 opacity-90 f-sb  drop-shadow-sm"> {{ winrate }}% </span>
      </div>

      <div class="h-full m-auto">
        <icon name="right" class="size-3 stroke-[1.8]" />
      </div>

      <!--
       </div><div v-if="pocket.items.sets" class="flex h-full w-auto gap-1">
        <template
          v-for="(item, i) in pocket.items.sets[0].items" :key="item.id"
        >
          <div v-if="i < 6" class="size-8 aspect-square">
            <img :src="`/img/item/${item.id}.webp`" class="size-8  aspect-square rounded-md" />
          </div>
        </template>
      </div> -->
    </div>

    <Separator class="group-last-of-type:hidden mt-2.5 mb-0.25" />
  </li>
</template>

<style scoped>

</style>