<script setup lang="ts">
import { runePaths } from 'appdata/records/runes'

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value

definePageMeta({
  name: 'pocket-runes',
  title: 'runes',
  path: '/pocket/:pocketKey/runes',
  level: 3,
  order: 3,
  parent: '/pocket',
  search: false,
})

const rs = useRuneStore()

const {
  pathList,
} = useRunes()

/* const set = computed(() => pocket.runes[rs.selectedRuneSet]) */

const set = ref(pocket.runes[0])
console.log('🌱 - set:', set)
const primaryRunes = computed (() => runePaths.find(p => p.name == set.value.primary.path))
console.log('🌱 - primaryRunes:', primaryRunes)
const secondaryRunes = computed (() => runePaths.find(p => p.name == set.value.secondary.path))

function handlePath1() {
  // set.value.primary.runes = []
  set.value.keystone = null

  const index = pathList.findIndex(p => p === set.value.secondary.path)
  if (set.value.primary.path === set.value.secondary.path)
    set.value.secondary.path = pathList[index === 4 ? 0 : index + 1]
}

function handlePath2() {
  set.value.secondary.runes = []
}

function handleDelete() {
  deleteRuneSet(pocket, set.value)
  rs.selectedRuneSet = 0
}
</script>

<template>
  <div class=" size-full flex">
    <div class="size-full pt-16 relative @container justify-center flex gap-10 left-0  justify-center  flex-wrap flex gap-18 px-12">
      <div class="flex flex-col gap-8 w-1/2 min-w-90 flex   max-w-114 ">
        <RunesBlurb
          layout-id="path1"
          :current-path=" set.primary.path " />

        <Tabs
          v-model:model-value="set.primary.path"
          @update:model-value="handlePath1()">
          <IndicatorTabsList class="items-center h-19 justify-evenly grid-cols-5 w-full field-box ">
            <PathTabTrigger
              v-for="path in pathList"
              :key="path"
              v-tippy="path"
              :value="path" />

            <TabIndicator
              class="-mt-0.5 -ml-1 !size-17"
              round />
          </IndicatorTabsList>
        </Tabs>

        <Keystones
          :set="set"
          :pocket="pocket"
          :runes="primaryRunes.slots[0].runes" />

        <LazyPocketRuneSelect
          v-if="primaryRunes"
          :path-runes="set.primary.runes"
          :runes="primaryRunes"
          :path="set.primary.path"
          @update:runes="e => set.primary.runes = e" />
      </div>

      <div class="flex flex-col gap-7 w-1/2 min-w-90 flex overflow-hidden  max-w-114">
        <RunesBlurb
          layout-id="path2"
          :current-path=" set.secondary.path " />

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

    <div class="px-18 pt-14">
      <button
        v-tippy="'Delete Set'"
        class="btn  btn-square btn-ghost   *:dst  "
        @click="handleDelete()">
        <icon
          name="trash"
          class=" shrink-0" />
      </button>
      <hihi />
      <button
        v-tippy="'Delete Set'"
        class="btn  btn-square btn-ghost  *:dst  "
        @click="resetRunes(set)">
        <icon
          name="reset"
          class=" shrink-0 size-4.5" />
      </button>
    </div>
  </div>
</template>

<style>

</style>
