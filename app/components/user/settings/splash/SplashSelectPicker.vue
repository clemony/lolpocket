<script lang="ts" setup>
import { skinIndex } from "#shared/constants/champions/skin-index"
import { getSplash } from "~/domain/utils/img"
const { selectedChampion } = defineProps<{
  selectedChampion: string
}>()

const emit = defineEmits(["updateSplash"])
</script>

<template>
  <div
    v-motion
    layout
    :style="{
      '--cols': 5, // getDevice() === 'Mobile' ? 3 : 5,
      '--gap': '9px',
      gap: 'var(--gap)'
    }"
    :transition="{
      ease: [0.215, 0.61, 0.355, 1.0],
      duration: 400,
      delay: 0
    }"
    class="relative flex h-max w-full shrink-0 flex-wrap place-items-center overflow-y-auto">
    <template v-if="selectedChampion">
      <UTooltip
        v-for="skin in skinIndex[selectedChampion]"
        :key="skin.name"
        as-child
        :content="{ side: 'top', sideOffset: 4 }"
        :text="`${skin.name} ${selectedChampion}`">
        <button
          :class="
            cn(
              'group/card cursor-pointer',
              'basis-[calc(100%/var(--cols)-var(--gap)/var(--cols)*(var(--cols)-1))]'
            )
          "
          @click="emit('updateSplash', skin)">
          <PerspectiveCard
            :ui="{
              root: 'pb-1',
              container:
                'relative flex size-full items-center overflow-visible rounded-xl bg-p1/90 p-3 shadow-sm inset-ring inset-ring-p3 backdrop-blur-sm'
            }">
            <LazySplashCard
              sync-perspective
              :alt="skin.name"
              :src="getSplash(selectedChampion, 'tile', skin)"
              :ui="{
                root: 'aspect-square size-47 shrink-0 grow-0 rounded-lg',
                image: 'rounded-lg'
              }">
            </LazySplashCard>
          </PerspectiveCard>
        </button>
      </UTooltip>
    </template>

    <div
      v-else
      class="absolute grid size-full place-items-end place-self-center p-6">
      <UBadge class="font-medium **:text-sm" color="neutral">
        Select or search a champion...
      </UBadge>
    </div>
  </div>
</template>
