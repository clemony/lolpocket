<script lang="ts" setup>
const is = useItemStore()
</script>

<template>
  <Select
    v-model="is.pItemFilter"
    multiple>
    <SelectTrigger class="w-80  items-center flex gap-3   ">
      <SelectValue placeholder="Filter Stat" />
    </SelectTrigger>

    <LazySelectContent class="w-(--reka-select-trigger-width)">
      <SelectGroup>
        <SelectLabel>Stats</SelectLabel>

        <SelectItem
          v-for="stat in itemStats"
          :key="stat.id"
          :value="stat.id">
          <div class="flex gap-3 items-center">
            {{ stat.displayName }}
          </div>
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>