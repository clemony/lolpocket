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

function handleChange(image) {
  selectIcon.value = image
  emit('update:selectedIcon', image)
}

const fuse = ref()

const searchResult = computedAsync (() => {
  const find = ds.champions.find(c => c.name == ts.championSplashDropdown)

  if (find) {
    return fuse.value.search(find.apiname,
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
  const imageModules = import.meta.glob('/public/img/champion/centered/*')
  images.value = Object.keys(imageModules).map(path => path.replace('/public', ''))

  await images.value

  fuse.value = new Fuse(images.value, {
    findAllMatches: true,
    threshold: 0.3,
  })

  if (ts.championSplashDropdown == null) {
    ts.championSplashDropdown = getRandom(ds.championNames)
  }

  selectIcon.value = props.selectedIcon
})
</script>

<template>
  <div class="mb-3 pt-3 flex  gap-4 w-full items-start  overflow-y-auto">
    <LazyChampionComboBox />

    <PocketIcon :image="selectIcon" class="size-18 rounded-lg **:rounded-lg" />

    <div class="max-h-32 overflow-y-scroll">
      <LazyPocketIcon image="/img/champion/centered/1.webp" class="rounded-lg **:rounded-lg size-14 has-checked:ring-1 has-checked:ring-offset-2 has-checked:ring-neutral has-checked:ring-offset-b1 hover:ring-1">
        <input v-model="selectIcon" type="radio" value="/img/champion/centered/1.webp" class="hidden" @change="handleChange('/img/champion/centered/1.webp')" />
      </LazyPocketIcon>
      <template v-for="result in searchResult" :key="result.item">
        <LazySplashIcon v-model:model-value="selectIcon" :result="result" @update:selected-icon="handleChange($event)" />
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
