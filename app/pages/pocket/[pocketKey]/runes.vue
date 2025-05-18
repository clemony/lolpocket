<script setup lang="ts">
const { pocket } = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'runes',
  section: 'pocket',
})

const rs = useRuneStore()

const {
  getKeystones,
  getPrimarySlots,
  getSecondarySlots,
  pathList,
} = useRunes()

const set = computed(() => pocket.runes[rs.selectedRuneSet])

function handlePath1() {
  set.value[0].runes = { 1: null, 2: null, 3: null }
  set.value.keystone = null

  const index = pathList.findIndex(p => p === set.value[1].path)
  if (set.value[0].path === set.value[1].path)
    set.value[1].path = pathList[index === 4 ? 0 : index + 1]
}

function handlePath2() {
  set.value[1].runes = { 1: null, 2: null, 3: null }
}

function handleDelete() {
  deleteRuneSet(pocket, set.value)
  rs.selectedRuneSet = 0
}
</script>

<template>
  <div class=" size-full">
    <div class="px-18 pt-24">
      <button v-tippy="'Delete Set'" class="btn  btn-square btn-ghost  *:dst  " @click="handleDelete()">
        <icon name="trash" class=" shrink-0" />
      </button>
      <button v-tippy="'Delete Set'" class="btn  btn-square btn-ghost  *:dst  " @click="resetRunes(set)">
        <icon name="reset" class=" shrink-0 size-4.5" />
      </button>
    </div>

    <div class="size-full relative @container justify-center">
      <div class="flex gap-10 absolute overflow-hidden inset-0 top-0 left-0  w-full justify-center  max-h-[95vh] flex-wrap flex gap-18 px-12 pt-12 ">
        <div class="flex flex-col gap-7 w-1/2 min-w-90 flex   max-w-114 ">
          <RunesBlurb layout-id="path1" :current-path=" set[0].path " />

          <Tabs v-model:model-value="set[0].path" @update:model-value="handlePath1()">
            <IndicatorTabsList class="items-center h-19 justify-evenly grid-cols-5 w-full field-box ">
              <PathTabTrigger
                v-for="path in pathList"
                :key="path"
                v-tippy="path"
                :value="path" />
              <TabIndicator round />
            </IndicatorTabsList>
          </Tabs>
          <Keystones
            :set="set"
            :pocket="pocket" :runes="getKeystones(computed (() => set)).value" />
          <LazyPocketRuneSelect :path-runes="set[0].runes" :runes="getPrimarySlots(computed (() => set)).value" :path="set[0].path" @update:runes="e => set[0].runes = e" />
        </div>
        <div class="flex flex-col gap-7 w-1/2 min-w-90 flex overflow-hidden  max-w-114">
          <RunesBlurb layout-id="path2" :current-path=" set[1].path " />
          <SecondaryRunePathTabs :pocket="pocket" @update:model-value="handlePath2()" />
          <LazyPocketRuneSelect :path-runes="set[1].runes" limit :runes="getSecondarySlots(computed (() => set)).value" :path="set[1].path" />
          <RuneShards :pocket="pocket" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
