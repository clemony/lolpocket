<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"
import { itemTags } from "#shared/constants/items/itemTags"
import type {
  ButtonProps,
  CheckboxGroupItem,
  CheckboxGroupProps,
} from "@nuxt/ui"
import type { AcceptableValue } from "reka-ui"

const { nav } = defineProps<{
  nav: ButtonProps[]
  roles: CheckboxGroupItem[]
}>()

const emit = defineEmits(["updateTab"])
const { filters, attackType } = storeToRefs(champFilter())
const collapsed = useState<boolean>("collapsed-state", () => false)

const statItems = computed<CheckboxGroupItem[]>(() =>
  Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({ id: s.id, name: s.name })),
)

console.log("🥸 - Object.entries(attackType):", Object.entries(attackType))
const tagItems = computed<CheckboxGroupItem[]>(() =>
  itemTags.map((t) => ({ id: t.id, name: t.name })),
)
const shared = {
  indicator: "end",
  color: "default",
  variant: "select",
  labelKey: "name",
  valueKey: "id" as CheckboxGroupProps["valueKey"],
} satisfies CheckboxGroupProps
</script>

<template>
  <div class="mt-0.5 grid auto-rows-max items-center gap-6">
    <div class="w-full">
      <h6 class="mb-3">Resources</h6>
      <div class="grid w-full grid-cols-3 gap-2">
        <UButton
          v-for="(link, i) in nav"
          :key="i"
          variant="outline"
          :label="link.label"
          :icon="link.icon"
          :to="link.to"
          :ui="{
            leadingIcon: cn(
              'size-5',
              link.label?.toLowerCase() === 'spells'
                ? '**:stroke-[1.5] opacity-90 scale-94'
                : '',
              link?.ui?.leadingIcon,
            ),
            base: 'flex h-21! w-full flex-col items-center justify-center',
            label: 'grow-0 font-semibold',
          }" />
      </div>
    </div>

    <!-- search -->
    <LazyLibrarySearch class="-mt-1" />

    <!-- view -->
    <ViewToggle
      variant="label"
      @update:tab-model="(e) => emit('updateTab', e)" />

    <!-- select menus -->

    <UCollapsible
      v-if="!collapsed"
      :ui="{
        root: 'w-full',
        content: 'max-h-90 overflow-scroll',
      }"
      :default-open="!collapsed">
      <UButton size="xl" variant="link" block>
        <Separator
          size="md"
          label="Stats"
          label-placement="end"
          leading-icon="right"
          :ui="{
            separator: 'group-hover/btn:bg-p4',
            label: 'group-hover/btn:underline',
            leadingIcon:
              'group-hover/btn:**:text-80 transition-rotate size-4.5 text-pc/40 duration-200 **:stroke-[2.8] group-open/collapse:rotate-90',
          }" />
      </UButton>
      <template #content>
        <UCheckboxGroup
          v-model:model-value="filters.role"
          v-bind="shared"
          value-key="label"
          :items="roles"
          @entry-focus.prevent />
      </template>
    </UCollapsible>

    <UCollapsible
      v-if="!collapsed"
      :ui="{
        root: 'w-full',
        content: 'max-h-90 overflow-scroll',
      }"
      :default-open="!collapsed">
      <UButton size="xl" variant="link" block>
        <Separator
          size="md"
          label="Categories"
          label-placement="end"
          leading-icon="right"
          :ui="{
            separator: 'group-hover/btn:bg-p4',
            label: 'group-hover/btn:underline',
            leadingIcon:
              'group-hover/btn:**:text-80 transition-rotate size-4.5 text-pc/40 duration-200 **:stroke-[2.8] group-open/collapse:rotate-90',
          }" />
      </UButton>
      <!--       <template #content>
        <UCheckboxGroup
          v-bind="shared"
          v-model:model-value="filters.tags"
          :items="tagItems"
          @entry-focus.prevent />
      </template> -->
    </UCollapsible>

    <!-- map -->
    <MapSelector />

    <!-- shop -->
    <!--
      :ui="{ label: 'font-medium', root: 'gap-2 px-1' }" -->
    <div class="relative w-full">
      <div class="inset-0 grid grid-cols-3">
        <!--    <label
          v-for="[k, v] in Object.entries(attackType)"
          :key="v"
          :for="`attack-${v}`">
          <UButton
            :id="`attack-${v}`"
            :ui="{ base: '' }"
            :label="v"
            @click="filters.attackType = k as AttackKey" />
        </label> -->
      </div>
      <USlider
        v-if="!collapsed"
        v-model:model-value="filters.attackType"
        :step="1"
        :min="0"
        :max="2"
        :label="filters.attackType ? 'Purchasable' : 'All Items'" />
    </div>

    <!-- reset -->
    <UButton
      color="neutral"
      icon="i-reset"
      block
      :ui="{
        label: 'grow-0 font-semibold',
        base: 'justify-between! bg-neutral/96 px-4',
      }"
      label="Reset Filter"
      @click="is().clearFilters()" />
  </div>
</template>
