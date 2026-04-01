<script lang="ts" setup>
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import { statIndex } from "~~/shared/constants/common/stat-index"

const clearOpen = shallowRef<boolean>(false)

const clearProps = computed<ButtonProps>(() => ({
  disabled: !is().filtersEnabled,
  active: is().filtersEnabled,
  activeColor: "neutral",
  size: "sm",
  variant: "outline",
  activeVariant: "solid",
  ui: {
    base: "px-5  disabled:bg-p1 disabled:shadow-none disabled:inset-shadow-xs disabled:ring-p4/80! last-of-type:border-l-p4",
    label: "text-xs group-disabled/btn:opacity-60",
    leadingIcon: cn(
      "transition-rotate duration-200 **:stroke-[2.1] group-first-of-type/btn:size-4 group-disabled/btn:opacity-50",

      is().filtersEnabled && "text-nc"
    )
  }
}))

const ui: DropdownMenuItem["ui"] = {
  item: "badge h-6.25! w-fit border-x-0 border-t-0 border-b border-p3 bg-p1 shadow-xs ring ring-p3 drop-shadow-none duration-0 fx-1 before:hidden hover:bg-p3/80",
  itemLabel: "inline align-middle text-xs leading-5 font-medium opacity-90"
}

watch(
  () => is().filters.stats,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
const filterItems = computed<DropdownMenuItem & { trailingIcon?: string }[]>(
  () => [
    ...Object.entries(is().filters)
      .map(([k, v]) => ({
        label: String(k),
        value: v,
        onSelect: () => is().clearFilter(k as keyof ItemFilter),
        trailingIcon: "i-x",
        id: String(k),
        ui
      }))
      .filter(
        (i) =>
          is().filters[i.label as keyof ItemFilter] !==
            is().emptyFilter[i.label as keyof ItemFilter] && i.label !== "stats"
      ),

    is().filters.stats.length > 0
      ? {
          label: "Stats",
          ui: {
            item: "bg-transparent!   relative items-center flex justify-between rounded-lg before:hidden pr-0!",
            trailing: "inline translate-x-1 self-center",
            label: "-translate-x-1.75 h-7! group/label"
          },
          type: "label",
          trailingIcon: "i-erase"
        }
      : {},
    ...Object.values(is().filters.stats).map((v, i) => ({
      label: statIndex[String(v)]?.name,
      value: i,
      id: String(v),
      onSelect: () => is().filters.stats.splice(i, 1),
      ui,
      trailingIcon: "i-x"
    }))
  ]
)
</script>

<template>
  <UFieldGroup>
    <Tooltip
      :label="!is().filtersEnabled ? 'No filters' : 'Clear all filters'"
      as-child>
      <UButton v-bind="clearProps" @click="is().clearFilters()">
        <Icon
          name="i-ui-filter-off"
          :class="
            cn(clearProps.ui?.leadingIcon, is().filtersEnabled && 'text-nc')
          " />
      </UButton>
    </Tooltip>

    <UDropdownMenu
      v-model:open="clearOpen"
      :highlight="false"
      size="sm"
      :content="{ align: 'end', sideOffset: 4 }"
      :ui="{
        arrow: 'scale-160',
        content: 'z-30 w-max min-w-40 rounded-xl px-2 pt-2 pb-2.5',
        group: 'space-y-2',
        label: 'text-pc opacity-60'
      }"
      :items="
        filterItems.filter((v) => (v as DropdownMenuItem).label !== undefined)
      ">
      <Tooltip
        :label="!is().filtersEnabled ? 'No filters' : 'Clear by filter'"
        as-child>
        <UButton
          v-bind="clearProps"
          :label="
            filterItems
              .filter((i) => (i as DropdownMenuItem).id !== undefined)
              .length.toString()
          "
          :ui="{
            ...clearProps.ui,
            label:
              'border-0 border-t-0 text-2xs font-semibold before:hidden after:hidden',
            base: cn(
              clearProps.ui?.base,
              clearOpen && 'inset-shadow-xs! border-p4/80 bg-p2 fx-1!',
              'px-2.5!'
            )
          }"
          :active-color="clearOpen ? 'p0' : 'neutral'" />
      </Tooltip>
      <template #content-top>
        <h6 class="mb-2 w-full border-b border-p3 pb-1 text-xs opacity-50">
          Active filters
        </h6>
      </template>
      <template #item-trailing="{ item }">
        <UTooltip
          v-if="(item as DropdownMenuItem).label === 'Stats'"
          :content="{ side: 'right', sideOffset: 4 }"
          :ui="{ content: 'z-999!' }"
          text="Clear all stats">
          <UButton
            variant="ghost"
            :ui="{
              base: 'translate-x-3 -translate-y-0.5 rounded-lg opacity-0 group-hover/label:opacity-100 hover:border-p4! hover:bg-p2',
              leadingIcon:
                'size-3.5 opacity-60 **:stroke-[2.4] group-hover/btn:opacity-100'
            }"
            icon="i-erase"
            size="xs"
            @click="is().filters.stats = []" />
        </UTooltip>
        <Icon
          v-else-if="item.trailingIcon"
          :name="item.trailingIcon"
          class="inline size-3.25 align-middle leading-5 opacity-70" />
      </template>
    </UDropdownMenu>
  </UFieldGroup>
</template>
