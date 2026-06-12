<script lang="ts" setup>
import type { AcceptableValue } from "reka-ui"
import { useObjectData } from "~/domain/app/composables/useObjectData"
import { pathIndex } from "~~/shared/constants/runes/pathIndex"
import { runeIndex } from "~~/shared/constants/runes/runeIndex"
import { runeToPath } from "~~/shared/constants/runes/runeToPath"
import { runeToTier } from "~~/shared/constants/runes/runeToTier"

const props = defineProps<{
  id: AcceptableValue
}>()

const runeId = computed(() => Number(props.id))
const { data: runeData } = useObjectData({
  id: () => props.id,
  type: "rune",
})
const indexedRune = computed(
  () => runeIndex.find((entry) => entry.id === runeId.value) ?? null
)
const rune = computed(() => runeData.value ?? indexedRune.value)
const path = computed(() => {
  const pathId = Number(runeToPath[runeId.value])
  return pathIndex[pathId] ?? null
})
const tierLabel = computed(() => {
  const tier = runeToTier[runeId.value]

  if (tier === 0) return "Keystone"
  if (tier === 1) return "First Row"
  if (tier === 2) return "Second Row"
  if (tier === 3) return "Third Row"

  return "Rune"
})
</script>

<template>
  <div class="grid h-max w-full pt-1 pb-2">
    <div class="grid h-max w-full grid-cols-[1fr_1.5fr] gap-4">
      <div class="flex w-full flex-col">
        <UCard
          variant="outline"
          :ui="{
            root: 'w-full divide-y divide-p3 bg-p0/50',
            header:
              'flex w-full shrink-0 flex-col items-center justify-center gap-3 overflow-hidden py-3!',
            body: 'p-3!'
          }">
          <template #header>
            <LazyAvatar
              v-if="rune"
              size="3xl"
              :src="`/img/rune/${rune.id}.webp`"
              :alt="`${rune.name} Image`" />

            <div class="text-center">
              <h4 class="text-xl leading-none font-bold text-balance">
                {{ rune?.name }}
              </h4>

              <span class="text-sm font-semibold text-n5 italic opacity-90">
                {{ tierLabel }}
              </span>
            </div>
          </template>
        </UCard>
      </div>

      <div
        class="flex w-full flex-col divide-y divide-p3/80 *:py-2 *:first:pt-1! *:last:pb-1!">
        <p class="text-sm leading-6 text-pretty text-n4">
          Quick rune reference for palette browsing. Use the rune library for
          full path filtering and comparisons.
        </p>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium">
          <span class="text-n4">Path</span>
          <span>{{ path?.name ?? "Unknown" }}</span>

          <span class="text-n4">Identity</span>
          <span>{{ path?.tooltip ?? "No description available." }}</span>

          <span class="text-n4">Library</span>
          <ULink to="/library/runes" class="underline underline-offset-2">
            Open runes
          </ULink>
        </div>
      </div>
    </div>
  </div>
</template>
