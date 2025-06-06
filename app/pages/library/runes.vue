<script setup lang="ts">
const rs = useRuneStore()

definePageMeta({
  name: 'runes',
  title: 'Runes',
  section: 'library',
  icon1: 'lol-rune',
})
const rune = ref(rs.hoveredRune)

const { pathList } = useRunes()

const selectedPath = ref<PathName>('Inspiration')
const selectedRune = ref()
const test = ref(runePaths[selectedPath.value])
console.log('💠 - test:', test)
</script>

<template>
  <RuneVideoBackground :path="selectedPath">
    <div class=" flex-col w-1/2 min-w-90 flex z-1 max-w-114 mr-[12vw] mt-[22vh]">
      <RunesBlurb layout-id="path1" :current-path="selectedPath " />

      <Tabs v-model:model-value="selectedPath">
        <IndicatorTabsList class="items-center h-19 justify-evenly grid-cols-5 w-full  ">
          <PathTabTrigger
            v-for="path in pathList"
            :key="path"
            v-tippy="path"
            :value="path" />
          <TabIndicator round />
        </IndicatorTabsList>
      </Tabs>
      <!-- <Keystones :runes="getKeystones(computed (() => set)).value" /> -->
      <RuneSelect :runes="runePaths[selectedPath]" @update:rune="e => selectedRune = e" />
    </div>
  </RuneVideoBackground>
</template>

<style>

</style>
