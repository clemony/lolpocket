<script lang="ts" setup>
const { isVisible } = defineProps<{
  isVisible: boolean
}>()

const isPlaying = ref(true)
const motion = computed({
  get: () => user().settings?.motion ?? false,
  set: (v: boolean) => {
    const settings = user().settings
    if (settings) settings.motion = v
  }
})
</script>

<template>
  <div
    class="pointer-events-auto z-2 flex size-full items-end justify-end gap-3 pr-5 pb-5 opacity-0 transition-opacity duration-500"
    :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }">
    <div class="flex items-center gap-2">
      <HoverButtonSm :tip="isPlaying ? 'Pause' : 'Play'">
        <icon v-if="isPlaying" class="shrink-0 opacity-60" name="pause" />

        <icon v-else class="size-4 shrink-0 opacity-60" name="play" />
      </HoverButtonSm>

      <div class="grid w-26 items-center">
        <label
          v-show="!isPlaying"
          :class="
            cn(
              'align-end mt-px overflow-hidden text-sm font-semibold text-pc/60'
            )
          ">
          Paused
        </label>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <HoverButtonSm tip="Options">
            <icon class="size-4 shrink-0 opacity-50" name="gear-solid" />
          </HoverButtonSm>
        </DropdownMenuTrigger>

        <ContrastDropdownContent
          class="mr-3 w-60"
          side="top"
          align="end"
          :align-offset="-10">
          <div
            class="flex w-full items-center gap-3 px-1.5 py-1 text-sm text-nc/80">
            <icon
              class="shrink-0 opacity-90"
              :name="
                motion ? 'ph:video-camera-fill' : 'ph:video-camera-slash'
              " />
            {{ motion ? "Motion On" : "Motion Off" }}
            <Grow />

            <USwitch
              v-model="motion"
              class="border-b4/50 scale-85 justify-self-end from-lime-400/90 to-ah/90 to-60% inset-shadow-xs data-[state=checked]:bg-linear-to-br data-[state=unchecked]:bg-p3/40" />
          </div>
        </ContrastDropdownContent>
      </DropdownMenu>
    </div>
  </div>
</template>
