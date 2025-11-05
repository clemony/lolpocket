<script lang="ts" setup>
const { modelValue: selectedMap } = defineProps<{
  modelValue?: number
}>()
</script>

<template>
  <Select v-bind="$attrs">
    <SelectTrigger class="items-center justify-start flex gap-3 h-12">
      <slot>
        <span class="size-5 relative grid place-items-center">
          <component
            :is="`i-lol-${selectedMap}`"
            class="absolute dst opacity-80 shrink-0"
            :class="{
              '!size-5': selectedMap === 12 || selectedMap === 11,
              '!size-6': selectedMap === 30,
            }" />
        </span>
        <span class="grow">
          {{ ix().mapNameById(selectedMap) }}
        </span>
      </slot>
    </SelectTrigger>

    <SelectContent
      v-once
      class="w-[calc(var(--reka-select-trigger-width)+2px)] px-0">
      <SelectGroup class="px-0">
        <SelectLabel class="w-full border-b border-b-b3/60">
          <span class="opacity-50">Select a Map...</span>
        </SelectLabel>
        <SelectGroup class="size-full p-0.5 space-y-1">
          <SelectItem
            class="py-2 mt-1 rounded-md"
            :value="0">
            <div class="flex gap-3 items-center font-medium">
              <span class="size-5 relative grid place-items-center">
                <icon
                  name="stash:infinity-solid"
                  class="size-6 opacity-60 -ml-0.25" />
              </span>
              All
            </div>
          </SelectItem>
          <SelectItem
            v-for="map in [11, 12, 30]"
            :key="map"
            class="py-2 rounded-md"
            :value="map">
            <div class="flex gap-3 items-center font-medium">
              <span class="size-5 relative grid place-items-center">
                <component
                  :is="`i-lol-${map}`"
                  class="absolute opacity-80 dst shrink-0"
                  :class="{
                    '!size-5': map === 12 || map === 11,
                    '!size-6': map === 30,
                  }" />
              </span>
              {{ ix().mapNameById(map) }}
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
