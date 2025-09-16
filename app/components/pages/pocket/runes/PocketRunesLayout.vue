<script setup lang="ts">
import { pathIndex } from '#shared/appdata/index/path-index'
import { runePaths } from '#shared/appdata/records/runes'

const { set: s } = defineProps<{
  set: RuneSet
}>()

const emit = defineEmits(['update:slide'])
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const set = computed(() => s).value
const pathList = pathIndex.map(p => p.name)

const primaryRunes = computed(() =>
  runePaths.find(p => p.name == set.primary?.path)
)
const secondaryRunes = computed(() =>
  runePaths.find(p => p.name == set.secondary?.path)
)

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

function handlePathUpdate(e) {
  set.primary.path = e.primary
  set.secondary.path = e.secondary
}

function handleDelete() {
  emit('update:slide')
  deleteRuneSet(pocket, set)
}
</script>

<template>
  <div class="overflow-y-scroll size-full flex">
    <TransitionFade
      group
      class="size-full relative @container justify-center flex gap-10 left-0 justify-center flex-wrap flex gap-18 px-12">
      <div
        v-if="set?.primary && primaryRunes"
        class="flex flex-col gap-8 w-1/2 min-w-90 flex relative max-w-114">
        <RunesBlurb
          layout-id="path1"
          :current-path="set.primary?.path" />

        <Tabs
          v-model:model-value="set.primary.path"
          @update:model-value="handlePath1()">
          <IndicatorTabsList
            class="items-center h-19 justify-evenly grid-cols-5 w-full field-box">
            <PathTabTrigger
              v-for="path in pathList"
              :key="path"
              :title="path"
              :value="path" />

            <TabIndicator
              class="-ml-0.75 !size-16"
              round />
          </IndicatorTabsList>
        </Tabs>

        <Keystones
          :set="set"
          :pocket="pocket"
          :runes="primaryRunes.slots[0]?.runes" />

        <LazyRunePicker
          v-if="primaryRunes"
          :set="set.primary?.runes"
          :runes="primaryRunes"
          :path="set.primary?.path" />

        <!-- menu buttons -->

        <div
          class="absolute -left-24 bottom-50 flex flex-col flex-nowrap items-center px-1 mb-4 gap-5">
          <Button
            variant="outline"
            title="Delete Set"
            class="h-full size-11 rounded-full shadow-sm shadow-black/6"
            @click="handleDelete()">
            <icon name="trash" />
          </Button>
          <Button
            variant="outline"
            title="Reset set runes"
            class="h-full size-11 shadow-sm rounded-full shadow-black/6"
            @click="resetRuneSet(set)">
            <icon name="reset" />
          </Button>
        </div>
      </div>
      <PathPicker
        v-else
        @update:paths="handlePathUpdate($event)" />
      <div
        v-if="set?.secondary && secondaryRunes"
        class="flex flex-col gap-7 w-1/2 min-w-90 flex overflow-hidden max-w-114">
        <RunesBlurb
          layout-id="path2"
          :current-path="set.secondary?.path" />

        <SecondaryRunePathTabs
          v-model:model-value="set.secondary.path"
          :pocket="pocket"
          :set="set"
          :path="secondaryRunes?.name"
          @update:model-value="handlePath2()" />

        <LazyRunePicker
          :set="set.secondary.runes"
          limit
          :runes="secondaryRunes"
          :path="set.secondary.path" />

        <RuneShards
          :pocket="pocket"
          :set />
      </div>
      <div class="w-32 h-full flex flex-col items-center *:rounded-full gap-6">
        <Keystone
          :id="set.keystone"
          class="size-16"
          loaded-class="border shadow-black/8 border-b3 drop-shadow-sm shadow-sm" />
        <Rune
          v-for="rune in set.primary.runes.concat(set.secondary.runes)"
          :id="rune"
          :key="rune"
          class="size-12" />

        <Shard
          v-for="shard in set.shards"
          :id="shard"
          :key="shard"
          :class="`size-10 border-b3 ${shard == 0 ? 'border !border-b2 bg-b2/30' : ''}`" />
      </div>
    </TransitionFade>
  </div>
</template>

<style></style>
