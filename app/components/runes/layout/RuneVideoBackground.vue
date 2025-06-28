<script lang="ts" setup>
const { path, class: className } = defineProps<{
  path: PathName
  class?: HTMLAttributes['class']
}>()

const url = 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/video/'

const runeVideo = computed (() => {
  return `${url}${path == 'Sorcery'
    ? 'sorcery/background_loop.webm'
    : path == 'Inspiration'
      ? 'inspiration/background_loop.webm'
      : path == 'Resolve'
        ? 'resolve/background_loop.webm'
        : path == 'Domination'
          ? 'domination/background_loop.webm'
          : path == 'Precision' ? 'precision/background_loop.webm' : ''}`
})

const video = ref(null)
onMounted (async () => {
  video.value.player.play()
})
</script>

<template>
  <div class="size-full relative">
    <video-background
      ref="video" :src="runeVideo"
      :class="cn('grayscale bg-cover opacity-15 absolute inset-0 top-0 left-0 contrast-400 brightness-380 size-full  z-0 ', className)">
    </video-background>

    <div class="absolute inset-0 top-0 left-0 flex justify-end">
      <slot />
    </div>
  </div>
</template>