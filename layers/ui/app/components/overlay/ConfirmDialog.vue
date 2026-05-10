<script lang="ts" setup>
import type { DialogProps } from "~~/layers/ui/app/types/types"

defineProps<DialogProps>()

const emits = defineEmits<{
  close: [value: { confirmed: boolean; neverAgain: boolean }]
}>()

const modelValue = shallowRef<boolean>(false)
</script>

<template>
  <UModal
    :title="title"
    :description="description"
    :dismissible="false"
    :close="{ size: 'sm', color: 'secondary' }"
    :ui="{
      content: 'divide-0',
      footer: 'justify-between',
      body: 'border-b-0',
      header: 'flex w-full grow justify-between',
      title: 'grow text-2xl',
      description: 'mt-5 text-md leading-6 font-[400]!'
    }">
    <template #footer>
      <UCheckbox
        v-model:model-value="modelValue"
        label="Always confirm and don't show again." />
      <div class="flex items-center justify-between gap-2">
        <UButton
          label="Cancel"
          color="base"
          variant="outline"
          @click="
            emits('close', { confirmed: false, neverAgain: modelValue })
          " />
        <UButton
          label="Confirm"
          color="neutral"
          @click="
            emits('close', { confirmed: true, neverAgain: modelValue })
          " />
      </div>
    </template>
  </UModal>
</template>
