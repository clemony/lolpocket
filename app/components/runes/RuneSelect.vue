<script setup lang="ts">
const props = defineProps<{
  pathSet?: number
  runeSet?: number
  pocket?: Pocket
  selectedRune?: string
  modelValue?: string
}>()
const ds = useDataStore()
const rs = useRuneStore()
// const pocket = ref(props.pocket)

// const pathSet = ref(props.pathSet == 1 ? 'primary' : 'secondary')

const selectedPath = ref(props.modelValue)
const { allRunes, pathList } = useRunes()

onMounted(() => {
  selectedPath.value = props.modelValue
})

const selectedRune = ref(null)
</script>

<template>
  <div
    class="ease gradient border-b3 shadow-smooth relative size-full h-fit w-120 max-w-120 rounded-xl bg-clip-border transition-all duration-500"
    :data-path="selectedPath">
    <div class="from-b1/20 via-b1/90 to-b1 flex size-full flex-col justify-center gap-16 justify-self-center rounded-xl bg-linear-to-b via-25% py-12">
      <div
        v-for="(slot, i) in allRunes[selectedPath]"
        :key="i"
        class="animate-in animate-out fade-out fade-in flex h-16 justify-evenly gap-3 transition-all duration-500"
        :class="{
          'h-22 w-auto justify-between': slot === allRunes[selectedPath][0],

        }">
        <label
          v-for="rune in slot"
          :key="rune.id"
          v-tippy="rune.name"
          :data-path="selectedPath"
          class="h-full rounded-full opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          :class="{
            'scale-115 opacity-100 grayscale-0': selectedRune === rune,
            'shadow-pretty': slot != allRunes[selectedPath][0] && selectedRune === rune,
            'scale-125': slot == allRunes[selectedPath][0] && selectedRune === rune,
            'gradient shadow-standard border-2 border-transparent [&_img]:rounded-full [&_img]:inset-shadow-sm [&_img]:inset-shadow-black': slot != allRunes[selectedPath][0],
            '[&_img]:drop-shadow-md': slot == allRunes[selectedPath][0],
          }">
          <input
            v-model="selectedRune"
            type="radio"
            name="rune"
            :value="rune"
            class="absolute hidden" />
          <img
            :src="`/img/runes/${rune.path}/${rune.key}.webp`"
            :alt="rune.name"
            class="size-full" />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
