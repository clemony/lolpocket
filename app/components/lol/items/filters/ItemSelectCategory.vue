<script setup lang="ts">
import { itemTags } from "#shared/constants/items/itemTags"
</script>

<template>
  <Select v-model:model-value="is().filters.tags" :multiple="true">
    <VarSelectTrigger
      class="open:not-on:bg-tint-p2/40! indicator relative open:inset-shadow-sm"
      size="lg"
      shape="square">
      <UChip
        v-if="is().filters.tags.length"
        color="secondary"
        :class="
          cn('absolute transition-opacity', {
            'animate-in fade-in zoom-in': is().filters.tags.length,
            'animate-out zoom-out fade-out': !is().filters.tags.length,
          })
        " />
      <icon name="filter" />
    </VarSelectTrigger>
    <SelectContent
      class="top-[calc(var(--reka-select-trigger-height)+2px)] w-64 -translate-x-52 *:space-y-1">
      <SelectGroup>
        <SelectLabel>Item Tier</SelectLabel>
        <SelectSeparator />
        <ItemSelectRank />
      </SelectGroup>

      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Categories</SelectLabel>
        <SelectSeparator />
        <SelectItem
          v-for="tag in itemTags"
          :key="tag.id"
          class="py-1.5 font-medium capitalize *:flex *:items-center *:gap-3"
          :value="tag.id">
          <ItemTagIcon :tag />
          {{ tag.name }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
