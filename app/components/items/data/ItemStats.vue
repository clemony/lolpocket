<script lang="ts" setup>
import { statIndex } from '#shared/appdata'

const { stats } = defineProps<{
  stats: Record<string, number>
}>()

const statEntries = computed(() =>
  Object.entries(stats).map(([key, value]) => ({ key, value })),
)
</script>

<template>
  <div class="">
    <Separator class=" mt-0" />

    <div class="w-full mt-4 items-center grid gap-y-1.5">
      <div
      class="text-sm flex gap-1 w-full items-center"
        v-for="stat in statEntries"
        :key="stat.key">
        <p class="font-medium  flex flex-nowrap ">
          {{ stat.value }}
        </p>

        <p class="grow  font-medium tracking-tight ">
          {{ statIndex[stat.key].name }}
        </p>

        <p
          class="badge badge-sm justify-self-end  gap-0.5 h-5.5 px-1.25   border-none dst !drop-shadow-black/20 !text-3xs"
          :style="{
            backgroundColor: statIndex[stat.key].color
          }">
          <component
            :is="statIndex[stat.key].icon"
            class="!size-3.25 self-center text-white" />
            <span class="text-white  font-semibold">
          {{ statIndex[stat.key].abbr }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>