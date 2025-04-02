<script lang="ts" setup>
import {
  PopoverAnchor,
  PopoverPortal,
} from 'reka-ui'
import { AnimatePresence, motion } from 'motion-v'



const props = defineProps<{
  champion: Champion
}>()

const cs = useChampStore()

const champion = computed (() => {
  return props.champion
})

const isOpen = ref(false)
const overlay = ref()
const introOpen = ref(false)
const infoOpen = ref(false)

watchOnce(isOpen, () => {
  if (isOpen.value == true)
  introOpen.value = true
})

function onIntroDone(){
  infoOpen.value = true
  setTimeout(() => {
    isOpen.value = false
  }, 500);
}

function onClose(){
  infoOpen.value = false
  introOpen.value = false
}
</script>

<template>
  <div>

      <AnimatePresence>
        <Motion
          v-if="introOpen || infoOpen"
          ref="overlay"
          as="div"
          class="bg-black/70 fixed inset-0 z-[1000]"
          :initial="{
            opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }" />
      </AnimatePresence>

  <Popover v-model:open="introOpen">
    <div class="relative size-full">
      <PopoverAnchor  class="absolute -top-[calc(100%+4px)] left-0 size-full pointer-events-none" />
      <PopoverTrigger as-child class="size-full">
        <ChampionSplash :champion="champion" text />
      </PopoverTrigger>
    </div>
    <PopoverPortal>
     <LazyChampionPopoverIntro v-if="introOpen"  :champion="champion" @done="onIntroDone()"/>
    </PopoverPortal>
  </Popover>
<Dialog v-model:open="infoOpen">
     <LazyChampionInfoPopover v-if="infoOpen"  :champion="champion " @close="onClose"/>
</Dialog>
</div>
</template>