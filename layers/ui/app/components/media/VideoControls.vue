<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
const { state } = defineProps<
  {
    state: MediaControls
  } & Partial<{
    title: string
    author: string
    source: string
    to: string
    ready: boolean
  }>
>()

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
  playing,
  duration,
  currentTime,
  volume,
  muted,
  toggleMute,
  currentTimeLabel,
  durationLabel,
  supportsPictureInPicture,
  togglePictureInPicture
} = state
</script>

<template>
  <div
    :class="
      cn(
        'group/video pointer-events-none absolute inset-0 z-2 flex size-full flex-col',
        'after:via-neutral-70 after:absolute after:size-full after:bg-gradient-to-b after:from-neutral/90 after:via-30% after:to-neutral/0 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100'
      )
    ">
    <label
      role="toggle"
      class="pointer-events-auto size-full grow cursor-pointer"
      @click="togglePlay()" />

    <UPageFeature :to="to ?? ''" size="xl" :title="title ?? ''">
      <template #description> </template>
    </UPageFeature>

    <div
      class="pointer-events-none absolute bottom-0 z-2 flex size-full h-12 w-full grow translate-y-22 flex-nowrap items-center gap-2.5 justify-self-end rounded-t-xl rounded-b-lg bg-n0/86! px-5 py-px shadow-md ring ring-n4/70 backdrop-blur-lg transition-all duration-300 ease-in-out *:pointer-events-auto group-hover/video:translate-y-0">
      <UButton
        v-bind="button"
        :icon="playing ? 'i-ion-md-pause' : 'i-ion-play'"
        @click="togglePlay()" />
      <div class="mr-8 ml-6 flex grow items-center gap-2">
        <UProgress
          :ui="{
            root: 'grow',
            base: 'grow bg-n5/80 hover:brightness-110',
            indicator: 'bg-p4/80 duration-400 ease-linear'
          }"
          :max="duration"
          :model-value="currentTime" />
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
        :content="{ side: 'top', align: 'start' }"
        :ui="{
          content:
            'flex h-8 w-44! items-center gap-1.5 border-0 bg-n1/70! py-0 pr-1.5 pl-3 ring-n4/70 ring-offset-0'
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
            size="xs"
            :max="1"
            :min="0"
            :ui="{
              track: 'bg-n5',
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
