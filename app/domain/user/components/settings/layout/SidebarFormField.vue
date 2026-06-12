<script lang="ts" setup>
import type { FormFieldProps } from "@nuxt/ui"

const props = defineProps<
  FormFieldProps & {
    icon?: string
    onBlur?: () => void
  }
>()
</script>

<template>
  <UFormField :name="props.label" :help="props.help">
    <template #label>
      <span class="text-pc">{{ props.label }}</span>
      <HintTooltip v-if="props.required" type="required" arrow />
    </template>
    <template #hint>
      <HintTooltip v-if="props.help" :text="props.help" />
    </template>
    <slot />
    <template #error="{ error }">
      <span>{{ error }}</span>
    </template>
  </UFormField>
</template>
