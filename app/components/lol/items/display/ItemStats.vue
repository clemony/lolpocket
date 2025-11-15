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
    <div class="grid w-full items-center gap-y-1.5">
      <div
        v-for="stat in statEntries"
        :key="stat.key"
        :style="{ '--stat-color': statIndex[stat.key].color }"
        class="flex w-full items-center gap-1">
        <p class="flex flex-nowrap text-2 font-medium">
          {{ `${stat.value}${statIndex[stat.key]?.unit ?? ""}` }}
        </p>

        <p class="grow text-2 font-medium tracking-tight">
          {{ statIndex[stat.key].name }}
        </p>

        <p
          class="
            badge h-5.5 gap-1 justify-self-end border-none badge-sm px-1.25
            drop-shadow-black/20!
          "
          :style="{
            backgroundColor: 'var(--stat-color)',
          }">
          <StatIcon
            :stat="stat.key"
            class="
              stat-badge-content color-badge-content size-3.25! self-center
            " />
          <span
            class="
              stat-badge-content color-badge-content text-1! font-bold
              text-shadow-xs
            ">
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
