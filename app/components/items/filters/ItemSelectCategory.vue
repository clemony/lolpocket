<script setup lang="ts">
import { itemTags } from '@appdata'
</script>

<template>
  <Select
    v-model:model-value="is().filters.tags"
    :multiple="true">
    <VarSelectTrigger
      :variant="is().filters.tags.length ? 'neutral' : 'outline'"
      size="lg"
      class="indicator relative open:not-on:!bg-tint-b2/40  open:inset-shadow-sm"
      shape="square">
      <StatusIndicator
        v-if="is().filters.tags.length"
        color="master"
        :class="cn('transition-opacity absolute', { 'animate-in fade-in zoom-in': is().filters.tags.length, 'animate-out zoom-out fade-out': !is().filters.tags.length })" />
      <icon name="filter" />
    </VarSelectTrigger>
    <SelectContent
      class="*:space-y-1 w-64 top-[calc(var(--reka-select-trigger-height)+2px)] -translate-x-52">
      <SelectGroup>
        <SelectLabel>
          Item Tier
        </SelectLabel>
        <SelectSeparator />
        <ItemSelectRank />
      </SelectGroup>

      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>
          Categories
        </SelectLabel>
        <SelectSeparator />
        <SelectItem
          v-for="tag in itemTags"
          :key="tag.id"
          class="*:flex *:items-center *:gap-3 font-medium py-1.5 capitalize"
          :value="tag.id">
          <ItemTagIcon :tag />
          {{ tag.name }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>