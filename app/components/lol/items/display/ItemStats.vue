<script lang="ts" setup>
import { statIndex } from '#shared/references'

const { stats } = defineProps<{
  stats: Record<string, number>
}>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value })),
)
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

        <div
          class="
            badge h-5 gap-1 justify-self-end rounded-[0.32rem]! border-none px-1.25 badge-sm
            drop-shadow-black/20!
          "
          :style="{
            backgroundColor: 'var(--stat-color)',
          }">
          <StatIcon
            :stat="stat.key"
            class="
              stat-badge-content color-badge-content size-3! self-center
            " />
          <span
            class="
              stat-badge-content color-badge-content text-0! font-bold uppercase

            ">
            {{ statIndex[stat.key].key || statIndex[stat.key].name }}
          </span>
        </div>
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
