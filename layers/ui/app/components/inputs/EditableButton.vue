<script lang="ts" setup>
import { LazyEditableButton, LazyUButton } from "#components"
import type { ButtonProps, InputProps } from "@nuxt/ui"

const props = defineProps<
  InputProps & {
    value: string
    input?: Omit<InputProps, "defaultValue">
    editable?: boolean
  }
>()

const emit = defineEmits(["update:label"])

const { editing, label, setFocusInput } = useEditableButton()
const input = useTemplateRef<{
  inputRef?: HTMLInputElement | { value?: HTMLInputElement | null } | null
}>("input")

function focusInput() {
  void nextTick(() => {
    const inputRef = input.value?.inputRef
    const element =
      inputRef instanceof HTMLInputElement ? inputRef : inputRef?.value

    element?.focus()
    element?.select()
  })
}

watch(
  () => props.value,
  (value) => {
    if (!editing.value) label.value = value ?? ""
  },
  { immediate: true }
)

watch(editing, (value) => {
  if (!value) return

  label.value = props.value ?? ""
  focusInput()
})

onMounted(() => setFocusInput(focusInput))
onBeforeUnmount(() => setFocusInput(null))

function handleEdit() {
  emit("update:label", label.value)
  editing.value = false
}
</script>

<template>
  <div class="max-w-full grow overflow-hidden pl-1">
    <UInput
      v-if="editing"
      v-bind="props.input"
      ref="input"
      v-model="label"
      :autofocus="true"
      :placeholder="props.input?.placeholder || props.defaultValue?.toString()"
      @blur="handleEdit()"
      @keydown.enter.stop="handleEdit()">
      <template #trailing>
        <LazyInputClear
          v-if="label !== '' && label !== props?.modelValue"
          @pointerdown.prevent.stop
          @clear-input="label = ''" />
        <slot name="input-actions" />
      </template>
    </UInput>
    <UButton v-if="!editing || !props.editable">
      <slot name="label" />
    </UButton>
  </div>
</template>
