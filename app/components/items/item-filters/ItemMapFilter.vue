<script lang="ts" setup>
import { gameMaps } from '~~/public/api/maps'

const { modelValue: mapp } = defineProps<{
modelValue: number
}>()



</script>

<template>

<Select v-bind="$attrs">
    <SelectTrigger class="w-26 border-transparent hover:border-b3 data-[state=open]:border-b3 shadow-none hover:inset-shadow-none ring-none">

      <span class="size-5 relative grid place-items-center">
          <component :is="`i-maps-${mapp}`" class="absolute dst opacity-80 shrink-0" :class="{'size-5': mapp == 12, 'size-6': mapp == 30, 'size-4.5': mapp == 11}"  />
        </span>
    </SelectTrigger>
    <LazySelectContent class="w-fit">
      <SelectGroup>
        <SelectLabel>Maps</SelectLabel>
        <SelectItem v-for="map in [11, 12, 30]" :value="map">
          <div  class="flex gap-3 items-center">
            <span class="size-5 relative grid place-items-center">
          <component :is="`i-maps${map}`" class="absolute opacity-80 dst shrink-0" :class="{'size-5': map == 12, 'size-6': map == 30, 'size-4.5': map == 11}"  />
        </span>
         {{ gameMaps.find(m => m.mapId == map).mapName }}
        </div>
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>