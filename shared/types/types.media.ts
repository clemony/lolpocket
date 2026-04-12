import type { UseMediaControlsReturn } from "@vueuse/core"
import type { StyleValue, VideoHTMLAttributes } from "vue"

export interface MediaControls extends UseMediaControlsReturn {
  togglePlay: () => void
  toggleMute: () => void
  currentTimeLabel: ComputedRef<string>
  durationLabel: ComputedRef<string>
}

export interface VideoProps {
  src: string
  crossorigin: VideoHTMLAttributes["crossorigin"]
  controlslist: VideoHTMLAttributes["controlslist"]
  preload: VideoHTMLAttributes["preload"]
  autoplay: VideoHTMLAttributes["autoplay"]
  loop: VideoHTMLAttributes["loop"]
  disablepictureinpicture: boolean
  disableremoteplayback: boolean
  muted: VideoHTMLAttributes["muted"]
  playsinline: VideoHTMLAttributes["playsinline"]
  style: StyleValue
}
