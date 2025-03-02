<script lang="ts" setup>
const props = defineProps<{
  path: string
  set: RuneSet
}>()

const ds = useDataStore()
const ts = useTempStore()
const paths = [...ds.paths]
const path = ref(props.path ?? '')
const set = ref(props.set)

const pathData = computed(() => {
  const foundPath = paths.find(p => p.name === path.value)
  if (!foundPath || typeof foundPath !== 'object') {
    console.error('Unexpected pathData result:', foundPath)
    return [] // Return empty array if no valid path is found
  }
  return foundPath.slots[0]?.runes || [] // Default to empty array if no runes
})

const setKeystone = ref(set.value.primary.runes[0])

watch(
  () => set.value.primary.runes[0],
  (newVal) => {
    if (newVal) {
      setKeystone.value = newVal
    }
  },
)
watch(
  () => props.path,
  (newVal) => {
    path.value = newVal ?? '' // Default to an empty string
    // selectedRunes.value = []
  },
)

watch(
  () => props.set,
  (newVal) => {
    set.value = newVal
  },
)

onMounted(async () => {
  if (props.path) {
    path.value = props.path
  }
  if (props.set) {
    set.value = props.set
  }
})

function handleSelect(rune) {
  ts.selectedRune == rune
}

function handleKeystone(rune) {
  set.value.primary.runes[0] = rune
  console.log('💠 - handleKeystone - set.value.primary.runes:', set.value.primary.runes)
}

function onHover(rune) {
  setTimeout(() => {
    ts.hoveredRune = rune
  }, 1000)
}
</script>

<template>
  <div
    class="ease justify-start  relative size-full h-fit w-114 max-w-114 rounded-xl  transition-all duration-500 **:select-none"
  >
    <transition-slide
      :duration="{ enter: 700, leave: 100 }" :offset="{
        enter: ['-100%', 0],
        leave: ['100%', 0],
      }" group class="flex size-full   justify-evenly  rounded-xl  py-3 "
    >
      <div
        v-for="rune in pathData" :key="rune.id" v-tippy="rune.name" class="size-fit rounded-full"
      >
        <label
          :data-path="path"
          class="h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0  group/r border-transparent relative cursor-pointer  grid place-items-center  size-22 aspect-square"
          :class="{
            'to-b1/20 rounded-full shadow-warm-2  bg-gradient-to-br backdrop-blur-md overflow-hidden from-b1/90 shadow-black/20 opacity-100 scale-110 grayscale-0': setKeystone.id == rune.id,
          }"
          @mouseover="onHover(rune)"
        >
          <input
            type="radio"
            class="absolute hidden peer"
            :checked="rune.id == set.primary.runes[0].id"
            @change="handleKeystone(rune)"
          />
          <img
            :src="`/img/runes/${path}/${rune.name.replace(/\s/g, '')}.webp`"
            :alt="rune.name"
            class="absolute   opacity-0 group-hover/r:opacity-80 duration-300  transition-all group-hover/r:h-19   h-18 w-auto object-contain peer-checked:opacity-100"
          />
          <img
            :src="`/img/runes/${path}/${rune.name.replace(/\s/g, '')}_grayscale.webp`"
            :alt="rune.name"
            class="h-19 w-auto object-contain absolute contrast-150 brightness-90 opacity-100 drop-shadow-[5px_5px_2px_#00000080] group-hover/r:opacity-0 duration-300 transition-all peer-checked:opacity-0"
          />
        </label>
      </div>
    </transition-slide>
  </div>
</template>

<style scoped>

</style>