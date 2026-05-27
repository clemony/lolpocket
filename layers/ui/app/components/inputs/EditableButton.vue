<script lang="ts" setup>
import type { Tooltip } from "#components"
import type { ButtonProps, InputProps } from "@nuxt/ui"
import { generateName } from "~/domain/pocket/helpers/generateStrings"

const props = defineProps<
  InputProps & {
    editable?: boolean
    modelValue?: string
    actions?: ButtonProps[]
    randomizable?: boolean
  }
>()

const emit = defineEmits(["update:model-value"])

const delegated = reactiveOmit(props, "editable", "randomizable", "actions")

const editing = shallowRef<boolean>(false)

const element = useTemplateRef<HTMLElement & { input: HTMLInputElement }>(
  "element"
)

const input = computed(() => element.value?.input)

function focusInput() {
  void nextTick(() => {
    input?.value?.focus()
    input.value?.select()
  })
}

const modelValue = defineModel("modelValue", {
  default: ""
})

function randomizeLabel() {
  if (!modelValue.value) return
  modelValue.value = generateName()
  focusInput()
}
watch(editing, (value) => {
  if (!value) return

  modelValue.value = props.modelValue ?? ""
  focusInput()
})

onMounted(() => {
  if (props.modelValue) modelValue.value = props.modelValue
  focusInput()
})

function onComplete() {
  emit("update:model-value", modelValue.value)
  editing.value = false
}

defineExpose({
  modelValue: readonly(computed(() => modelValue.value))
})

onClickOutside(element, () => onComplete())

onKeyStroke("escape", (e) => {
  e.preventDefault()
  onComplete()
})
</script>

<template>
  <LazyUInput
    v-bind="delegated"
    ref="element"
    :data-editing="editing"
    @keydown.enter.prevent="onComplete"
    @keydown.escape.prevent="onComplete"
    @blur="onComplete">
    <template #trailing>
      <div class="flex w-fit! shrink-0 items-center gap-px">
        <LazyInputClear
          v-if="modelValue.length"
          @pointerdown.prevent.stop
          @clear-input="modelValue = ''" />

        <div data-tip="Negative IQ mode" label="tooltip tooltip-top">
          <LazyUButton
            size="xs"
            icon="i-sparkle"
            variant="solid"
            color="neutral"
            :ui="{
              base: 'max-size-7! size-7! max-w-7! min-w-7! rounded-md',
              leadingIcon: 'text-nc!'
            }"
            @pointerdown.prevent.stop
            @click.stop.prevent="randomizeLabel()" />
        </div>

        <template v-if="props?.actions">
          <LazyUButton
            v-for="(action, i) in props.actions"
            :key="i"
            v-bind="action"
            size="xs"
            :ui="{
              base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm'
            }"
            @pointerdown.prevent.stop
            @click.stop.prevent="action.onClick">
          </LazyUButton>
        </template>
      </div>
    </template>
  </LazyUInput>
</template>
