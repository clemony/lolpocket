<script lang="ts" setup>
const { src } = defineProps<{
  src: string
}>()

const videoRef = useTemplateRef<HTMLMediaElement>('videoRef')

function canPlay() {
  if (!videoRef.value)
    return

  videoRef.value.play()
}

function reload() {
  if (!videoRef.value)
    return

  videoRef.value.load()
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
    class="size-full overflow-hidden object-cover"
    @canplay="canPlay()"
    @error="reload()">
    <source
      :src="src"
      type="video/webm" />
  </video>
</template>
