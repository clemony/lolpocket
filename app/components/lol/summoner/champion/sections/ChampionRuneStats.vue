<script lang="ts" setup>
import { runePaths } from '~~/shared/records/runes'

const route = useRoute()

const { runes } = usePlayerStatsInject()

const used = computed (() => {
  return {
    primary: runes.value?.all.map(p => p.primaryPath),
    secondary: runes.value?.all.map(p => p.secondaryPath),
  }
})
const runeRef = useTemplateRef('runeRef')

const { isActive, progressBetween } = useScrollSection(
  'runes',
  runeRef
)

watch(progressBetween, (v) => {
  if (isActive.value) {
    console.log('runes progress', v)
  }
}, { immediate: false })

const gridClass = 'flex w-full   items-center justify-between gap-5'
</script>

<template>
  <div
    v-if="runes"
    id="runes"
    ref="runeRef"
    class="flex w-full flex-col items-center justify-center gap-8">
    <div
      v-if="runes.best"
      class="mb-10 flex flex-col justify-center gap-4">
      <div
        class="flex w-full items-center justify-between self-end select-none">
        <h3 class="pl-2 dst">
          {{ runes.best.winrate }}%
        </h3>
        <div
          :data-tip="runes.usedFallback ? `*Based on limited data (${runes.best.games} games)` : null"
          class="inline-flex items-center gap-1 font-medium">
          Highest performing rune set
          <Icon
            name="info"
            class="inline size-3.5" />
        </div>
      </div>

      <ChampionRuneSet page="best" />
    </div>
    <div :class="gridClass">
      <LazyChampionRuneWinrates
        v-for="path in runePaths"
        :key="path.id"
        :runes="runes?.primary"
        :used="used?.primary"
        class="max-w-60 basis-1/5"
        :keystones="runes?.keystone"
        :path />
    </div>

    <div :class="gridClass">
      <LazyChampionRuneWinrates
        v-for="path in runePaths"
        :key="path.id"
        class="max-w-60 basis-1/5"
        :used="used?.secondary"
        :runes="runes?.secondary"
        :path />
    </div>
    <div :class="gridClass">
      <LazyChampionShardWinrates
        :shards="runes?.shards" />
    </div>
  </div>
</template>