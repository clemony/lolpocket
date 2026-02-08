<script lang="ts" setup>
const {
  class: className,
  pocket,
  selected,
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  selected?: Pocket
}>()
console.log('🌱 - pocket:')
</script>

<template>
  <button
    :class="
      cn(
        'border-b4/70 flex cursor-pointer flex-col items-start gap-2 rounded-xl border px-6 pt-3 pb-5 text-left shadow-sm ring shadow-black/8 ring-transparent transition-colors hover:ring-neutral/50',
        selected?.key === pocket?.key && 'bg-p2/30',
      )
    ">
    <div class="flex h-14 w-full items-center justify-between gap-2">
      <div class="flex cursor-pointer items-center gap-3 text-start">
        <!-- icon -->
        <PocketIcon
          class="size-11 rounded-full"
          :src="pocket.icon" />
        <div
          class="flex flex-col items-start justify-center gap-1 text-start leading-4">
          <!-- name -->
          <div class="flex items-center gap-2 font-semibold">
            {{ pocket.name }}
          </div>
          <PocketChampions
            class="text-sm text-pc/70!"
            list
            :champions="pocket.champions" />
        </div>
      </div>
      <div
        class="relative flex h-full max-h-14 w-max flex-nowrap items-center justify-items-end gap-1">
        <PocketChampions
          class="ml-auto"
          :champions="pocket.champions" />
      </div>
    </div>
    <div class="w-full">
      <!-- description -->

      <!-- items -->
      <PocketItemSet :set="pocket.items[0]?.items" />
    </div>

    <!-- tags -->
    <div class="mt-2 flex items-center gap-2">
      <template v-if="pocket.tags?.length">
        <Badge
          v-for="tag in pocket.tags"
          :key="tag"
          class="gap-0"
          :style="
            mapPositions.map((p) => p.name).includes(tag)
              ? {
                backgroundColor: mapPositions.find((p) => p.name === tag)
                  .color,
                borderColor: mapPositions.find((p) => p.name === tag)
                  .color,
              }
              : ''
          ">
          <template v-if="mapPositions.map((p) => p.name).includes(tag)">
            <component
              :is="`i-roles-${tag}`"
              :class="cn('mr-1.25 size-3.5 text-white dst')" />
            <span class="font-medium text-white lowercase">
              {{ tag }}
            </span>
          </template>
          <template v-else>
            <icon
              class="size-3"
              name="hash" />
            {{ tag }}
          </template>
        </Badge>
      </template>
    </div>
  </button>
</template>
