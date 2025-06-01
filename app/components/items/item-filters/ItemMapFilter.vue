<script lang="ts" setup>
const { modelValue: selectedMap } = defineProps<{
  modelValue?: number
}>()

const ix = useIndexStore()

</script>

<template>
  <Select v-bind="$attrs">
    <SelectTrigger class="w-50  items-center flex gap-3   ">
      <slot>
        <span class="size-5 relative grid place-items-center">
          <component :is="`i-maps-${selectedMap}`" class="absolute dst opacity-80 shrink-0" :class="{ 'size-5': selectedMap == 12 || selectedMap == 11, 'size-6': selectedMap == 30 }" />
        </span>
        {{ ix.mapNameById(selectedMap) }}
      </slot>
    </SelectTrigger>
    <LazySelectContent class="w-(--reka-select-trigger-width)">
      <SelectGroup>
        <SelectLabel>Maps</SelectLabel>
        <SelectItem v-for="map in [11, 12, 30]" :key="map" :value="map">
          <div class="flex gap-3 items-center">
            <span class="size-5 relative grid place-items-center">
              <component :is="`i-maps${map}`" class="absolute opacity-80 dst shrink-0" :class="{ 'size-5': map == 12 || map == 11, 'size-6': map == 30 }" />
            </span>
            {{ ix.mapNameById(map) }}
          </div>
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>