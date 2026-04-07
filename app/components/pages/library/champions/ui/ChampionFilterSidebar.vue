<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"
import type {
  CheckboxGroupItem,
  CheckboxGroupProps,
  StepperItem
} from "@nuxt/ui"

const { roles } = defineProps<{
  roles: CheckboxGroupItem[]
}>()

const emit = defineEmits(["updateTab"])
const { filters, attackType } = storeToRefs(champFilter())
const collapsed = useState<boolean>("collapsed-state", () => false)

const statItems = computed<CheckboxGroupItem[]>(() =>
  Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({ id: s.id, name: s.name }))
)

const shared = {
  indicator: "end",
  color: "base",
  variant: "list"
} satisfies CheckboxGroupProps

const attackStep = ref<StepperItem[]>([
  {
    title: "All",
    value: 0,
    icon: "i-infinity"
  },
  {
    title: "Melee",

    value: 1,
    icon: "i-stat-melee"
  },
  {
    title: "Ranged",

    value: 2,
    icon: "i-stat-ranged"
  }
])
</script>

<template>
  <div class="mt-0.5 grid auto-rows-max items-center gap-6">
    <LibraryListNav />
    <!-- search -->
    <LazyLibrarySearch class="-mt-1" />

    <div class="flex items-center justify-between gap-2">
      <!-- view -->
      <ViewToggle
        variant="label"
        @update:tab-model="(e) => emit('updateTab', e)" />
      <!-- reset -->
      <UButton
        variant="outline"
        trailing-icon="i-reset"
        size="xs"
        :ui="{
          label: 'text-xs font-semibold',
          trailingIcon: 'size-3.5',
          base: 'relative gap-2.5 px-3'
        }"
        label="Clear"
        @click="is().clearFilters()" />
    </div>

    <!-- select menus -->

    <UCollapsible
      v-if="!collapsed"
      :ui="{
        root: 'w-full',
        content: 'max-h-90 overflow-scroll'
      }"
      :default-open="!collapsed">
      <UButton size="xl" variant="link" block>
        <Separator
          size="md"
          label="Role"
          label-placement="end"
          leading-icon="right"
          :ui="{
            separator: 'group-hover/btn:bg-p4',
            label: 'group-hover/btn:underline',
            leadingIcon:
              'group-hover/btn:**:text-80 transition-rotate size-4.5 text-pc/40 duration-200 **:stroke-[2.8] group-open/collapse:rotate-90'
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
        content: 'max-h-90 overflow-scroll'
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
              'group-hover/btn:**:text-80 transition-rotate size-4.5 text-pc/40 duration-200 **:stroke-[2.8] group-open/collapse:rotate-90'
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

      <UStepper
        v-model:model-value="filters.attackType"
        :linear="false"
        orientation="horizontal"
        :ui="{
          root: 'w-full px-0 pl-2',
          item: 'group/item px-1 first:pl-0 last:pr-0 [:nth-child(2)]:-translate-x-3',
          wrapper:
            'group-first/item:pl-2.5 group-first/item:text-start group-last/item:pr-1.5 group-last/item:text-end',
          container:
            'group-first/item:justify-start group-last/item:justify-end',
          separator:
            'group-first/item:start-[calc(12%+28px)] group-first/item:end-[calc(-51%+28px)] group-[:nth-child(2)]/item:start-[calc(45%+28px)] group-[:nth-child(2)]/item:end-[calc(-96%+28px)]',
          trigger:
            'group/step text-pc **:text-pc group-last/item:-translate-x-3 group-active:text-nc group-active:**:text-nc group-data-[state=completed]:text-nc group-data-[state=completed]:**:text-nc',
          icon: cn(
            'block text-pc group-active/step:text-nc group-active/step:**:text-nc',
            $attrs.title === 'Melee' ? 'scale-90' : ''
          )
        }"
        :items="attackStep" />
    </div>
  </div>
</template>
