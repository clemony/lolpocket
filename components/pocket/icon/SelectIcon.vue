<script lang="ts" setup>
import Fuse from 'fuse.js'

const props = defineProps<{
  selectedIcon: string
  pocket?: pocket
}>()
const emit = defineEmits(['update:selectedIcon'])
const ds = useDataStore()

const ts = useTempStore()

const images = ref([])
const selectIcon = ref()

const champions = ds.champions.map(c => c.name)

function handleChange(image) {
  console.log('💠 - handleChange - image:', image)
  emit('update:selectedIcon', selectIcon.value)
}
const fuse = ref()

const searchResult = computedAsync (() => {
  const find = ds.champions.find(c => c.name == ts.drawerChampSelectDropdown)

  if (find) {
    return fuse.value.search(find.apiname,
    )
  }
})

watch(
  () => searchResult.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

onMounted (async () => {
  const imageModules = import.meta.glob('/public/img/champion/centered/*')
  images.value = Object.keys(imageModules).map(path => path.replace('/public', ''))

  await images.value

  fuse.value = new Fuse(images.value, {
    findAllMatches: true,
    threshold: 0.3,
  })

  if (ts.drawerChampSelectDropdown == null) {
    ts.drawerChampSelectDropdown = useRandom(champions)
  }

  selectIcon.value = props.selectedIcon
})
</script>

<template>
  <div class="mb-3 pt-3 grid gap-4  items-center   overflow-y-auto">
    <div class="flex justify-between px-2 h-28 overflow-visible">
      <div class="flex flex-col justify-between">
        <h4 class="!text-4 pt-5">
          Select Icon
        </h4>

        <ChampionComboBox :champ-names="champions" />
      </div>
      <div class="size-full justify-end items-center  relative flex">
        <div class="rounded-full shadow-md border-neutral/50 inset-shadow-sm inset-shadow-black absolute">
          <PocketIcon :image="selectIcon" class="size-28" />
        </div>
      </div>
    </div>
    <div
      class=" w-full h-auto  justify-between gap-1 justify-self-center overflow-y-scroll  py-4 place-items-center grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(60px,1fr))] px-1 "
    >
      <label
        v-for="result in searchResult" :key="result.item" alt="Champion Image"
        variant="outline"
        :style="{
          backgroundImage: `url(${result.item})`,
          backgroundSize: result.item == '/img/champion/centered/-1.webp' ? '100%' : '450%',
          backgroundPosition: 'center 20%',
          height: '60px',
          width: '60px' }" class="shadow-warm has-checked:bg-b2/60 border-b2   shrink-0  overflow-hidden rounded-lg border has-checked:ring-1 has-checked:ring-offset-2 has-checked:ring-neutral has-checked:ring-offset-b1 hover:ring-1"
      >

        <input
          v-model="selectIcon"
          type="radio"
          name="iconPicker"
          :value="result.item"
          class="peer hidden"
          @change="handleChange(result.item)"
        />
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>
