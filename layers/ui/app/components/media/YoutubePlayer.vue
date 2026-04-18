<script setup lang="ts">
import { useScriptYouTubePlayer } from "#imports"
import { useEmitAsProps } from "reka-ui"
import type * as YT from "youtube"
import { secondsToTime } from "~~/layers/lib/app/utils/time"

const props = withDefaults(
  defineProps<{
    videoId: string
    thumbnailSrc?: string | null
    autoplay?: boolean
    cookies?: boolean
    muted?: boolean
  }>(),
  {
    thumbnailSrc: null,
    autoplay: true,
    cookies: false,
    muted: false
  }
)

const emit = defineEmits(["ready"])
const video = useTemplateRef<YT.PlayerEvent>("video")
defineExpose({ video })

const { proxy } = useScriptYouTubePlayer({
  scriptOptions: {
    trigger: "manual"
  }
})
const { YT: youtube } = await proxy
console.log("🥸 - YT:", youtube)

console.log("🥸 - props:", props)

function canPlay() {
  if (!video?.value) return
  emit("ready")
  video.value?.target?.playVideo()
}

function reload() {
  if (!video?.value) return
  video.value?.target?.loadVideoById(props.videoId)
}

const emits = useEmitAsProps(emit)

const state = computed(() => video.value?.target?.getPlayerState())
console.log("🥸 - state:", state)
const controls = reactive({
  play: video.value?.target?.playVideo,
  pause: video.value?.target?.pauseVideo
})
/*
onMounted(() => {
  controls.value.volume.value = 0
  controls.value.currentTime.value = 0
})

const state = {
  ...controls,
  togglePlay: useToggle(controls.value.playing),
  toggleMute: useToggle(controls.value.muted),
  currentTimeLabel: computed(() =>
    secondsToTime(controls.value.currentTime.value)
  ),
  durationLabel: computed(() => secondsToTime(controls.value.duration.value))
}
 */
provide("video", state)
</script>

<template>
  <div v-auto-animate class="size-full">
    <ScriptYouTubePlayer
      ref="video"
      class="z-0 size-full min-w-full overflow-hidden object-cover"
      v-bind="props"
      :video-id
      @ready="canPlay()"
      @error="reload()">
    </ScriptYouTubePlayer>
    <slot :state />
  </div>
</template>
