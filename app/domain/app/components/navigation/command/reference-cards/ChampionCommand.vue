<script lang="ts" setup>
import type { AcceptableValue } from "reka-ui"
import { useObjectData } from "~/domain/app/composables/useObjectData"
import { champKeyToRole } from "~~/shared/constants/champions/champKeyToRole"
import { championIndex } from "~~/shared/constants/champions/championIndex"
import { championToTitle } from "~~/shared/constants/champions/championToTitle"

const props = defineProps<{
  id: AcceptableValue
}>()

const championId = computed(() => Number(props.id))
const { data: championData } = useObjectData({
  id: () => props.id,
  type: "champion",
})
const indexedChampion = computed(
  () => championIndex.find((entry) => entry.id === championId.value) ?? null
)
const champion = computed(() => championData.value ?? indexedChampion.value)
const championKey = computed(() => champion.value?.key ?? "")
const championTitle = computed(() => {
  const value = champion.value
  if (!value) return undefined
  if ("title" in value) return value.title
  return championKey.value ? championToTitle[championKey.value] : undefined
})
const championRole = computed(() =>
  championKey.value ? champKeyToRole[championKey.value] : undefined
)
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
              v-if="champion"
              size="3xl"
              :src="`/img/champion/${champion.id}.webp`"
              :alt="`${champion.name} Image`" />

            <div class="text-center">
              <h4 class="text-xl leading-none font-bold text-nowrap">
                {{ champion?.name }}
              </h4>

              <span
                v-if="championTitle"
                class="text-sm font-semibold text-n5 italic opacity-90">
                {{ championTitle }}
              </span>
            </div>
          </template>
        </UCard>
      </div>

      <div
        class="flex w-full flex-col divide-y divide-p3/80 *:py-2 *:first:pt-1! *:last:pb-1!">
        <p class="text-sm leading-6 text-pretty text-n4">
          Fast snapshot for champion browse. Use search or the Library page for
          full build, rune, and matchup detail.
        </p>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium">
          <span class="text-n4">Class</span>
          <span>{{ championRole ?? "Unknown" }}</span>

          <span class="text-n4">Key</span>
          <span>{{ championKey || "Unknown" }}</span>

          <span class="text-n4">Library</span>
          <ULink to="/library/champions" class="underline underline-offset-2">
            Open champions
          </ULink>
        </div>
      </div>
    </div>
  </div>
</template>
