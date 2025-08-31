<script lang="ts" setup>
import { regionIndex } from 'appdata/index/region-index'
import { SelectArrow } from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <LazySelectContent
    align="end"
    :class="cn('w-64 rounded-lg -translate-y-0.5 p-0  h-100', className)">
    <!--  <SelectArrow /> -->

    <SelectLabel class="px-4 opacity-50">
      Select Region
    </SelectLabel>
    <SelectSeparator class="mb-3 mt-1" />

    <SelectGroup class="">
      <SelectItem
        v-for="region in Object.keys(regionIndex)"
        :key="region"
        :value="region"
        class="flex items-center gap-3 py-1.5 text-nowrap ">
        <SelectItemText class="truncate text-3 ">
          <span class="italic">
            {{ regionIndex[region] }}
          </span>
          <span class="uppercase  opacity-50">
            ({{ capitalize(region) }})
          </span>
        </SelectItemText>
      </SelectItem>
    </SelectGroup>
  </LazySelectContent>
</template>