<script lang="ts" setup>
import { LazyEditableButton, LazyUButton } from "#components"
import type { ButtonProps, InputProps } from "@nuxt/ui"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      value: string
      input?: Omit<InputProps, "defaultValue">
      editable?: boolean
    }
  >(),
  {
    activeColor: "transparent",
    activeVariant: "solid",
    color: "transparent",
    variant: "solid"
  }
)

const emit = defineEmits(["update:label"])

const delegatedButton = reactiveOmit(props, "class", "value", "autofocus")
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
  <div class="w-full max-w-full overflow-hidden pl-1">
    <UInput
      v-if="editing"
      v-bind="props.input"
      ref="input"
      v-model="label"
      :avatar="props.avatar"
      :icon="props.icon"
      :autofocus="true"
      :placeholder="props.input?.placeholder || props.label"
      :ui="{
        root: 'inline-flex h-10 max-h-10 w-full max-w-full align-baseline',
        leadingIcon: cn('size-4.5 text-pc', props.ui?.leadingIcon),
        leadingAvatar: '-translate-x-0.5',
        base: 'pr-14 pl-10 text-start align-baseline text-md font-medium tracking-tight select-all'
      }"
      @blur="handleEdit()"
      @keydown.enter.stop="handleEdit()">
      <template #trailing>
        <LazyInputClear
          v-if="label !== '' && label !== props?.label"
          @pointerdown.prevent.stop
          @clear-input="label = ''" />
        <slot name="input-actions" />
      </template>
    </UInput>
    <UButton
      v-if="!editing || !props.editable"
      v-bind="delegatedButton"
      :icon="props.icon"
      block
      :ui="{
        base: cn(
          'my-0! w-full grow hover:bg-p1',
          { 'gap-2.5': !props.avatar },
          props.ui?.base
        ),
        label: '',
        leadingAvatar: '-translate-x-0.5',
        leadingIcon: cn('size-4.5', props.ui?.leadingIcon)
      }">
      <template v-if="!props.label && !editing" #default>
        <span class="grow" />
      </template>

      <slot name="label" />
      <template #trailing>
        <slot name="trailing" />
      </template>
    </UButton>
  </div>
</template>
