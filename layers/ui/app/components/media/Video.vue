<script lang="ts" setup>
import type { VideoProps } from "#shared/types"
import { useEmitAsProps } from "reka-ui"
import { secondsToTime } from "~~/layers/lib/app/utils/time"
import type { MediaControlState } from "./mediaControls"
import { mediaControlsKey } from "./mediaControls"

const props = withDefaults(defineProps<Partial<VideoProps> & {}>(), {
  autoplay: true,
  loop: true,
  disablepictureinpicture: true,
  disableremoteplayback: true,
  muted: true,
  playsinline: true,
  src: "",
  crossorigin: "anonymous",
  controlslist: "nodownload",
  preload: "auto"
})

const emit = defineEmits(["ready"])

const video = useTemplateRef("video")
function canPlay() {
  if (!video.value) return
  emit("ready")
  video.value.play()
}

function reload() {
  if (!video.value) return
  video.value.load()
}

defineExpose({ video })

const emits = useEmitAsProps(emit)

const controls = useMediaControls(video)

onMounted(() => {
  controls.volume.value = 0
  controls.currentTime.value = 0
})

const state: MediaControlState = {
  ...controls,
  togglePlay: useToggle(controls.playing),
  toggleMute: useToggle(controls.muted),
  currentTimeLabel: computed(() => secondsToTime(controls.currentTime.value)),
  durationLabel: computed(() => secondsToTime(controls.duration.value)),
  seekTo(value: number) {
    controls.currentTime.value = value
  },
  setVolume(value: number) {
    controls.volume.value = value
  }
}

provide(mediaControlsKey, state)
</script>

<template>
  <div v-auto-animate class="size-full">
    <video
      ref="video"
      class="z-0 size-full min-w-full overflow-hidden object-cover"
      v-bind="props"
      @canplay="canPlay()"
      @error="reload()">
      <source :src="src" type="video/webm" />
    </video>
    <slot :state />
  </div>
</template>
