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
</script>

<template>
  <Popover v-model:open="isOpen">
    <div class="relative size-full">
      <PopoverAnchor class="absolute -top-[calc(100%+4px)] left-0 size-full pointer-events-none" />
      <PopoverTrigger as-child class="size-full">
        <ChampionSplash :champion="champion" text />
      </PopoverTrigger>
    </div>
    <PopoverPortal>
      <AnimatePresence>
        <Motion
          v-if="isOpen"
          ref="overlay"
          as="div"
          class="bg-black/70 fixed inset-0 z-[1000]"
          :initial="{
            opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }" />
      </AnimatePresence>
      <LazyPopoverContent

        :avoid-collisions="false"
        position-strategy="fixed"
        align="start"
        side="bottom"
        as-child
        class="!p-0  border-0 *:[&_.champ-splash]:!w-(--reka-popover-trigger-width) *:[&_.champ-splash]:!h-(--reka-popover-trigger-height)  z-[1001] bg-transparent overflow-hidden">
        <Motion
          as="div" :initial="{
            opacity: 0 }"
          :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.95 }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }">
          <Motion
            as="div" :initial="{
              opacity: 0 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.95 }"
            :transition="{ duration: 0.3, ease: 'easeInOut' }">
            <ChampionSplash :champion="champion" class="size-full object-cover champ-splash" />
          </Motion>
        </Motion>
      </LazyPopoverContent>
    </PopoverPortal>
  </Popover>
</template>