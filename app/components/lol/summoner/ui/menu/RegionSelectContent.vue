<script lang="ts" setup>
import { regionIndex } from "~~/shared/references";

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <LazySelectContent
    align="end"
    :class="cn('h-100 w-64 -translate-y-0.5 rounded-lg p-0', className)"
  >
    <!--  <SelectArrow /> -->

    <SelectLabel class="px-4 opacity-50"> Select Region </SelectLabel>
    <SelectSeparator class="mt-1 mb-3" />

    <SelectGroup class="">
      <SelectItem
        v-for="region in Object.keys(regionIndex)"
        :key="region"
        :value="region"
        class="flex items-center gap-3 py-1.5 text-nowrap"
      >
        <SelectItemText class="truncate text-3">
          <span class="italic">
            {{ regionIndex[region] }}
          </span>
          <span class="uppercase opacity-50">({{ capitalize(region) }})</span>
        </SelectItemText>
      </SelectItem>
    </SelectGroup>
  </LazySelectContent>
</template>
