<script lang="ts" setup>
import Fuse from 'fuse.js'

const props = withDefaults(
  defineProps<{
    pocketKey?: string
    pocket?: pocket
    selectedIcon?: string
    alignOffset?: number
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    side?: 'bottom' | 'top' | 'left' | 'right'
    class?: HTMLAttributes['class']
    b2?: boolean
  }>(),
  {
    align: 'start',
    side: 'bottom',
    sideOffset: 8,
    alignOffset: 0,
  },
)

const emit = defineEmits(['update:selectedIcon'])
const pocket = computed (() => {
  return props.pocketKey ? getPocket(props.pocketKey) : props.pocket
})

const ds = useDataStore()

const cs = useChampStore()

const images = ref([])
const selectIcon = ref()

function handleChange(image) {
  if (props.pocket) {
    pocket.value.icon = image
  }
  else {
    emit('update:selectedIcon', image)
  }
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
  if (props.pocket) {
    selectIcon.value = props.pocket.icon
  }
  else if (props.selectedIcon) {
    selectIcon.value = props.selectedIcon
  }
  else {
    selectIcon.value = '/img/champion/centered/1.webp'
  }

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
  <PopoverContent :side-offset="props.sideOffset" :align-offset="props.alignOffset" :align="props.align" :side="props.side" :class="cn('w-80 ', props.class)">
    <ChampionComboBox class="!w-full" :b2="props.b2" />

    <div class="mt-3 h-fit grid grid-cols-4 gap-2">
      <template v-for="result in searchResult" :key="result.item">
        <PopoverClose as-child>
          <LazySplashIcon v-model:model-value="selectIcon" :result="result" class="size-16" @update:selected-icon="handleChange($event)" />
        </PopoverClose>
      </template>
    </div>
  </PopoverContent>
</template>