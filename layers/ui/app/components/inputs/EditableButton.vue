<script lang="ts" setup>
import type { ButtonProps, InputProps } from "@nuxt/ui"
import type { EditInputExpose } from "~~/layers/ui/app/types/types"

const props = withDefaults(
  defineProps<
    ButtonProps & {
      value: string
      input?: Omit<InputProps, "defaultValue">
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

const editing = shallowRef<boolean>(false)
const localLabel = useRefHistory(shallowRef<string>(""))

const toggleEdit = useToggle(editing)

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

function handleEdit() {
  emit("update:label", localLabel.source.value)
  editing.value = false
}

onMounted(() => {
  localLabel.source.value = props.value
})

defineExpose<EditInputExpose>({
  editing,
  localLabel,
  focusInput,
  toggleEdit
})
</script>

<template>
  <div class="w-full max-w-full overflow-hidden pl-1">
    <UInput
      v-if="editing"
      v-bind="props.input"
      ref="input"
      v-model="localLabel.source.value"
      :avatar="props.avatar"
      :icon="props.icon"
      :autofocus="true"
      :placeholder="props.input?.placeholder || props.label"
      :ui="{
        root: 'inline-flex h-10 max-h-10 w-full max-w-full align-baseline',
        leadingIcon: cn('size-4.5 text-pc', props.ui?.leadingIcon),
        leadingAvatar: '-translate-x-0.5',
        base: 'pr-14 pl-10 text-start align-baseline font-medium tracking-tight select-all'
      }"
      @blur="handleEdit()"
      @keydown.enter.stop="handleEdit()">
      <template #trailing>
        <LazyInputClear
          v-if="
            localLabel.source.value !== '' &&
            localLabel.source.value !== props?.label
          "
          @pointerdown.prevent.stop
          @clear-input="localLabel.source.value = ''" />
        <slot name="input-actions" />
      </template>
    </UInput>
    <UButton
      v-if="!editing"
      v-bind="delegatedButton"
      :icon="props.icon"
      block
      :ui="{
        base: cn(
          'my-0! w-full grow hover:bg-p1',
          { 'gap-2.5': !props.avatar },
          props.ui?.base
        ),
        label: 'align-baseline tracking-tight',
        leadingAvatar: '-translate-x-0.5',
        leadingIcon: cn('size-4.5', props.ui?.leadingIcon),
        trailingIcon: cn('trailing-rotate', props.ui?.trailingIcon)
      }">
      <template v-if="!props.label && !editing" #default>
        <span class="grow" />
      </template>

      <slot name="label" />
    </UButton>
  </div>
</template>
