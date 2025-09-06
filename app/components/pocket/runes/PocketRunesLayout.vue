<script setup lang="ts">
import { pathIndex } from 'appdata/index/path-index'
import { runePaths } from 'appdata/records/runes'

const { set: s } = defineProps<{
  set: RuneSet
}>()
console.log('🌱 - set:', s)
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value

const set = computed (() => s).value
const pathList = pathIndex.map(p => p.name)

const primaryRunes = computed (() => runePaths.find(p => p.name == set.primary?.path))
const secondaryRunes = computed (() => runePaths.find(p => p.name == set.secondary?.path))

function handlePath1() {
  // set.primary.runes = []
  set.keystone = null

  const index = pathList.findIndex(p => p === set.secondary?.path)
  if (set.primary?.path === set.secondary.path)
    set.secondary.path = pathList[index === 4 ? 0 : index + 1]
}

function handlePath2() {
  set.secondary.runes = []
}
</script>

<template>
  <div class=" size-full flex">
    <div class="size-full pt-16 relative @container justify-center flex gap-10 left-0  justify-center  flex-wrap flex gap-18 px-12">
      <div
        v-if=" set?.primary && primaryRunes"
        class="flex flex-col gap-8 w-1/2 min-w-90 flex   max-w-114 ">
        <RunesBlurb
          layout-id="path1"
          :current-path=" set.primary?.path " />

        <Tabs
          v-model:model-value="set.primary.path"
          @update:model-value="handlePath1()">
          <IndicatorTabsList class="items-center h-19 justify-evenly grid-cols-5 w-full field-box ">
            <PathTabTrigger
              v-for="path in pathList"
              :key="path"
              :title="path"
              :value="path" />

            <TabIndicator
              class="-mt-0.5 -ml-1 !size-17"
              round />
          </IndicatorTabsList>
        </Tabs>

        <Keystones
          :set="set"
          :pocket="pocket"
          :runes="primaryRunes.slots[0]?.runes" />

        <LazyPocketRuneSelect
          v-if="primaryRunes"
          :path-runes="set.primary?.runes"
          :runes="primaryRunes"
          :path="set.primary?.path" />
      </div>
      <PathPicker v-else />
      <div
        v-if="set?.secondary && secondaryRunes"
        class="flex flex-col gap-7 w-1/2 min-w-90 flex overflow-hidden  max-w-114">
        <RunesBlurb
          layout-id="path2"
          :current-path=" set.secondary?.path " />

        <SecondaryRunePathTabs
          v-model:model-value="set.secondary.path"
          :pocket="pocket"
          :set="set"
          :path="secondaryRunes?.name"
          @update:model-value="handlePath2()" />

        <LazyPocketRuneSelect
          :path-runes="set.secondary.runes"
          limit
          :runes="secondaryRunes"
          :path="set.secondary.path" />

        <RuneShards :pocket="pocket" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
