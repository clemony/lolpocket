<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const regions = Object.keys(regionIndex) as Array<keyof typeof regionIndex>
</script>

<template>
  <LazySelectContent
    align="end"
    :class="cn('h-100 w-64 -translate-y-0.5 rounded-lg p-0', className)">
    <!--  <SelectArrow /> -->

    <SelectLabel class="px-4 opacity-50">
      Select Region
    </SelectLabel>
    <SelectSeparator class="mt-1 mb-3" />

    <SelectGroup class="">
      <SelectItem
        v-for="region in regions"
        :key="region"
        class="flex items-center gap-3 py-1.5 text-nowrap"
        :value="region">
        <SelectItemText class="truncate text-md">
          <span class="italic">
            {{ regionIndex[region] }}
          </span>
          <span class="uppercase opacity-50">({{ capitalize(region) }})</span>
        </SelectItemText>
      </SelectItem>
    </SelectGroup>
  </LazySelectContent>
</template>
