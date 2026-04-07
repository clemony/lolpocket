<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"

const { item } = defineProps<{
  item: Item
}>()

function sortStatRecord(stats: Record<string, number>) {
  return Object.fromEntries(
    Object.entries(stats).sort(([a], [b]) => a.localeCompare(b))
  ) as Record<string, number>
}

const isMasterwork = computed<MasterworkStats | null>(() =>
  typeof item.masterwork === "object" ? safeObject(item.masterwork) : null
)

interface MasterworkStats {
  stats?: Record<string, number>
  bonusStats?: Record<string, number>
}
const masterwork = computed<MasterworkStats | null>(() => {
  if (!masterwork.value?.stats && !masterwork.value?.bonusStats) return null
  const safe = safeObject(isMasterwork.value)
  return {
    stats: sortStatRecord(safe.stats ?? {}) ?? {},
    bonus: sortStatRecord(safe.bonusStats ?? {}) ?? {}
  }
})

const modelValue = shallowRef<string>("base")
</script>

<template>
  <div class="h-max w-full">
    <Separator
      label="BASE"
      :trailing="isMasterwork ? 'MASTERWORK' : ''"
      color="neutral"
      :ui="{
        root: 'w-full',
        separator: 'h-px w-full bg-n3/70',
        label: 'text-2xs',
        trailing: 'text-2xs'
      }" />
    <LazyItemStats
      class="mt-2 mb-1 **:text-nc"
      :masterwork
      :item
      :stats="item.stats" />
  </div>
</template>
