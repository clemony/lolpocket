<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import type { UseMediaControlsReturn } from "@vueuse/core"

const { thumbnail } = defineProps<{
  thumbnail?: HTMLImageElement["src"]
}>()
const button: ButtonProps = {
  size: "sm",
  ui: {
    base: "rounded-3xl pointer-events-auto!  bg-n0/70! text-nc! ring inset-ring-0 ring-n2/80 ring-offset-1 ring-offset-n4/70  backdrop-blur-md",
    label: "text-nc!",
    leadingIcon: "text-nc!"
  }
}

const open = shallowRef<boolean>(false)

const {
  togglePlay,
  toggleMute,
  playing,
  waiting,
  volume,
  muted,
  currentTime,
  duration,
  currentTimeLabel,
  durationLabel,
  togglePictureInPicture,
  supportsPictureInPicture
} = toValue(computed(() => safeObject(inject<MediaControls>("video"))))

const isSeeking = shallowRef<boolean>(false)
function handleSeek() {
  isSeeking.value = false
}
</script>

<template>
  <div
    :class="
      cn(
        'group/video via-neutral-70 pointer-events-none absolute inset-0 z-3 flex size-full flex-col overflow-hidden rounded-6xl bg-gradient-to-b from-neutral/90 via-30% to-transparent opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-100',
        { 'opacity-100': !playing }
      )
    "
    @hover-end="open = false">
    <!-- <VideoPlaceholder v-if="waiting && thumbnail" :thumbnail-src="thumbnail" /> -->
    <button
      role="toggle"
      class="pointer-events-auto grid size-full grow cursor-pointer place-items-center"
      @click="togglePlay()">
      <Spinner v-if="waiting" class="absolute z-1 size-10 text-nc/80" />
      <Icon
        v-else
        :name="playing ? 'i-ion-md-pause' : 'i-ion-play'"
        class="absolute z-1 size-18 text-nc/80" />
    </button>

    <slot name="header" />
    <div
      :class="
        cn(
          'pointer-events-none absolute bottom-0 z-2 flex size-full h-12 w-full grow translate-y-22 flex-nowrap items-center gap-2.5 justify-self-end rounded-t-xl rounded-b-none bg-n0/86! px-5 py-px shadow-md ring ring-n4/70 backdrop-blur-lg transition-all duration-300 ease-in-out *:pointer-events-auto group-hover/video:translate-y-0',
          { 'translate-y-0': !playing }
        )
      ">
      <UButton
        v-bind="button"
        :icon="playing ? 'i-ion-md-pause' : 'i-ion-play'"
        @click="togglePlay()" />
      <div class="mr-8 ml-6 flex grow items-center gap-2">
        <USlider
          :ui="{
            root: 'grow',
            track: 'grow cursor-pointer bg-n5/80 hover:brightness-110',
            range: cn('bg-p4/80 duration-400 ease-linear', {
              'duration-50': isSeeking
            }),
            thumb: 'opacity-0'
          }"
          :step="1"
          :max="duration"
          :model-value="currentTime"
          @pointerdown="isSeeking = true"
          @pointerup="handleSeek" />
        <div
          class="flex shrink-0 flex-nowrap items-center text-xs font-semibold text-nc!">
          {{ currentTimeLabel
          }}<span class="opacity-50"
            >&nbsp;&nbsp;/&nbsp;&nbsp;{{ durationLabel }}</span
          >
        </div>
      </div>
      <UPopover
        v-model:open="open"
        mode="hover"
        :content="{ side: 'top', align: 'start', sideOffset: 6 }"
        :ui="{
          content:
            'flex h-44! w-8 flex-col-reverse items-center gap-1.5 border-0 bg-n1/70! px-1.5 pt-1 pb-3 ring-n4/70 ring-offset-0'
        }">
        <UButton
          v-bind="button"
          :ui="{
            ...button?.ui,
            leadingIcon: 'scale-120 text-nc!'
          }"
          :icon="
            muted
              ? 'i-ion-md-volume-mute'
              : volume < 0.5
                ? 'i-ion-md-volume-low'
                : 'i-ion-md-volume-high'
          " />
        <template #content>
          <USlider
            v-model:model-value="volume"
            orientation="vertical"
            size="xs"
            :max="1"
            :min="0"
            :step="0.01"
            :ui="{
              track: 'cursor-pointer bg-n5',
              range: 'bg-nc',
              thumb: 'bg-transparent shadow-none ring-transparent'
            }"
            @update:model-value="
              (e: number | undefined) => (volume = e ?? 0)
            " />
          <UButton
            v-bind="button"
            size="xs"
            square
            variant="ghost"
            color="neutral"
            :ui="{
              ...button?.ui,
              base: cn('max-size-6! anchor hover:ng-n3 size-6!'),
              leadingIcon: 'scale-120'
            }"
            icon="i-ion-md-volume-off"
            @click="toggleMute()" />
        </template>
      </UPopover>
      <UButton
        v-if="supportsPictureInPicture"
        v-bind="button"
        icon="i-ri-picture-in-picture-fill"
        @click="togglePictureInPicture()" />
      <UButton v-bind="button" icon="i-lucide-maximize" />
    </div>
  </div>
</template>
