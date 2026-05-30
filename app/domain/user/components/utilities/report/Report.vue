<script lang="ts" setup>
import type { ReportOption } from "../../../utils/user/reportOptions"
import { reportOptions } from "../../../utils/user/reportOptions"

const emit = defineEmits<{ close: [boolean] }>()

const options: ReportOption[] = [
  ...reportOptions,
  {
    id: "salty",
    ui: { item: "order-3" },
    label: "Unskilled Player"
  }
]
</script>

<template>
  <UModal :close="{ onClick: () => emit('close', false) }">
    <URadioGroup :items="options" />
  </UModal>
</template>
