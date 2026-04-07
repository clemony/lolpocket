<script lang="ts" setup>
const { src } = defineProps<{
  src: string
}>()

const videoRef = useTemplateRef<HTMLMediaElement>("videoRef")

function canPlay() {
  if (!videoRef.value) return

  videoRef.value.play()
}

function reload() {
  if (!videoRef.value) return

  videoRef.value.load()
}
</script>

<template>
  <video
    ref="videoRef"
    class="size-full overflow-hidden object-cover"
    autoplay
    p2
    loop
    disablepictureinpicture
    disableremoteplayback
    crossorigin="anonymous"
    controlslist=" nodownload "
    playsinline
    @canplay="canPlay()"
    @error="reload()">
    <source :src="src" type="video/webm" />
  </video>
</template>
