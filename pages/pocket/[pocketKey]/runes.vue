<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
  selectedRunes: RuneSet
}>()

definePageMeta({
  name: 'runes',
})

const pocket = ref(props.pocket)
console.log('pok', pocket)

const set = ref(props.selectedRunes)

watch(
  () => props.selectedRunes,
  (newVal) => {
    set.value = newVal
  },
)

const primary = computed(() => {
  const a = set.value && set.value.primary != undefined
    ? set.value.primary
    : ''
  return a
})

const secondary = computed(() => {
  const a = set.value && set.value.secondary
    ? set.value.secondary
    : ''
  return a
})

const runeVideo = computed (() => {
  const a = ref(set.value.primary.path)
  return a.value == 'Sorcery' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/sorcery/background_loop.webm' : a.value == 'Inspiration' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/inspiration/background_loop.webm' : a.value == 'Resolve' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/resolve/background_loop.webm' : a.value == 'Domination' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/domination/background_loop.webm' : a.value == 'Precision' ? 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/precision/background_loop.webm' : ''
})

const video = ref(null)
onMounted (async () => {
  video.value.player.play()
})
</script>

<template>
  <div class="relative overflow-hidden">
    <PocketHeader
      title="Runes" :pocket="pocket"
      bg-class="absolute top-0 left-0 bg-transparent [&_.bread]:bg-transparent"
    />
    <videoBackground ref="video" :src="runeVideo" class="size-full grayscale bg-center opacity-65 brightness-180 aspect-video absolute z-0 gradient-mask-l-0" />

    <div class="absolute inset-0">
      <MenubarSpacer class="w-full !h-[9vh]" />

      <div class="flex gap-10  justify-center  l max-h-[95vh]">
        <PocketRunePanels :rune-set="set" :pocket="pocket" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
