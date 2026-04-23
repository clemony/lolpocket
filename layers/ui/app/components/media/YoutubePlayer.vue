<script setup lang="ts">
import { useScriptYouTubePlayer } from "#imports"
import type * as YouTube from "youtube"
import { secondsToTime } from "~~/layers/lib/app/utils/time"
import type { MediaControlState } from "./mediaControls"
import { mediaControlsKey } from "./mediaControls"

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

interface LoadedYouTubeApi {
  Player: new (
    elt: HTMLElement | string,
    options?: YouTube.PlayerOptions
  ) => YouTube.Player
  PlayerState: typeof YouTube.PlayerState
  ready: (handler: () => void) => void
}

const { onLoaded } = useScriptYouTubePlayer({
  videoId: props.videoId
})

const video = useTemplateRef<HTMLDivElement>("video")
const player = ref<YouTube.Player | null>(null)
const youtubeApi = shallowRef<LoadedYouTubeApi | null>(null)
const playing = ref(false)
const waiting = ref(true)
const muted = ref(props.muted)
const volume = ref(props.muted ? 0 : 1)
const currentTime = ref(0)
const duration = ref(0)

let syncTimer: ReturnType<typeof setInterval> | null = null

function stopSync() {
  if (syncTimer) {
    clearInterval(syncTimer)
    syncTimer = null
  }
}

function syncFromPlayer() {
  const instance = player.value
  const api = youtubeApi.value

  if (!instance || !api) return

  currentTime.value = instance.getCurrentTime?.() ?? 0
  duration.value = instance.getDuration?.() ?? 0
  muted.value = instance.isMuted?.() ?? false
  volume.value = (instance.getVolume?.() ?? 0) / 100

  const state = instance.getPlayerState?.()
  playing.value = state === api.PlayerState.PLAYING
  waiting.value =
    state === api.PlayerState.BUFFERING || state === api.PlayerState.UNSTARTED
}

function startSync() {
  if (syncTimer) return
  syncFromPlayer()
  syncTimer = setInterval(syncFromPlayer, 250)
}

function togglePlay(value?: boolean) {
  const next = value ?? !playing.value
  const instance = player.value

  if (!instance) return next

  if (next) instance.playVideo()
  else instance.pauseVideo()

  playing.value = next
  syncFromPlayer()
  return next
}

function toggleMute(value?: boolean) {
  const next = value ?? !muted.value
  const instance = player.value

  if (!instance) return next

  if (next) instance.mute()
  else instance.unMute()

  muted.value = next
  syncFromPlayer()
  return next
}

function seekTo(value: number) {
  player.value?.seekTo(value, true)
  currentTime.value = value
}

function setVolume(value: number) {
  const next = Math.min(1, Math.max(0, value))
  const instance = player.value

  volume.value = next

  if (!instance) return

  instance.setVolume(Math.round(next * 100))

  if (next <= 0) instance.mute()
  else if (instance.isMuted()) instance.unMute()

  syncFromPlayer()
}

const state: MediaControlState = {
  currentTime,
  currentTimeLabel: computed(() => secondsToTime(currentTime.value)),
  duration,
  durationLabel: computed(() => secondsToTime(duration.value)),
  muted,
  playing,
  seekTo,
  setVolume,
  supportsPictureInPicture: false,
  toggleMute,
  togglePictureInPicture: () => {},
  togglePlay,
  volume,
  waiting
}

provide(mediaControlsKey, state)

onLoaded(async ({ YT: api }) => {
  youtubeApi.value = (await api) as unknown as LoadedYouTubeApi

  if (!video.value) return

  await new Promise<void>((resolve) => {
    if (typeof youtubeApi.value?.Player === "undefined")
      youtubeApi.value?.ready(resolve)
    else resolve()
  })

  const apiRef = youtubeApi.value
  if (!apiRef) return

  player.value = new apiRef.Player(video.value, {
    host: props.cookies ? undefined : "https://www.youtube-nocookie.com",
    videoId: props.videoId,
    playerVars: {
      autoplay: props.autoplay ? 1 : 0,
      controls: 0,
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady(event) {
        if (props.muted) event.target.mute()
        else event.target.unMute()

        event.target.setVolume(props.muted ? 0 : Math.round(volume.value * 100))

        startSync()
        syncFromPlayer()
        emit("ready")
      },
      onStateChange() {
        syncFromPlayer()
      }
    }
  })
})
onUnmounted(stopSync)
</script>

<template>
  <div v-auto-animate class="size-full overflow-hidden rounded-6xl">
    <div ref="video" class="size-full object-cover" />
    <slot :state="state" />
  </div>
</template>
