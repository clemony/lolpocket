<script setup lang="ts">
const props = defineProps<{
  set?: RuneSet
  selectedRune?: string
  path?: string
  type: string
}>()
console.log('💠 - type:', props.type)

const ds = useDataStore()
const ts = useTempStore()
const paths = [...ds.paths]
const path = ref(props.path ?? '')
const set = ref(props.set)

const pathData = computed(() => {
  const foundPath = paths.find(p => p.name === path.value)
  if (!foundPath || typeof foundPath !== 'object') {
    console.error('⚠️ Unexpected pathData result:', foundPath)
    return { slots: [] }
  }
  return {
    ...foundPath,
    slots: foundPath.slots.slice(1), // Removes slot at index 0
  }
})

const selectedRunes = ref(path.value ? Array.from({ length: pathData.value.slots.length }).fill(null) : [])

watch(
  () => props.path,
  (newVal) => {
    path.value = newVal ?? '' // Default to an empty string
    selectedRunes.value = []
  },
)

watch(
  () => props.set,
  (newVal) => {
    set.value = newVal
  },
)

const runeWatcher = []
function handleSelection(slotIndex, rune) {
  selectedRunes.value[slotIndex] = rune
  if (props.type == 'primary') {
    set.value.primary.runes[slotIndex] = rune
  }
  else if (props.type == 'secondary') {
    set.value.secondary.runes[slotIndex] = rune
    handleSecondaryRunes(slotIndex.toString())
  }
}

function handleSecondaryRunes(slot) {
  if (props.type == 'primary') {
    return
  }
  const index = runeWatcher.findIndex(slotNum => slotNum == slot)

  if (index > -1) {
    runeWatcher.splice(index, 1)
    runeWatcher.push(slot)
  }
  else {
    runeWatcher.push(slot)
  }
  // push()
  if (runeWatcher.length > 2) {
    set.value.secondary.runes[runeWatcher[0]] = null
    runeWatcher.splice(0, 1)
  }
}

onMounted(() => {
  if (props.path) {
    path.value = props.path
  }
  if (props.set) {
    set.value = props.set
    console.log('💠 - onMounted - set.value:', set.value)
  }
})

function handleSelect(rune) {
  ts.selectedRune == rune
}

function onHover(rune) {
  setTimeout(() => {
    ts.hoveredRune = rune
  }, 1000)
}

const allRunes = computed (() => {
  const a = Object.values(set.value.primary.runes).concat(Object.values(set.value.secondary.runes))
  const b = a.filter(a => a != null)
  return b.map(r => r.id)
})
</script>

<template>
  <div
    class="ease -mt-2 justify-center  relative size-full h-fit w-114 max-w-114 rounded-xl  transition-all duration-500 **:select-none"
  >
    <div v-if="pathData && pathData.slots">
      <transition-slide
        :duration="{ enter: 700, leave: 100 }" :offset="{
          enter: ['-100%', 0],
          leave: ['100%', 0],
        }" group class="flex size-full  flex-col justify-evenly gap-16  rounded-xl  py-12 "
      >
        <div
          v-for="(slot, i) in pathData.slots" :key="path + i"
          class=" cursor-pointer flex h-16 justify-evenly gap-3 transition-all duration-500"
        >
          <div
            v-for="rune in slot.runes"
            :key="rune.id"

            v-tippy="rune.name == 'empty' ? 'Select a Path' : rune.name"
            class="size-fit rounded-full items-center justify-center"
          >
            <label
              :data-path="path"
              class=""
              :class="{
                'to-b1/20 rounded-full   bg-gradient-to-br backdrop-blur-md overflow-hidden from-b1/90 shadow-black/15 opacity-100 scale-105 grayscale-0 ring ring-black/3': allRunes.includes(rune.id),
                ' [&_img]:rounded-full h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0  group/r border-transparent relative cursor-pointer size-21.5  grid place-items-center  aspect-square  grayscale   [&_img]:inset-shadow-sm [&_img]:inset-shadow-black': rune.name != 'empty',

                'shadow-warm-2 shadow-warm-2': rune.name != 'empty' && allRunes.includes(rune.id),
              }"
              @mouseover="onHover(rune)"
              @click.right="handleSelect(rune)"
            >
              <input
                type="radio"
                :name="`${props.type}-${path}-${i}`"
                :data-checked="path == set.primary.path ? set.primary.runes[i + 1]?.id === rune.id : path == set.secondary.path ? set.secondary.runes[i + 1]?.id === rune.id : false"
                :checked="path == set.primary.path ? set.primary.runes[i + 1]?.id === rune.id : path == set.secondary.path ? set.secondary.runes[i + 1]?.id === rune.id : false"
                :disabled="rune.name == 'empty'"
                class="absolute hidden peer"
                @change="handleSelection(i + 1, rune)"
              />

              <Placeholder v-if="rune.name == 'empty'" class="size-17  cursor-not-allowed border border-b3/50 bg-gradient-to-br shadow-inset-sm from-b3/60 to-b3/80" />
              <img
                v-else
                :src="`/img/runes/${path}/${rune.name.replace(/\s/g, '')}.webp`"
                :alt="rune.name"
                class="size-16 "
                :class="{ ' border-black/50 border !size-15.25 opacity-94 inset-shadow-sm inset-shadow-black ': allRunes.includes(rune.id), 'drop-shadow-[2px_2px_2px_#00000080]': !allRunes.includes(rune.id) }"
              />

            </label>
          </div>
        </div>
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>