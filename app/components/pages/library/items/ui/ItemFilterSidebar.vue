<script lang="ts" setup>
import {
  checkboxIcon,
  checkboxProps
} from "#layers/ui/app/components/inputs/checkboxProps"
import { btnProps, collapseProps, separatorProps } from "../../libraryProps"

const { items } = defineProps<{
  items: Record<string, CheckboxItem[]>
}>()
const emit = defineEmits(["updateTab"])
const { filters, filtered, availableWithoutPurchasableCount } =
  storeToRefs(is())
const collapsed = useState<boolean>("collapsed-state", () => false)

const purchasableBadgeLabel = computed(() =>
  filters.value.purchasable
    ? `${filtered.value.length}/${availableWithoutPurchasableCount.value}`
    : `${availableWithoutPurchasableCount.value}`
)

const categoriesOpen = shallowRef<boolean>(true)
</script>

<template>
  <div class="grid auto-rows-max items-center gap-3">
    <!-- search -->
    <LazyLibrarySearch
      @update:model-value="(e: string) => (filters.query = e)" />

    <div class="flex items-center justify-between gap-6">
      <ItemSortSelect />
      <!-- reset -->

      <ItemFilterClearMenu />
    </div>
    <div class="mb-1 w-full">
      <!-- select menus -->

      <UCollapsible
        v-if="!collapsed"
        v-bind="collapseProps"
        :ui="{
          ...collapseProps.ui,
          content: cn(
            collapseProps.ui?.content,
            categoriesOpen ? '' : 'border-b-transparent'
          )
        }"
        :default-open="!collapsed">
        <UButton v-bind="btnProps">
          <Separator v-bind="separatorProps" label="Stats" />
        </UButton>
        <template #content>
          <CheckboxGroup
            v-model:model-value="filters.stats"
            :ui="{
              icon: 'size-3.75 scale-90'
            }"
            :items="items.stats" />
        </template>
      </UCollapsible>

      <!-- categories -->

      <UCollapsible
        v-if="!collapsed"
        v-model:open="categoriesOpen"
        v-bind="collapseProps"
        :default-open="!collapsed">
        <UButton v-bind="btnProps">
          <Separator v-bind="separatorProps" label="Categories" />
        </UButton>
        <template #content>
          <Listbox
            v-model:model-value="filters.tags"
            :multiple="false"
            @entry-focus.prevent>
            <ListboxContent :class="checkboxProps.ui?.fieldset">
              <ListboxItem
                v-for="item in items.tags"
                :key="item.label"
                as-child
                ;active
                :value="item.label">
                <UButton
                  :label="item.label"
                  :active="filters.tags === item.label"
                  variant="soft"
                  active-variant="solid"
                  :ui="{
                    base: cn('btn-custom', checkboxProps.ui?.item),
                    label: checkboxProps.ui?.label
                  }">
                  <template #leading>
                    <span :class="checkboxIcon.wrapper">
                      <Icon
                        :name="item.icon"
                        :class="
                          cn(
                            checkboxIcon.icon,
                            ['Consumable', 'Trinket', 'Movement'].includes(
                              item.label
                            )
                              ? 'scale-90'
                              : 'scale-112'
                          )
                        " /></span>
                  </template>
                </UButton>
              </ListboxItem>
            </ListboxContent>
          </Listbox>
        </template>
      </UCollapsible>
    </div>

    <!-- map -->
    <MapSelector />

    <!-- shop -->

    <div class="mt-3 flex w-full grow items-center gap-3">
      <span class="grow text-sm font-medium opacity-60">
        {{ filters.purchasable ? "Purchasable" : "All Items" }}
      </span>
      <UBadge
        :color="filters.purchasable ? 'neutral' : 'transparent'"
        size="sm"
        :ui="{
          label: cn(
            'font-mono text-2xs font-semibold',
            !filters.purchasable ? 'opacity-50' : ''
          )
        }"
        :label="purchasableBadgeLabel" />
      <USwitch
        v-model:model-value="filters.purchasable"
        :ui="{ container: 'rounded-full' }" />
    </div>
    <Separator class="mt-2" />
    <LibraryListNav />
  </div>
</template>
