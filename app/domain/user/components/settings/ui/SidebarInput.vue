<script lang="ts" setup>
import type { FormFieldProps } from "@nuxt/ui"

const props = defineProps<
  FormFieldProps & {
    icon: string
    onBlur: () => void
  }
>()

const modelValue = defineModel<string | undefined>("modelValue")
</script>

<template>
  <UInput
    :model-value="modelValue"
    :model-modifiers="{ trim: true }"
    :icon="props.icon"
    @focusout="props.onBlur"
    @blur="props.onBlur">
    <template #trailing>
      <LazyInputClear @clear-input="modelValue = ''" />
    </template>
  </UInput>
</template>
