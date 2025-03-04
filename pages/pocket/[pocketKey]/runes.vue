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
console.log('💠 - pocket.value.runes.sets:', pocket.value.runes.sets)

watch(
  () => rs.selectedRuneSet,
  (newVal) => {
    set.value = newVal
  },
)

const runeVideo = computed (() => {
  const a = ref(set.value.primary.path)
  return a.value == 'Sorcery' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/sorcery/background_loop.webm' : a.value == 'Inspiration' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/inspiration/background_loop.webm' : a.value == 'Resolve' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/resolve/background_loop.webm' : a.value == 'Domination' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/domination/background_loop.webm' : a.value == 'Precision' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/precision/background_loop.webm' : ''
})
const video = ref(null)
onMounted (async () => {
  video.value.player.play()
})

// pocket.value.runes.sets.length = 0
// newRuneSet(pocket.value.key)

onMounted (() => {
  !rs.selectedRuneSet ? rs.selectedRuneSet = pocket.value.runes.sets[0] : rs.selectedRuneSet
})

const isBarCollapsed = ref(true)
const toggleBar = useToggle(isBarCollapsed)

// TODO: sidebar scaling / rune data collapse
</script>

<template>
  <div class="size-full relative">
    <!--     <videoBackground ref="video" :src="runeVideo" class="  grayscale bg-cover opacity-15 contrast-400 brightness-380  h-full z-0 gradient-mask-t-0 w-full" /> -->
    <div
      class="size-full absolute inset-0 justify-center grid  transition-all duration-300 ease-out  pl-8 grid-cols-[94px_1fr_350px]">
      <RuneSetBar :pocket="pocket">
        <RunePanelMenu
          :set="set"
          :pocket="pocket"
          @clicked="toggleBar()" />
      </RuneSetBar>

      <div class="relative size-full justify-center w-full">
        <div class="flex gap-10 absolute inset-0 top-0 left-0 justify-center  max-h-[95vh]">
          <PocketRunePanels :key="set.key" :set="set" :pocket="pocket" />
        </div>
      </div>

      <div :default-size="22" class="pt-[7vh] px-14 bg-b1/90 gradient-mask-b-0 backdrop-blur-md  pb-10">
        <RuneData
          :set="set"
          :is-collapsed="isBarCollapsed" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
