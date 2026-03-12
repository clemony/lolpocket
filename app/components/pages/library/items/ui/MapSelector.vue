<script lang="ts" setup>
import { mapIndex } from "#shared/constants/misc/map-index"
import type { ButtonProps } from "@nuxt/ui"

const { collapsed, ui, size } = defineProps<{
  collapsed?: boolean
  ui?: ButtonProps["ui"]
  size?: ButtonProps["size"]
}>()

const mapOpen = shallowRef<boolean>(false)
const { filters } = storeToRefs(is())

const maps = computed(() => [
  {
    id: 0,
    value: 0,
    name: "All",
  },
  ...mapIndex
    .filter((m) => [11, 12, 30, 35].includes(m.id))
    .map((m) => ({
      value: m.id,
      name: m.name,
    })),
])
</script>

<template>
  <div>
    <h6 v-if="!collapsed" class="text-sm">Map</h6>
    <UPopover
      v-model:open="mapOpen"
      :arrow="collapsed"
      :content="{
        side: collapsed ? 'right' : 'bottom',
      }"
      :ui="{ content: 'w-(--reka-popover-trigger-width) min-w-54 p-1.5' }">
      <Tooltip
        :disabled="!collapsed || mapOpen"
        label="Map"
        side="right"
        class="w-full">
        <UButton
          :size
          :active="mapOpen"
          :block="!collapsed"
          active-color="p1"
          :square="collapsed === true"
          :ui="{
            base: cn(collapsed ? '' : 'w-full grow', ui?.base),
            label: collapsed ? 'hidden' : '',
            trailingIcon: collapsed ? 'hidden' : '',
            leadingIcon: collapsed ? 'size-5' : '',
          }"
          :label="filters.map === 0 ? 'All' : mapNameById(filters.map)"
          :icon="`i-lp-${filters.map}`"
          trailing-icon="i-up-down"
          :color="collapsed ? 'p0' : 'p1'"
          :variant="collapsed ? 'solid' : 'outline'" />
      </Tooltip>
      <template #content>
        <h6 class="px-1.5 py-1 text-xs">Select Map</h6>
        <LazyURadioGroup
          v-model:model-value="filters.map"
          color="p1"
          :items="maps"
          :ui="{
            item: 'group/item relative cursor-pointer overflow-hidden rounded-md px-1.5 py-1 **:cursor-pointer hover:bg-p2',
            label:
              'flex flex-nowrap items-center justify-between gap-1.5 font-medium',
          }"
          variant="list"
          indicator="hidden">
          <template #label="{ item }">
            <span
              v-if="item.value === filters.map"
              class="group-hover/item:noise absolute top-0 left-0 z-0 size-full bg-p1 group-hover/item:bg-p2" />
            <div class="z-1 flex flex-nowrap items-center gap-1.5">
              <Icon :name="`i-lp-${item.value}`" class="size-5 shrink-0" />
              {{ item.name }}
            </div>
            <Icon
              v-if="item.value === filters.map"
              name="tick"
              class="z-1 mr-1 size-4 -translate-y-0.75" />
          </template>
        </LazyURadioGroup>
      </template>
    </UPopover>
  </div>
</template>
