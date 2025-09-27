<script setup lang="ts">
import {
  EditableArea,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
} from 'reka-ui'

const props = defineProps<{
  modelValue: any
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue)
</script>

<template>
  <EditableRoot
    :auto-resize="true"
    :select-on-focus="true"
    :model-value="props.modelValue"
    class="p-0 w-fit group"
    :class="cn('', props.class)">
    <EditableArea
      class="text-3 !p-0 font-medium capitalize flex flex-nowrap items-center relative h-fit !gap-0 group w-auto">
      <EditablePreview class="!w-fit !p-0" />

      <EditableInput
        :spellcheck="false"
        class="!w-auto" />

      <EditableEditTrigger
        class="edit-trigger group-hover:opacity-100 absolute right-0 pointer-events-none w-fit p-0">
        <icon
          name="mingcute:edit-line"
          class="opacity-85 size-3.5 shrink-0" />
      </EditableEditTrigger>

      <RandomButton
        class="btn-ghost hidden group-focus-within:block absolute right-0"
        @click="modelValue = generateName()" />
    </EditableArea>
  </EditableRoot>
</template>

<style scoped></style>
