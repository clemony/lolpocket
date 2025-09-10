<script setup lang="ts">
import { pathIndex } from '#shared/appdata/index/path-index'

definePageMeta({
  title: 'Runes',
  path: '/library/runes',
  parent: '/library',
  icon1: 'lol-rune',
})

const ix = useIndexStore()

const { pathList } = useRunes()

const selectedPath = ref<PathName>('Inspiration')
const selectedRune = ref(null)
const test = ref(pathIndex[selectedPath.value])
console.log('💠 - test:', test)
</script>

<template>
  <transition-slide
    group
    class="size-full dr-2000 relative gap-14 flex pt-54 justify-center">
    <div
      v-if="selectedRune"
      class="flex-col  w-1/2 mt-22 w-114 max-h-165  max-w-114 tldr-80 z-0 relative"
      :class="{ 'opacity-0 ': !selectedRune, 'opacity-100 ': selectedRune }">
      <RuneData
        :key="selectedRune"
        :rune-index="ix.runeById(selectedRune)" />

      <CloseButton
        tip="Close"
        class="btn-ghost absolute  right-0 top-0 !shadow-none "
        @click="selectedRune = null" />
    </div>

    <transition-fade
      group
      class="order-first flex-col w-114 flex z-1 max-w-114 gap-8 ">
      <RunesBlurb
        v-if="selectedPath"
        :key="selectedPath"
        :current-path="selectedPath " />

      <Tabs v-model:model-value="selectedPath">
        <IndicatorTabsList class="items-center h-19 justify-evenly grid-cols-5 w-full field-box bg-b2/40 !rounded-box  shadow-warm">
          <div class="absolute size-full top-0 left-0 rounded-box overflow-hidden opacity-28">
            <div
              class="absolute size-full top-0 left-0 gradient mask-bottom-right"
              :data-path="selectedPath" />
          </div>

          <PathTabTrigger
            v-for="path in pathList"
            :key="path"
            v-tippy="path"
            :value="path" />

          <TabIndicator round />
        </IndicatorTabsList>
      </Tabs>

      <KeystoneSelect
        v-model:selected="selectedRune"
        :runes="pathIndex[selectedPath][0]"
        @update:rune="e => selectedRune = e" />

      <RuneSelect
        v-model:selected="selectedRune"
        :runes="pathIndex[selectedPath].slice(0)"
        @update:rune="e => selectedRune = e" />
    </transition-fade>
  </transition-slide>
</template>

<style>

</style>
