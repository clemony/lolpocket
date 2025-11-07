<script lang="ts" setup>
import { statIndex } from '#shared/references'

const { stats } = defineProps<{
  stats: Record<string, number>
}>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value })),
)
console.log('🌱 - statEntries:', statEntries)
</script>

<template>
  <div class="">
    <div class=" grid w-full items-center gap-y-1.5">
      <div
        v-for="stat in statEntries"
        :key="stat.key"
        :style="{ '--stat-color': statIndex[stat.key].color }"
        class="flex w-full items-center gap-1">
        <p class="text-2 flex  flex-nowrap font-medium ">
          {{ `${stat.value}${statIndex[stat.key]?.unit ?? ''}` }}
        </p>

        <p class="text-2 grow font-medium tracking-tight ">
          {{ statIndex[stat.key].name }}
        </p>

        <p
          class="badge badge-sm  !drop-shadow-black/20 h-5.5 gap-1 justify-self-end border-none  px-1.25 "
          :style="{
            backgroundColor: 'var(--stat-color)',
          }">
          <StatIcon
            :stat="stat.key"
            class="stat-badge-content color-badge-content !size-3.25 self-center" />
          <span class="!text-1 stat-badge-content  text-shadow-xs  color-badge-content font-bold">
            {{ statIndex[stat.key].abbr[0] }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.stat-badge-content {
  color: var(--stat-color);
  * {
    color: var(--stat-color);
  }
}
</style>