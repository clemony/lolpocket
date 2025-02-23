<script setup lang="ts">
const props = defineProps<{
  pathSet?: string
  runeSet?: RuneSet
  pocket?: pocket
  selectedRune?: string
  modelValue?: string
}>()

const ds = useDataStore()
const ts = useTempStore()
const pocket = ref(props.pocket)
const paths = [...ds.paths]
const selectedPath = ref(props.modelValue)
const runeSet = ref(props.runeSet)

const selectedPathData = computed(() => {
  return paths.find(path => path.name === selectedPath.value)
})
const selectedRunes = ref(selectedPathData.value ? Array.from({ length: selectedPathData.value.slots.length }).fill(null) : [])

watch(
  () => props.modelValue,
  (newVal) => {
    selectedPath.value = newVal
    selectedRunes.value = []
  },
)

watch(
  () => props.runeSet,
  (newVal) => {
    runeSet.value = newVal
  },
)

const runeWatcher = []
function handleSelection(slotIndex, rune) {
  selectedRunes.value[slotIndex] = rune
  if (props.pathSet == 'p') {
    runeSet.value.primary.runes[slotIndex] = rune
  }
  else if (props.pathSet == 's') {
    runeSet.value.secondary.runes[slotIndex] = rune
    handleSecondaryRunes(slotIndex.toString())
  }

  console.log('💠 - handleSecondaryRunes - runeSet.value.secondary.runes:', runeSet.value)
}

function handleSecondaryRunes(slot) {
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
    runeSet.value.secondary.runes[runeWatcher[0]] = null
    runeWatcher.splice(0, 1)
  }
}

onMounted(() => {
  selectedPath.value = props.modelValue
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
  const a = Object.values(runeSet.value.primary.runes).concat(Object.values(runeSet.value.secondary.runes))
  const b = a.filter(a => a != null)
  return b.map(r => r.key)
})
</script>

<template>
  <div
    class="ease justify-start  relative size-full h-fit w-120 max-w-120 rounded-xl  transition-all duration-500 **:select-none"
    :data-path="selectedPath"
    :class="selectedPath.toLowerCase()"
  >
    <transition-slide
      :duration="{ enter: 700, leave: 100 }" :offset="{
        enter: ['-100%', 0],
        leave: ['100%', 0],
      }" group class="flex size-full  flex-col justify-center gap-16  rounded-xl  py-12 "
    >
      <div
        v-for="(slot, i) in selectedPathData.slots"
        :key="selectedPath + i"
        class=" cursor-pointer flex h-16 justify-evenly gap-3 transition-all duration-500"
        :class="{
          'h-22 w-auto justify-between': slot === selectedPathData.slots[0],
          'hidden': slot === selectedPathData.slots[0] && props.pathSet == 's',
        }"
      >
        <div
          v-for="rune in slot.runes"
          :key="rune.id"
          v-tippy="rune.name"
          class="size-fit rounded-full"
          :style="{
            background: allRunes.includes(rune.key) && props.pathSet == 'p' ? `linear-gradient(110deg, transparent, var(--color-${runeSet.primary.path.toLowerCase()}))` : allRunes.includes(rune.key) && props.pathSet == 's' ? `linear-gradient(110deg, transparent, var(--color-${runeSet.secondary.path.toLowerCase()}))` : '' }"
        >
          <label
            :data-path="selectedPath"
            class="h-full rounded-full opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 has-checked:scale-115  has-checked:opacity-100  has-checked:grayscale-0 group/r border-transparent relative cursor-pointer has-checked:from-b1/90 has-checked:to-b1/20  has-checked:rounded-full has-checked:bg-gradient-to-br grid place-items-center has-checked:backdrop-blur-md has-checked:overflow-hidden size-22 aspect-square"
            :class="{
              'has-checked:shadow-warm-2 shadow-black/15 [&_img]:rounded-full s  grayscale   [&_img]:inset-shadow-sm [&_img]:inset-shadow-black': i != 0 && rune.name != 'empty', '!size-26': i == 0,
            }"
            @mouseover="onHover(rune)"
            @click.right="handleSelect(rune)"
          >
            <input
              type="radio"
              :name="`${pathSet}-${i}`"
              :data-checked="pathSet === 'p' ? runeSet.primary.runes[i]?.id === rune.id : pathSet === 's' ? runeSet.secondary.runes[i]?.id === rune.id : false"
              :checked="pathSet === 'p' ? runeSet.primary.runes[i]?.id === rune.id : pathSet === 's' ? runeSet.secondary.runes[i]?.id === rune.id : false"
              class="absolute hidden peer"
              @change="handleSelection(i, rune)"
            />
            <img
              :src="`/img/runes/${selectedPath}/${rune.name.replace(/\s/g, '')}.webp`"
              :alt="rune.name"
              class="size-16 "
              :class="{ 'absolute  opacity-0 group-hover/r:opacity-100 duration-300  transition-all peer-checked:opacity-100  !size-22': i == 0, 'peer-not-checked:drop-shadow-[2px_2px_2px_#00000080] border-b3 size-17 inset-shadow-sm inset-shadow-black': i != 0 }"
            />
            <img
              v-if="i == 0"
              :src="`/img/runes/${selectedPath}/${rune.name.replace(/\s/g, '')}_grayscale.webp`"
              :alt="rune.name"
              class="size-22 absolute opacity-100 drop-shadow-[5px_5px_2px_#00000080] group-hover/r:opacity-0 duration-300 transition-all peer-checked:opacity-0"
            />
          </label>
        </div>
      </div>
    </transition-slide>
  </div>
</template>

<style scoped></style>