<script setup lang="ts">
const { pocket } = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'runes',
  section: 'pocket',
})

const rs = useRuneStore()

const { data: runeData } = await useFetch<Record<string, Path>>('/api/runes.json')

const set = computed(() => pocket.runes[rs.selectedRuneSet])

const keystones = computed (() => runeData.value?.[set.value[0].path]?.[0] ?? [])
const paths = ['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration']

const primary = computedAsync (() => {
  if (!set.value[1].path)
    return null
  return Object.values(runeData.value?.[set.value[0].path]).slice(1, 4) ?? []
})

const secondary = computedAsync (() => {
  if (!set.value[1].path)
    return null
  return Object.values(runeData.value?.[set.value[1].path]).slice(1, 4) ?? []
})


function handlePath1(){
    set.value[0].runes = { 1: null, 2: null, 3: null }
    set.value.keystone = null

    const index = paths.findIndex(p => p === set.value[1].path)
    if (set.value[0].path === set.value[1].path)
      set.value[1].path = paths[index === 4 ? 0 : index + 1]
}

function handlePath2(){
    set.value[1].runes = { 1: null, 2: null, 3: null }
}
</script>

<template>
  <div class=" size-full">
    <div class="px-18 pt-24">
      <h1>Runes</h1>
    </div>

    <div class="size-full relative @container justify-center">
      <div class="flex gap-10 absolute overflow-hidden inset-0 top-0 left-0  w-full justify-center  max-h-[95vh] flex-wrap flex gap-18 px-12 pt-12 ">
        <div class="flex flex-col gap-7 w-1/2 min-w-90 flex   max-w-114 ">
          <RunesBlurb  layoutId="path1" :current-path=" set[0].path " />

          <Tabs v-model:model-value="set[0].path" @update:model-value="handlePath1()">
            <IndicatorTabsList class="items-center h-19 justify-evenly grid-cols-5 w-full field-box ">
              <PathTabTrigger
                v-for="path in paths"
                :key="path"
                v-tippy="path"
                :value="path" />
              <TabIndicator round />
            </IndicatorTabsList>
          </Tabs>
          <Keystones
            :set="set"
            :pocket="pocket" :runes="keystones" />
          <LazyPocketRuneSelect :path-runes="set[0].runes" :runes="primary" :path="set[0].path" @update:runes="e => set[0].runes = e" />
        </div>
        <div class="flex flex-col gap-7 w-1/2 min-w-90 flex overflow-hidden  max-w-114">
          <RunesBlurb layoutId="path2" :current-path=" set[1].path " />
          <SecondaryRunePathTabs :pocket="pocket" @update:model-value="handlePath2()"/>
          <LazyPocketRuneSelect :path-runes="set[1].runes" :runes="secondary" :path="set[1].path" />
          <RuneShards :pocket="pocket" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
