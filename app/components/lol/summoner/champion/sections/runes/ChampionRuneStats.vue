<script lang="ts" setup>
import { pathRecord } from "#shared/constants/runes/pathRecord"

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { runes } = storeToRefs(sChampion())

const gridClass = "grid w-full grid-cols-5 gap-2 place-items-center  "
</script>

<template>
  <UPageSection
    v-if="runes"
    title="Runes"
    :class="cn('flex flex-col items-center gap-6', className)">
    <div v-if="runes.best" class="mb-10 w-full space-y-4">
      <ChampionRuneSet page="best" />
      <div class="flex w-full items-center justify-end self-end select-none">
        <div
          class="inline-flex items-center gap-1 text-xs font-medium"
          :data-type="
            runes.usedFallback ?
              `*Based on limited data (${runes.best.games} games)`
              : null
          ">
          Highest performing rune set
          <Icon class="inline size-3.5" name="info" />
        </div>
      </div>
    </div>

    <div :class="cn(gridClass, 'overflow-hidden')">
      <LazyChampionRuneWinrates
        v-for="path in pathRecord"
        :key="path.id"
        :runes="runes?.primary"
        :keystones="runes?.keystone"
        :path />
    </div>
    <!--  <div :class="cn(gridClass, 'relative')">
      <Separator class="absolute z-0 w-full opacity-90" />
      <div
        v-for="path in pathRecord"
        :key="path.id"
        class="z-1 grid size-12 place-items-center rounded-full bg-p0">
       <UButton
          data-type="path"
          :data-id="path.name"
          base="btn"
          size="c-7"
          class=""
          variant="outline">
          <img
            :src="`/img/paths/${path.name}.webp`"
            :alt="`path:${path.name}`"
            :class="cn('size-4 object-contain opacity-40 contrast-0 grayscale', {
              ' opacity-100! grayscale-0 contrast-100 brightness-100!': used.includes(path.name),
              'size-3.75': path.name === 'Domination',
              'contrast-100 brightness-160': path.name === 'Domination' && !used.includes(path.name),
              'size-4.25': path.name === 'Sorcery' })" />
        </UButton>
      </div>
    </div>
 -->
    <div :class="cn(gridClass, 'overflow-hidden')">
      <LazyChampionRuneWinrates
        v-for="path in pathRecord"
        :key="path.id"
        :runes="runes?.secondary"
        :path />
    </div>

    <div :class="cn(gridClass, 'overflow-hidden')">
      <LazyChampionShardWinrates :shards="runes?.shards" />
    </div>
  </UPageSection>
</template>
