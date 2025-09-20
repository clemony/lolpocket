<script lang="ts" setup>
import { motion } from 'motion-v'

const { isVisible } = defineProps<{
  isVisible: boolean
}>()

const isPlaying = ref(true)
</script>

<template>
  <div
    class="z-2 size-full transition-opacity duration-500 pointer-events-auto opacity-0 gap-3 flex justify-end pr-5 items-end pb-5"
    :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }">
    <div class="flex items-center gap-2">
      <HoverBtnSm :tip="isPlaying ? 'Pause' : 'Play'">
        <icon
          v-if="isPlaying"
          name="pause"
          class="opacity-60 shrink-0" />

        <icon
          v-else
          name="play"
          class="opacity-60 size-4 shrink-0" />
      </HoverBtnSm>

      <div class="w-26 grid items-center">
        <label
          v-show="!isPlaying"
          :class="
            cn(
              'text-xs font-semibold overflow-hidden align-end mt-px text-bc/60 ',
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
              class="size-4 opacity-50 shrink-0" />
          </HoverBtnSm>
        </DropdownMenuTrigger>

        <ContrastDropdownContent
          side="top"
          align="end"
          :align-offset="-10"
          class="mr-3 w-60">
          <div
            class="w-full items-center px-1.5 gap-3 flex py-1 text-xs text-nc/80">
            <icon
              :name="
                as().settings.motion
                  ? 'ph:video-camera-fill'
                  : 'ph:video-camera-slash'
              "
              class="opacity-90 shrink-0" />
            {{ as().settings.motion ? "Motion On" : "Motion Off" }}
            <Grow />

            <Switch
              v-model="as().settings.motion as boolean"
              class="data-[state=unchecked]:bg-b3/40 inset-shadow-xs data-[state=checked]:bg-linear-to-br to-ah/90 to-60% from-lime-400/90 border-b4/50 justify-self-end scale-85" />
          </div>
        </ContrastDropdownContent>
      </DropdownMenu>
    </div>
  </div>
</template>
