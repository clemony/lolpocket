import type { ComputedRef, InjectionKey, Ref } from "vue"

export interface MediaControlState {
  currentTime: Ref<number>
  currentTimeLabel: ComputedRef<string>
  duration: Ref<number>
  durationLabel: ComputedRef<string>
  muted: Ref<boolean>
  playing: Ref<boolean>
  seekTo: (value: number) => void
  setVolume: (value: number) => void
  supportsPictureInPicture: boolean | Ref<boolean> | ComputedRef<boolean>
  toggleMute: (value?: boolean) => boolean | void
  togglePictureInPicture: () => void | Promise<unknown>
  togglePlay: (value?: boolean) => boolean | void
  volume: Ref<number>
  waiting: Ref<boolean>
}

export const mediaControlsKey: InjectionKey<MediaControlState> =
  Symbol("media-controls")
