<script lang="ts" setup>
import Fuse from 'fuse.js'

const props = defineProps<{
  selectedIcon: string
  pocket?: Pocket
}>()

const emit = defineEmits(['update:selectedIcon'])

const ds = useDataStore()

const cs = useChampStore()

const images = ref([])
const selectIcon = ref()

function handleChange(image) {
  selectIcon.value = image
  emit('update:selectedIcon', image)
}

const fuse = ref()

const searchResult = computedAsync (() => {
  const find ={id:''} // ds.champions.find(c => c.name == cs.championSplashDropdown)

  if (find) {
    return fuse.value.search(find.id,
    )
  }
})

watch(
  () => searchResult.value,
  (newVal) => {
    // console.log('💠 - newVal:', newVal)
  },
)

onMounted (async () => {
  const imageModules = import.meta.glob('/public/img/champion-centered/*')
  images.value = Object.keys(imageModules).map(path => path.replace('/public', ''))

  await images.value

  fuse.value = new Fuse(images.value, {
    findAllMatches: true,
    threshold: 0.3,
  })

//TODO DELETE TRASH
//TRASH

  selectIcon.value = props.selectedIcon
})
</script>

<template>
  <div class="mb-3 pt-3 flex flex-col gap-4 w-full items-center h-full  overflow-y-auto">
    <div class="flex flex-row justify-end w-full px-1 h-28 overflow-visible">
      <div class="flex flex-col justify-between items-end mr-38">
        <h4 class="!text-4 pt-5">
          Select Icon
        </h4>

        <LazyChampionComboBox />
      </div>
      <div class=" justify-end items-center  relative flex">
        <div class="rounded-lg shadow-md border-neutral/50 inset-shadow-sm inset-shadow-black absolute">
          <PocketIcon :url="selectIcon" class="size-28 rounded-lg **:rounded-lg" />
        </div>
      </div>
    </div>
    <div class="w-full h-[calc(100%-220px)] justify-self-end  rounded-lg relative">
      <!--  <div
        class="absolute top-0 left-0 w-full h-fit justify-end justify-items-end gap-x-2 gap-y-3  overflow-y-scroll px-1 py-4 items-center grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(64px,1fr))]  ">
        <LazyPocketIcon image="/img/lp/192.webp" class="rounded-lg **:rounded-lg size-[64px] has-checked:ring-1 has-checked:ring-offset-2 has-checked:ring-neutral has-checked:ring-offset-b1 hover:ring-1" hydrate-on-visible>
          <input v-model="selectIcon" type="radio" value="/img/lp/192.webp" class="hidden" @change="handleChange('/img/lp/192.webp')" />
        </LazyPocketIcon>
        <template v-for="result in searchResult" :key="result.item">
          <LazySplashIcon v-model:model-value="selectIcon" :result="result" hydrate-on-visible @update:selected-icon="handleChange($event)" />
        </template>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>
