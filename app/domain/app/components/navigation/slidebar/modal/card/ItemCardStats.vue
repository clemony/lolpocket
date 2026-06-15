<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"

interface MasterworkStats {
  stats?: Record<string, number>
  bonusStats?: Record<string, number>
}
defineOptions({
  inheritAttrs: false,
})

const { class: className, item } = defineProps<{
  item: Item
  class?: HTMLAttributes["class"]
}>()

const bonus = computed(() => {
  if (typeof item.masterwork === "object")
    return safeObject(item.masterwork?.bonusStats)
  return null
})

const masterwork = shallowRef<boolean>(false)

const stats = computed(() => {
  if (!item.stats) return null
  if (masterwork.value === false) return Object.entries(item.stats)
  if (item.stats && item.masterwork && masterwork.value) {
    const stats = ref<Record<string, number>>(deepCopy(item.stats))
    Object.assign(stats.value, (item.masterwork as MasterworkStats).stats ?? {})
    return Object.entries(stats.value)
  }
  return null
})
</script>

<template>
  <MotionSeparator
    :item
    class="pl-1"
    @update:masterwork="masterwork = $event" />
  <ul v-if="item.stats" class="">
    <li
      v-for="[k, v] in stats"
      :key="k"
      :class="
        cn(
          'flex h-max items-center truncate px-1.5 text-sm leading-6 text-nowrap',
          className
        )
      "
      :data-color="k">
      <div
        class="col-start-1 inline-flex items-center gap-1 align-baseline text-sm">
        <span class="font-medium">{{ v ?? "" }}</span>
        <Icon
          v-if="statIndex[k]?.unit === '%'"
          name="i-lucide-percent"
          class="-ml-1 inline size-3.5 self-center align-baseline" />
        <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>
        <span class="font-medium">
          {{ statIndex[k]?.name }}
        </span>

        <span
          v-if="masterwork && bonus?.[k]"
          class="inline-flex items-center align-baseline **:text-gold/80!">
          <span class="font-medium">&nbsp;+{{ bonus?.[k] }}</span>
          <span v-if="statIndex[k]?.unit === '%'">%</span>
          <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>
        </span>
      </div>
    </li>
  </ul>
</template>
