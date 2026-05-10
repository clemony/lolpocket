<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"
import type { DialogProps } from "~~/layers/ui/app/types/types"

const props = defineProps<
  DialogProps & {
    input?: Omit<InputProps, "defaultValue">
  }
>()

const emits = defineEmits<{
  close: [value: string]
}>()

const modelValue = shallowRef<string>(props.defaultValue || "")
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
      body: 'border-b-0 pt-0!',
      header: 'flex w-full grow justify-between pb-4!',
      title: 'grow text-2xl',
      description: 'mt-1 text-md leading-6 font-[400]!'
    }">
    <template #body>
      <div class="flex items-center gap-2">
        <UInput
          v-bind="props?.input"
          v-model:model-value="modelValue"
          size="lg"
          :ui="{
            root: 'grow',
            base: 'w-full text-md',
            leadingIcon: 'text-n5 opacity-100'
          }"
          icon="i-edit-line"
          @keydown.enter="emits('close', modelValue)"
          @blur="emits('close', modelValue)">
          <template #trailing>
            <InputClear @clear-input="modelValue = ''" />
          </template>
        </UInput>

        <!--         <UButton
          label="Confirm"
          color="neutral"
          @click="modelValue = generateString()" /> -->
      </div>
    </template>
  </UModal>
</template>
