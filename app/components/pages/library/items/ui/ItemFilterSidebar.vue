<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"
import { itemTags } from "#shared/constants/items/itemTags"
import type { CheckboxGroupItem, CheckboxGroupProps } from "@nuxt/ui"
import type { SeparatorProps } from "~~/layers/ui/app/variants/separator"

const emit = defineEmits(["updateTab"])
const { filters } = storeToRefs(is())
const collapsed = useState<boolean>("collapsed-state", () => false)

const statItems = computed<
  CheckboxGroupItem & { icon: string; label: string }[]
>(() =>
  Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({
      value: s.id,
      label: s.name,
      icon: `i-stat-${s.id}`
    }))
)

const tagItems = computed<
  CheckboxGroupItem & { icon: string; label: string }[]
>(() => itemTags.map((t) => ({ value: t.id, label: t.name, icon: t.icon })))

const shared = {
  indicator: "hidden",
  color: "default",
  variant: "select",
  ui: {
    fieldset: "gap-0",
    item: "px-0",
    wrapper: "w-full justify-start",
    label:
      "group-has-checked/x:noise flex h-full w-fit items-center gap-2 rounded-lg px-2 py-1 text-start group-has-checked/x:bg-neutral group-has-checked/x:text-nc group-has-checked/x:shadow-sm group-has-checked/x:drop-shadow-sm group-has-checked/x:**:text-nc group-hover/x:group-has-checked/x:bg-neutral/90 group-has-checked/x:hover:no-underline"
  }
} satisfies CheckboxGroupProps

const separatorProps: SeparatorProps = {
  size: "md",
  labelPlacement: "start",
  trailingIcon: "i-up",
  ui: {
    separator: "group-hover/btn:bg-p4",
    label: "font-semibold opacity-50 group-hover/btn:opacity-100",
    trailingIcon:
      "group-hover/btn:**:text-80 transition-rotate size-4.5 text-pc/40 duration-200 **:stroke-[2.8] group-open/collapse:-rotate-180"
  }
}
</script>

<template>
  <div class="mt-0.5 grid auto-rows-max items-center gap-4">
    <div class="mb-1 flex flex-nowrap items-center gap-4 pr-1">
      <!-- view -->
      <ViewToggle
        variant="label"
        @update:tab-model="(e) => emit('updateTab', e)" />

      <!--    <span class="mx-1 h-5 w-px bg-p3" /> -->
      <!-- reset -->
      <UButton
        variant="outline"
        trailing-icon="i-reset"
        size="xs"
        :ui="{
          label: 'text-xs font-semibold',
          trailingIcon: 'size-3.5',
          base: 'relative w-26 gap-2.5 px-5'
        }"
        label="Clear"
        @click="is().clearFilters()" />
    </div>
    <!-- search -->
    <LazyLibrarySearch />

    <!-- select menus -->

    <UCollapsible
      v-if="!collapsed"
      :ui="{
        root: 'w-full',
        content: 'max-h-90 overflow-scroll'
      }"
      :default-open="!collapsed">
      <UButton size="xl" variant="link" block>
        <Separator v-bind="separatorProps" label="Stats" />
      </UButton>
      <template #content>
        <UCheckboxGroup
          v-model:model-value="filters.stats"
          v-bind="shared"
          :items="statItems"
          @entry-focus.prevent>
          <template #label="{ item }">
            <Icon :name="item.icon ?? ''" class="size-4" />

            {{ item.label }}
          </template>
        </UCheckboxGroup>
      </template>
    </UCollapsible>

    <UCollapsible
      v-if="!collapsed"
      :ui="{
        root: 'mb-3 w-full',
        content: 'max-h-90 overflow-scroll'
      }"
      :default-open="!collapsed">
      <UButton size="xl" variant="link" block>
        <Separator label="Categories" v-bind="separatorProps" />
      </UButton>
      <template #content>
        <UCheckboxGroup
          v-bind="shared"
          v-model:model-value="filters.tags"
          :items="tagItems"
          @entry-focus.prevent>
          <template #label="{ item }">
            <Icon
              :name="item.icon ?? ''"
              :class="
                cn(
                  'size-4',
                  [
                    'Movement',
                    'On-Hit Effects',
                    'Lifesteal & Omnivamp'
                  ].includes(item.label)
                    ? ''
                    : 'scale-115'
                )
              " />

            {{ item.label }}
          </template>
        </UCheckboxGroup>
      </template>
    </UCollapsible>

    <!-- map -->
    <MapSelector />

    <!-- shop -->

    <USwitch
      v-model:model-value="filters.purchasable"
      :ui="{ label: 'font-medium', root: 'mt-5 gap-2 px-1' }"
      :label="filters.purchasable ? 'Purchasable' : 'All Items'" />

    <Separator class="mt-6 mb-2.5" />

    <LibraryListNav />
  </div>
</template>
