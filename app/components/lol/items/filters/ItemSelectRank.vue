<script setup lang="ts">
import { itemRankColor } from "#shared/constants/items/itemRankColor"

const ranks = computed(() => Object.keys(itemRankColor))
console.log('🌱 - ranks:', ranks)
function onClick(rank: string): void {
  if (rank === is().filters.rank) is().filters.rank = ''
}
</script>

<template>
  <div class="flex flex-col gap-0">
    <Label
      v-for="rank in Object.keys(itemRankColor)"
      :key="rank"
      class="justify-start gap-4! pl-3! capitalize shadow-none"
      variant="ghost"
      size="sm">
      <input
        v-model="is().filters.rank"
        class="peer hidden"
        type="radio"
        name="item-rank"
        :value="rank"
        @click="onClick(rank)">

      <span class="grow">
        {{ rank }}
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
        v-if="is().filters.rank === rank"
        class="dst size-6"
        name="tick-sm" />
    </Label>
  </div>
</template>
