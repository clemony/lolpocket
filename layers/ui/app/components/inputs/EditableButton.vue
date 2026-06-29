<script lang="ts" setup>
import type { ButtonProps, InputProps } from "@nuxt/ui"
import { generateName } from "~/domain/utils/generateStrings"

const props = defineProps<
  InputProps & {
    editable?: boolean
    modelValue?: string
    actions?: ButtonProps[]
    randomizable?: boolean
  }
>()

const emit = defineEmits(["update:modelValue"])

const delegated = reactiveOmit(props, "editable", "randomizable", "actions")

const editing = shallowRef<boolean>(false)

const element = useTemplateRef<HTMLElement & { input: HTMLInputElement }>(
  "element"
)

const input = computed(() => element.value?.input)

const { focused } = useFocus(input)

const modelValue = defineModel<string | undefined>("modelValue", {
  default: "",
})

function randomizeLabel() {
  if (!modelValue.value) return
  modelValue.value = generateName()
  focus()
}

watch(editing, (value) => {
  if (!value) return
  modelValue.value = props.modelValue ?? ""
  focused.value = true
})

onMounted(() => {
  if (props.modelValue) modelValue.value = props.modelValue
  focused.value = true
})

function onComplete() {
  emit("update:modelValue", modelValue.value)
  editing.value = false
}

function precheck(e: Event) {
  if (focused.value === true) {
    e.preventDefault()
    onComplete()
  }
}

onClickOutside(element, (event: MouseEvent) => precheck(event))
onKeyStroke("escape", (e) => precheck(e))
onKeyDown("enter", (e) => precheck(e))
defineExpose({
  modelValue: readonly(computed(() => modelValue.value)),
})
</script>

<template>
  <LazyUInput
    v-bind="delegated"
    ref="element"
    :data-editing="editing"
    @focusout="onComplete"
    @blur="onComplete">
    <template #trailing>
      <div class="flex w-fit! shrink-0 items-center gap-px">
        <LazyInputClear
          v-if="modelValue && modelValue.length"
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
              leadingIcon: 'text-nc!',
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
              base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm',
            }"
            @pointerdown.prevent.stop
            @click.stop.prevent="action.onClick">
          </LazyUButton>
        </template>
      </div>
    </template>
  </LazyUInput>
</template>
