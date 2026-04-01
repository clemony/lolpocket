<script lang="ts" setup>
import { mapIndex } from "#shared/constants/misc/map-index"
import type { ButtonProps, CheckboxGroupProps } from "@nuxt/ui"

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
    label: "All",
    icon: "i-lp-0"
  },
  ...mapIndex
    .filter((m) => [11, 12, 30, 35].includes(m.id))
    .map((m) => ({
      value: m.id,
      label: m.name,
      icon: `i-lp-${m.id}`
    }))
])
</script>

<template>
  <div v-if="!collapsed" class="space-y-2">
    <div class="text-sm font-medium opacity-60">
      Map
    </div>
    <UTabs
      v-model:model-value="filters.map"
      variant="solid"
      size="sm"
      color="neutral"
      :ui="{
        root: '',
        leadingIcon: 'hidden',
        label: 'grid size-full place-items-center gap-0',
        list: 'gap-2 border-p4 inset-shadow-xs',
        indicator: '',
        trigger: 'relative h-full gap-0 p-0'
      }"
      :items="maps">
      <template #default="{ item }">
        <Tooltip
          :label="item.label"
          class="pointer-events-auto absolute grid size-full place-items-center">
          <Icon :name="item.icon" class="size-4.5" />
        </Tooltip>
      </template>
    </UTabs>
  </div>

  <UPopover
    v-else
    v-model:open="mapOpen"
    :content="{
      side: collapsed ? 'right' : 'bottom'
    }"
    :ui="{ content: 'w-(--reka-popover-trigger-width) min-w-54 p-1.5' }">
    <div
      data-tip="Map"
      :class="cn(!collapsed || mapOpen ? '' : 'tooltip tooltip-left')">
      <UButton
        :size
        :active="mapOpen"
        :block="!collapsed"
        active-color="p1"
        :square="collapsed === true"
        :ui="{
          base: cn(
            collapsed ? '' : 'w-full grow',

            ui?.base
          ),
          label: collapsed ? 'hidden' : '',
          trailingIcon: collapsed ? 'hidden' : '',
          leadingIcon: collapsed ? 'size-5' : ''
        }"
        :label="filters.map === 0 ? 'All' : mapNameById(filters.map)"
        :icon="`i-lp-${filters.map}`"
        trailing-icon="i-up-down"
        :color="collapsed ? 'p0' : 'p1'"
        :variant="collapsed ? 'solid' : 'outline'" />
    </div>
    <template #content>
      <h6 class="px-1.5 py-1 text-xs">
        Select Map
      </h6>
      <LazyListbox
        v-model:model-value="filters.map"
        :ui="{
          item: 'group/item relative cursor-pointer overflow-hidden rounded-md px-1.5 py-1 **:cursor-pointer hover:bg-p2',
          label:
            'flex flex-nowrap items-center justify-between gap-1.5 font-medium'
        }"
        variant="list"
        indicator="hidden">
        <ListboxItem
          v-for="item in maps"
          :key="item.value"
          as-child
          :value="item.value">
          <ListboxContent class="space-y-0.5 py-1">
            <UButton
              :label="item.label"
              :icon="`i-lp-${item.value}`"
              size="sm"
              active-variant="solid"
              :ui="{
                base: cn(
                  'h-7.5 max-h-7.5 w-full gap-2 px-2',
                  filters.map === item.value
                    ? 'bg-p1/60 shadow-none rounded-md border-0'
                    : ''
                ),
                trailingIcon: cn('size-4.5')
              }"
              :trailing-icon="filters.map === item.value ? 'i-tick' : ''"
              variant="highlight"
              :active="item.value === filters.map" />
          </ListboxContent>
        </ListboxItem>
      </LazyListbox>
    </template>
  </UPopover>
</template>
