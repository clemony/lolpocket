<script lang="ts" setup>
import type { CheckboxGroupProps } from "@nuxt/ui"
const {
  items,
  ui,
  modelValue: mv
} = defineProps<{
  items: CheckboxItem[] | undefined
  ui?: Record<string, string>
  modelValue?: string
}>()

watch(
  () => mv,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

const shared = {
  indicator: "hidden",
  color: "default",
  ui: {
    fieldset: cn("gap-y-0.5 pt-0 pb-2", ui?.fieldset),
    item: "p-0! hover:bg-p1 h-9.5 items-center has-checked:bg-p2/80 has-checked:noise group/item",
    wrapper: "w-full justify-start",
    label:
      " flex h-full w-fit items-center gap-2 rounded-lg px-0 py-1 text-start  group-hover/x:no-underline"
  }
} satisfies CheckboxGroupProps

const modelValue = defineModel<string | undefined>("modelValue", {
  default: ""
})
</script>

<template>
  <URadioGroup
    v-bind="shared"
    v-model:model-value="modelValue"
    :items
    @entry-focus.prevent>
    <template #label="{ item }">
      <span
        :class="
          cn(
            'noise relative grid size-4 place-items-center rounded-full bg-neutral shadow-xs ring ring-n4 ring-offset-1 ring-offset-n0 drop-shadow-xs group-has-checked/item:bg-p0 group-has-checked/item:ring-offset-p0 group-has-checked/x:ring-p0'
          )
        ">
        <Icon
          :name="item.icon ?? ''"
          :class="
            cn(
              'absolute size-4 text-nc **:stroke-2 group-has-checked/x:text-pc',
              ui?.icon
            )
          " />
      </span>

      {{ item.label }}
    </template>
  </URadioGroup>
</template>
