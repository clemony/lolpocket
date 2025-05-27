<script lang="ts" setup>
import { gameMaps } from '~~/data/records/maps'

const { modelValue: mapp } = defineProps<{
  modelValue?: number
}>()
</script>

<template>
  <Select v-bind="$attrs">
    <SelectTrigger class="w-50  items-center flex gap-3   ">
      <slot>
        <span class="size-5 relative grid place-items-center">
          <component :is="`i-maps-${mapp}`" class="absolute dst opacity-80 shrink-0" :class="{ 'size-5': mapp == 12 || mapp == 11, 'size-6': mapp == 30 }" />
        </span>
        {{ gameMaps.find(m => m.mapId == mapp).nameId }}
      </slot>
    </SelectTrigger>
    <LazySelectContent class="w-(--reka-select-trigger-width)">
      <SelectGroup>
        <SelectLabel>Maps</SelectLabel>
        <SelectItem v-for="map in [11, 12, 30]" :value="map">
          <div class="flex gap-3 items-center">
            <span class="size-5 relative grid place-items-center">
              <component :is="`i-maps${map}`" class="absolute opacity-80 dst shrink-0" :class="{ 'size-5': map == 12 || map == 11, 'size-6': map == 30 }" />
            </span>
            {{ gameMaps.find(m => m.mapId == map).nameId }}
          </div>
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>