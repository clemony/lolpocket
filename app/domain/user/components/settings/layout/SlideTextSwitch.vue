<script lang="ts" setup>
import type { CardProps, SwitchProps } from "@nuxt/ui"

const props = defineProps<
  CardProps & {
    option: {
      label: string
      labelTrue: string
      labelFalse: string
      descriptionTrue: string
      descriptionFalse: string
      modelValue: boolean
    }
    switch?: SwitchProps
  }
>()
const option = computed(() => props.option).value

const description = computed(() => ({
  valueTrue: option.descriptionTrue,
  valueFalse: option.descriptionFalse
}))

const label = computed(() => ({
  valueTrue: option.labelTrue,
  valueFalse: option.labelFalse
}))

const switchProps = computed(() => ({
  ...props.switch,
  size: props.switch?.size || "sm",
  ui: {
    ...props.switch?.ui,
    root: cn(
      "w-full items-center justify-between p-0! hover:bg-transparent hover:inset-ring-0",
      props.switch?.ui?.root
    ),
    label: cn(
      "relative flex h-4 -translate-x-1.5 items-center py-0 pr-0 pl-2 align-baseline text-xs! italic antialiased hover:bg-transparent",
      props.switch?.ui?.label
    ),
    container: cn("order-last", props.switch?.ui?.container)
  }
}))
</script>

<template>
  <UCard
    as-child
    variant="ghost"
    as="label"
    :ui="{
      root: 'cursor-pointer p-3! inset-ring inset-ring-p4/70 ring-offset-1 ring-offset-transparent hover:bg-p2 hover:inset-shadow-sm hover:inset-ring-p3 hover:ring-offset-pc/60'
    }">
    <UFormField
      :label="option.label"
      :ui="{
        label: 'pl-2 text-md!',
        container: 'mb-1',
        description: 'mb-3 inline-block text-sm leading-6.5 text-n5'
      }">
      <template #description>
        <div class="relative min-h-10 w-full pl-2">
          <!-- label true -->
          <TransitionSlideText
            :model-value="option.modelValue"
            v-bind="description" />
        </div>
      </template>
      <USwitch v-bind="switchProps" :model-value="option.modelValue">
        <template #label>
          <div class="absolute grid h-full items-center">
            <UBadge
              color="neutral"
              size="xs"
              :ui="{
                base: 'rounded-md bg-n2 px-2 shadow-sm ring ring-n5 **:text-xs'
              }">
              <TransitionSlideText
                class="italic"
                v-bind="label"
                :model-value="option.modelValue" />
            </UBadge>
          </div>
          <Grow />
        </template>
      </USwitch>
    </UFormField>
  </UCard>
</template>
