<script lang="ts" setup>
import type { SwitchProps } from "@nuxt/ui"
import type { FormFieldProps } from "reka-ui"

const props = defineProps<{
  options: SwitchProps
  switch?: SwitchProps
  label: string
  description?: string
}>()

const delegated = reactiveOmit(props, "options")

const switchProps = computed(() => ({
  ...props.switch,
  ...props.options,
  size: props.options.size || "sm",
  as: "label"
}))
</script>

<template>
  <div class="mb-4 flex w-full flex-col">
    <UCard
      variant="ghost"
      :ui="{
        root: 'px-2',
        description: 'pb-4',
        title: 'text-pc/90',
        header: 'mb-4 flex flex-col rounded-none border-b border-p4/60'
      }"
      :title="props.label"
      :description="props.description"
      class="w-full gap-2" />
    <USwitch
      v-for="(item, i) in props.options"
      :key="i"
      :ui="{
        root: 'py-4! pl-1 shadow-none hover:inset-shadow-sm hover:inset-ring! hover:inset-ring-p3 hover:ring-offset-1 hover:ring-offset-pc/60',
        container: 'order-last!',
        label: 'justify-start text-start'
      }"
      v-bind="switchProps">
      <template #label>
        <Icon
          :name="item.trailingIcon"
          :class="cn('size-4.5', item.ui?.trailingIcon)" />
        {{ item.label }}
      </template>
    </USwitch>
  </div>
</template>
