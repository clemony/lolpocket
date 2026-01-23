<script lang="ts" setup>
import { motion } from 'motion-v'

const { isVisible } = defineProps<{
  isVisible: boolean
}>()

const isPlaying = ref(true)
</script>

<template>
  <div
    class="
      pointer-events-auto z-2 flex size-full items-end justify-end gap-3 pr-5
      pb-5 opacity-0 transition-opacity duration-500
    "
    :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }">
    <div class="flex items-center gap-2">
      <HoverBtnSm :tip="isPlaying ? 'Pause' : 'Play'">
        <icon
          v-if="isPlaying"
          name="pause"
          class="shrink-0 opacity-60" />

        <icon
          v-else
          name="play"
          class="size-4 shrink-0 opacity-60" />
      </HoverBtnSm>

      <div class="grid w-26 items-center">
        <label
          v-show="!isPlaying"
          :class="
            cn(
              'align-end text-bc/60 mt-px overflow-hidden text-sm font-semibold',
            )
          ">
          Paused
        </label>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <HoverBtnSm tip="Options">
            <icon
              name="gear-solid"
              class="size-4 shrink-0 opacity-50" />
          </HoverBtnSm>
        </DropdownMenuTrigger>

        <ContrastDropdownContent
          side="top"
          align="end"
          :align-offset="-10"
          class="mr-3 w-60">
          <div
            class="text-nc/80 flex w-full items-center gap-3 px-1.5 py-1 text-sm">
            <icon
              :name="
                as().settings.motion
                  ? 'ph:video-camera-fill'
                  : 'ph:video-camera-slash'
              "
              class="shrink-0 opacity-90" />
            {{ as().settings.motion ? "Motion On" : "Motion Off" }}
            <Grow />

            <Switch
              v-model="as().settings.motion as boolean"
              class="
                border-b4/50 to-ah/90 data-[state=unchecked]:bg-b3/40 scale-85 justify-self-end
                from-lime-400/90 to-60% inset-shadow-xs
                data-[state=checked]:bg-linear-to-br
              " />
          </div>
        </ContrastDropdownContent>
      </DropdownMenu>
    </div>
  </div>
</template>
