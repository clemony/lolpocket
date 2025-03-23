<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'runes',
})

const pocket = ref(props.pocket)

const rs = useRuneStore()

const set = ref(rs.selectedRuneSet ? rs.selectedRuneSet : pocket.value.runes.sets[0])

watch(
  () => rs.selectedRuneSet,
  (newVal) => {
    set.value = newVal
  },
)

const pathName = computed (() => {
  const ds = useDataStore()
  return getRunePathName(rs.hoveredRune.id, ds.paths)
})

const isDataCollapsed = ref(true)
const toggleData = useToggle(isDataCollapsed)

// TODO: sidebar scaling / rune data collapse

onMounted (() => {
  const { width } = useWindowSize()
  width.value < 1200 ? isDataCollapsed.value = true : isDataCollapsed.value = false
  rs.hoveredRune ?? setSpellbookRune()
})
</script>

<template>
  <div class="size-full relative @container">
    <div
      class="size-full absolute inset-0 justify-center transition-all duration-300 ease-out  pl-8 flex">
      <RuneSetBar :pocket="pocket">
        <RunePanelMenu
          :set="set"
          :pocket="pocket" />
      </RuneSetBar>

      <div class="relative size-full justify-center w-full tldr-30 ">
        <div class="flex gap-10 absolute overflow-hidden inset-0 top-0 left-0  w-full justify-center  max-h-[95vh] flex-wrap">
          <PocketRunePanels :key="set.key" :set="set" :pocket="pocket" />
        </div>
      </div>

    </div>
  </div>
</template>

<style>

</style>
