<script lang="ts" setup>
const { src } = defineProps<{
  src: string
}>()

const videoRef = ref<HTMLMediaElement>()

function canPlay() {
  if (!videoRef.value)
    return

  videoRef.value.play()
}
</script>

<template>
  <video
    ref="videoRef"
    autoplay
    muted
    loop
    disablepictureinpicture
    disableremoteplayback
    controlslist=" nodownload "
    playsinline
    class="size-full  overflow-hidden   object-cover"
    @canplay="canPlay()">
    <source
      :src="src"
      type="video/webm" />

  </video>
</template>