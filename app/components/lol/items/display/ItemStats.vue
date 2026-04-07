<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"

interface MasterworkStats {
  stats?: Record<string, number>
  bonusStats?: Record<string, number>
}
const {
  class: className,
  item,
  stats,
  masterwork
} = defineProps<{
  item: Item
  class?: HTMLAttributes["class"]
  stats?: Record<string, number>
  masterwork?: MasterworkStats | null
}>()
const mw = computed(() => {
  if (typeof item.masterwork === "object")
    return safeObject(item.masterwork?.stats)
  return null
})
console.log("🥸 - mw:", mw)
const bonus = computed(() => {
  if (typeof item.masterwork === "object")
    return safeObject(item.masterwork?.bonusStats)
  return null
})
console.log("🥸 - bonus:", bonus)
</script>

<template>
  <div
    v-if="stats"
    :class="cn('grid h-max w-full items-center gap-2 gap-y-1', className)">
    <div
      v-for="[k, v] in Object.entries(stats)"
      :key="k"
      :class="
        cn(
          'grid grid-cols-2 items-center gap-1 truncate text-sm leading-5 text-nowrap'
        )
      "
      :data-color="k">
      <!-- col-1 -->
      <div class="col-start-1 inline-flex items-center gap-1 align-baseline">
        <span class="font-medium">{{ v ?? "" }}</span>
        <Icon
          v-if="statIndex[k]?.unit === '%'"
          name="i-lucide-percent"
          class="-ml-1 inline size-3.5 self-center align-baseline" />
        <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>
        <span class="font-medium">
          {{
            ["HSP", "APEN", "MPEN"].includes(statIndex[k]?.key ?? "")
              ? statIndex[k]?.abbr
              : statIndex[k]?.name
          }}
        </span>
      </div>

      <!-- col-2 -->
      <div
        v-if="bonus?.[k]"
        class="whitespace-collapse **:whitespace-collapse col-start-2 inline-flex items-center gap-1 align-baseline">
        <span class="font-medium">{{ mw?.[k] }}</span>
        <Icon
          v-if="statIndex[k]?.unit === '%'"
          name="i-lucide-percent"
          class="-ml-1 inline size-3.5 self-center align-baseline" />
        <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>

        <span class="font-medium">
          {{
            ["HSP", "APEN", "MPEN"].includes(statIndex[k]?.key ?? "")
              ? statIndex[k]?.abbr
              : statIndex[k]?.name
          }}
        </span>
        <span class="text-2xs! **:text-challenger/80!">
          <span class="font-medium">[ +{{ bonus?.[k] }}</span>
          <Icon
            v-if="statIndex[k]?.unit === '%'"
            name="i-lucide-percent"
            class="-ml-1 inline size-3.5 self-center align-baseline" />
          <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>
          <span>]</span>
        </span>
      </div>
    </div>
  </div>
</template>
