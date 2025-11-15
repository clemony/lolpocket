<script setup lang="ts">
import { itemRanks } from '#shared/references'

const ranks = ref(itemRanks)
console.log('🌱 - ranks:', ranks)
function onClick(rank: string): void {
  if (rank === is().filters.rank)
    is().filters.rank = null
}
</script>

<template>
  <div class="flex flex-col gap-0">
    <Label
      v-for="rank in itemRanks"
      :key="rank.name"
      variant="ghost"
      size="sm"
      class="justify-start gap-4! pl-3! capitalize shadow-none">
      <input
        v-model="is().filters.rank"
        type="radio"
        name="item-rank"
        :value="rank.name"
        class="peer hidden"
        @click="onClick(rank.name)" />
      <span class="grid size-5 place-items-center">
        <icon
          v-if="rank.icon"
          :style="{
            color: rank.color,
          }"
          :name="rank.icon"
          class="absolute size-5" />
      </span>
      <span class="grow">
        {{ rank.name }}
      </span>
      <!--
      <span class="transition-all size-5 duration-500  overflow-hidden grid place-items-center peer-checked:opacity-100 opacity-0  scale-x-0 peer-checked:scale-x-100 ease-out">
        <AspectRatio
          :ratio="1 / 1"
          class="w-fit">
          <icon
            name="tick"
            class="" />
        </AspectRatio>
      </span> -->
      <icon
        v-if="is().filters.rank === rank.name"
        name="tick-sm"
        class="size-6 dst" />
    </Label>
  </div>
</template>
