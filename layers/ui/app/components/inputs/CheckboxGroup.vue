<script lang="ts" setup>
import type { CheckboxGroupProps } from "@nuxt/ui"
import { checkboxIcon, checkboxProps } from "./checkboxProps"
const {
  items,
  ui,
  modelValue: mv,
  multiple = true,
} = defineProps<{
  items: CheckboxItem[] | undefined
  ui?: Record<string, string>
  modelValue?: string[]
  multiple?: boolean
}>()

watch(
  () => mv,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

const modelValue = defineModel<
  (string | (() => object) | undefined)[] | undefined
>("modelValue", {
  default: () => [],
})
</script>

<template>
  <UCheckboxGroup
    v-bind="checkboxProps"
    v-model:model-value="modelValue"
    :items
    @entry-focus.prevent>
    <template #label="{ item }">
      <span :class="cn(checkboxIcon.wrapper)">
        <Icon
          :name="item.icon ?? ''"
          :class="cn(checkboxIcon.icon, ui?.icon)" />
      </span>

      {{ item.label }}
    </template>
  </UCheckboxGroup>
</template>
