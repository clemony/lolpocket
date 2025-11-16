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
    class="group w-fit p-0"
    :class="cn('', props.class)">
    <EditableArea
      class="
        group relative flex h-fit w-auto flex-nowrap items-center gap-0! p-0!
        text-3 font-medium capitalize
      ">
      <EditablePreview class="w-fit! p-0!" />

      <EditableInput
        :spellcheck="false"
        class="w-auto!" />

      <EditableEditTrigger
        class="
          edit-trigger pointer-events-none absolute right-0 w-fit p-0
          group-hover:opacity-100
        ">
        <icon
          name="mingcute:edit-line"
          class="size-3.5 shrink-0 opacity-85" />
      </EditableEditTrigger>

      <RandomButton
        class="
          absolute right-0 hidden btn-ghost
          group-focus-within:block
        "
        @click="modelValue = generateName()" />
    </EditableArea>
  </EditableRoot>
</template>

<style scoped></style>
