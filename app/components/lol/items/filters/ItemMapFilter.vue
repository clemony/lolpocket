<script lang="ts" setup>
const { modelValue: selectedMap } = defineProps<{
  modelValue?: number
}>()
</script>

<template>
  <Select v-bind="$attrs">
    <SelectTrigger class="flex h-12 items-center justify-start gap-3">
      <slot>
        <span class="relative grid size-5 place-items-center">
          <component
            :is="`i-lol-${selectedMap}`"
            class="absolute shrink-0 opacity-80 dst"
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
        <SelectGroup class="size-full space-y-1 p-0.5">
          <SelectItem
            class="mt-1 rounded-md py-2"
            :value="0">
            <div class="flex items-center gap-3 font-medium">
              <span class="relative grid size-5 place-items-center">
                <icon
                  name="stash:infinity-solid"
                  class="-ml-0.25 size-6 opacity-60" />
              </span>
              All
            </div>
          </SelectItem>
          <SelectItem
            v-for="map in [11, 12, 30]"
            :key="map"
            class="rounded-md py-2"
            :value="map">
            <div class="flex items-center gap-3 font-medium">
              <span class="relative grid size-5 place-items-center">
                <component
                  :is="`i-lol-${map}`"
                  class="absolute shrink-0 opacity-80 dst"
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
