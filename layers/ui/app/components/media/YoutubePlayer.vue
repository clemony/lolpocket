<script setup lang="ts">
import { useScriptYouTubePlayer } from "#imports"
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

const PLAYER_STATE = {
  BUFFERING: 3,
  CUED: 5,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1
} as const

type PlayerState = (typeof PLAYER_STATE)[keyof typeof PLAYER_STATE]

interface YouTubePlayerHandle {
  destroy: () => void
  getCurrentTime: () => number
  getDuration: () => number
  getVideoLoadedFraction: () => number
  loadVideoById: (videoId: string) => void
  mute: () => void
  pauseVideo: () => void
  playVideo: () => void
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
}

interface YouTubePlayerReadyEvent {
  target: YouTubePlayerHandle
}

interface YouTubePlayerStateEvent {
  data: PlayerState
}

interface YouTubeApi {
  Player: new (
    element: HTMLElement,
    options: {
      events: {
        onReady: (event: YouTubePlayerReadyEvent) => void
        onStateChange: (event: YouTubePlayerStateEvent) => void
      }
      host: string
      playerVars: {
        autoplay: 0 | 1
        controls: 0 | 1
        playsinline: 1
        rel: 0
      }
      videoId: string
    }
  ) => YouTubePlayerHandle
  ready: (callback: () => void) => void
}

const playerEl = useTemplateRef<HTMLDivElement>("playerEl")

const script = useScriptYouTubePlayer({
  scriptOptions: {
    trigger: "manual"
  }
})

const ytPlayer = shallowRef<YouTubePlayerHandle | null>(null)
const isPlayerReady = shallowRef(false)
const isPlaying = shallowRef(false)
const isSeeking = shallowRef(false)

/* const duration = ref(0)
const currentTime = ref(0) */
const loadedFraction = ref(0)
const scrubValue = ref(0)

const video = useTemplateRef<HTMLVideoElement>("video")
const {
  playing,
  currentTime,
  duration,
  volume,
  muted,
  togglePictureInPicture,
  supportsPictureInPicture
} = useMediaControls(video)

let timer: ReturnType<typeof setInterval> | null = null

const hasDuration = computed(() => duration.value > 0)
const progressRatio = computed(() =>
  hasDuration.value ? currentTime.value / duration.value : 0
)
const currentTimeLabel = computed(() => secondsToTime(currentTime.value))
const durationLabel = computed(() => secondsToTime(duration.value))

function syncProgress() {
  if (!ytPlayer.value) return

  currentTime.value = ytPlayer.value.getCurrentTime()
  duration.value = ytPlayer.value.getDuration()
  loadedFraction.value = ytPlayer.value.getVideoLoadedFraction()

  if (!isSeeking.value) {
    scrubValue.value = progressRatio.value * 1000
  }
}

function startTicker() {
  stopTicker()
  syncProgress()
  timer = setInterval(syncProgress, 250)
}

function stopTicker() {
  if (timer) clearInterval(timer)
  timer = null
}

async function ensureApi(): Promise<YouTubeApi> {
  const proxy = await script.proxy
  const api = (await proxy.YT) as YouTubeApi

  if (typeof api.Player === "undefined") {
    await new Promise<void>((resolve) => api.ready(resolve))
  }

  return api
}

function destroyPlayer() {
  stopTicker()
  ytPlayer.value?.destroy()
  ytPlayer.value = null
  isPlayerReady.value = false
  isPlaying.value = false
  duration.value = 0
  currentTime.value = 0
  loadedFraction.value = 0
  scrubValue.value = 0
}

function handlePlayerReady(event: YouTubePlayerReadyEvent) {
  ytPlayer.value = event.target
  isPlayerReady.value = true

  if (props.muted) {
    event.target.mute()
  }

  syncProgress()
  startTicker()
}

function handlePlayerStateChange(event: YouTubePlayerStateEvent) {
  isPlaying.value = event.data === PLAYER_STATE.PLAYING

  if (
    event.data === PLAYER_STATE.PLAYING ||
    event.data === PLAYER_STATE.BUFFERING
  ) {
    startTicker()
    return
  }

  if (
    event.data === PLAYER_STATE.PAUSED ||
    event.data === PLAYER_STATE.ENDED ||
    event.data === PLAYER_STATE.CUED
  ) {
    syncProgress()
    stopTicker()
  }
}

async function initPlayer() {
  if (import.meta.server || !playerEl.value || ytPlayer.value) return

  await script.load()
  const api = await ensureApi()

  ytPlayer.value = new api.Player(playerEl.value, {
    host: props.cookies
      ? "https://www.youtube.com"
      : "https://www.youtube-nocookie.com",
    videoId: props.videoId,
    playerVars: {
      autoplay: props.autoplay ? 1 : 0,
      controls: 0,
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: handlePlayerReady,
      onStateChange: handlePlayerStateChange
    }
  })
}

function togglePlayback() {
  if (!ytPlayer.value) return
  if (isPlaying.value) {
    ytPlayer.value.pauseVideo()
    return
  }
  ytPlayer.value.playVideo()
}

function seekToRatio(ratio: number) {
  if (!ytPlayer.value || !hasDuration.value) return
  const time = duration.value * ratio
  ytPlayer.value.seekTo(time, true)
  currentTime.value = time
  scrubValue.value = ratio * 1000
}

function onScrubInput(event: Event) {
  const target = event.target as HTMLInputElement
  isSeeking.value = true
  scrubValue.value = Number(target.value)
}

function onScrubChange(event: Event) {
  const target = event.target as HTMLInputElement
  seekToRatio(Number(target.value) / 1000)
  isSeeking.value = false
}

onMounted(() => {
  initPlayer()
})

watch(
  () => props.videoId,
  (videoId, previousVideoId) => {
    if (
      !ytPlayer.value ||
      !isPlayerReady.value ||
      videoId === previousVideoId
    ) {
      return
    }

    ytPlayer.value.loadVideoById(videoId)
  }
)

onBeforeUnmount(() => {
  destroyPlayer()
})
function onLoad() {
  emit("ready")
}

function onStateChange() {}
</script>

<template>
  <!--   <div
    class="group/player relative isolate size-full overflow-hidden rounded-xl bg-black">
    <div
      ref="playerEl"
      class="absolute inset-0 z-1 size-full"
      :class="{ 'opacity-0': !isPlayerReady }" /> -->

  <ScriptYouTubePlayer
    ref="video"
    v-auto-animate
    :video-id
    @ready="onLoad()"
    @state-change="onStateChange">
  </ScriptYouTubePlayer>
  <!--
    <div
      class="pointer-events-none absolute inset-0 z-2 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-200"
      :class="{
        'opacity-100': !isPlayerReady || !isPlaying,
        'opacity-0 group-focus-within/player:opacity-100 group-hover/player:opacity-100':
          isPlayerReady && isPlaying
      }" />

    <div
      class="pointer-events-auto absolute inset-x-0 bottom-0 z-3 flex flex-col gap-2 px-4 py-3 text-white transition-opacity duration-200"
      :class="{
        'opacity-100': !isPlayerReady || !isPlaying,
        'opacity-0 group-focus-within/player:opacity-100 group-hover/player:opacity-100':
          isPlayerReady && isPlaying
      }">
      <div
        class="relative h-1.5 w-full overflow-hidden rounded-full bg-white/16">
        <div
          class="absolute inset-y-0 left-0 rounded-full bg-white/28"
          :style="{ width: `${loadedFraction * 100}%` }" />
        <div
          class="absolute inset-y-0 left-0 rounded-full bg-white"
          :style="{
            width: `${(isSeeking ? scrubValue / 1000 : progressRatio) * 100}%`
          }" />
      </div>

      <input
        class="range range-neutral range-xs -mt-3 w-full bg-transparent px-0"
        type="range"
        min="0"
        max="1000"
        :value="scrubValue"
        @input="onScrubInput"
        @change="onScrubChange" />

      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <UButton
            color="neutral"
            variant="soft"
            :icon="isPlaying ? 'i-pause' : 'i-play'"
            :ui="{
              base: 'size-9 justify-center rounded-full bg-black/40 ring-white/10 backdrop-blur-sm hover:bg-black/55',
              leadingIcon: 'size-4.5 text-white'
            }"
            @click="togglePlayback" />

          <span class="min-w-18 text-sm font-medium tabular-nums">
            {{ currentTimeLabel }} / {{ durationLabel }}
          </span>
        </div>
      </div>
    </div>-->
  <!--   </div> -->
</template>
