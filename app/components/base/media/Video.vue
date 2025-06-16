<script lang="ts" setup>
const { video } = defineProps<{
  video: string
}>()

const videoRef = ref<HTMLMediaElement>()
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
    @canplay="videoRef.play()">
    <source
      :src="video"
      type="video/webm" />

  </video>
</template>