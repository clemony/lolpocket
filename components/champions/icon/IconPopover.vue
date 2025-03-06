<script lang="ts" setup>
import Fuse from 'fuse.js'

const props = defineProps<{
  pocketKey?: string
  pocket?: pocket
}>()

const emit = defineEmits(['update:selectedIcon'])
const pocket = computed (() => {
  return props.pocketKey ? getPocket(props.pocketKey) : props.pocket
})

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
  const find = ds.champions.find(c => c.name == cs.championSplashDropdown)

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

  if (cs.championSplashDropdown == null) {
    cs.championSplashDropdown = getRandom(ds.championNames)
  }
})
</script>

<template>
  <PopoverContent class="w-80 " align="start">
    <ChampionComboBox class="!w-full" />

    <div class="mt-3 h-fit grid grid-cols-4 gap-2">
      <template v-for="result in searchResult" :key="result.item">
        <PopoverClose as-child>
          <LazySplashIcon v-model:model-value="pocket.icon" :result="result" class="size-16" @update:selected-icon="e => pocket.icon = e" />
        </PopoverClose>
      </template>
    </div>
  </PopoverContent>
</template>