<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"

const { filtered, filters } = is()
</script>

<template>
  <Select v-model="filters" multiple>
    <SelectTrigger class="flex w-80 items-center gap-3">
      <SelectValue placeholder="Filter Stat" />
    </SelectTrigger>

    <LazySelectContent class="w-(--reka-select-trigger-width)">
      <SelectGroup>
        <SelectLabel>Stats</SelectLabel>

        <SelectItem v-for="stat in statIndex" :key="stat.id" :value="stat.id">
          <div class="flex items-center gap-3">
            {{ stat.name }}
          </div>
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
