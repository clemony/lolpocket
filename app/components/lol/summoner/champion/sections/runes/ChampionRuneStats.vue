<script lang="ts" setup>
import { runePaths } from '~~/shared/records/runes'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

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

const gridClass = 'grid w-full grid-cols-5 gap-4 items-center justify-between '
</script>

<template>
  <div
    v-if="runes"
    id="runes"
    ref="runeRef"
    :class="cn('flex flex-col items-center gap-8', className)">
    <div
      v-if="runes.best"
      class="mb-10 w-full space-y-4">
      <ChampionRuneSet page="best" />
      <div
        class="flex w-full items-center justify-end self-end select-none">
        <div
          :data-tip="runes.usedFallback ? `*Based on limited data (${runes.best.games} games)` : null"
          class="inline-flex items-center gap-1 text-1 font-medium">
          Highest performing rune set
          <Icon
            name="info"
            class="inline size-3.5" />
        </div>
      </div>
    </div>

    <div :class="cn(gridClass, 'overflow-hidden')">
      <LazyChampionRuneWinrates
        v-for="path in runePaths"
        :key="path.id"
        :runes="runes?.primary"
        :used="used?.primary"
        :keystones="runes?.keystone"
        :path />
    </div>
    <Separator class="opacity-70" />
    <div :class="cn(gridClass, 'overflow-hidden')">
      <LazyChampionRuneWinrates
        v-for="path in runePaths"
        :key="path.id"
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