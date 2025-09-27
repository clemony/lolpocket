<script lang="ts" setup>
import { championPositions } from '~~/shared/appdata'

const {
  class: className,
  pocket,
  selected,
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  selected?: Pocket
}>()
console.log(
  '🌱 - pocket:',
  ps().pockets.filter(p => p.location.folder === '')
)
</script>

<template>
  <button
    :class="
      cn(
        'flex flex-col items-start gap-2 rounded-xl shadow-black/8 shadow-sm border border-b4/70 pb-5 px-6 pb-5 pt-3 text-left cursor-pointer transition-colors ring ring-transparent hover:ring-neutral/50',
        selected?.key === pocket?.key && 'bg-b2/30',
      )
    "
    @dblclick="navigateTo(`/pocket/${pocket.key}`)">
    <div class="flex w-full h-14 gap-2 items-center justify-between">
      <div class="flex cursor-pointer text-start items-center gap-3">
        <!-- icon -->
        <PocketIcon
          :img="pocket.icon"
          class="size-11 rounded-full" />
        <div
          class="flex flex-col justify-center items-start text-start gap-1 leading-4">
          <!-- name -->
          <div class="font-semibold flex gap-2 items-center">
            {{ pocket.name }}
          </div>
          <PocketChampions
            list
            class="!text-bc/70 text-2"
            :champions="pocket.champions" />
        </div>
      </div>
      <div
        class="relative max-h-14 gap-1 h-full w-max flex flex-nowrap items-center justify-items-end">
        <PocketChampions
          class="ml-auto"
          :champions="pocket.champions" />
      </div>
    </div>
    <div class="w-full">
      <!-- description -->

      <PocketDescription :note="pocket.notes?.[0] ?? null" />
      <!-- items -->
      <PocketItemSet :set="pocket.items[0]?.items" />
    </div>

    <!-- tags -->
    <div class="flex items-center gap-2 mt-2">
      <template v-if="pocket.tags?.length">
        <Badge
          v-for="tag in pocket.tags"
          :key="tag"
          :style="
            championPositions.map((p) => p.name).includes(tag)
              ? {
                backgroundColor: championPositions.find((p) => p.name === tag)
                  .color,
                borderColor: championPositions.find((p) => p.name === tag).color,
              }
              : ''
          "
          class="gap-0">
          <template v-if="championPositions.map((p) => p.name).includes(tag)">
            <component
              :is="`i-roles-${tag}`"
              :class="cn('size-3.5 dst text-white mr-1.25')" />
            <span class="text-white font-medium lowercase">
              {{ tag }}
            </span>
          </template>
          <template v-else>
            <icon
              name="hash"
              class="size-3" />
            {{ tag }}
          </template>
        </Badge>
      </template>
    </div>
  </button>
</template>
