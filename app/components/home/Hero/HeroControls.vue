<script lang="ts" setup>
import { motion } from 'motion-v'
import type { CarouselApi } from '../../base/carousel/carousel-index'

const { api, isVisible } = defineProps<{
api: CarouselApi
isVisible: boolean
}>()

const emit = defineEmits(['restart-timer'])

const as = useAccountStore()

const timer = ref(9000)
const timeLeft = computed (() => 9000 - timer.value)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    if (api) {
      timer.value = api.plugins().autoplay.timeUntilNext()
    }
  }, 100)
})

onUnmounted(() => {
  if (interval !== undefined)
    clearInterval(interval)
})


const isPlaying = ref(true)

function togglePlay() {
  if (!api)
    return
  const autoplayPlugin = api.plugins().autoplay

  if (autoplayPlugin.isPlaying()) {
    api.plugins().autoplay.stop()
    isPlaying.value = false
  }
  else {
    api.plugins().autoplay.play()
    isPlaying.value = true
  }
  emit('restart-timer')
}


function handlePrev() {
  api.scrollPrev()
  api.plugins().autoplay.reset()
  emit('restart-timer')
}

function handleNext() {
  api.scrollNext()
  api.plugins().autoplay.reset()
  emit('restart-timer')
}
</script>

<template>
 <div class=" z-2  size-full transition-opacity duration-500 pointer-events-auto  opacity-0 gap-3 flex justify-end pr-5 items-end pb-5 " :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }">
      <div class="flex items-center gap-2 ">
        <HoverBtnSm :tip="isPlaying ? 'Pause' : 'Play'" @click="togglePlay">
          <icon v-if="isPlaying" name="pause" class="opacity-60  shrink-0" />

          <icon v-else name="play" class="opacity-60 size-4  shrink-0" />
        </HoverBtnSm>

        <div class="w-26 grid items-center ">
        <motion.progress
          v-show="api && isPlaying" class="progress absolute opacity-60 w-26" :value="timeLeft" max="9000"
          :transition="{ type: 'spring' }" />

          <label v-show="!isPlaying"
          :class="cn('text-2 font-semibold overflow-hidden align-end mt-px text-bc/60 ')">Paused</label>
        </div>
        <HoverBtnSm tip="Previous" @click="handlePrev()">
          <icon name="next" class="rotate-180 size-4 opacity-60 shrink-0" />
        </HoverBtnSm>

        <HoverBtnSm tip="Next" @click="handleNext()">
          <icon name="next" class=" size-4  opacity-60  shrink-0" />
        </HoverBtnSm>

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <HoverBtnSm tip="Options">
              <icon name="gear-solid" class="size-4 opacity-50  shrink-0" />
            </HoverBtnSm>
          </DropdownMenuTrigger>

          <ContrastDropdownContent side="top" align="end" :align-offset="-10" class="mr-3 w-60">
            <div class="w-full items-center px-1.5 gap-3 flex py-1 text-2 text-nc/80">
              <icon :name=" as.userAccount.settings.general.motion ? 'ph:video-camera-fill' : 'ph:video-camera-slash'" class=" opacity-90 shrink-0" />
              {{ as.userAccount.settings.general.motion ? 'Motion On' : 'Motion Off' }}
              <Grow />

              <Switch v-model="as.userAccount.settings.general.motion as boolean" class=" data-[state=unchecked]:bg-b3/40 inset-shadow-xs data-[state=checked]:bg-linear-to-br to-ah/90 to-60% from-lime-400/90 border-b4/50 justify-self-end scale-85" />
            </div>

            <DropdownMenuSub>
              <ContrastDropdownSubTrigger>
                Jump To...
              </ContrastDropdownSubTrigger>

              <ContrastDropdownSubContent :align-offset="-3" :side-offset="4">
                <DropdownMenuRadioGroup v-model:model-value="as.userAccount.settings.general.hero as string">
                  <DropdownRadioItemCT :value="null">
                    All
                  </DropdownRadioItemCT>

                  <DropdownRadioItemCT v-for="video in heroDisplays" :key="video.champ" :value="video.champ" class="">
                    {{ video.champ }}
                  </DropdownRadioItemCT>
                </DropdownMenuRadioGroup>
              </ContrastDropdownSubContent>
            </DropdownMenuSub>
          </ContrastDropdownContent>
        </DropdownMenu>
      </div>

    </div>
</template>